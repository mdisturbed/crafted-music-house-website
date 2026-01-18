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
    avatar: 'https://images.unsplash.com/photo-1524779709304-40b5a3560c60?q=80&w=1000&auto=format&fit=crop',
    description: 'The golden trumpet of the Quarter. Sunny brings the warmth of 1940s New Orleans to life with raspy, world-weary vocals and soulful brass that echoes through bourbon-soaked nights.',
    demoTrack: {
      title: 'Front Porch Sundays',
      artist: 'Louis "Sunny" Boudreaux',
      src: DEMO_AUDIO,
      duration: '3:45',
      coverArt: 'https://images.unsplash.com/photo-1511192336575-5a79af67a629?q=80&w=1000&auto=format&fit=crop'
    }
  },
  {
    id: '2',
    name: 'Ruby James',
    genre: '1950s Chicago Vocal Jazz',
    avatar: 'https://images.unsplash.com/photo-1516280440614-6697288d5d38?q=80&w=1000&auto=format&fit=crop',
    description: 'Velvet vocals from the Windy City. Ruby evokes the smoky glamour of 1950s supper clubs with silky phrasing and torch song sensibility.',
    demoTrack: {
      title: 'Skylarking at Midnight',
      artist: 'Ruby James',
      src: DEMO_AUDIO,
      duration: '4:12',
      coverArt: 'https://images.unsplash.com/photo-1523906630-eb416174a6eb?q=80&w=1000&auto=format&fit=crop'
    }
  },
  {
    id: '3',
    name: 'Clyde "Iron" Moss',
    genre: 'Deep South Swamp Blues',
    avatar: 'https://images.unsplash.com/photo-1444530495635-029990f82ce8?q=80&w=1000&auto=format&fit=crop',
    description: 'Raw, gritty, and real. Clyde channels the spirits of the Delta with gravelly vocals, rusted resonator guitar, and stories carved from scrapyard iron.',
    demoTrack: {
      title: 'Rust Bucket Glory',
      artist: 'Clyde "Iron" Moss',
      src: DEMO_AUDIO,
      duration: '3:28',
      coverArt: 'https://images.unsplash.com/photo-1485627658391-1365e4e0dbfe?q=80&w=1000&auto=format&fit=crop'
    }
  },
  {
    id: '4',
    name: 'Ashley Wolfe',
    genre: 'Americana Noir',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000&auto=format&fit=crop',
    description: 'The voice of the after-hours. Ashley sings for the desert highways and dive bars, with smoky alto vocals that sit with you in the dark and make it feel less lonely.',
    demoTrack: {
      title: 'Whiskey in the Wound',
      artist: 'Ashley Wolfe',
      src: DEMO_AUDIO,
      duration: '3:56',
      coverArt: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?q=80&w=1000&auto=format&fit=crop'
    }
  },
  {
    id: '5',
    name: 'Belladonna Vale',
    genre: 'Gothic Cabaret',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000&auto=format&fit=crop',
    description: 'Mistress of the midnight hour. Belladonna crafts theatrical confections of dark swing and cabaret drama—Halloween as a lifestyle, noir as a love language.',
    demoTrack: {
      title: 'Velvet & Thorns',
      artist: 'Belladonna Vale',
      src: DEMO_AUDIO,
      duration: '4:05',
      coverArt: 'https://images.unsplash.com/photo-1514525253440-b393452e8d26?q=80&w=1000&auto=format&fit=crop'
    }
  },
  {
    id: '6',
    name: 'Ezra Blue',
    genre: '1970s Soft Rock',
    avatar: 'https://images.unsplash.com/photo-1493225255756-d9584f8606e9?q=80&w=1000&auto=format&fit=crop',
    description: 'Sun-bleached melodies and analog warmth. Ezra brings the breezy, open-road freedom of 1970s California with wistful vocals and gentle grooves.',
    demoTrack: {
      title: 'Golden Hour',
      artist: 'Ezra Blue',
      src: DEMO_AUDIO,
      duration: '3:42',
      coverArt: 'https://images.unsplash.com/photo-1465929639680-64ee080deb3e?q=80&w=1000&auto=format&fit=crop'
    }
  }
];

export const RELEASES: Release[] = [
  {
    id: 'r1',
    title: 'Rust Bucket Glory',
    artist: 'Clyde "Iron" Moss',
    coverArt: 'https://images.unsplash.com/photo-1485627658391-1365e4e0dbfe?q=80&w=800&auto=format&fit=crop',
    year: '2025',
    src: DEMO_AUDIO,
    links: {
      spotify: '#',
      apple: '#',
      amazon: '#',
      youtube: 'https://youtu.be/WdfNFo8Miu8'
    }
  },
  {
    id: 'r2',
    title: 'Skylarking at Midnight',
    artist: 'Ruby James',
    coverArt: 'https://images.unsplash.com/photo-1523906630-eb416174a6eb?q=80&w=800&auto=format&fit=crop',
    year: '2025',
    src: DEMO_AUDIO,
    links: {
      spotify: '#',
      apple: '#',
      amazon: '#',
      youtube: 'https://youtu.be/5krvIhpB0lc'
    }
  },
  {
    id: 'r3',
    title: 'Front Porch Sundays',
    artist: 'Louis "Sunny" Boudreaux',
    coverArt: 'https://images.unsplash.com/photo-1511192336575-5a79af67a629?q=80&w=800&auto=format&fit=crop',
    year: '2025',
    src: DEMO_AUDIO,
    links: {
      spotify: '#',
      apple: '#',
      amazon: '#',
      youtube: 'https://youtu.be/ffSpcDaXYEU'
    }
  },
  {
    id: 'r4',
    title: "Devil's in the Details",
    artist: 'Clyde "Iron" Moss',
    coverArt: 'https://images.unsplash.com/photo-1555513813-f66d48227b20?q=80&w=800&auto=format&fit=crop',
    year: '2025',
    src: DEMO_AUDIO,
    links: {
      spotify: '#',
      apple: '#',
      amazon: '#',
      youtube: 'https://youtu.be/ga2iwMpe2hI'
    }
  },
  {
    id: 'r5',
    title: 'Coffee in the Clouds',
    artist: 'Ruby James',
    coverArt: 'https://images.unsplash.com/photo-1514525253440-b393452e8d26?q=80&w=800&auto=format&fit=crop',
    year: '2025',
    src: DEMO_AUDIO,
    links: {
      spotify: '#',
      apple: '#',
      amazon: '#',
      youtube: 'https://youtu.be/htWaPlSoUHc'
    }
  }
];

export const SOCIALS: SocialLink[] = [
  { platform: 'YouTube', url: 'https://www.youtube.com/@CraftedMusicHouse', icon: <Youtube size={20} /> },
  { platform: 'Instagram', url: 'https://www.instagram.com/craftedmusichouse', icon: <Instagram size={20} /> },
  { platform: 'TikTok', url: 'https://www.tiktok.com/@craftedmusichouse', icon: <Music size={20} /> },
  { platform: 'Twitter', url: 'https://twitter.com/craftedmusichs', icon: <Twitter size={20} /> },
];