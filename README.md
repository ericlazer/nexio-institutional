# Nexio Institutional

Institutional Bitcoin Credit Infrastructure - Landing Page

## Quick Start

```bash
# Install dependencies
npm install

# Development (watch mode)
npm run dev

# Build for production
npm run build

# Preview locally
npm run preview
```

## Deployment

### Vercel (Recommended)
1. Push to GitHub/GitLab
2. Import project in Vercel
3. Deploy automatically - config is in `vercel.json`

### Netlify
1. Push to GitHub/GitLab
2. Import project in Netlify
3. Deploy automatically - config is in `netlify.toml`

### Cloudflare Pages
1. Push to GitHub/GitLab
2. Create new Pages project
3. Build command: `npm run build`
4. Output directory: `.` (root)

### Manual/Static Hosting
```bash
npm install
npm run build
# Upload entire directory to your static host
```

## Project Structure

```
nexio-institutional/
├── index.html          # Main HTML file
├── src/
│   └── input.css       # Tailwind source CSS
├── dist/
│   └── output.css      # Compiled CSS (generated)
├── tailwind.config.js  # Tailwind configuration
├── package.json        # Dependencies & scripts
├── vercel.json         # Vercel deployment config
├── netlify.toml        # Netlify deployment config
├── robots.txt          # Search engine config
├── sitemap.xml         # Sitemap for SEO
└── favicon.svg         # Site favicon
```

## Pre-Deployment Checklist

- [ ] Update `canonical` URL in index.html
- [ ] Add your OG image (`og-card.jpg`) - 1200x630px recommended
- [ ] Generate PNG favicons (favicon-16x16.png, favicon-32x32.png, apple-touch-icon.png)
- [ ] Update sitemap.xml with your domain
- [ ] Update robots.txt sitemap URL
- [ ] Uncomment and configure analytics (Plausible recommended)
- [ ] Test on mobile devices
- [ ] Run Lighthouse audit

## Assets Needed

1. **OG Card** (`og-card.jpg`)
   - Size: 1200x630px
   - Used for social media previews

2. **Favicons**
   - `favicon-16x16.png`
   - `favicon-32x32.png`
   - `apple-touch-icon.png` (180x180px)
   - Generate at: https://realfavicongenerator.net/

## Tech Stack

- **Tailwind CSS** - Utility-first CSS
- **GSAP** - Animations & ScrollTrigger
- **Lenis** - Smooth scroll
- **Fontshare** - Clash Display + General Sans fonts

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## License

UNLICENSED - Proprietary

---

© 2025 Nexio
