import React from 'react';
import { Artist, Release, SocialLink } from './types';
import { Instagram, Twitter, Youtube, Music } from 'lucide-react';

// Using a free sample audio for demo purposes
const DEMO_AUDIO = "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3";

export const ARTISTS: Artist[] = [
  {
    id: '1',
    name: 'Louis "Sunny" Boudreaux',
    genre: '1940s New Orleans Jazz',
    avatar: 'https://images.unsplash.com/photo-1524779709304-40b5a3560c60?q=80&w=1000&auto=format&fit=crop', // Trumpet/Jazz vibe
    description: 'The golden trumpet of the Quarter. Sunny brings the warmth of 1940s New Orleans to life with soulful brass and tobacco-stained vocals.',
    demoTrack: {
      title: 'Bourbon Street Lullaby',
      artist: 'Louis "Sunny" Boudreaux',
      src: DEMO_AUDIO,
      duration: '0:15',
      coverArt: 'https://images.unsplash.com/photo-1511192336575-5a79af67a629?q=80&w=1000&auto=format&fit=crop'
    }
  },
  {
    id: '2',
    name: 'Ruby James',
    genre: '1950s Chicago Vocal Jazz',
    avatar: 'https://images.unsplash.com/photo-1516280440614-6697288d5d38?q=80&w=1000&auto=format&fit=crop', // Microphone/Singer vibe
    description: 'Velvet vocals from the Windy City. Ruby evokes the smoky glamour of 1950s supper clubs with high-contrast elegance.',
    demoTrack: {
      title: 'Midnight in the Loop',
      artist: 'Ruby James',
      src: DEMO_AUDIO,
      duration: '0:15',
      coverArt: 'https://images.unsplash.com/photo-1523906630-eb416174a6eb?q=80&w=1000&auto=format&fit=crop'
    }
  },
  {
    id: '3',
    name: 'Clyde "Iron" Moss',
    genre: 'Deep South Swamp Blues',
    avatar: 'https://images.unsplash.com/photo-1444530495635-029990f82ce8?q=80&w=1000&auto=format&fit=crop', // Guitar/Rough vibe
    description: 'Raw, gritty, and real. Clyde channels the spirits of the delta with rusted guitar strings and stories carved from the earth.',
    demoTrack: {
      title: 'Rusty Chains',
      artist: 'Clyde "Iron" Moss',
      src: DEMO_AUDIO,
      duration: '0:15',
      coverArt: 'https://images.unsplash.com/photo-1485627658391-1365e4e0dbfe?q=80&w=1000&auto=format&fit=crop'
    }
  },
  {
    id: '4',
    name: 'Ezra Blue',
    genre: '70s Soft Rock',
    avatar: 'https://images.unsplash.com/photo-1493225255756-d9584f8606e9?q=80&w=1000&auto=format&fit=crop', // Surfer/Chill vibe
    description: 'Sun-bleached melodies and analog warmth. Ezra brings the breezy, open-road freedom of 1970s California.',
    demoTrack: {
      title: 'Pacific Highway',
      artist: 'Ezra Blue',
      src: DEMO_AUDIO,
      duration: '0:15',
      coverArt: 'https://images.unsplash.com/photo-1465929639680-64ee080deb3e?q=80&w=1000&auto=format&fit=crop'
    }
  },
  {
    id: '5',
    name: 'Silas Vane',
    genre: 'Neon Noir Synthwave',
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1000&auto=format&fit=crop', // Moody/Dark
    description: 'A shadow in the digital rain. Silas crafts cinematic soundscapes that blur the line between 80s nostalgia and a dystopian future.',
    demoTrack: {
      title: 'Night City Protocol',
      artist: 'Silas Vane',
      src: DEMO_AUDIO,
      duration: '0:15',
      coverArt: 'https://images.unsplash.com/photo-1555680202-c86f0e12f086?q=80&w=1000&auto=format&fit=crop'
    }
  },
  {
    id: '6',
    name: 'Echo & The Oracle',
    genre: 'Ethereal Dream Pop',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000&auto=format&fit=crop', // Ethereal/Mystic
    description: 'Floating vocals meeting algorithmic harmonies. Echo & The Oracle weave tapestries of sound that feel like half-remembered dreams.',
    demoTrack: {
      title: 'Stardust Memories',
      artist: 'Echo & The Oracle',
      src: DEMO_AUDIO,
      duration: '0:15',
      coverArt: 'https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?q=80&w=1000&auto=format&fit=crop'
    }
  },
  {
    id: '7',
    name: 'Jaxon Bolt',
    genre: 'Future Funk',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1000&auto=format&fit=crop', // Cool/Energetic
    description: 'High energy, infectious grooves, and digital soul. Jaxon brings the party from the year 3000 back to the present day.',
    demoTrack: {
      title: 'Electric Avenue 2.0',
      artist: 'Jaxon Bolt',
      src: DEMO_AUDIO,
      duration: '0:15',
      coverArt: 'https://images.unsplash.com/photo-1496360547148-d3493e803c68?q=80&w=1000&auto=format&fit=crop'
    }
  }
];

export const RELEASES: Release[] = [
  {
    id: 'r1',
    title: 'Crescent City Dreams',
    artist: 'Louis "Sunny" Boudreaux',
    coverArt: 'https://images.unsplash.com/photo-1563292705-780c13566147?q=80&w=800&auto=format&fit=crop',
    year: '2024',
    src: DEMO_AUDIO,
    links: { spotify: '#', apple: '#', amazon: '#', youtube: '#' }
  },
  {
    id: 'r2',
    title: 'Velvet & Smoke',
    artist: 'Ruby James',
    coverArt: 'https://images.unsplash.com/photo-1514525253440-b393452e8d26?q=80&w=800&auto=format&fit=crop',
    year: '2025',
    src: DEMO_AUDIO,
    links: { spotify: '#', apple: '#', amazon: '#', youtube: '#' }
  },
  {
    id: 'r3',
    title: 'Muddy Waters Rising',
    artist: 'Clyde "Iron" Moss',
    coverArt: 'https://images.unsplash.com/photo-1555513813-f66d48227b20?q=80&w=800&auto=format&fit=crop',
    year: '2025',
    src: DEMO_AUDIO,
    links: { spotify: '#', apple: '#', amazon: '#', youtube: '#' }
  },
   {
    id: 'r4',
    title: 'Golden Hour',
    artist: 'Ezra Blue',
    coverArt: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800&auto=format&fit=crop',
    year: '2025',
    src: DEMO_AUDIO,
    links: { spotify: '#', apple: '#', amazon: '#', youtube: '#' }
  }
];

export const SOCIALS: SocialLink[] = [
  { platform: 'Instagram', url: '#', icon: <Instagram size={20} /> },
  { platform: 'Twitter', url: '#', icon: <Twitter size={20} /> },
  { platform: 'TikTok', url: '#', icon: <Music size={20} /> },
  { platform: 'YouTube', url: '#', icon: <Youtube size={20} /> },
];