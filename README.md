# Hari Bashyal — Portfolio

A production-ready, fully responsive personal portfolio built with **Next.js 14 (App Router), TypeScript, and Tailwind CSS**. Dark, refined aesthetic with a single accent color, custom typography (Fraunces + Geist), subtle motion, and a JSON-driven content layer so every section can be updated in one file.

---

## Table of contents

1. [What's inside](#whats-inside)
2. [Prerequisites](#prerequisites)
3. [Step-by-step setup](#step-by-step-setup)
4. [Customizing your content](#customizing-your-content)
5. [Replacing the profile photo](#replacing-the-profile-photo)
6. [Running production builds](#running-production-builds)
7. [Deploying to Vercel](#deploying-to-vercel)
8. [Deploying to Netlify or any Node host](#deploying-to-netlify-or-any-node-host)
9. [Project structure](#project-structure)
10. [Troubleshooting](#troubleshooting)

---

## What's inside

- **Next.js 14** with the App Router (`src/app`)
- **TypeScript** strict mode
- **Tailwind CSS 3.4** with custom design tokens (colors, fonts, animations)
- **Framer Motion** + `lucide-react` icons (lightweight, tree-shaken)
- **Google Fonts** loaded via `next/font` (Fraunces, Geist Sans, Geist Mono) — zero CLS, self-hosted at build time
- **Fully responsive** — designed mobile-first with breakpoints at `sm`, `md`, `lg`, `xl`
- **Single source of truth**: every section reads from `src/data/portfolio.json`
- **Accessibility**: semantic HTML, keyboard navigation, focus states, color contrast AA
- **SEO**: metadata, Open Graph, semantic headings, fast LCP via `next/image`

---

## Prerequisites

You need **Node.js 18.17 or later** and a package manager (npm comes with Node).

Check your versions:

```bash
node --version    # should be >= 18.17
npm --version
```

If you don't have Node, install it from [nodejs.org](https://nodejs.org) (pick the LTS version).

---

## Step-by-step setup

### 1. Unzip the project

```bash
unzip hari-portfolio.zip
cd hari-portfolio
```

### 2. Install dependencies

```bash
npm install
```

This installs Next.js, React, Tailwind, TypeScript, Framer Motion, and lucide-react. It will take 1–3 minutes the first time.

### 3. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. The site is now running with **hot reload** — any file you edit will refresh the browser automatically.

### 4. (Optional) Edit content

Open `src/data/portfolio.json` and update the fields with your real info. Save the file. The browser will reload with your changes.

That's it. You now have the portfolio running locally.

---

## Customizing your content

**Almost every change happens in one file: `src/data/portfolio.json`.**

The JSON is grouped by section:

| Section | JSON key |
|---|---|
| Hero, contact info, links | `personal` |
| About paragraphs | `about` |
| Skills chips | `skills` |
| Projects cards | `projects` |
| Work history timeline | `experience` |
| Education | `education` |
| Certifications | `certifications` |
| Soft skills | `softSkills` |
| Interests | `interests` |
| Elevator pitch quote | `elevatorPitch` |

### Add a new project

Open `src/data/portfolio.json`, find the `projects` array, copy any existing entry and modify it:

```json
{
  "name": "Your project name",
  "role": "Your role",
  "company": "Where you built it",
  "stack": ["Next.js", "PostgreSQL"],
  "problem": "What problem this solved.",
  "outcomes": [
    "Outcome one with a number",
    "Outcome two with a number"
  ],
  "link": "https://example.com"
}
```

### Change the accent color

Open `tailwind.config.ts` and edit the `accent` color object. The whole site re-themes instantly:

```ts
accent: {
  DEFAULT: '#d4ff3a',     // your main accent
  dim: '#b8e030',
  glow: '#e8ff66',
},
```

### Change the fonts

Open `src/app/layout.tsx` and swap the imports from `next/font/google`. Any [Google Font](https://fonts.google.com) name works:

```tsx
import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'], variable: '--font-geist-sans' });
```

---

## Replacing the profile photo

1. Drop your new image into `/public/` and name it `profile.jpg` (overwrite the existing one).
2. Keep the aspect ratio close to **3:4 (portrait)** for best framing.
3. Recommended: ≥ 1200px on the long edge, under 1 MB.

No code changes needed — `next/image` handles optimization automatically.

If you want a different filename, edit the `src="/profile.jpg"` line in `src/components/Hero.tsx`.

---

## Running production builds

To preview exactly what users will see in production:

```bash
npm run build
npm run start
```

`npm run build` runs TypeScript checks, ESLint, and the Next.js compiler. If anything fails, fix it before deploying.

`npm run start` serves the optimized build on `http://localhost:3000`.

---

## Deploying to Vercel

Vercel is built by the same team as Next.js, and it deploys this project with zero config.

1. Push the project to a GitHub repo (private or public).
2. Go to [vercel.com/new](https://vercel.com/new) and sign in with GitHub.
3. Click **Import** on your repo.
4. Leave every setting as default and click **Deploy**.
5. In ~60 seconds you'll get a live URL like `hari-portfolio.vercel.app`.
6. Add a custom domain in **Project → Settings → Domains** if you have one.

Every push to `main` will auto-deploy from then on.

---

## Deploying to Netlify or any Node host

The site works on any host that runs Node.js 18+.

**Build command:** `npm run build`
**Start command:** `npm run start`
**Output:** `.next/` directory

On **Netlify**: connect the GitHub repo, set the same commands, and Netlify will detect Next.js automatically.

On a **VPS** (Ubuntu, etc.):

```bash
git clone <your-repo>
cd hari-portfolio
npm install
npm run build
npm run start          # or use PM2 / systemd for production process management
```

Front it with Nginx and a real domain + SSL via Let's Encrypt and you're done.

---

## Project structure

```
hari-portfolio/
├── public/
│   └── profile.jpg                 # Profile photo (replace this)
├── src/
│   ├── app/
│   │   ├── globals.css             # Tailwind + design tokens
│   │   ├── layout.tsx              # Root layout, fonts, metadata
│   │   └── page.tsx                # Composes all sections
│   ├── components/
│   │   ├── Navbar.tsx              # Sticky nav + mobile menu
│   │   ├── Hero.tsx                # Top section with portrait + tagline
│   │   ├── About.tsx               # About + elevator pitch
│   │   ├── Skills.tsx              # Grouped skill chips
│   │   ├── Projects.tsx            # Project cards
│   │   ├── Experience.tsx          # Vertical timeline
│   │   ├── EducationAndMore.tsx    # Education + certs + soft skills
│   │   ├── Contact.tsx             # Contact + social links
│   │   └── Footer.tsx              # Footer
│   ├── data/
│   │   └── portfolio.json          # ALL portfolio content lives here
│   └── lib/
│       └── portfolio.ts            # Typed import of the JSON
├── tailwind.config.ts              # Design tokens (colors, fonts, animations)
├── next.config.js
├── tsconfig.json
├── postcss.config.js
└── package.json
```

---

## Troubleshooting

**`npm install` fails with `EACCES` or permission errors**
You're probably running an old Node. Upgrade to Node 18.17+.

**The fonts look like Times New Roman**
Your machine is blocking Google Fonts during build. Run `npm run build` on a network that allows `fonts.gstatic.com`, or swap the fonts in `src/app/layout.tsx` for local ones.

**Images don't load**
Make sure `profile.jpg` is in `/public/` (not `/public/images/`). The path is `/profile.jpg`, no folder.

**Tailwind classes do nothing**
Stop the dev server and restart it after changing `tailwind.config.ts`. Tailwind only re-reads config on restart.

**Build fails with a TypeScript error**
Read the error message — TypeScript will tell you the exact file and line. The most common cause is a missing field in `portfolio.json` that the component expects.

---

## License

This portfolio template was built for Hari Bashyal. You're free to reuse the code structure for your own portfolio.
