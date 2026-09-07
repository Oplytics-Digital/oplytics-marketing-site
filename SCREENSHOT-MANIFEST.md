# Screenshot manifest — AI + Obeya splash

Capture from the **live Testa environment** logged in as a Testa user
(`sqdcp.oplyticsdigital.net`, `policy.oplyticsdigital.net`). Testa site 60003 has
the seeded rolling 7-day huddle window; the room is "SQDCP Tier 1 Huddle" (id 1).

**Rules**

- No real customer names in frame. Testa / Testa Midlands Plant is fine.
- No browser chrome — full-window app only.
- Don't caption or frame the fingerprint check-in as a security feature — it's a
  ceremony, not identity verification.
- Dark theme. Wide viewport (≥ 1600px). PNG.

---

## Status

**Landed (2026-09-07):**

| File                         | Shows                                                                           |
| ---------------------------- | ------------------------------------------------------------------------------- |
| `obeya/01-room.png`          | 3D Obeya wall + lobby readiness bar                                             |
| `obeya/03-rooms.png`         | AI Facilitator room list — plant review + 2 area huddles feeding in             |
| `obeya/04-board-walk.png`    | People pillar in focus + PDCA panel                                             |
| `obeya/05-opi-line.png`      | Safety pillar red + Opi facilitator line + auto-drafted action                  |
| `obeya/06-actions.png`       | Actions step + Opi accountability brief + overdue list                          |
| `obeya/07-ci.png`            | CI Activities + Opi deep-dive intro                                             |
| `obeya/08-data-entry.png`    | Data Entry — metric values with green/amber/red bands (not yet wired to a page) |
| `obeya/09-admin-cascade.png` | Admin → Metrics & KPIs, "Cascaded from Enterprise PD" (not yet wired)           |
| `ai/opi-insights-pd.png`     | Opi Insights sidebar on Policy Deployment — score dial + findings               |

**Still needed — pages show a labelled placeholder until these land:**

| File                     | Screen                                                                                    | What it must show                                                                                                                                                         |
| ------------------------ | ----------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `obeya/02-seats.png`     | `/rooms/1` lobby                                                                          | The **representatives / seat-assignment row** — pillar-to-rep connector lines, a couple of seats filled.                                                                  |
| `obeya/08-closeout.png`  | huddle, Close Out stage                                                                   | The close-out recap — win of the day / issues / priorities.                                                                                                               |
| `ai/opi-insights-am.png` | Action Manager, Opi panel expanded (real LLM version, **no** "rule-based coaching" badge) | The scored advisor output. Optional but strong — currently the /ai page only shows the PD Opi shot. If captured, wire it into `AiPlatform.tsx` as a second `ProductShot`. |

Optional extras (nice to have, not blocking): `ai/ai-controls.png` (Portal → AI
Controls kill switch) and `ai/ai-usage.png` (Business Hub AI Usage dashboard) for
the governance section — blur any emails / real enterprise names.
