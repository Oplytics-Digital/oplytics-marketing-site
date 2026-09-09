# Screenshot manifest — AI + Obeya splash

All shots from the **live Testa environment** (`sqdcp.oplyticsdigital.net`,
`policy.oplyticsdigital.net`), Testa site 60003, room "SQDCP Tier 1 Huddle" (id 1).

## Status — complete for the walkthrough

| File                        | Shows                                                                                             |
| --------------------------- | ------------------------------------------------------------------------------------------------- |
| `obeya/01-room.png`         | 3D Obeya wall + lobby readiness bar                                                               |
| `obeya/02-seats.png`        | Lobby — pillar status & representatives row, Auto-assign seats, Start huddle + AI-assisted toggle |
| `obeya/03-rooms.png`        | AI Facilitator room list — plant review + 2 area huddles feeding in                               |
| `obeya/04-board-walk.png`   | Pillar in focus + PDCA panel                                                                      |
| `obeya/05-opi-line.png`     | Safety pillar red + Opi facilitator line + Confirm-owner (Sarah Chen)                             |
| `obeya/06-actions.png`      | Actions step + Opi accountability brief + overdue list                                            |
| `obeya/07-ci.png`           | CI Activities + Opi deep-dive intro                                                               |
| `obeya/08-closeout.png`     | Close-out — Opi meeting recap (win / issues / priorities) + escalation banner                     |
| `ai/opi-insights-pd.png`    | Opi Insights sidebar on Policy Deployment — score dial + findings                                 |
| `obeya/x-data-entry.png`    | (bonus, unused) Data Entry — metric values with green/amber/red bands                             |
| `obeya/x-admin-cascade.png` | (bonus, unused) Admin → Metrics & KPIs, "Cascaded from Enterprise PD"                             |

## Optional additions (not blocking merge)

- `ai/opi-insights-am.png` — Action Manager Opi panel expanded (the "RULE-BASED
  COACHING" badge is stale, it's real LLM now). Would let `/ai` show a second Opi
  Insights `ProductShot` alongside the PD one.
- `ai/ai-controls.png` — Portal → AI Controls kill switch, for the governance
  section. Blur any emails.
- `ai/ai-usage.png` — Business Hub AI Usage & Cost dashboard. Blur real enterprise
  names.

---

# /pitch/beta deck — v2 shots needed (PR #150 follow-up)

Drop into `client/public/screenshots/pitch/`. All from the **live Testa
environment**, logged in as a Testa user. **Turn the "Screenshot" debug button
OFF** if it's showing (bottom-centre floating pill), or capture so it's below the
16:10 crop. Landscape, ~1600px+ wide, no personal data beyond "Paul Cox" (fine).

| File (in `screenshots/pitch/`) | Where                                                                                                                                        | What it should show                                                                                                                                                                                                                                                                                                    |
| ------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `pd-xmatrix.png`               | `policy.oplyticsdigital.net` → **X-Matrix**                                                                                                  | The Hoshin X-matrix grid — annual objectives down the left, tactics across the top, the correlation dots in the quadrants, the coloured pillar legend. The current `policy-deployment/02.png` is close but its Opi sidebar says "coaching logic is mocked" — reshoot with the sidebar closed, or on the current build. |
| `pd-cascade.png`               | `policy.oplyticsdigital.net` → **Catchball** or **Deployments** (whichever best shows one objective cascading Enterprise → BU → Site → Area) | The cascade / catchball view — a breakthrough objective breaking down through the hierarchy, each level's contribution visible. If there's no single clean "tree" screen, the Catchball view is fine.                                                                                                                  |
| `sqdcp-dashboard.png`          | `sqdcp.oplyticsdigital.net` → **Dashboard** (Testa Midlands Plant scope)                                                                     | The current SQDCP board — the 5 SQDCP pillar cards with radar/target charts and RAG, the data-coverage / today's-status header. `sqdcp/01.png` is the old radar-only UI + has the debug button + is dated 2 Aug — needs a fresh one on the current build.                                                              |
| `am-dashboard.png`             | `action.oplyticsdigital.net` → **Analytics** (or **Dashboard**)                                                                              | The Action Manager analytics view — the total/completed/in-progress/overdue stat cards + the Status Distribution and Priority Breakdown donuts. `action-manager/03.png` is exactly this but has the debug button showing — reshoot without it.                                                                         |

### Nice-to-have reshoots (deck works without them — it falls back to what's there)

- `oee-manager/01.png` — the Loss Insights screen. Current one is used as-is in the
  new **OEE Manager** section (which is explicitly marked "In development"), but it
  shows "AI Preview · Upgrade for live insights" and the debug button. A clean
  reshoot on the current build would be tidier.
- Any of the `policy-deployment/*` / `action-manager/*` / `sqdcp/01` shots used
  elsewhere on the marketing site — they all predate recent UI work and carry the
  debug button.

### After the shots land

`git add client/public/screenshots/pitch/*.png`, commit onto `feat/pitch-deck-v2`,
push — the deck's `PitchShot` components pick them up automatically (they show a
labelled placeholder until the file resolves). Then mark PR ready + merge + tag.
