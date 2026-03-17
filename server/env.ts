import { z } from "zod";

const envSchema = z.object({
  NODE_ENV: z.enum(["development", "production", "test"]).default("development"),
  PORT: z.coerce.number().default(3000),
  FORGE_API_URL: z.string().url().optional(),
  FORGE_API_KEY: z.string().min(1),
});

export const ENV = envSchema.parse(process.env);
