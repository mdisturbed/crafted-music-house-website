# Crafted Music House - Official Website

![Deploy Status](https://github.com/mdisturbed/crafted-music-house-website/actions/workflows/deploy.yml/badge.svg)

Official website for Crafted Music House - An AI music production label creating vintage jazz, blues, and Americana through distinct artist personas.

**Live Site:** https://craftedmusichouse.com
**Repository:** https://github.com/mdisturbed/crafted-music-house-website

---

## 🎵 Current Artist Roster

| Artist | Genre | Status |
|--------|-------|--------|
| Louis "Sunny" Boudreaux | 1940s New Orleans Jazz | ✅ Live |
| Ruby James | 1950s Chicago Vocal Jazz | ✅ Live |
| Clyde "Iron" Moss | Deep South Swamp Blues | ✅ Live |
| Ashley Wolfe | Americana Noir | ✅ Live |
| Belladonna Vale | Gothic Cabaret | ✅ Live |
| Salvatore Moretti | Crooner, Lounge Jazz | ✅ Live (Full Album) |

---

## 📦 Current Releases

**6 Active Releases:**
- Rust Bucket Glory - Clyde "Iron" Moss (Single)
- Skylarking at Midnight - Ruby James (Single)
- Front Porch Sundays - Louis "Sunny" Boudreaux (Single)
- Devil's in the Details - Clyde "Iron" Moss (Single)
- Coffee in the Clouds - Ruby James (Single)
- **After the Applause - Salvatore Moretti (Album - 10 Tracks)** 🆕

---

## 🚀 Recent Updates (January 18, 2026)

### ✅ SSL Certificate & HTTPS
- Custom domain SSL certificate provisioned via GitHub Pages
- Site accessible via HTTPS: https://craftedmusichouse.com
- Resolved Hostinger DNS conflict

### ✅ Salvatore Moretti Album Launch
- Added full 10-track album "After the Applause"
- Album displays all tracks with durations on artist profile
- Album type detection (shows "ALBUM (10 tracks)" vs "SINGLE")

### ✅ Real Audio & Streaming Integration
- All 6 MP3 audio files loaded and playable
- Real streaming platform links integrated:
  - Spotify ✅
  - Apple Music ✅
  - Amazon Music ✅
  - YouTube ✅

### ✅ Brand Assets Updated
- Official streaming platform brand logos (react-icons)
- Circle logo with transparent background
- Replaced generic icons with Spotify, Apple Music, etc. logos

### ✅ Content Updates
- Removed Ezra Blue references (artist on hold)
- Updated testimonials to use first name + last initial only
- Updated artist inquiry form with current roster
- Updated custom song occasions section

### ✅ SEO Audit Completed
- Comprehensive SEO report generated
- Current SEO score: D+ (42/100)
- Priority fixes identified (meta tags, image compression, sitemap)

---

## 🛠️ Tech Stack

- **React 19** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first styling
- **Lucide React** - Icon library (UI elements)
- **react-icons** - Brand logos (Spotify, Apple Music, etc.)
- **GitHub Pages** - Static site hosting
- **GitHub Actions** - Automated CI/CD deployment

---

## 📁 Project Structure

```
site/
├── public/
│   ├── audio/               # MP3 files for music player
│   │   ├── sunny_front-porch-sundays_audio.mp3
│   │   ├── ruby_skylarking-at-midnight_audio.mp3
│   │   ├── clyde_rust-bucket-glory_audio.mp3
│   │   ├── salvatore_after-you-leave_audio.mp3
│   │   └── ...
│   ├── images/
│   │   ├── artists/         # Artist profile pictures
│   │   └── covers/          # Album/single cover art
│   ├── logo.png             # Circle logo (no background)
│   └── CNAME                # Custom domain config
├── src/
│   ├── components/
│   │   ├── Hero.tsx         # Landing hero section
│   │   ├── ArtistRoster.tsx # Artist grid with filters
│   │   ├── ArtistProfile.tsx # Individual artist pages
│   │   ├── Discography.tsx  # Homepage releases carousel
│   │   ├── FullCatalog.tsx  # Complete catalog page
│   │   ├── MusicPlayer.tsx  # Sticky bottom player
│   │   ├── Reviews.tsx      # Testimonials section
│   │   ├── Occasions.tsx    # Custom song services
│   │   ├── Footer.tsx       # Site footer with admin toggle
│   │   └── ...
│   ├── constants.tsx        # ⭐ CONTENT DATABASE (artists, releases, socials)
│   ├── types.ts             # TypeScript interfaces
│   ├── App.tsx              # Main app with routing
│   └── index.html           # HTML entry point
├── .github/
│   └── workflows/
│       └── deploy.yml       # GitHub Actions deployment
├── DEPLOYMENT_SETUP.md      # Deployment guide
├── DNS_SETUP_GUIDE.md       # Custom domain setup
├── HOW_TO_EDIT.md           # Content editing guide
└── README.md                # This file
```

---

## 🎨 Key Features

### Album Support
- **Type System:** Releases can be `'single'` or `'album'`
- **Track Listings:** Albums display full track list with durations
- **Expandable Details:** Track numbers, titles, and durations shown inline

### Music Player
- Real audio playback for all tracks
- Sticky bottom player
- Play/pause controls
- Track metadata display

### Artist Profiles
- Individual pages for each artist
- Demo track playback
- Discography section
- Genre and description
- Streaming platform links


---

## 📝 How to Update Content

### Adding a New Artist

Edit `/src/constants.tsx`:

```typescript
export const ARTISTS: Artist[] = [
  // ... existing artists
  {
    id: '7',
    name: 'New Artist Name',
    genre: 'Genre Name',
    avatar: '/images/artists/new-artist.png',
    description: 'Artist bio...',
    demoTrack: {
      title: 'Song Title',
      artist: 'New Artist Name',
      src: '/audio/new-artist_song_audio.mp3',
      duration: '3:30',
      coverArt: '/images/covers/song-cover.png'
    }
  }
];
```

### Adding a New Release (Single)

```typescript
export const RELEASES: Release[] = [
  // ... existing releases
  {
    id: 'r7',
    title: 'Song Title',
    artist: 'Artist Name',
    coverArt: '/images/covers/song-cover.png',
    year: '2025',
    type: 'single', // Optional, defaults to single
    src: '/audio/artist_song_audio.mp3',
    links: {
      spotify: 'https://open.spotify.com/...',
      apple: 'https://music.apple.com/...',
      amazon: 'https://music.amazon.com/...',
      youtube: 'https://youtu.be/...'
    }
  }
];
```

### Adding a New Album

```typescript
{
  id: 'r7',
  title: 'Album Title',
  artist: 'Artist Name',
  coverArt: '/images/covers/album-cover.png',
  year: '2025',
  type: 'album', // Important!
  src: '/audio/artist_track1_audio.mp3', // First track for playback
  tracks: [
    { number: 1, title: 'Track 1 Name', duration: '3:30' },
    { number: 2, title: 'Track 2 Name', duration: '4:00' },
    // ... all tracks
  ],
  links: {
    spotify: 'https://open.spotify.com/album/...',
    apple: 'https://music.apple.com/album/...',
    amazon: 'https://music.amazon.com/albums/...',
    youtube: 'https://youtube.com/playlist?list=...'
  }
}
```

### Updating Streaming Links

When a new release goes live on streaming platforms, update the `links` object in `constants.tsx`.

---

## 🚀 Deployment

### Automatic Deployment
- **Trigger:** Every push to `main` branch
- **Action:** GitHub Actions builds and deploys to GitHub Pages
- **URL:** https://craftedmusichouse.com (custom domain)
- **Build Time:** ~2-3 minutes

### Manual Deployment

```bash
npm run build
# Uploads dist/ folder to GitHub Pages
```

### Deployment Checklist
- [ ] Update `constants.tsx` with new content
- [ ] Add audio files to `public/audio/`
- [ ] Add cover art to `public/images/covers/`
- [ ] Commit and push to `main`
- [ ] Verify deployment on https://craftedmusichouse.com

---

## 💻 Local Development

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Setup

1. **Clone repository:**
   ```bash
   git clone https://github.com/mdisturbed/crafted-music-house-website.git
   cd crafted-music-house-website
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start dev server:**
   ```bash
   npm run dev
   ```

4. **Open browser:**
   ```
   http://localhost:5173
   ```

### Development Commands

```bash
npm run dev          # Start dev server with hot reload
npm run build        # Build for production
npm run preview      # Preview production build locally
npm run lint         # Run ESLint
```

---

## 🎯 Admin Features

### Access Admin Mode
1. Scroll to footer
2. Click lock icon (🔒) next to copyright
3. Enter password: `crafted2025` or `admin`
4. Lock icon changes to unlock (🔓)

### Admin Capabilities
- **Artist Profiles:** Edit bio, upload images, manage discography
- **Catalog Management:** Add, edit, delete releases
- **Image Management:** Upload or link artist photos and cover art

**Note:** Admin changes are session-only. For permanent updates, edit `constants.tsx`.

---

## 🔧 Configuration Files

### Custom Domain (CNAME)
File: `public/CNAME`
```
craftedmusichouse.com
```

### GitHub Actions Deployment
File: `.github/workflows/deploy.yml`
- Builds React app on push to `main`
- Deploys to `gh-pages` branch
- Configured for custom domain

### TypeScript Config
- `tsconfig.json` - TypeScript compiler options
- `tsconfig.node.json` - Node-specific config

### Vite Config
- `vite.config.ts` - Build configuration
- Base path set to `/` for custom domain

---

## 📊 SEO Status & Recommendations

### Current Status
- **Score:** D+ (42/100)
- **HTTPS:** ✅ Enabled
- **SSL Certificate:** ✅ Active
- **Custom Domain:** ✅ craftedmusichouse.com

### Priority Fixes Needed
1. **Meta Description:** Add to `index.html`
2. **Open Graph Tags:** For social sharing
3. **Image Optimization:** Compress images (currently 5-19 MB each)
4. **XML Sitemap:** Create `public/sitemap.xml`
5. **robots.txt:** Create `public/robots.txt`
6. **Favicon:** Add favicon files

### Future Enhancements
- Schema.org markup for music/artists
- Server-side rendering (migrate to Next.js)
- Blog/content section for SEO
- WebP image format conversion

See SEO audit report for full details.

---

## 🎵 Audio File Requirements

### Format
- **File Type:** MP3
- **Naming Convention:** `{artist-slug}_{song-slug}_audio.mp3`
- **Location:** `public/audio/`

### Examples
```
sunny_front-porch-sundays_audio.mp3
ruby_skylarking-at-midnight_audio.mp3
clyde_rust-bucket-glory_audio.mp3
salvatore_after-you-leave_audio.mp3
```

### Best Practices
- Keep files under 10 MB for fast loading
- Use consistent bitrate (192kbps recommended)
- Ensure mono compatibility for vintage tracks

---

## 🖼️ Image Requirements

### Artist Avatars
- **Size:** 800x1200px (3:4 aspect ratio)
- **Format:** PNG or JPG
- **Location:** `public/images/artists/`
- **Naming:** `{artist-slug}.png`

### Cover Art
- **Size:** 3000x3000px (1:1 aspect ratio)
- **Format:** PNG
- **Location:** `public/images/covers/`
- **Naming:** `{song-slug}.png`

### Logo
- **Current:** Circle logo with transparent background
- **File:** `public/logo.png`
- **Format:** PNG with transparency

---

## 🔗 Important Links

- **Live Site:** https://craftedmusichouse.com
- **GitHub Repository:** https://github.com/mdisturbed/crafted-music-house-website
- **GitHub Pages Settings:** https://github.com/mdisturbed/crafted-music-house-website/settings/pages
- **CMH YouTube:** https://www.youtube.com/@CraftedMusicHouse
- **CMH Instagram:** https://www.instagram.com/craftedmusichouse
- **CMH TikTok:** https://www.tiktok.com/@craftedmusichouse
- **CMH Twitter:** https://twitter.com/craftedmusichs

---

## 📋 Changelog

### January 18, 2026
- ✅ SSL certificate provisioned and HTTPS enabled
- ✅ Added Salvatore Moretti's "After the Applause" album (10 tracks)
- ✅ Implemented album type with full track listing display
- ✅ Added real audio files for all 6 releases
- ✅ Integrated real streaming platform links
- ✅ Updated to official brand logos (Spotify, Apple Music, etc.)
- ✅ Replaced logo with circle version (transparent background)
- ✅ Removed Ezra Blue references
- ✅ Updated testimonials to first name + last initial only
- ✅ SEO audit completed with actionable recommendations

### January 17, 2026
- ✅ Initial GitHub Pages deployment
- ✅ Custom domain configured (craftedmusichouse.com)
- ✅ DNS records set up
- ✅ Added 6 artists to roster
- ✅ Added 5 releases to catalog

---

## 🤝 Contributing

This is a private repository for Crafted Music House. For questions or suggestions, contact the CMH team.

---

## 📄 License

© 2025 Crafted Music House. All rights reserved.

---

**Last Updated:** January 18, 2026
**Maintained By:** CMH Production Team
