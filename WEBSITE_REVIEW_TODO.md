# Oplytics Marketing Site — Review Follow-Up TODO

Source: full 5-pass agent audit of oplytics-marketing-site source (2026-08-06).
Full findings + scorecard are in the conversation history; this file is the action list only.
**Changes below are uncommitted in the working tree — review and commit when ready.**

## Done (2026-08-06)

- [x] Soften WhyUs.tsx's 4 unsourced stats (35%/60%/90%/4x) to architecture-true claims that need no customer data — `client/src/pages/WhyUs.tsx`
- [x] Unify "SmartConnect" → "OplyticsConnect" in all visible copy — `services.ts`, `SolutionPage.tsx`, `Terms.tsx`
- [x] Promote the About.tsx traceability sentence (OEE loss → SQDCP → Hoshin → verified closure) into Home's hero subtext — `client/src/pages/Home.tsx`
- [x] Make Plant Manager the default/Champion persona tab instead of OpEx/CI Leader — `client/src/components/shared/PersonaSection.tsx`
- [x] Surface the ROI calculator on Home — extracted shared formula to `client/src/lib/roiCalculator.ts` (now used by both Pricing and Home), added a "See the £ Before You Sign" teaser section with a precomputed medium-org estimate + CTA into the full calculator on `/pricing`
- [x] Consolidate CTA labels — standardized redundant `/contact`-bound labels ("See How It Works", "Get in Touch") to "Book a Demo" on Home and About; left pricing-tier CTAs ("Apply to Partner"/"Get a Quote"/"Contact Sales") and status-dependent SolutionPage CTAs ("Request Live Demo"/"Register Interest") as-is since those are genuinely distinct actions
- [x] Added founder-credibility strap below Home hero (20 years, aerospace/defence, HVAC, chemical manufacturing) as a proof substitute until real case studies exist
- [x] Also fixed in passing: Home's bottom CTA falsely implied existing customers ("Join leading manufacturers who have already digitised...") — reworded to make no customer claim
- [x] **Technical/SEO — server-side per-route meta injection.** Added `server/pageMeta.ts` (title/description table mirroring every page's real `SEOHead` props) and wired it into `server/index.ts`'s catch-all route handler. Every route now serves a real, unique `<title>` + `<meta description>` + OG tags server-side instead of the same static fallback everywhere — verified against 6 real routes via curl, static assets confirmed still served correctly. No framework migration needed; the existing Express server just needed per-request HTML rewriting.
- [x] **Technical/SEO — robots.txt.** Repo's robots.txt was wide open (`Allow: /`) and did not match what the live site's audit showed (GPTBot/ClaudeBot/etc. blocked). Per your instruction, added explicit `Disallow` rules for GPTBot, ChatGPT-User, ClaudeBot, Claude-User, Claude-SearchBot, Google-Extended, Applebot-Extended, Amazonbot, Bytespider, CCBot, meta-externalagent, plus a `Content-Signal: search=yes, ai-train=no` line — codifies the intent in-repo regardless of what's happening at the Cloudflare/edge layer.
- [x] G2 listings ("Oplytic"/"publytics") — confirmed by you: not related to Oplytics. No action needed.

## Not started — needs real data (blocked on first customers)

- [ ] Add a real named customer/logo/quote once first pilot or beta customer agrees to be referenced — single highest-leverage fix available; would let WhyUs stats and other claims move to "verified" tier
- [ ] Once real usage data exists for the AI Facilitator (live since 2026-07-29), pair at least one AI claim on Home with a real number (time saved, actions auto-drafted, adoption rate) instead of mechanism-only language
- [ ] Revisit the ConnectRoleProposal £ ROI figures (`connectRoleData.ts` — £144k CEO, £180k Factory Manager, £85k IT, £250k+ Safety, £320k CI, £216k Maintenance) — currently presented with full visual confidence but no tier label; either tier-label them as illustrative/neutral or replace with real figures once available

## Needs a decision / outside this repo

- [ ] Standardize the 8 module naming pattern (Policy Deployment / SQDCP Dashboard / OEE Manager / OplyticsConnect / Safety-Quality-Certification Manager) — lives in `@pablo2410/shared-ui` package, cross-repo change, affects other Oplytics apps too

## Not yet verified visually

- [ ] No browser/screenshot tool was available this session — all changes verified via clean `tsc --noEmit`, successful `npm run build`, and curl checks against the built server (confirmed per-route meta injection works, static assets still serve). Open `/` and `/pricing` locally once to eyeball the new ROI teaser section and founder strap before shipping.

## Re-run later

- [ ] Re-run the full 5-pass audit once the above land and especially once real customer proof exists — original overall score was 51/100, driven down mainly by proof density (1/10) and message standardization (3/10 at time of audit, since improved by the naming + $-visibility fixes above)
