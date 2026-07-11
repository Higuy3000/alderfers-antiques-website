# Alderfer's Antiques of Aspen — Website

A polished, dependency-free **static website** (showcase only — no online checkout) for
Alderfer's Antiques of Aspen, a longstanding boutique on Aspen's Main Street.

No build step, no frameworks, no Node required. Just HTML, CSS, and a little vanilla JS.

---

## Preview locally

From inside this folder:

```bash
python3 -m http.server 8000
```

Then open <http://localhost:8000> in your browser. (Python 3 ships with macOS.)

> A local server is recommended over opening the files directly so the Google Maps
> embed and fonts load correctly.

---

## File structure

```
Antiques of Aspen/
├── index.html         # Home — hero, welcome, featured categories, CTA
├── about.html         # The shop's story + provenance/authenticity
├── collections.html   # Six collection categories with descriptions
├── gallery.html       # Framed grid + click-to-enlarge lightbox
├── visit.html         # Address, hours, phone, Google Map, inquiry note
├── css/style.css      # Entire design system (one shared stylesheet)
├── js/main.js         # Mobile nav, lightbox, scroll reveal, footer year
├── assets/img/        # favicon.svg + (your photos go here)
└── README.md          # This file
```

---

## Business details used on the site

| | |
|---|---|
| **Address** | 309 E Main St, Aspen, CO 81611 |
| **Phone** | (970) 925-5051 |
| **Hours** | Mon–Sat, 11:00am – 5:30pm *(varies seasonally — "call ahead" noted)* |
| **Instagram** | [@alderferantiques](https://www.instagram.com/alderferantiques/) |

These were gathered from public listings and the shop's Instagram. **Please verify**
hours and phone before launch — small-shop hours change seasonally.

---

## Adding real photos (important)

The site currently uses **elegant styled placeholders** (the cream textured tiles
labeled "Shop Interior," "Vintage Clothing," etc.). No usable, properly-licensed photos
were available online to pull — the only stock images found were watermarked and
unrelated — so placeholders are intentional, not an oversight.

To add real photography:

1. Drop image files into `assets/img/` (e.g. `interior-1.jpg`).
2. Find a placeholder in any page — it looks like:
   ```html
   <div class="ph">Shop Interior</div>
   ```
3. Replace it with an image:
   ```html
   <img src="assets/img/interior-1.jpg" alt="Inside the shop on Main Street" />
   ```
   The frames, card media, and gallery tiles are all sized to accept images directly —
   the layout and lightbox keep working with no other changes.

> **Please use the shop's own photography** (or properly licensed images). Do **not**
> reuse photos scraped from Instagram or third-party listings on a public site.

---

## Editorial sections to keep fresh

A few sections are designed around buyer psychology — keep them current for best effect:

- **"Find of the Moment"** (home page) — a rotating spotlight on a single just-arrived
  piece. Swap its photo + copy every week or two; the scarcity framing ("once it's gone,
  it's gone") only works if it actually changes.
- **"As Featured In" press band** (home + about) — cites **Modern Luxury** ("5 Best
  Antique Shops in Aspen") and the **Roaring Fork Valley Guide**, both of which genuinely
  list the shop. Please confirm these before launch, and add any other real press.
- **Pull-quotes** — the italic editorial lines are written in the shop's voice (not
  attributed to real customers). If you collect genuine customer testimonials, they can
  replace these for even stronger social proof.

## Things to confirm with the shop owner

The About page contains one clearly-marked placeholder note for facts not published
online: **founding year, the owner's name, and the personal origin story.** Once those
are provided, weave them into `about.html` and delete the note block.

---

## Deploying (when ready)

Because it's fully static, this site drops onto any static host for free:

- **Netlify / Cloudflare Pages** — drag-and-drop this folder, or connect a git repo.
- **GitHub Pages** — push to a repo and enable Pages.

No server, database, or build configuration needed.

---

## What's intentionally not included (this version)

- Online shopping cart / payments (showcase-only by design)
- A working contact form backend (can be added later via e.g. Formspree)
- A CMS / admin editor
