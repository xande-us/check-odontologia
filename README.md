# Check Odontologia — Website

Premium dental clinic website built with Next.js 15, Tailwind CSS, and GSAP animations.

## Setup

### 1. Install Node.js (required)
Download and install Node.js from https://nodejs.org (LTS version recommended).

### 2. Install dependencies
```bash
npm install
```

### 3. Run development server
```bash
npm run dev
```

Open http://localhost:3000 in your browser.

### 4. Build for production
```bash
npm run build
npm start
```

## Project Structure

```
├── app/
│   ├── globals.css        # Global styles + Tailwind
│   ├── layout.tsx         # Root layout with fonts and metadata
│   └── page.tsx           # Main page — imports all sections
├── components/
│   ├── Navigation.tsx     # Fixed nav with GSAP entrance + scroll effect
│   ├── Hero.tsx           # Full-screen hero with floating shapes + counters
│   ├── About.tsx          # Company story and values
│   ├── Services.tsx       # 8 service cards with stagger reveal
│   ├── Technology.tsx     # 4 tech features with animations
│   ├── Stats.tsx          # Animated counters on brand-primary bg
│   ├── Testimonials.tsx   # 6 patient testimonials
│   ├── Team.tsx           # 4 specialist profiles
│   ├── Contact.tsx        # Contact form + info
│   └── Footer.tsx         # Footer with links and social
├── package.json
├── tailwind.config.ts     # Brand colors: #34308B, #3F5FB8, #6EAA3A
└── project_specs.md
```

## Brand Colors

| Token               | Hex       | Use                          |
|---------------------|-----------|------------------------------|
| `brand-primary`     | `#34308B` | Headlines, nav, main CTAs    |
| `brand-secondary`   | `#3F5FB8` | Accents, hover states        |
| `brand-accent`      | `#6EAA3A` | Green CTAs, highlights       |
| `brand-light`       | `#DCEAF8` | Card backgrounds, icon bg    |
| `brand-lighter`     | `#F5F8FB` | Section backgrounds          |

## Deploy to Vercel

1. Push to GitHub
2. Connect repo to Vercel at https://vercel.com
3. Deploy — zero config needed
