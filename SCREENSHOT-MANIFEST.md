# Screenshot manifest — AI + Obeya splash

Capture everything from the **live Testa environment** logged in as a Testa user
(`sqdcp.oplyticsdigital.net`, `policy.oplyticsdigital.net`). Testa site 60003 has
the seeded rolling 7-day huddle window; the room is "SQDCP Tier 1 Huddle" (id 1).

**Rules**

- No real customer names anywhere in frame. Testa / Testa Midlands Plant is fine.
- Don't caption or frame the fingerprint check-in as a security feature — it's a
  ceremony, not identity verification.
- Dark theme. Capture at a wide viewport (≥ 1600px). PNG.
- Crop out browser chrome. Keep the app's own header/sidebar where it's part of
  the shot (lobby, dashboard); the immersive 3D room is full-bleed.

---

## `/client/public/screenshots/obeya/` — the Obeya walkthrough (ObeyaWalkthrough.tsx)

Target aspect ~1490×778 (16:8.36); the component crops to that with `object-cover`,
so a normal 16:9 or 16:10 screenshot is fine — keep the subject centred.

| File                | Screen                                               | What it must show                                                                                                                                                               |
| ------------------- | ---------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `01-room.png`       | `/obeya`                                             | The 3D immersive wall — every SQDCP pillar card on the wall, room perspective visible. The "walk in" hero shot.                                                                 |
| `02-lobby.png`      | `/rooms/1` (lobby)                                   | The lobby with the **readiness gate row** visible — ideally showing at least one pillar flagged as blocking (amber/red) so the gate is doing something. Post-#773 3-row layout. |
| `03-seats.png`      | `/rooms/1` (lobby)                                   | The **representatives / seat-assignment row** — pillar-to-rep connector lines, a couple of seats filled. The check-in step.                                                     |
| `04-board-walk.png` | huddle, Pillar Review stage                          | A pillar in focus with the **PDCA / 5-Why panel docked alongside** the card. Camera focused on one wall.                                                                        |
| `05-opi-line.png`   | huddle, Pillar Review stage, **AI-assisted mode on** | A red or amber pillar in focus with an **Opi facilitator line** visible (the spoken-style narration). This is the AI Facilitator money shot.                                    |
| `06-closeout.png`   | huddle, Close Out stage                              | The close-out recap — win of the day / issues / priorities.                                                                                                                     |

## `/client/public/screenshots/ai/` — the /ai and /obeya landing pages

| File                     | Screen                                                  | What it must show                                                                                                                     |
| ------------------------ | ------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| `opi-insights-sqdcp.png` | SQDCP dashboard, Opi Insights sidebar **expanded**      | The real findings list — headline, the score dial, a few findings with severity chips (good/watch/gap) and their "next action" lines. |
| `opi-insights-pd.png`    | Policy Deployment, Opi Insights sidebar **expanded**    | Same, for PD — ideally showing a cascade-strength score and a gap finding.                                                            |
| `ai-controls.png`        | Portal → Admin → AI Controls **or** Account → AI toggle | The kill-switch / AI governance UI. Blur any email addresses. Optional but strong for the governance section.                         |
| `ai-usage.png`           | Business Hub → AI Usage & Cost dashboard                | The spend/token breakdown + budgets. Blur enterprise names if any real ones show. Optional.                                           |

---

Until these are dropped in, `ObeyaWalkthrough` shows a labelled placeholder per
frame and the landing pages show captioned placeholder boxes — layout and copy
are reviewable now.
