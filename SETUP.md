# Zetstuclothing Landing Page - Quick Setup Guide

## 🚀 What's Been Built

A responsive, mobile-first landing page for zetstuclothing featuring:

- Modern navigation with mobile menu
- Promotional section with discount offer
- Social media integration
- Dark mode support
- Fully typed with TypeScript

## 📦 Project Status

✅ **Development Server**: Running on `http://localhost:3000`
✅ **Build Status**: Successful (no errors)
✅ **Components**: All created and integrated

## 🎯 Next Steps

### 1. Add Your Promotional Image

Edit `.env.local` (create if doesn't exist):

```env
NEXT_PUBLIC_HERO_IMAGE_URL=https://your-cdn.com/promo-banner.jpg
```

### 2. Update Social Media Links

Edit `src/components/PromoCard.tsx` - update these URLs:

```typescript
Facebook: "https://facebook.com/zetstuclothing";
Instagram: "https://instagram.com/zetstuclothing";
TikTok: "https://tiktok.com/@zetstuclothing";
```

### 3. Customize Navigation Links

Edit `src/components/Header.tsx` - update href attributes:

```typescript
href = "#home"; // TRANG CHỦ
href = "#products"; // SẢN PHẨM
href = "#about"; // VỀ CHÚNG TỎI
```

### 4. Update Promotional Dates

Edit `src/components/PromoCard.tsx`:

```typescript
const countdownDate = new Date("2026-05-01").getTime();
```

## 🛠️ Common Customizations

### Change 10% OFF amount

Find `<span className="text-red-500">10% OFF</span>` in PromoCard.tsx

### Update tagline

Find `'"Simply Street. Purely You."'` and replace with your own

### Change button text

Replace "Tải Ðay" with your CTA text

### Modify colors

Update Tailwind color classes (e.g., `text-red-500` for the discount)

## 📱 Testing on Mobile

The page is fully mobile-responsive. Test on:

- Mobile devices (iOS/Android)
- Tablet sizes
- Desktop (responsive resize)
- Dark mode toggle in browser

## 🚢 Deployment Options

### Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Other Platforms

- Netlify: `npm run build` then deploy `out/` folder
- Docker: Create Dockerfile with Node.js
- Firebase/AWS: Follow platform-specific Next.js guides

## 📝 Environment Variables

**Development**: Create `.env.local`

```env
NEXT_PUBLIC_HERO_IMAGE_URL=https://example.com/image.jpg
```

**Production**: Set in your deployment platform's dashboard

## 🔗 Important Files

- `src/app/page.tsx` - Main page
- `src/components/Header.tsx` - Navigation
- `src/components/PromoCard.tsx` - Hero section (main customization point)
- `src/components/Footer.tsx` - Footer
- `tailwind.config.ts` - Theme configuration
- `.env.example` - Environment variables template

## ✨ Features Already Implemented

✓ Mobile-first responsive design
✓ Dark/light mode support
✓ Hamburger menu for mobile
✓ Social media icon buttons
✓ Optimized performance with Next.js
✓ TypeScript type safety
✓ Tailwind CSS styling
✓ SEO-friendly structure

## 🆘 Troubleshooting

**Issue**: Images not showing

- Add URL to `.env.local` as `NEXT_PUBLIC_HERO_IMAGE_URL`
- Ensure URL is accessible and returns an image

**Issue**: Styles look off

- Clear browser cache
- Restart dev server: `npm run dev`
- Check that Tailwind is properly configured

**Issue**: Mobile menu not working

- Check that component is using `'use client'` directive
- Verify useState hook is imported

## 📞 Support

For more info:

- Next.js docs: https://nextjs.org/docs
- Tailwind CSS: https://tailwindcss.com/docs
- TypeScript: https://www.typescriptlang.org/docs/

---

**Server Ready** 🎉 - Visit http://localhost:3000 to see your landing page live!
