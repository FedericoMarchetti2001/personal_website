# Deployment Guide

## Prerequisites

- Node.js 18+ installed
- GitHub account
- Vercel account (recommended) or other hosting

## Quick Deploy to Vercel

### Method 1: GitHub Integration (Recommended)

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/YOUR_USERNAME/personal-website.git
   git push -u origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New" → "Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js settings
   - Click "Deploy"

3. **Configure Domain** (Optional)
   - Go to Project Settings → Domains
   - Add your custom domain
   - Update DNS records as instructed

### Method 2: Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
vercel

# Deploy to production
vercel --prod
```

## Deploy to Other Platforms

### Netlify

1. **Build Command**: `npm run build`
2. **Publish Directory**: `.next`
3. **Environment Variables**: Add any required env vars

```bash
# Install Netlify CLI
npm i -g netlify-cli

# Deploy
netlify deploy --prod
```

### Azure Static Web Apps

1. Install Azure CLI
2. Create resource:
   ```bash
   az staticwebapp create \
     --name personal-website \
     --resource-group my-rg \
     --source https://github.com/YOUR_USERNAME/personal-website \
     --location "East US" \
     --branch main \
     --app-location "/" \
     --output-location ".next"
   ```

### Docker

Create `Dockerfile`:

```dockerfile
FROM node:18-alpine AS base

# Install dependencies only when needed
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN npm run build

# Production image
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000

CMD ["node", "server.js"]
```

Build and run:
```bash
docker build -t personal-website .
docker run -p 3000:3000 personal-website
```

## Environment Variables

### Required for Production

None required for basic functionality.

### Optional

```env
# Email Service (for contact form)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASSWORD=your-app-password

# Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_VERCEL_ANALYTICS_ID=xxx

# Site URL
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

## Pre-Deployment Checklist

- [ ] Update `src/data/resume.json` with your information
- [ ] Replace placeholder images in `/public/assets/`
- [ ] Update social links in components
- [ ] Add your blog posts to `src/content/blog/`
- [ ] Add your projects to `src/content/projects/`
- [ ] Update metadata in `src/app/layout.tsx`
- [ ] Update sitemap base URL in `src/app/sitemap.ts`
- [ ] Test build locally: `npm run build && npm start`
- [ ] Check for errors: `npm run build`
- [ ] Test on mobile devices
- [ ] Verify dark mode works correctly

## Performance Optimization

### Enable Image Optimization

Add to `next.config.js`:

```javascript
module.exports = {
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  },
};
```

### Enable Compression

Vercel handles this automatically. For other platforms:

```javascript
// next.config.js
module.exports = {
  compress: true,
};
```

### Analytics

Add Vercel Analytics:

```bash
npm install @vercel/analytics
```

```tsx
// src/app/layout.tsx
import { Analytics } from '@vercel/analytics/react';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
```

## Monitoring

### Vercel Analytics

- Automatically enabled on Vercel
- View in Vercel Dashboard

### Google Analytics

1. Get tracking ID from Google Analytics
2. Add to `.env.local`:
   ```
   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
   ```
3. Add tracking code to layout

### Error Tracking (Sentry)

```bash
npm install @sentry/nextjs
```

Configure in `sentry.config.js`.

## Custom Domain

### Vercel

1. Go to Project Settings → Domains
2. Add domain
3. Update DNS:
   ```
   Type: A
   Name: @
   Value: 76.76.21.21

   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```

### SSL Certificate

- Vercel: Automatic (Let's Encrypt)
- Netlify: Automatic (Let's Encrypt)
- Other: Configure manually

## Continuous Deployment

### GitHub Actions

Automatically deploys on push:

```yaml
# .github/workflows/deploy.yml
name: Deploy to Production

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run build
      - uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.ORG_ID }}
          vercel-project-id: ${{ secrets.PROJECT_ID }}
          vercel-args: '--prod'
```

## Troubleshooting

### Build Fails

```bash
# Clear cache
rm -rf .next node_modules
npm install
npm run build
```

### Images Not Loading

- Ensure images are in `/public/` directory
- Check `next.config.js` for image domains
- Verify file paths are correct

### 404 on Refresh

- Ensure hosting platform supports Next.js rewrites
- Check `vercel.json` or hosting config

## Support

For issues:
- Check [Next.js Documentation](https://nextjs.org/docs)
- Open an issue on GitHub
- Contact: federico.marchetti@example.com
