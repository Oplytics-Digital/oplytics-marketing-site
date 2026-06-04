import { z } from "zod";

const envSchema = z.object({
  NODE_ENV: z.enum(["development", "production", "test"]).default("development"),
  PORT: z.coerce.number().default(3000),
  FORGE_API_URL: z.string().url().optional(),
  FORGE_API_KEY: z.string().min(1),
  // AI usage ledger (Business Hub). Both optional — metering is skipped (fail-open)
  // until they're set, so the site runs fine without them.
  AI_USAGE_LEDGER_URL: z.string().url().optional(),
  AI_USAGE_INGEST_SECRET: z.string().optional(),
});

export const ENV = envSchema.parse(process.env);
