# Founder Site — Setup Checklist

## ✅ What's Built

- Next.js 14 app with Tailwind CSS
- Dark/light mode toggle
- Editorial design (warm, founder-centric)
- Sections: Hero, Current Projects, Build in Public, Philosophy, Contact
- Bluesky integration (reads your public posts)
- Mobile-responsive
- SEO-optimized
- Hosted on GitHub: https://github.com/bee541/founder-site

## 🎯 Pre-Deploy Checklist

Before you import to Vercel, fill in these placeholders:

### 1. Bluesky Handle
**File:** `src/components/BlueskyFeed.tsx` (line 9)
```ts
const handle = 'lisanne.bsky.social'; // ← change to your actual handle
```

### 2. Waitlist URLs
**File:** `src/data/projects.ts`
- Coming of Age → `waitlistUrl: 'https://forms.gle/...'`
- Playlist AI → `waitlistUrl: 'https://forms.gle/...'`
- Aruna → add if you have one

### 3. LinkedIn URL
**Files:** `src/components/Header.tsx`, `src/components/Footer.tsx`
- Replace `https://linkedin.com/in/yourprofile` with your actual LinkedIn

### 4. Social Handles
- Header: GitHub username (already bee541)
- Bluesky: link in header/footer

### 5. Domain DNS
After Vercel deploy:
1. Vercel will give you DNS records (CNAME or A)
2. Go to Namecheap → `lisa-launch.site` → Advanced DNS
3. Add those records
4. Wait 5–30 min → site goes live with HTTPS

### 6. Update Projects (if needed)
**File:** `src/data/projects.ts`
- Add/remove projects
- Change statuses
- Update tags, descriptions

## 🚀 Deploy

1. Go to [vercel.com/import](https://vercel.com/import)
2. Import `bee541/founder-site`
3. Click Deploy
4. Add domain `lisa-launch.site`
5. Add Vercel's DNS records at Namecheap

## 📝 Blog Posts (Optional)

To enable markdown blog:
- Add posts to `src/posts/` as `.md` files
- Create a `/blog` page that uses `getSortedPosts()` from `src/lib/posts.ts`
- (I can help with this later if you want a separate blog)

## 🎨 Design Details

- **Fonts:** Inter (body) + Playfair Display (headings)
- **Colors:** Navy (#0A0E27), Amber (#F5A623), Cream, Charcoal
- **Mode:** Dark/light toggle in header
- **Icons:** Lucide React

## Need Help?

Ask me to:
- Add more projects
- Change color palette
- Add animations
- Create blog page
- Integrate analytics (plausible/umami)
- Add newsletter signup
