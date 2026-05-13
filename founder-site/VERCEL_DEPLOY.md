# Founder Site — Deployment Guide

## What's Built

Full Next.js 14 site with:
- Dark/light mode toggle
- Editorial, warm aesthetic (Tailwind CSS)
- Responsive design (mobile-first)
- SEO optimized (metadata, Open Graph)
- Current Projects + Ideas Lab
- Build in Public (Bluesky integration)
- Philosophy section
- Contact with social links
- Image optimization (Next.js Image)
- Deploy-ready for Vercel

## Tech Stack

- Next.js 14 (App Router)
- Tailwind CSS
- next-themes (dark mode)
- Lucide React (icons)
- @atproto/api (Bluesky)
- TypeScript

## Deploy to Vercel (2 minutes)

1. **Go to** [vercel.com/import](https://vercel.com/import)
2. **Select** "Continue with GitHub" → authenticate
3. **Import Project** → "From Git Repository" → GitHub
4. **Choose repo:** `founder-site` (bee541)
5. **Click Deploy** (auto-detects Next.js)
6. Wait ~30 seconds — live URL appears

## Connect Custom Domain

1. In Vercel dashboard → your project → Settings → Domains
2. Add: `lisa-launch.site`
3. Vercel shows DNS records (usually a CNAME or A records)
4. Go to your domain registrar (Namecheap/etc.) → DNS settings
5. Add those records exactly
6. Wait 5–30 minutes → SSL auto-provisions

## Environment Variables (optional)

Currently Bluesky integration is client-side with placeholder handle. To use your own Bluesky handle:

- No env vars needed for public posts (read-only)
- If you add auth later, you'd add `BLUESKY_HANDLE` and `BLUESKY_APP_PASSWORD`

## Local Development

```bash
cd /root/.openclaw/workspace/founder-site
npm run dev
# Visit http://localhost:3000
```

## Edit Content

- Projects: `src/data/projects.ts`
- Copy: `src/app/page.tsx`
- Styles: Tailwind classes + `app/globals.css`

## Next Steps

1. Add your Bluesky handle to BlueskyFeed.tsx (line 10)
2. Update waitlist URLs in `projects.ts`
3. Add LinkedIn URL in Footer/Header
4. Add real blog posts later (markdown support can be added)
