# Oplytics brand assets

The **"Target"** identity — the mark echoes the SQDCP radar/target charts that run
through the product, so the brand and the app read as one thing. Direction B from
the September 2026 brand exploration.

---

## Files in this folder

| File                                  | Use                                                              |
| ------------------------------------- | ---------------------------------------------------------------- |
| `oplytics-mark.svg`                   | **Primary mark.** Full colour, on dark or light. The default.    |
| `oplytics-mark-mono.svg`              | One-colour mark. `fill: currentColor` — set `color` to place it. |
| `oplytics-mark-512.png` / `-1024.png` | Raster mark, transparent background. Slides, avatars, favicons.  |
| `oplytics-lockup-horizontal.svg`      | Mark + wordmark, side by side. **For dark backgrounds.**         |
| `oplytics-lockup-horizontal-dark.svg` | Same, wordmark in navy. **For light backgrounds.**               |
| `oplytics-lockup-stacked.svg`         | Mark over wordmark over the tagline. Square-ish contexts.        |
| `oplytics-lockup-*.png`               | Raster versions of the above, transparent background.            |
| `oplytics-linkedin-banner.svg`/`.png` | LinkedIn **company** cover, 1584 × 396. Upload the PNG.          |

Favicon / app-icon files live one level up in `client/public/`: `favicon.ico`,
`favicon.svg`, `favicon-32.png`, `favicon-192.png`, `apple-touch-icon.png`,
`site.webmanifest`. They're wired into `client/index.html`.

---

## Colour

| Token          | Hex                   | Role                                                      |
| -------------- | --------------------- | --------------------------------------------------------- |
| Navy           | `#0A0E1A`             | The ground. Tab theme colour. Ring knock-out.             |
| Purple         | `#8C34E9` → `#5B1FA6` | The mark's disc (top-left → bottom-right).                |
| Purple (light) | `#C084FC`             | Highlight / hover only.                                   |
| Teal           | `#1DB8CE`             | The node. Secondary accent — use as data, not decoration. |
| Ink            | `#E2E8F0`             | Wordmark on dark.                                         |
| Ink faint      | `#596475`             | The `.digital` suffix.                                    |

RAG semantic colours (`#22C55E` / `#F59E0B` / `#EF4444`) are **product data
colours**, not brand accents. They appear on the banner's radar dots as a nod to
the product; don't use them as decoration elsewhere.

---

## Type

- **Montserrat** — 900 for the banner wordmark, 800 for lockups, 600–700 for
  labels with `0.12–0.16em` letter-spacing.
- **Space Grotesk** — 300–500 for supporting text and the tagline.

Both are loaded from Google Fonts on the site. The lockup SVGs use live `<text>`,
so they render correctly **only where those fonts are available** (the site, or a
machine with them installed). For anywhere else — decks, third-party tools — use
the PNG lockups, or the mark SVG (no text) plus type set in the host tool.

---

## The wordmark

`Oplytics` + `.digital`, one word, no space. `.digital` is always lighter weight
(300) and a muted colour (`#596475` on light, `#8890A0` on dark). Never all-caps,
never restyled.

## The tagline

> Operational Excellence. One Digital Platform. Powered by AI.

Wording is **provisional** — a harmonisation pass across the site, the pitch deck
and sales materials is still to come. Until then, this is the form to use.

---

## Clear space & minimum size

- Keep clear space around the mark equal to the radius of its inner ring.
- Mark: don't go below **16px**. Below ~24px the inner ring thins — that's fine,
  the node still carries it.
- Horizontal lockup: don't go below **120px** wide.

## Don't

- Don't recolour the disc, the rings, or the node.
- Don't move the node — it sits on the outer ring, upper-right.
- Don't add a drop shadow, outline, or container to the mark.
- Don't stretch, rotate, or skew anything.
- Don't set the wordmark in another typeface.
- Don't place the full-colour mark on a busy photo — use the mono mark.

---

_Generated 2026-09-10 from the oplytics.digital brand system. Regenerate the PNGs
from the SVGs if the source changes._
