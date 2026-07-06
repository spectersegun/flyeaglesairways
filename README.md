# Eagle Airways — Next.js

Production source for the Eagle Airways marketing site. App Router + TypeScript, mobile-first, no CSS framework (inline styles + one `globals.css` with a single `768px` breakpoint and self-hosted fonts via `next/font`).

## Run

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

Requires Node 18.17+.

## Structure

```
app/
  layout.tsx        # next/font (Cormorant Garamond + Jost), metadata/SEO
  globals.css       # reset, base, responsive @media (max-width:768px)
  page.tsx          # composes all sections inside <BookingProvider>
components/
  booking-context.tsx  # 'use client' — shared modal state + jetMailto()
  Logo.tsx             # inline SVG eagle emblem
  Nav.tsx              # 'use client'
  Hero.tsx             # 'use client' (Book a Jet trigger)
  Ethos.tsx
  Services.tsx
  CabinCarousel.tsx    # 'use client' — rAF marquee, pause on hover, off-screen pause
  Film.tsx             # 'use client' — portrait video cards, play overlay, resume position
  Fleet.tsx
  Footprint.tsx
  Contact.tsx          # 'use client'
  Footer.tsx
  BookingModal.tsx     # 'use client' — closed by default; Esc / backdrop / × to close
public/
  images/…  videos/…
```

Only the interactive pieces are client components; everything else is a Server Component.

## Fixes vs. the prototype
- **Modal opens on load / won't close** — was an artifact of opening the raw prototype from `file://` without its runtime. Here the modal state lives in `BookingProvider` and defaults to **closed**; it closes on ×, backdrop click, or Escape.
- **Broken images** — same cause. Here all media is served from `/public` via `next/image` (auto WebP/AVIF, lazy-loading, responsive `sizes`).

## Performance
- Videos are static files in `/public/videos` with `preload="metadata"` — no bytes download until play.
- **Generate a poster still** for each video and drop it next to the mp4 (`film-1.jpg`, `film-2.jpg`) — referenced in `Film.tsx`. Without them the cards show a black frame until play. Quick way:
  ```bash
  ffmpeg -i public/videos/film-1.mp4 -vframes 1 -q:v 3 public/videos/film-1.jpg
  ffmpeg -i public/videos/film-2.mp4 -ss 2 -vframes 1 -q:v 3 public/videos/film-2.jpg
  ```
- Hero image is `priority`; all others lazy-load.
- The carousel rAF loop pauses when the section scrolls off-screen (IntersectionObserver).

## Notes
- Contact email `info@flyeaglesairways.com` (with an "s") and site `flyeagleairways.com` (no "s") are used exactly as provided — align them if that's a typo.
- Nav links are hidden below 768px (the prototype's behavior). Consider adding a hamburger menu that exposes them — a good next task.
- All copy, colors, and type match the design; see `../README.md` for the full spec.
# flyeaglesairways2
