# project_specs.md — Check Odontologia

## What the App Does
Premium marketing website for Check Odontologia, a Brazilian dental clinic. Single-page site with anchor-linked sections. Target audience: prospective patients looking for a trustworthy, modern dental clinic.

## Tech Stack
- Framework: Next.js 15 (App Router)
- Language: TypeScript
- Styling: Tailwind CSS
- Animations: GSAP 3 + ScrollTrigger
- Icons: Lucide React
- Fonts: Plus Jakarta Sans (headings), Inter (body) via next/font/google
- Deployment: Vercel

## Brand Colors
- Primary: #34308B (deep blue-purple)
- Secondary: #3F5FB8 (medium blue)
- Accent: #6EAA3A (green — CTAs, highlights)
- Support: #DCEAF8, #F5F8FB, #FFFFFF

## Pages / Sections
1. Navigation — fixed, transparent → solid on scroll
2. Hero — full-screen, floating shapes, animated stats counters
3. About — company story and values with scroll animations
4. Services — 8 service cards with stagger reveal
5. Technology — 4 tech features with ScrollTrigger
6. Stats — animated counters on dark brand background
7. Testimonials — 3 patient review cards
8. Team — 4 doctor profile cards
9. Contact — form + contact info
10. Footer — links, social, copyright

## Data Models
Static content only — no database required.

## "Done" Criteria
- All 10 sections built and visually complete
- GSAP animations on hero load + all sections on scroll
- Fully responsive (mobile, tablet, desktop)
- `npm run build` passes with zero TypeScript errors
- Dev server runs without console errors
