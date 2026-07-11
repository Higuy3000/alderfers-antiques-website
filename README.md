# Alderfer's Antiques of Aspen — Website

A polished, dependency-free **static website** (showcase only — no online checkout) for
Alderfer's Antiques of Aspen, a longstanding boutique on Aspen's Main Street.

No build step, no frameworks, no Node required — just HTML, CSS, and a little vanilla JS.

This repository contains **two color-scheme options** of the same site so they can be
compared. The layout, content, and interactions are identical; only the palette differs.

| Folder | Palette |
|---|---|
| [`antiques-of-aspen/`](antiques-of-aspen/) | **Warm vintage luxury** — parchment, deep ink, sepia & brass |
| [`antiques-of-aspen-emerald/`](antiques-of-aspen-emerald/) | **Emerald & antique gold** — deep forest green, ivory & gold ("old-money" heritage) |

Each folder has its own `README.md` with full details.

## Preview locally

Pick a folder and serve it (Python 3 ships with macOS):

```bash
cd antiques-of-aspen          # or: cd antiques-of-aspen-emerald
python3 -m http.server 8000
```

Then open <http://localhost:8000>.

## Pages

`index.html` (Home) · `about.html` · `collections.html` · `gallery.html` · `visit.html`

## Status

Showcase site with elegant placeholder imagery in place of photography — the shop's own
photos drop straight into `assets/img/` when available (see each folder's README). Once a
color scheme is chosen, the other folder can be removed.
