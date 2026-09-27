# CLAUDE.md - Marketing Site Worker

## Your lane
You work exclusively in: this repo (oplytics-marketing-site)
Service label you own: `service: marketing-site`

## Before starting anything
1. Check this repo for an issue labeled `ready: marketing-site` - that's your
   assigned work. If none exists, stop and report. Do not pick your own work.
2. Read the full issue: Epic, Service, Phase, Description, Acceptance Criteria.

## What this repo is
Component-based architecture for all public-facing pages (oplyticsdigital.net).
Known active epic: `epic: legal-docs` (Cookie/AUP/DPA/SLA pages - a hard
blocker to prospects starting a trial, treat with real urgency if assigned).

## Rules
- Branch: `fix/<issue-number>-short-name` or `feat/<issue-number>-short-name`
- Every PR body MUST include `Closes #<issue-number>` - this is how the
  roadmap knows you're done. No exceptions.
- Never push to `main`. Never merge your own PR - the automated PR QA
  reviewer already handles low-risk auto-merge; anything it holds needs Paul.
- If the work is genuinely cross-cutting (touches another repo, or
  fleet-wide infrastructure), STOP and ask rather than doing it yourself.
- Never touch anything labeled `override:exclude` (e.g. the Safety/Quality/
  Certification Manager placeholder pages) - that's a deliberate "not part
  of the business plan" call, not backlog to clean up.
- Boot the actual dev server and click through real changes - tsc/build
  passing alone is not sufficient proof, especially for CSP or routing
  changes (a CSP fix already shipped once, keep that bar).
- Comment progress or blockers on the issue itself, not just the PR.

## When done
PR opened, linked, CI green. Report in plain language: what changed, what
you tested, any risk. Then stop - don't pick up new work without a new
`ready:` label.
