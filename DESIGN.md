# Design system — Вкусное место

## Direction
A neighbourhood lunch invitation composed like a contemporary printed bistro menu. Standard cafe landing sequence; real photographs from the exact venue listing. The dark green relates to the venue's foliage and green interior surfaces; warm paper balances the richly coloured food photography.

## Palette
Pine #193d32, deep pine #102c24, cream #f6f1e6, paper #fffdf7, honey #e6bd65. Main ink #203a31, muted copy #5b675d, separator #c9cbbb. Dark panels use cream headings and #d2dccb body text.

## Typography
Self-hosted Cormorant Garamond 500–700 for wordmark, headings and italic accents. Self-hosted Golos Text 400–600 for body and controls. Main body 16px; desktop display capped at 96px; mobile headline 56–76px. Heading tracking -0.03em. Body line height 1.65. Secondary metadata 12–13px.

## Composition
1600px maximum main sections, 5–8% desktop gutters, 6% mobile gutters. Hero: serif invitation on a pure white surface that gradually dissolves into a full-height food photograph on the right. The photo is an edge-to-edge background without a card border or rounded corners; its gradient protects the heading and actions. Below 900px, the same white-to-photo transition runs vertically, with the photo underneath the text. The honey note sits at the lower right. Thin rules separate sections. Other paired columns collapse at 760px; menu category controls wrap; dish cards become a single column. Other photography uses limited asymmetric corners; ordinary controls retain small 3–4px corners and category buttons are pill-shaped.

## Interaction
Anchored navigation with mobile disclosure and Escape dismissal. Menu filters use semantic buttons with aria-pressed. Booking is an explicitly labelled local demonstration; no personal-data input, storage, network submission or real booking occurs. Route and phone links lead to the verified cafe. Focus rings use #c29231. Reduced-motion preference disables animation and smooth scrolling.

## Motion and assets
The hero background remains still to preserve the seamless white fade; menu photographs enlarge slightly on hover. All six shipped photographs have provenance in ASSET-SOURCES.md. No generated imagery. All fonts are local. No autoplay media, trackers, cookie banners or external scripts.

## Validation scope
JavaScript syntax and static asset/anchor references checked. Independent source review found one material mobile-filter overflow issue, fixed with flex-wrap:wrap and marked resolved by the reviewer. Browser visual testing was not performed. Do not represent this as a completed visual or accessibility certification.
