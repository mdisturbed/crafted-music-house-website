# Crafted Music House - Official Website

![Deploy Status](https://github.com/mdisturbed/crafted-music-house-website/actions/workflows/deploy.yml/badge.svg)

Official website for Crafted Music House - An AI music production label creating vintage jazz, blues, and Americana through distinct artist personas.

**Live Site:** https://craftedmusichouse.com

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   ```bash
   npm install
   ```

2. Copy `.env.example` to `.env.local` and add your Gemini API key:
   ```bash
   cp .env.example .env.local
   # Edit .env.local and add your GEMINI_API_KEY
   ```

3. Run the app:
   ```bash
   npm run dev
   ```

4. Open http://localhost:3000

## Deployment

This site automatically deploys to GitHub Pages via GitHub Actions on every push to `main`.

### Manual Deployment

To deploy manually:
```bash
npm run build
# Upload the dist/ folder to your hosting provider
```

## Tech Stack

- **React 19** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Lucide React** - Icons
- **GitHub Pages** - Hosting
- **GitHub Actions** - CI/CD
