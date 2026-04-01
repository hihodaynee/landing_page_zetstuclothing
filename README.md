# Zetstuclothing Landing Page

A modern, mobile-first landing page built with Next.js 16, TypeScript, and Tailwind CSS for the zetstuclothing brand.

## Features

✨ **Mobile-First Design** - Optimized for mobile devices with responsive layout
📱 **Responsive Layout** - Works seamlessly on all screen sizes (mobile, tablet, desktop)
🌙 **Dark Mode Support** - Toggle between light and dark themes
⚡ **Fast Performance** - Built with Next.js App Router and Turbopack for optimal speed
🎨 **Modern UI** - Clean, minimalist design with smooth animations
🔗 **External Media Support** - Images and videos are loaded via URLs (configurable)

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Install dependencies (if not already installed):

```bash
npm install
```

2. Set up environment variables (optional):

```bash
cp .env.example .env.local
```

Then edit `.env.local` to add your promotional image URL:

```env
NEXT_PUBLIC_HERO_IMAGE_URL=https://your-image-url.com/image.jpg
```

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the page.

### Production Build

Build for production:

```bash
npm run build
npm run start
```

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles
├── components/
│   ├── Header.tsx          # Navigation header with mobile menu
│   ├── PromoCard.tsx       # Main promotional/hero section
│   └── Footer.tsx          # Footer with links and info
```

## Components

### Header

- Responsive navigation with mobile hamburger menu
- Logo and navigation links (TRANG CHỦ, SẢN PHẨM, VỀ CHÚNG TỎI)
- Language selector (Tiếng Việt - Việt Nam)
- Fixed header with backdrop blur

### PromoCard

- Promotional banner with showcase area
- Date/time countdown display (01/05/2026)
- 10% OFF discount offer in prominent red text
- Call-to-action button ("Tải Ðay")
- Tagline: "Simply Street. Purely You."
- Social media links (Facebook, Instagram, TikTok)
- Collection teaser information
- Support for background image via environment variable

### Footer

- Language and location information
- Collection status and tagline
- Footer links (Privacy, Terms, Contact)
- Copyright information

## Customization

### Update Social Media Links

Edit `src/components/PromoCard.tsx` and update the social media URLs:

```typescript
<a href="https://your-facebook-url" target="_blank" rel="noopener noreferrer">
  {/* Facebook link */}
</a>
```

### Change Promotional Image

Add your image URL to `.env.local`:

```env
NEXT_PUBLIC_HERO_IMAGE_URL=https://your-image-url.com/banner.jpg
```

### Update Content

- **Navigation links**: Edit hover links and hrefs in `src/components/Header.tsx`
- **Promotional text**: Edit discount offer, tagline in `src/components/PromoCard.tsx`
- **Footer content**: Edit `src/components/Footer.tsx`
- **Countdown date**: Update date in `src/components/PromoCard.tsx`:
  ```typescript
  const countdownDate = new Date("2026-05-01").getTime();
  ```

### Styling

The project uses Tailwind CSS. All components support dark mode via the `dark:` prefix.

- Global styles: `src/app/globals.css`
- Theme config: `tailwind.config.ts`
- Individual components use inline Tailwind classes

## Technologies Used

- **Next.js 16** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **React** - UI library
- **ESLint** - Code quality checking

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Tips

1. Use optimized image URLs (WebP format recommended)
2. For videos, use streaming services or CDNs
3. Components benefit from Next.js automatic code splitting
4. Images are lazy-loaded by Next.js

## License

© 2026 zetstuclothing. All rights reserved.
