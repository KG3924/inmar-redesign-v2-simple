# In-Mar Systems Website Redesign - Demo Project

**Live Demo**: https://KG3924.github.io/inmar-redesign-concept/

**GitHub Repo**: https://github.com/KG3924/inmar-redesign-concept

## 📋 Project Workflow & Resume Reference

This repository contains a complete, functional prototype for a modern redesign of the In-Mar Systems corporate website.

For a detailed, chronological record of the **entire workflow** — site audit, identification of outdated aspects, UX improvements, design decisions, multiple rounds of feedback (including photo selection, logo integration, DIBBS prominence, ShipServ links, gallery), technical implementation, and deployment — please see:

**[WORKFLOW_AND_DECISIONS.md](https://github.com/KG3924/inmar-redesign-concept/blob/main/WORKFLOW_AND_DECISIONS.md)**

This document is specifically structured to be useful for resume, portfolio case study, or future reference. It includes key phases, rationale, lessons learned, and how to extend the project (e.g. adding your own photos to the gallery).

**Example resume bullet**: "Led internal initiative to redesign corporate website for marine equipment company: conducted full UX/content audit of legacy platform, built and deployed responsive static prototype with interactive features (searchable government solicitations table), real product assets, and modern navigation; documented full process for leadership review and portfolio use."

**Status**: ✅ **UPDATED** — Feedback addressed:

- All page headers now feature the **real company logo** (the tugboat and tower icon from the live site).
- Replaced non-marine placeholder photos (mountains, trains, computers) across the home page with more relevant industrial marine imagery (ships, offshore vessels, bridge/sea scenes, industrial equipment). Improved alt texts.
- **DIBBS** promoted to top-level navigation item on every page, with direct link to the interactive section. Added a prominent "Government & Procurement" highlight section with easy-access cards for DIBBS and ShipServ right on the homepage.
- Added **ShipServ** link to the main navigation on all pages + a dedicated featured section in Resources with the direct catalog link.
- Category tags remain prominent and effective.

The demo modernizes navigation, makes DIBBS usable and easy to find, adds strong visuals/CTAs, and preserves all factual content from the public site.

**Purpose**: This is an *unsanctioned internal concept demo* created to illustrate how a modernized, user-friendly site could look and function. It uses only publicly available content and structure from the current https://www.inmarsystems.com/. Goal: easy to share a live link + this README with leadership to discuss potential official project.

**Assumptions**:
- Zero prior website design or coding knowledge required for you (the instructions below are detailed and step-by-step).
- All content, images, PDFs, and data come from the current public site (or faithful recreations/summaries). No internal systems access used or needed.
- Minimal to zero ongoing cost for the demo. Full implementation later can use the same content/assets.

## Quick Start (View the Demo Right Now)

A local preview server is already running in this environment at: **http://127.0.0.1:8765** (or the address shown in terminal output).

On your machine:
1. Open this folder (`inmar-redesign-demo`) in VS Code (free) or any text editor.
2. **Easiest**: Install the free "Live Server" VS Code extension, then right-click `index.html` → "Open with Live Server".
3. Or run in terminal: `python3 -m http.server 8000` (or `python -m http.server 8000`) then visit http://localhost:8000
4. Navigate: index.html (Home), about.html, products.html (rich product hub + modals), resources.html (interactive DIBBS!), contact.html.
5. Test mobile: Browser DevTools (F12) → device toolbar (phone icon).

The site is fully self-contained for demo purposes.

The demo is fully functional:
- Modern responsive design (desktop + mobile hamburger menu).
- Interactive DIBBS quotes table (search, filter, sort).
- Product detail modals.
- "Request Quote" forms (demo mode - shows success, ready for real backend like Netlify Forms or Formspree).
- All key content preserved and improved for scannability.
- Links to original PDFs on the current site (they will work).

## Current Site Analysis: What's Outdated and Why It Hurts

I analyzed the live site using direct page fetches (homepage, all main product pages, subs, news, DIBBS, contact, press releases, etc.). Here's the factual assessment:

### Major Outdated Aspects

1. **Legacy Platform (Weebly or similar 2010s builder)**  
   - Evidence: `/uploads/9/1/6/3/9163116/` paths, query-timestamped images, `.html` everywhere, duplicated navigation blocks in page source.  
   - Problems: Limited design flexibility, hard to make fast/responsive/modern, difficult for non-technical updates, looks "old CMS". Slow iteration.

2. **Poor Information Architecture & Navigation**  
   - Deep nested dropdowns (Products > Wipers > 8 items). Duplicated full nav lists on every page (visible in parses).  
   - No search, no filters, no breadcrumbs.  
   - URLs like `pantograph--pendulum-wipers.html` are ugly and unfriendly.  
   - Result: Users (procurement, engineers, captains) get frustrated finding specs or comparing options. High bounce likely.

3. **Weak Visual Design & Branding**  
   - Dated logo treatment, old GIFs (e.g., FFS logo), low-res or unoptimized images, inconsistent layouts.  
   - "PLEASE MAKE NOTE OF OUR NEW PHONE NUMBER" banner feels like a temporary patch, not permanent professional branding.  
   - Little whitespace, repetitive headers/footers, no hero imagery showing equipment *in real marine environments*.  
   - No cohesive modern palette, typography, or card-based UI. Looks 10-15 years old.

4. **Content & Scannability Problems**  
   - Text-heavy walls with specs buried. Little benefit-oriented language ("what this does for the crew/vessel" vs just "Type C & D Mk5").  
   - Many pages are thin (rely on visitor clicking PDFs). Gallery page nearly empty in content.  
   - Repeated contact block on *every* page wastes space and feels spammy.  
   - Inconsistent address ("S Ruby Ave" vs "S. Ruby Street").

5. **DIBBS Quotes Page - Major Usability Failure**  
   - One giant unsearchable list of 40+ solicitation/NSN/PDF links.  
   - No filters, no search, no sorting, no categories (many NSNs relate to wipers 2090). Payment terms buried.  
   - Critical for government sales channel (US Navy/USCG contracts), yet almost unusable. This alone loses opportunities.

6. **Technical & Performance/SEO Issues**  
   - Not optimized for mobile (assumed from era; common breakage on small screens/touch).  
   - No modern performance (image optimization, critical CSS, etc.).  
   - Poor SEO (duplicate text from nav, thin pages, bad URLs).  
   - Basic form with no visible feedback or modern UX (no file uploads for RFQs, no product context).  
   - Accessibility likely low (contrast, keyboard nav, screen reader labels).

7. **Missing Modern B2B Expectations**  
   - No prominent CTAs for quotes or RFIs tailored to products.  
   - No product comparison, application filters ("for high-speed vessels", "hurricane-prone routes"), or "request info on this exact model".  
   - Weak social proof (news exists but not highlighted as "trusted by..."). No testimonials, case highlights, or "installed base" stats.  
   - No dedicated "For Government / Contractors" section despite heavy DIBBS/ ShipServ focus.  
   - External manufacturer sites (seatinnovation.no, fifisystems.com, solasolv.com) are good but integration on In-Mar site is just plain links.

**Overall Verdict**: The site accurately lists offerings and has solid recent news (Navy expansion, hurricane prep), but the *experience* feels outdated, hard to navigate, and untrustworthy for a company supplying safety-critical equipment to military and commercial fleets. In 2026, buyers expect fast, scannable, mobile-perfect sites with easy quote paths. This is a barrier to winning new business and supporting existing customers.

### Suggested Additions, Streamlining & UX Improvements

**Streamline**:
- Reduce top-level nav to 6 items max: Home, About, Products, Resources, News, Contact.
- Consolidate Wynn wiper subs into *one* excellent "Wynn Marine Wipers" page with internal jump links, tabs, or filterable cards (Straight-Line, Pantograph, Controllers, Wash Systems, Clear View).
- For Alu/Seating: Position In-Mar clearly as "U.S. Agent & Distributor" + local value (DIBBS support, US stock/service, integration knowledge), link out to mfr for full catalog/config, provide quick US-specific downloads/refs.
- Merge "Download Data Sheet", catalogs, military refs, Alu ref into a single **Resources** hub with search + categories.
- Kill duplicated nav and repeated contact footers. One smart global footer + sticky header.
- Clean URLs in final site (no .html, no --).

**Add / Modernize for Friendliness**:
- **Hero + Value Prop**: Strong visual + "Engineered for extremes. Trusted by the U.S. Navy and Gulf fleets." Immediate credibility.
- **Global Search** (even simple JS filter on products/resources).
- **Product Discovery**: Cards with photo + 1-line benefit + "Specs & Quote" button. Application tags ("High-speed vessels", "Extreme weather", "Fi-Fi Class").
- **Interactive DIBBS**: Searchable/sortable/filterable table (by solicitation, NSN, or inferred type). "These are example/recent opportunities; verify on official DIBBS".
- **Quote/Lead Forms**: Contextual – button on a wiper model pre-fills "Interested in: Type 1750 Pantograph". Use free service for real submissions in demo/prod.
- **Trust Bar & Proof**: "45+ years | Gonzales, LA (hurricane roots) | US Navy / USCG supplier | Class approvals support".
- **Resources Hub**: One page for everything downloadable + news + DIBBS.
- **Mobile-First**: Hamburger, large tap targets, thumb-friendly CTAs, fast.
- **Modals for Details**: Click "View Brochure" or "Details" without leaving page (keeps flow).
- **Persistent CTA**: Floating or header "Request a Quote" button.
- **Performance/SEO Basics**: Fast Tailwind, optimized images (you add later), proper headings, meta titles/descriptions.
- **Accessibility**: Semantic HTML, good contrast (enforced in Tailwind choices), ARIA where needed.
- **Future-Proof Notes**: Easy to add real backend (quote API, CMS like Sanity or Webflow later), analytics, live chat.

**Other Recommendations** (for full project, not just demo):
- Professional photography/videography of equipment installed on vessels (biggest visual upgrade).
- Video embeds (wiper in storm, fire monitor test).
- Comparison tables (e.g., which controller for how many wipers).
- "Vessel Type Solutions" page (Tugs, OSVs, Navy auxiliaries, etc.).
- Case studies from recent press + photos.
- Certifications page or badges (Fi-Fi 1/2/3, ABS, etc.).
- Owner: Consider buying inmarsystems.com redirect or new domain if rebrand, but keep for now.

These changes make the site a *sales and support tool* instead of a digital brochure.

## Proposed Demo Site Structure (Information Architecture)

```
/
├─── index.html          # Home: Hero, trust, featured products, markets, CTAs
├─── about.html          # Story, experience, capabilities, leadership note
├─── products.html       # Hub + rich sections/cards for all 5 categories + modals
├─── resources.html      # News grid + searchable DIBBS + downloads + refs
├─── contact.html        # Info + modern multi-field form + map placeholder
├─── images/             # Your logos, product shots, heroes (see instructions)
└─── README.md           # This file (analysis + instructions)
```

**Navigation (consistent across pages)**: Logo | About | Products | Resources | Contact | [Request Quote button]

**Products covered faithfully** (from site):
- Wynn Marine Wipers (Straight-Line Type C/D, Pantograph/Pendulum various, Controllers 800-8000 series, Window Wash 1591/5010, Clear View C350)
- Fire Fighting Systems (FFS) - monitors, pumps, foam, full packages, Fi-Fi
- Fire Pumps (Nijhuis / Pentair Fairbanks Nijhuis)
- Seating & Deck Rails (Alu Design) - Pilot, Operator, Passenger, Suspension, Rails
- Window Shades (Solar Solve) - Anti-glare roller screens

**Key Data Preserved**:
- All brochure PDF links point to original (or you can copy locally).
- DIBBS list (representative sample + note).
- Recent press releases (full text summarized/improved for web).
- Contact details, address, new phone.
- 45+ years, markets served, mission.

## Tech Stack & Hosting (Truly Minimal Cost & Zero Knowledge Friendly)

**Why this stack**:
- **Pure static HTML + Tailwind CSS via CDN + vanilla JavaScript**: No Node, no build tools, no npm, no frameworks to learn. One script tag for beautiful modern styling. You edit in any text editor or VS Code.
- **No backend for demo**: Forms "work" with visual success + console. Easy upgrade path.
- **Self-contained**: Open .html files directly or with a 1-click local server.
- **Modern & Professional**: Tailwind gives production-grade responsive design, components, dark mode ready if wanted, accessibility helpers out of box.
- **Cost**: $0. No hosting fees for demo.

**Hosting Options (All Free Tiers)**:
1. **Netlify Drop** (easiest, recommended for you): Go to netlify.com/drop , drag the whole `inmar-redesign-demo` folder. Get instant public URL like `https://random-name.netlify.app`. Supports Netlify Forms for real submissions with 1 line change. Perfect for sharing leadership link today.
2. **GitHub Pages**: Free if you have (or create free) GitHub account. Push folder or use gh-pages.
3. **Vercel**: Similar drag or git.
4. Local only for now, then deploy when ready to share.

Later (official site): Can keep static (or move to Webflow/Framer for no-code, or Next.js + headless if dev team), connect real CRM (HubSpot free tier), email (Formspree/Netlify), analytics.

**Images Strategy (Minimal Cost)**:
- Download key images from current site (right-click > Save image as).
- Use high-quality free stock from Unsplash/Pexels for heroes and context shots (search "ship bridge", "offshore tug", "marine fire fighting", "helm chair vessel", "wiper system ship").
- Later: Hire local photographer or use manufacturer assets.

## Detailed Step-by-Step Instructions to Recreate / Customize / Deploy (Zero Knowledge)

### Phase 0: Setup Your Machine (10-15 minutes)

1. Download and install **VS Code** (free from code.visualstudio.com). It's the standard.
2. (Optional but strongly recommended) In VS Code, go to Extensions (left icon), search and install:
   - "Live Server" by Ritwick Dey (for instant local preview with refresh).
   - "Prettier" (auto formats your HTML nicely).
3. Create a folder on your computer for this project (or use this one I created). Open it in VS Code: File > Open Folder.
4. Inside the folder, create subfolder `images` (for your photos/PDFs if you copy them).

### Phase 1: Understand & Prepare Assets (20-40 min)

1. Open https://www.inmarsystems.com/ in Chrome or Edge (multiple tabs).
2. For logo and key visuals:
   - Right-click the In-Mar logo > "Save image as..." > save as `images/inmar-logo.png` (or .jpg).
   - Browse product pages and save 4-8 representative images: wiper closeups, FFS monitor, Alu chair, Solar Solve blind, ship photos, etc. Name them descriptively: `wynn-straight-line.jpg`, `ffs-monitor.jpg`, `alu-pilot-chair.jpg`, `solar-solve.jpg`, `hero-ship-bridge.jpg`, `inmar-facility-or-ship.jpg`.
3. For PDFs (optional for self-contained demo):
   - On product pages, right-click PDF links or use the direct URLs from source (e.g. https://www.inmarsystems.com/uploads/9/1/6/3/9163116/type_c___type_d.pdf). Download a few key ones into `images/` or a `pdfs/` folder and update links in HTML from absolute to relative `./pdfs/xxx.pdf`.
4. Note any specific text you want updated (e.g., add real testimonials, new phone is already current).

### Phase 2: The Demo Files Are Already Here - How to Edit

All core files are provided in this folder:
- `index.html` (Home)
- `about.html`
- `products.html` (overview + detailed category sections + modals)
- `resources.html` (news + powerful searchable DIBBS + downloads)
- `contact.html`

**To edit any page**:
- Open the .html file in VS Code.
- Changes are live if using Live Server.
- Tailwind classes are on elements: e.g. `class="bg-slate-900 text-white p-6"` means dark bg, white text, padding.
- Search for comments like `<!-- TODO: Replace image -->` or `<!-- Update text here -->`.
- Colors are consistent: Navy/slate for authority + marine blue accents + amber for CTAs (safety/attention).

**Key JS locations** (in <script> tags at bottom of each page or shared pattern):
- Mobile menu toggle.
- Modal open/close (product details, quote form).
- DIBBS table: search input, category filter buttons, sort.
- Form submit handler (currently prevents real send, shows "Thank you" message + logs).

**To add a new product card**:
- Copy an existing `<div class="...">` card in products.html.
- Update image src, title, description, tags, and the data- attributes or onclick for modal if used.

**To update DIBBS data**:
- In resources.html, find the `dibbsData` JavaScript array near the bottom.
- Add/edit objects: `{ solicitation: "SPE7M4-26-T-XXXX", nsn: "2090-01-XXXXXXX", link: "https://www.inmarsystems.com/uploads/..." }`.
- The render function rebuilds the table automatically.

**To make forms real (free)**:
- Option A (easiest for demo): Sign up at https://formspree.io (free), create a form, get an endpoint like `https://formspree.io/f/xxxxxx`. In contact.html (and quote modals), change the form `action` to that URL and remove the JS handler or keep for UI. Submissions go to your email.
- Option B: Deploy to Netlify first (see below), then enable Forms in Netlify dashboard (add `data-netlify="true"` and `name="contact"` to form tag). No extra code.

### Phase 3: Customize Content & Branding (1-3 hours)

1. Replace all placeholder images (picsum or lorem) with your saved real ones. Update `alt` text.
2. Update any "TODO" or example text.
3. Add real testimonials if you have them (even 2-3 short quotes from customers or internal).
4. Expand About with any internal facts (history, employee count, specific Navy contracts) – keep factual.
5. For DIBBS: Update the sample list with newest from the live site if changed. Add a "Last refreshed: [date]" note.
6. Improve copy slightly for scannability (I already did a pass; feel free to tweak).
7. Add your LinkedIn or company social links in footer if desired.

### Phase 4: Local Testing (15 min)

- With Live Server running, click every link, open modals, type in DIBBS search ("2090", "SPE7", "wiper" if tagged), resize browser to phone size, submit forms (watch for success message).
- Check console (F12) for any red errors (fix obvious ones).
- Test on your actual phone: Use same WiFi, visit the Live Server URL shown (usually http://192.168.x.x:5500).

### Phase 5: Deploy for Free & Share (10 minutes)

**Easiest: Netlify Drop**
1. Go to https://app.netlify.com/drop (sign up with GitHub/Google/email - free).
2. Drag the entire `inmar-redesign-demo` folder (or zip it first) onto the drop zone.
3. Wait 10-30 seconds. Get a URL like `https://inmar-demo-abc123.netlify.app`.
4. (Optional but powerful) In Netlify dashboard for the site:
   - Go to "Forms" > enable. Then edit contact/quote forms in HTML to add `data-netlify="true"` (search Netlify docs for exact - it's 1 attribute).
   - Add custom domain later if you buy one (~$12/yr).
5. Share the URL + this README (or export key screenshots/PDF of the site) with leadership.
6. To update: Re-drag the folder (or connect Git repo for auto-deploy on changes).

**GitHub Pages Alternative**:
1. Create free GitHub account + new public repo.
2. Upload the folder contents (or use GitHub Desktop / CLI).
3. In repo Settings > Pages > Source: Deploy from branch (main) / root.
4. URL will be `https://yourusername.github.io/repo-name`.

**Important for Leadership Presentation**:
- Emphasize: "This is a functional front-end concept using only public info. No backend or internal integration yet."
- Show side-by-side: Current site screenshot (cluttered nav, long DIBBS list) vs new (clean cards, working search on DIBBS, beautiful hero, one-click quote).
- Highlight business value: Faster quote path = more leads; better mobile = field/techs use it; professional look = credibility with Navy/procurement.
- Offer next steps: "If approved, we can iterate with real photos, add your specific case studies, connect to email/CRM, move to a managed platform like Webflow or hire a dev for full CMS + hosting."
- Cost estimate for full: Domain (~$15), stock/professional photos ($200-1000+), platform (Webflow ~$20/mo or custom dev $5k-15k+), ongoing maintenance.

### Phase 6: Next Level Polish Ideas (After Demo Feedback)

- Replace picsum with 5-10 custom shots.
- Add real PDF copies locally + update links.
- Add a simple "Compare Wipers" table (JS or static).
- Embed a Google Map on contact (free).
- Add print styles or "Download this page as PDF" for sales.
- Analytics: Add free Plausible or Google Analytics snippet.
- Dark mode toggle (Tailwind makes trivial).
- When sanctioned: Migrate content to Webflow/Framer (visual editor, still low code) or full custom.

## Files in This Demo

- `README.md` - Main project overview, full analysis, build instructions, and deployment guide.
- `WORKFLOW_AND_DECISIONS.md` - **Complete chronological log of the entire process** (analysis → iterations based on feedback → technical decisions → deployment). Highly recommended for personal reference, resume/portfolio case study, or future handoff.
- `index.html` - Home.
- `about.html`
- `products.html`
- `resources.html`
- `contact.html`
- `images/` - Put your assets here (currently uses public placeholders + actual In-Mar product photos from the original site).

**Pro tip for future reference**: The combination of the live GitHub Pages site + this repo (especially `WORKFLOW_AND_DECISIONS.md` + `README.md`) gives you a complete, self-documenting record of the initiative.

## Credits & Notes

- All original content, specs, PDFs, news text, and company facts sourced directly from https://www.inmarsystems.com/ (as of analysis date).
- Design system: Custom Tailwind configuration for a trustworthy marine/industrial aesthetic (deep navy, professional blues, safety amber accents, clean sans).
- This demo does **not** claim to be the official site. It is a proof-of-concept redesign.
- If leadership moves forward, this code + assets can serve as the starting point or reference for the production build.
- Questions or iterations: Update the HTML directly - it's intentionally simple.

**Thank you for the opportunity to improve our company's digital presence.** A modern site will better reflect the quality and reliability of the equipment and service In-Mar provides.

---

*Analysis and demo created April 2026 timeframe based on public site data.*

To view or edit: Start with `index.html`. Deploy via Netlify Drop for instant shareable link.
