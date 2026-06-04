/**
 * Client for the central AI usage ledger (Business Hub).
 *
 * The marketing site reports every Opi call here and asks the budget guard
 * before spending. Both are best-effort and FAIL-OPEN: if the ledger isn't
 * configured or is unreachable, Opi keeps working (just un-metered) so the
 * marketing site is never taken down by the ledger.
 */
import { ENV } from "./env";

// gemini-2.5-flash pricing (USD per 1k tokens) — keep in sync with core-server.
const COST_RATE = { inputPer1k: 0.000075, outputPer1k: 0.0003 };
const estTokens = (s: string) => Math.ceil((s?.length ?? 0) / 4);

const ledgerBase = () => ENV.AI_USAGE_LEDGER_URL?.replace(/\/$/, "");
const configured = () => !!ledgerBase() && !!ENV.AI_USAGE_INGEST_SECRET;

const headers = () => ({
  "content-type": "application/json",
  "x-ai-usage-secret": ENV.AI_USAGE_INGEST_SECRET as string,
});

export interface BudgetVerdict {
  allowed: boolean;
  reason?: string;
}

/** Ask the ledger whether this call may proceed. Defaults to allow. */
export async function checkBudget(req: {
  app: string;
  mode?: string;
  enterpriseId?: number;
  estPromptTokens?: number;
}): Promise<BudgetVerdict> {
  if (!configured()) return { allowed: true };
  try {
    const r = await fetch(`${ledgerBase()}/api/ai-usage/check`, {
      method: "POST",
      headers: headers(),
      body: JSON.stringify(req),
    });
    if (!r.ok) return { allowed: true };
    return (await r.json()) as BudgetVerdict;
  } catch {
    return { allowed: true };
  }
}

export interface UsageEvent {
  app: string;
  label?: string;
  mode?: string;
  model?: string;
  promptTokens: number;
  completionTokens: number;
  totalTokens: number;
  estCostUsd: number;
  estimated: boolean;
  page?: string;
}

/** Record one usage event. Best-effort; never throws. */
export async function reportUsage(event: UsageEvent): Promise<void> {
  if (!configured()) return;
  try {
    await fetch(`${ledgerBase()}/api/ai-usage/ingest`, {
      method: "POST",
      headers: headers(),
      body: JSON.stringify(event),
    });
  } catch {
    /* best-effort */
  }
}

/** Build a usage event from an LLM response, using real token counts when present. */
export function buildUsage(opts: {
  model?: string;
  usage?: { prompt_tokens?: number; completion_tokens?: number; total_tokens?: number };
  promptText: string;
  completionText: string;
  page?: string;
}): UsageEvent {
  const provided = opts.usage;
  const estimated = !provided;
  const promptTokens = provided?.prompt_tokens ?? estTokens(opts.promptText);
  const completionTokens = provided?.completion_tokens ?? estTokens(opts.completionText);
  const totalTokens = provided?.total_tokens ?? promptTokens + completionTokens;
  const estCostUsd =
    Math.round(
      ((promptTokens / 1000) * COST_RATE.inputPer1k +
        (completionTokens / 1000) * COST_RATE.outputPer1k) *
        1e6
    ) / 1e6;
  return {
    app: "marketing-site",
    label: "opi",
    mode: "marketing",
    model: opts.model,
    promptTokens,
    completionTokens,
    totalTokens,
    estCostUsd,
    estimated,
    page: opts.page,
  };
}
