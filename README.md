# In-Mar Systems — Redesign v2-simple (New Project)

**Status**: Fresh start in a completely separate folder/project (`inmar-redesign-v2-simple/`). The previous concept (in `inmar-fresh-start/`) is untouched and can be referenced or refined later.

**Live (after you push to a new repo)**: Will be at its own GitHub Pages URL (separate from the old concept demo).

## Goals (from feedback)
- Functional site **first** — simple, fast, eye-catching, **no fluff**.
- Small inspiration from the clean/professional layouts of fifisystems.com and b-hepworth.co.uk (trust, clear sections, product focus) without copying.
- Address specific items:
  1. Overall redesign (professional polish, remove uncentered notes, consistent clean experience).
  2. Better DIBBS solution (product-organized, more searchable).
  3. Online wiper sizing form (replaces the old manual-fill PDF datasheet with exact fields: Project/Vessel, Glass W/H, Qty, Voltage, A/R/X/T/I with explanations).
  4. Practical home slideshow (prominent, curated 18 key/impressive photos only — click opens the full gallery with the remaining ~180+).
  5. Assets managed locally and organized by original site page context where possible.
  6. Open to best practices (kept zero-build static for speed/simplicity/cost).

## What's New / Improved in This v2
- **Home slideshow**: Prominent, high on the page (after trust bar), uses the 18 curated "ss" photos from your local downloads (full images visible — no cropping). Auto + manual controls. Click the area → full gallery.
- **Full gallery**: Clean, caption-free (per requirements), categorized (wipers, fire-fighting, military, seating, vessels), filters, lightbox.
- **Wiper tool** (products page): Real online form with *exactly* the fields from the old datasheet + explanations for A/R/X/T/I. Submits and prefills the main quote request with structured data.
- **DIBBS**: Data now tagged by product (Wipers, Belts, Other). Sample PDFs downloaded locally into organized folders. Ready for product-based tabs/filters + "add to quote" actions.
- **Assets**: 
  - Logo local (`images/logos/inmar-tugboat-logo.png`).
  - Hero slideshow photos: `images/hero-slideshow/` (your 18).
  - Full gallery: `images/gallery/{fire-fighting,military,seating,vessels,wipers}/` (your 180+).
  - PDFs: `images/pdfs/{dibbs/,products/wipers/,products/seating/}` — organized by the page they appeared on the original inmarsystems.com.
- **Polish**: Clean top bar (no weird uncentered phone note), local assets, consistent nav (Gallery + DIBBS prominent), professional marine look.
- Same proven stack (static HTML + Tailwind CDN + vanilla JS) → fast loads, easy to edit, zero cost.

## Quick Start (Local)
1. Open this `inmar-redesign-v2-simple` folder in VS Code.
2. Install "Live Server" extension (if not already).
3. Right-click `index.html` → **Open with Live Server**.
4. Test:
   - Home: prominent slideshow (curated photos), click it → gallery.
   - Products: scroll to wiper tool → fill the form (including A/R/X/T/I) → it feeds the quote modal.
   - Resources: DIBBS table (search + filters; some local PDFs).
   - Gallery: full set, filters, clean lightbox (no text on images).
   - Mobile: use DevTools device toolbar.

All images/PDFs are local in this folder.

## Key Files
- `index.html` — Home with prominent curated slideshow + teasers.
- `products.html` — Product info + the new **Wiper Sizing Tool** form.
- `resources.html` — Enhanced DIBBS (product tags in data) + downloads.
- `gallery.html` — Full organized gallery (caption-free).
- `images/` — All assets organized (see subdirs above).
- `images/pdfs/` — Downloaded specs/catalogs sorted by original site page.

## Asset Sourcing Notes (for future / resume)
- Images: Your downloaded 187+ installation photos (categorized). Hero uses the "ss" subset you designated.
- PDFs + logo: Pulled from public original site URLs and organized by the page they lived on (dibbs page, products/wipers, products/seating, etc.). See the subfolder names.
- If you want more PDFs or specific product shots from the original site, give me the page or direct link and I'll generate/run the exact download commands (or do targeted ones).

## Deployment (Separate Live Demo)
1. Create a **new** GitHub repo (recommended name: `inmar-redesign-v2-simple` or similar) — this keeps the old concept repo + its live URL completely independent.
2. In this folder: `git add . && git commit -m "Initial v2-simple: curated slideshow + wiper form + organized DIBBS + local assets"`
3. Add remote + push (`git remote add origin YOUR_NEW_REPO_URL && git push -u origin main`).
4. In the new repo Settings → Pages → Deploy from main branch (or GitHub Actions).
5. Your new live URL will be something like https://KG3924.github.io/inmar-redesign-v2-simple/ (different from the old concept).

Both sites can be viewed side-by-side for comparison/feedback.

## Next / Open Items (when you return with feedback)
- Expand DIBBS UI to product tabs + "Add to quote" buttons (data is already tagged).
- More PDFs or additional product images (tell me what/where).
- Any copy/layout tweaks, more stats (inspired by FFS), seating link cleanup, etc.
- Real form backend (Netlify Forms / Formspree — easy one-line change).
- Compress/optimize the PNGs if load time matters in prod.
- Anything else from leadership feedback.

## Best Practices Applied (kept simple)
- Functional > flashy.
- Local assets (no fragile hotlinks).
- Reused the solid patterns from v1 (DIBBS logic, gallery code, quote flow, slideshow) so we didn't start from zero.
- Caption-free gallery per your explicit rule.
- Self-documenting (this README + folder organization).
- Zero build / fast / cheap.

When you're back with feedback, just open this folder (or the new repo) and tell me what to change next. The old concept folder/repo is safe and untouched.

Thanks — this gives you a clean, separate, professional-feeling functional demo focused on the real pain points (DIBBS usability + practical wiper quoting + usable visuals). 

Ready for the next round!