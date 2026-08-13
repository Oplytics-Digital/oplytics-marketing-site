import express from "express";
import { createServer } from "http";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";
import { createSupportEngine, LLMBudgetError } from "@pablo2410/core-server";
import { ENV } from "./env";
import { createLedgerHooks } from "./aiUsageClient";
import { injectPageMeta } from "./pageMeta";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Opi — the shared support engine in marketing mode. Persona + Oplytics
// knowledge base live in @pablo2410/core-server; metering + budget guard are
// injected so every call is recorded and cost-controlled via the ledger.
const supportEngine = createSupportEngine(
  {
    forgeApiUrl: ENV.FORGE_API_URL ?? "",
    forgeApiKey: ENV.FORGE_API_KEY ?? "",
    geminiApiUrl: ENV.GEMINI_API_URL ?? "",
    geminiApiKey: ENV.GEMINI_API_KEY ?? "",
  },
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
      // Surface the real failure (core-server / Forge HTTP status + body, or
      // the thrown message) in the response, not just the server logs — the
      // engine's errors never include the API key.
      const detail = error instanceof Error ? error.message : String(error);
      console.error("AI Chat Error:", detail);
      res.status(500).json({ error: "Failed to generate response", detail });
    }
  });

  // Serve static files from dist/public in production
  const staticPath =
    process.env.NODE_ENV === "production"
      ? path.resolve(__dirname, "public")
      : path.resolve(__dirname, "..", "dist", "public");

  // Exclude index.html from the static handler so every route falls through
  // to the per-request meta injection below — express.static would otherwise
  // serve the raw file as-is for a direct "/" request.
  app.use(express.static(staticPath, { index: false }));

  // Handle client-side routing - serve index.html for all routes, with the
  // <title>/description/OG tags rewritten per-route so crawlers, link-preview
  // unfurlers, and any tool that doesn't execute JS see real page-specific
  // content instead of the same static fallback on every URL.
  const indexHtmlPath = path.join(staticPath, "index.html");
  app.get("*", (req, res) => {
    fs.readFile(indexHtmlPath, "utf8", (err, html) => {
      if (err) {
        res.sendFile(indexHtmlPath);
        return;
      }
      res.set("Content-Type", "text/html");
      res.send(injectPageMeta(html, req.path));
    });
  });

  const port = ENV.PORT;

  server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/`);
  });
}

startServer().catch(console.error);
