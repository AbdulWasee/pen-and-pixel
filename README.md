# Pen &amp; Pixel — Website

Creative digital agency site, built in **Next.js 14 (App Router)**. Ported from the
approved design prototype and re-skinned to the official P&amp;P brand
(Ink Black `#121119`, Terracotta `#E0633B`, Adonis `#5EA7EF`, Alabaster `#DEDEDE`,
Bright Snow `#F7F8F9`).

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve the production build
```

## Deploy

Push to a Git repo and import it into **Vercel** (the connector you already use).
Zero config — Vercel detects Next.js automatically.

## Pages

| Route | Source |
|-------|--------|
| `/` | Home — hero, services, approach, industries, work, why-us, packages |
| `/case-studies` | Case studies index (filterable) |
| `/case-studies/lumiere` | Full Lumière Skin case study |
| `/journey` | 6-stage onboarding/process with sticky progress rail |
| `/contact` | Lead-capture form (the conversion point) |

## Fonts — important

The brand book specifies **Neue Machina** (display) and **Rockwell** (body), which are
licensed and not bundled here. The site loads close free stand-ins automatically
(**Space Grotesk** for display, **Zilla Slab** for body, **Arimo** for labels) so it
looks right out of the box.

To switch to the real brand fonts, drop the licensed files into `public/fonts/`:

```
public/fonts/NeueMachina-Regular.woff2
public/fonts/NeueMachina-Ultrabold.woff2
public/fonts/Rockwell-Regular.woff2
public/fonts/Rockwell-Bold.woff2
```

The `@font-face` rules at the top of `app/globals.css` already point at these paths,
so they activate with no further code changes.

## Lead form

`components/ContactForm.jsx` currently confirms locally and opens a pre-filled email
as a fallback. Before launch, wire it to a real endpoint — e.g. **Formspree**,
**Resend**, or a Vercel serverless function — at the `// TODO` in `submit()`.

## Notes

- The portfolio/case-study tiles are placeholders by design — no fabricated testimonials
  or invented client logos. Swap in real Instagram reel embeds and client work as it’s
  cleared for use.
- Custom cursor, scroll reveals, and the marquee respect `prefers-reduced-motion`.
- Logo assets live in `public/` (`logo-mark.png`, `logo-badge.png`, favicons).
