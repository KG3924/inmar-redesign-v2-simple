# In-Mar Systems — Static Site (inmar-redesign-v2-simple)

Current Site Live here: https://kg3924.github.io/inmar-redesign-v2-simple/

Professional, functional multi-page static website for In-Mar Systems / In-Mar Solutions. Zero build tools — pure HTML + Tailwind via CDN + Font Awesome + vanilla JS.

## Current State
- Fully consistent headers on every page:
  - Top bar: "In-Mar Systems & Solutions • (225) 430-9111"
  - Nav: small logo + two-line text stack ("In-Mar Systems" / "In-Mar Solutions") using the original logo font style, gap-x-8 nav items, single "Request Quote" button.
  - Large `inmarlogolarge.jpg` placed appropriately per page (e.g. above Products list, dead-center absolute on gallery/resources).
- Products dropdown is stable (hover persists with delay via shared JS).
- Full mobile support everywhere: hamburger button + slide-in style #mobile-menu with complete navigation (all subpages + top level).
- Gallery: master collection + three dedicated sub-galleries (wipergallery, ffsgallery, alugallery) as distinct sections. Photos open in clean full lightbox (no download/window). Anchor links to #master etc.
- Resources: reorganized Catalogs/Data Sheets/References by logical categories (Wipers incl. straight/pant/pend + printable window data, Controllers, Wash, Clear View, FFS, Seating, Reference lists, etc.). DIBBS section with keyword search + type filters (derived from filenames), 2090/3030 prefix notes.
- Product subpages: detailed blurbs + inline clickable brochures/specs next to relevant models (no giant bottom lists except where space-appropriate). FFS links to fifisystems.com.
- Quote request modal (demo) available on every page via "Request Quote".
- Window Data Submission Tool (interactive form that feeds structured data for quotes).
- All assets local under `assets/` (images in logical subfolders, PDFs from original site organized by product type).

## Pages
- `index.html` — Hero slideshow (curated 18 photos), trust signals, product teasers, Window Data Tool promo.
- `products.html` — Overview + direct subpage links + wiper controller notes + footer links.
- Subpages: straight-line-wipers, pantograph-pendulum-wipers, wiper-controllers, wash-systems, clear-view-screens, fire-fighting-systems, alu-seating-rails, solar-solve-shades, nijhuis-pumps.
- `gallery.html` — Full master + separate product sub-galleries with filters and lightbox.
- `resources.html` — News/press, DIBBS interactive table, categorized downloads.
- `about.html`, `contact.html`, `window-data-submission-tool.html`.

## Tech / How it works
- Tailwind via CDN (no build step).
- Shared helpers in `js/nav.js`: dropdown stabilizer (mouseenter/leave timers), mobile toggle, quote modal open/close/submit.
- Masonry-style grids (CSS columns) for galleries.
- Lightbox: simple fixed overlay with prev/next/esc/click-out.
- All links and PDFs use exact local paths under assets/.
- Responsive: desktop nav + independent mobile menu on every page.

## Local Development
1. Open the `inmar-redesign-v2-simple` folder.
2. Use any static server, e.g.:
   - VS Code "Live Server" extension → right-click `index.html` → Open with Live Server.
   - Or `python -m http.server` / `npx serve .`
3. Test key flows: hover Products (stable), resize for mobile hamburger + full menu, open photos in gallery (lightbox), fill quote form, use Window Data tool, DIBBS search/filters, download brochures.

## Deploy (GitHub Pages)
1. Push to GitHub (this repo is already set up as `inmar-redesign-v2-simple`).
2. In repo Settings → Pages → Source: Deploy from main branch (or GitHub Actions).
3. Site will be available at `https://KG3924.github.io/inmar-redesign-v2-simple/`.

## Notes for Maintenance
- Duplicate header/nav markup across files (common for pure static; update all when changing branding).
- To add a new brochure: drop PDF in the appropriate `assets/pdfs/products/...` subfolder and add a link next to the model description.
- Gallery photos: add to the relevant `assets/images/gallery/...` or product subgallery folders and update the JS arrays in gallery.html if needed.
- Quote modal and nav behavior live in `js/nav.js` — changes there apply site-wide once script is included.

This version incorporates all polish feedback: uniform branding/headers, reliable dropdown + mobile, separate sub-galleries, properly sourced brochures, cleaned title areas, etc. Simple, fast, and ready for review or production static hosting.

## Asset Credits
All images and PDFs are from the original In-Mar site / your downloads, organized locally for reliability (no hotlinking). 

Ready to push!
