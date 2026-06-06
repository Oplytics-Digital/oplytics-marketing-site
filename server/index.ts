import express from "express";
import { createServer } from "http";
import path from "path";
import { fileURLToPath } from "url";
import { createSupportEngine, LLMBudgetError } from "@pablo2410/core-server";
import { ENV } from "./env";
import { createLedgerHooks } from "./aiUsageClient";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Opi — the shared support engine in marketing mode. Persona + Oplytics
// knowledge base live in @pablo2410/core-server; metering + budget guard are
// injected so every call is recorded and cost-controlled via the ledger.
const supportEngine = createSupportEngine(
  { forgeApiUrl: ENV.FORGE_API_URL ?? "", forgeApiKey: ENV.FORGE_API_KEY },
  {
    knowledgeLimit: 6,
    metering: {
      app: "marketing-site",
      ...createLedgerHooks({
        ledgerUrl: ENV.AI_USAGE_LEDGER_URL,
        secret: ENV.AI_USAGE_INGEST_SECRET,
      }),
    },
  }
);

async function startServer() {
  const app = express();
  const server = createServer(app);
  
  app.use(express.json());

  // AI Chat Endpoint — Opi (marketing persona + shared knowledge base).
  // Knowledge retrieval, persona, metering and the budget guard are all handled
  // inside the engine; we just pass the conversation and the current page.
  app.post("/api/ai/chat", async (req, res) => {
    try {
      const { messages, page } = req.body ?? {};
      const { content } = await supportEngine.chat({
        mode: "marketing",
        messages: messages ?? [],
        context: { page },
      });
      res.json({ content });
    } catch (error) {
      // Budget guard / kill-switch blocked the call — surface its friendly reason.
      if (error instanceof LLMBudgetError) {
        return res.json({ content: error.message });
      }
      console.error("AI Chat Error:", error);
      res.status(500).json({ error: "Failed to generate response" });
    }
  });

  // Serve static files from dist/public in production
  const staticPath =
    process.env.NODE_ENV === "production"
      ? path.resolve(__dirname, "public")
      : path.resolve(__dirname, "..", "dist", "public");

  app.use(express.static(staticPath));

  // Handle client-side routing - serve index.html for all routes
  app.get("*", (_req, res) => {
    res.sendFile(path.join(staticPath, "index.html"));
  });

  const port = ENV.PORT;

  server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/`);
  });
}

startServer().catch(console.error);
