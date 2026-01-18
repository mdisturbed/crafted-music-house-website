# How to Edit & Build Out "Crafted Music House"

Welcome to the Crafted Music House codebase! This guide will help you customize the content, style, and functionality of your new AI record label website.

## 1. Project Structure Overview

*   **`index.html`**: The main entry point. Contains the **Tailwind CSS configuration** (colors, fonts, animations) and loads external fonts.
*   **`constants.tsx`**: **IMPORTANT**. This file acts as your "database." It contains the initial lists for **Artists**, **Releases**, and **Social Media links**.
*   **`App.tsx`**: Handles navigation (routing) between pages (Home, Artist Profiles, Catalog, etc.) and manages the global state (music player, admin mode).
*   **`components/`**: Contains all the visual building blocks of the site.
    *   `Hero.tsx`: The main landing section with the big headline.
    *   `ArtistRoster.tsx`: The grid of artists on the homepage.
    *   `MusicPlayer.tsx`: The sticky audio player at the bottom.
    *   `Logo.tsx`: Handles displaying your logo.

## 2. Basic Customization

### Changing the Logo
1.  Place your logo image file named `logo.png` in the **public/root** folder of your project.
2.  The `components/Logo.tsx` file is already set up to look for this specific file.

### Changing Colors & Fonts
The visual theme is defined in `index.html` inside the `<script>` tag where Tailwind is configured.

*   **Colors**: Look for `colors: { 'cmh-cream': ... }`. You can change the hex codes here to alter the site's palette globally.
    *   `cmh-cream`: Backgrounds
    *   `cmh-mahogany`: Primary Text / Dark Accents
    *   `cmh-gold`: Highlights / Buttons
*   **Fonts**: Defined in the `fontFamily` section. We are currently using 'Inter' (sans) and 'Playfair Display' (serif).

## 3. Managing Content (The "Database")

To permanently add artists or releases, you should edit **`constants.tsx`**.

### Adding an Artist
Find the `ARTISTS` array in `constants.tsx` and add a new object:

```typescript
{
  id: '5',
  name: 'New Artist Name',
  genre: 'Genre Name',
  avatar: 'URL_TO_IMAGE',
  description: 'Artist bio...',
  demoTrack: {
    title: 'Song Title',
    artist: 'New Artist Name',
    src: 'URL_TO_MP3_FILE', // Link to your audio file
    duration: '0:30',
    coverArt: 'URL_TO_COVER_ART'
  }
}
```

### Adding a Release
Find the `RELEASES` array in `constants.tsx`:

```typescript
{
  id: 'r5',
  title: 'Album Title',
  artist: 'Artist Name',
  coverArt: 'URL_TO_IMAGE',
  year: '2025',
  links: { 
    spotify: 'https://spotify.com/...', 
    apple: 'https://apple.com/...' 
    // leave empty strings for platforms you don't have yet
  }
}
```

## 4. The "Secret" Admin Mode

The site comes with a built-in Client-Side Admin Mode for quick edits and previews.

1.  **How to Access**: Scroll to the very bottom of the website (Footer).
2.  **Click the Lock**: Click the small lock icon 🔒 next to the copyright text.
3.  **Password**: Enter **`crafted2025`** or **`admin`**.

### Changing the Password
To change the password, open **`App.tsx`** and search for the `handleAdminLogin` function (around line 60).
Update the string inside the condition:
```typescript
const handleAdminLogin = (password: string) => {
  // Change 'your_new_password' to whatever you want
  if (password === 'your_new_password') { 
    // ...
  }
  // ...
};
```

### What Admin Mode Can Do:
*   **Artist Profiles**: When logged in, navigate to an Artist Profile. You will see buttons to **Edit Bio**, **Upload/Change Photos**, and **Add/Edit Releases** specific to that artist.
*   **Full Catalog**: Navigate to the "Catalog" page (via the "View Full Discography" link on the homepage). You can add, edit, or delete releases here.

*Note: Since this is currently a static frontend site, Admin edits are "local" to the session or React state. For permanent changes, you must update the code in `constants.tsx`.*

## 5. Adding Audio

The site uses standard HTML5 audio. 

1.  Upload your MP3 files to a hosting provider (like AWS S3, Cloudinary, or even a public folder in your project).
2.  Copy the URL (e.g., `https://mysite.com/music/song1.mp3`).
3.  Paste this URL into the `src` field of a `Track` object in `constants.tsx`.

## 6. Advanced: Changing Page Text

*   **Homepage Headlines**: Edit `components/Hero.tsx`.
*   **About Section**: Edit `components/About.tsx`.
*   **Occasions/Services**: Edit `components/Occasions.tsx`.
*   **Legal Pages**: Edit `components/Legal.tsx`.

## 7. Deployment

This project is a React Single Page Application (SPA).
1.  Run `npm run build` (or your build command).
2.  Upload the contents of the `dist` or `build` folder to any static host like **Vercel**, **Netlify**, or **GitHub Pages**.
