/**
 * Ledger hooks for core-server's createLLMClient — reports AI usage and checks
 * budgets against the central ledger (Business Hub).
 *
 * Fail-open and best-effort: if the ledger isn't configured (no URL/secret) or
 * is unreachable, calls are allowed and usage is silently dropped, so the ledger
 * never affects this app. Translates core-server's event shape to the ledger's
 * REST contract (flattening user → userRole/enterpriseId).
 */
import type {
  UsageEvent,
  GuardRequest,
  GuardResult,
  LLMClientOptions,
} from "@pablo2410/core-server";

type LedgerConfig = { ledgerUrl?: string; secret?: string };

const toEnterpriseId = (v: unknown): number | undefined => {
  const n = typeof v === "number" ? v : typeof v === "string" ? parseInt(v, 10) : NaN;
  return Number.isFinite(n) ? n : undefined;
};

export function createLedgerHooks(
  config: LedgerConfig
): Pick<LLMClientOptions, "onUsage" | "guard"> {
  const base = config.ledgerUrl?.replace(/\/$/, "");
  const configured = !!base && !!config.secret;
  const headers = () => ({
    "content-type": "application/json",
    "x-ai-usage-secret": config.secret as string,
  });

  const guard = async (req: GuardRequest): Promise<GuardResult> => {
    if (!configured) return { allowed: true };
    try {
      const r = await fetch(`${base}/api/ai-usage/check`, {
        method: "POST",
        headers: headers(),
        body: JSON.stringify({
          app: req.app,
          mode: req.mode,
          enterpriseId: toEnterpriseId(req.user?.enterpriseId),
          estPromptTokens: req.estPromptTokens,
        }),
      });
      if (!r.ok) return { allowed: true };
      return (await r.json()) as GuardResult;
    } catch {
      return { allowed: true };
    }
  };

  const onUsage = async (event: UsageEvent): Promise<void> => {
    if (!configured) return;
    try {
      await fetch(`${base}/api/ai-usage/ingest`, {
        method: "POST",
        headers: headers(),
        body: JSON.stringify({
          app: event.app,
          label: event.label,
          mode: event.mode,
          model: event.model,
          promptTokens: event.promptTokens,
          completionTokens: event.completionTokens,
          totalTokens: event.totalTokens,
          estCostUsd: event.estCostUsd,
          estimated: event.estimated,
          userRole: event.user?.role,
          enterpriseId: toEnterpriseId(event.user?.enterpriseId),
          page: event.page,
        }),
      });
    } catch {
      /* best-effort */
    }
  };

  return { onUsage, guard };
}
