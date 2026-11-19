# ayush987goyal.dev

Minimalist personal home for **Ayush Goyal** (Staff Software Engineer at Google, WCA `2014GOYA01`).

## Stack

- **Framework:** Astro + TypeScript (strict)
- **Styling:** Tailwind CSS v4 + self-hosted `Newsreader Variable` (optical-size serif), `Inter Variable`, & `JetBrains Mono Variable`
- **Analytics:** Vercel Web Analytics (`@vercel/analytics/astro`), with optional Cloudflare Web Analytics via `PUBLIC_CF_ANALYTICS_TOKEN`
- **Live Data:** Build-time fetch from the official WCA REST API (`2014GOYA01`) with automatic fallback to `src/data/wca-snapshot.json`
- **Writing:** MDX Content Collection ready under `src/content/writing/` (with `/writing` and `/rss.xml`)

## Local Development

```bash
npm install
npm run dev
```

Production build check:

```bash
npm run build
npm run preview
```

## Deploying to Vercel & Migrating Squarespace Domains DNS

Your domain is currently registered on **Squarespace Domains** with custom nameservers delegated to **Netlify DNS** (`dns1.p02.nsone.net` – `dns4.p02.nsone.net`). Moving to **Vercel** consolidates your personal site with your existing Vercel apps and eliminates the extra DNS hop:

1. **Deploy on Vercel**
   - Push this repo to GitHub and import it in Vercel (Astro is auto-detected).
   - Enable **Analytics** in the Vercel project dashboard (`@vercel/analytics/astro` is already wired in `src/layouts/BaseLayout.astro`).
   - Add `ayush987goyal.dev` (and `www.ayush987goyal.dev` redirecting to apex) under **Project Settings → Domains**.

2. **Switch Squarespace Nameservers & DNS**
   - Open **Squarespace Domains → `ayush987goyal.dev` → DNS → Domain Nameservers**.
   - Switch from Netlify custom nameservers back to **Use Squarespace nameservers**.
   - In **DNS Settings → Custom Records**, add the exact records Vercel displays (standard values):
     - `A` record: Host `@` → `76.76.21.21`
     - `CNAME` record: Host `www` → `cname.vercel-dns.com`
   - Wait for SSL provisioning (usually 5–15 minutes).

3. **Free Custom Email Forwarding (Built into Squarespace Domains)**
   - Go to **Squarespace Domains → `ayush987goyal.dev` → Email → Email Forwarding**.
   - Add alias: `hi@ayush987goyal.dev` → `ayush987goyal@gmail.com` (free, up to 100 aliases, automatically sets MX records).
   - *(Prefer to use Gmail directly? Update `PROFILE.email` in `src/data/profile.ts`.)*

4. **Optional: Auto-Refresh WCA Stats**
   - In Vercel **Settings → Git → Deploy Hooks**, create a hook on `main`.
   - Add it as a GitHub repo secret named `VERCEL_DEPLOY_HOOK_URL`. The monthly workflow in `.github/workflows/refresh-wca.yml` will automatically rebuild the site to pick up any new WCA results.

## Adding Writing Later

Drop any `.md` or `.mdx` file into `src/content/writing/` with frontmatter:

```yaml
---
title: "My Essay Title"
description: "One-line summary."
publishedAt: 2026-11-20
draft: false
---
```

The `Writing` link in the navigation bar and homepage section will appear automatically.
