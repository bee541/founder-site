# Lisa — Founder Site

Modern editorial-style founder website built with Next.js 14, featuring dark mode, Bluesky integration, and a build-in-public ethos.

## ✨ Features

- **Editorial design** — Clean typography, generous whitespace, warm aesthetic
- **Dark/light mode** — Seamless theme switching with `next-themes`
- **Build in Public** — Bluesky feed integration + "Currently Building" section
- **Project showcase** — Modular cards with status, waitlist links, tags
- **Philosophy section** — Founder worldview and principles
- **SEO optimized** — Metadata, Open Graph, Twitter cards
- **Mobile-first** — Fully responsive
- **Vercel-ready** — One-click deploy

## 🚀 Quick Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/bee541/founder-site)

1. Click the button above (requires GitHub account)
2. Login to Vercel
3. Click Deploy
4. Add custom domain `lisa-launch.site` in project settings
5. Done

## 🛠️ Local Development

```bash
git clone https://github.com/bee541/founder-site.git
cd founder-site
npm install
npm run dev
```

Open http://localhost:3000

## 📁 Structure

```
src/
  app/
    layout.tsx    # Root layout with theme provider
    page.tsx      # Homepage (all sections)
    globals.css   # Tailwind + custom styles
  components/
    Header.tsx        # Navigation + theme toggle
    Footer.tsx        # Footer + social links
    ProjectCard.tsx   # Reusable project card
    BlueskyFeed.tsx   # Bluesky API integration
    ThemeProvider.tsx # Dark mode context
  data/
    projects.ts      # Project definitions (edit here!)
  lib/
    posts.ts         # Markdown blog utilities
public/
  lisa.jpg           # Founder photo
```

## 🎨 Customize Content

**Projects** → edit `src/data/projects.ts`

**Copy** → edit sections in `src/app/page.tsx`

**Bluesky handle** → set `handle` in `src/components/BlueskyFeed.tsx` (line 9)

**Social links** → update URLs in `Header.tsx` and `Footer.tsx`

**Email** → update `mailto:` links in layout/page

## 🎯 Project Cards

Each project card shows:
- Name + description
- Status badge (active, poc, archived)
- Tags (tech stack / category)
- Waitlist link (if provided)
- Live link (if provided)

Status types:
- `active` — green badge
- `poc` — blue badge
- `archived` — muted border

## 🌙 Dark Mode

Uses `next-themes` with `class` strategy. Toggle in header.

Color palette (via Tailwind):
- `#0A0E27` (navy)
- `#1A1F3A` (charcoal)
- `#F5A623` (amber)

## 📝 Blog Support

Markdown posts go in `src/posts/`. Filename format: `YYYY-MM-DD-slug.md`

Frontmatter:
```yaml
---
title: "Post Title"
date: "2026-05-13"
excerpt: "Short summary..."
---
```

To display blog posts on the site, create a `/blog` page using `src/lib/posts.ts`.

## 📦 Dependencies

- next@14
- react@18
- @atproto/api — Bluesky API client
- next-themes — dark mode
- lucide-react — icons
- gray-matter — markdown parsing
- remark + remark-html — markdown → HTML

## 🎨 Design Philosophy

- **Typography:** Inter (sans) + Playfair Display (serif)
- **Space:** Generous padding, breathing room
- **Color:** Minimal palette, accent-amber only
- **Motion:** Subtle hover states, fade-ins
- **Feel:** Editorial, warm, founder-focused (not corporate)

## 📍 Live Site

Currently deployed at: https://lisa-launch.site (once domain connected)

---

Built with curiosity by Lisa.
