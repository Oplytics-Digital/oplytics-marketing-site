# oplytics-marketing-site

Oplytics.digital — Marketing Website. Component-based architecture for all public-facing pages.

## Stack

- **React 19** + **TypeScript** — component-based UI
- **Tailwind CSS 4** — utility-first styling with Oplytics brand tokens
- **shadcn/ui** — accessible component primitives
- **Wouter** — lightweight client-side routing
- **Framer Motion** — animations
- **Vite** — build tooling

## Design System

- **Theme:** "Neon Operations" — dark industrial dashboard aesthetic
- **Fonts:** Montserrat (headings), Space Grotesk (body)
- **Palette:** Navy `#0A0E1A`, Purple `#8C34E9`, Teal `#1DB8CE`
- **Status colours:** Live `#22C55E`, In Development `#8C34E9`

## Architecture

All service statuses and metadata are driven by a single config file at `client/src/config/services.ts`. Changing a service status there propagates across all pages — hero badges, CTAs, footer links, and pricing.

### Shared Components (`client/src/components/shared/`)

| Component | Purpose |
|-----------|---------|
| `MarketingLayout` | Wraps all pages with header, footer, chatbot |
| `MarketingHeader` | Sticky nav with Solutions dropdown, mobile menu |
| `MarketingFooter` | Footer with grouped service links |
| `HeroSection` | Hero with Live/In-Dev CTA variants |
| `FeatureGrid` | Configurable feature card grid (2/3/4 cols) |
| `ServiceCard` | Service card with status badge and glow hover |
| `PricingTier` | Pricing plan card with feature list |
| `ContactForm` | Validated contact form (name, email, company, message) |
| `TeamMemberCard` | Team member card with photo and bio |
| `LegalContentBlock` | Legal text with auto-generated TOC |
| `SimpleChatbotWidget` | Floating quick-action link widget |

### Pages

| Route | Page |
|-------|------|
| `/` | Home |
| `/solutions/:slug` | Solution detail (8 services) |
| `/pricing` | Pricing plans |
| `/contact` | Contact form |
| `/why-us` | Why Oplytics |
| `/privacy` | Privacy Policy |
| `/terms` | Terms of Service |
| `/status` | Service Status |
| `/login` | Sign In (placeholder) |

## Epic 1 Issues Addressed

- **#1** Create Project Scaffold & Service Config
- **#2** Build Standardised MarketingHeader Component
- **#3** Build Standardised MarketingFooter Component
- **#4** Build Hero Section Component (Live/In-Dev Variants)
- **#5** Build FeatureGrid and ServiceCard Components
- **#6** Build PricingTier Component
- **#7** Build ContactForm, TeamMemberCard, LegalContentBlock
- **#8** Build SimpleChatbotWidget (Minimal Link-Based)
- **#9** Decommission safetymanager.oplytics.digital & Redirect (config-level — Safety Manager status set to `in-development`)

## Development

```bash
pnpm install
pnpm dev
```
