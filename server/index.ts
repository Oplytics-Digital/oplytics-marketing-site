import express from "express";
import { createServer } from "http";
import path from "path";
import { fileURLToPath } from "url";
import { invokeLLM } from "./llm";
import { ENV } from "./env";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SUPPORT_ENGINEER_PERSONA = `
You are the Oplytics AI Support Engineer, a knowledgeable and friendly assistant for the Oplytics platform.
Your personality is relaxed, cheeky, and fun, but you are highly competent and professional when it comes to operational safety and platform technicals.
Think of yourself as a "knowledgeable mate on the factory floor" rather than a corporate FAQ bot.

Key Guidelines:
- Use a conversational, slightly informal tone (e.g., "Alright mate," "No worries," "Spot on").
- Be proactive in helping users with platform setup, training, and troubleshooting.
- For safety or incident reporting, maintain a serious and helpful demeanor while keeping the relaxed tone.
- If you don\'t know something, be honest but try to guide the user to the right place.
- You are currently on the Public Marketing Site. Focus on features, benefits, and booking demos.
- Never discuss competitor products. If asked about pricing, direct the user to the contact page at /contact.
`;

async function startServer() {
  const app = express();
  const server = createServer(app);
  
  app.use(express.json());

  // AI Chat Endpoint
  app.post("/api/ai/chat", async (req, res) => {
    try {
      const { messages } = req.body;
      
      const response = await invokeLLM({
        messages: [
          { role: "system", content: SUPPORT_ENGINEER_PERSONA },
          ...messages
        ],
        model: "gemini-2.5-flash", // Using the default model from invokeLLM
      });

      res.json({ content: response.choices[0].message.content });
    } catch (error) {
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
