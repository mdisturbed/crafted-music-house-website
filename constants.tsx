import React from 'react';
import { Artist, Release, SocialLink } from './types';
import { FaSpotify, FaYoutube, FaInstagram, FaTiktok, FaTwitter } from 'react-icons/fa';

// Using a free sample audio for demo purposes
const DEMO_AUDIO = "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3";

export const ARTISTS: Artist[] = [
  {
    id: '1',
    name: 'Louis "Sunny" Boudreaux',
    genre: '1940s New Orleans Jazz',
    avatar: '/images/artists/sunny.png',
    description: 'The golden trumpet of the Quarter. Sunny brings the warmth of 1940s New Orleans to life with raspy, world-weary vocals and soulful brass that echoes through bourbon-soaked nights.',
    demoTrack: {
      title: 'Front Porch Sundays',
      artist: 'Louis "Sunny" Boudreaux',
      src: DEMO_AUDIO,
      duration: '3:45',
      coverArt: '/images/covers/front-porch-sundays.png'
    }
  },
  {
    id: '2',
    name: 'Ruby James',
    genre: '1950s Chicago Vocal Jazz',
    avatar: '/images/artists/ruby.png',
    description: 'Velvet vocals from the Windy City. Ruby evokes the smoky glamour of 1950s supper clubs with silky phrasing and torch song sensibility.',
    demoTrack: {
      title: 'Skylarking at Midnight',
      artist: 'Ruby James',
      src: DEMO_AUDIO,
      duration: '4:12',
      coverArt: '/images/covers/skylarking-at-midnight.png'
    }
  },
  {
    id: '3',
    name: 'Clyde "Iron" Moss',
    genre: 'Deep South Swamp Blues',
    avatar: '/images/artists/clyde.png',
    description: 'Raw, gritty, and real. Clyde channels the spirits of the Delta with gravelly vocals, rusted resonator guitar, and stories carved from scrapyard iron.',
    demoTrack: {
      title: 'Rust Bucket Glory',
      artist: 'Clyde "Iron" Moss',
      src: DEMO_AUDIO,
      duration: '3:28',
      coverArt: '/images/covers/rust-bucket-glory.png'
    }
  },
  {
    id: '4',
    name: 'Ashley Wolfe',
    genre: 'Americana Noir',
    avatar: '/images/artists/ashley.png',
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
    avatar: '/images/artists/belladonna.png',
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
    name: 'Salvatore Moretti',
    genre: 'Crooner, Lounge Jazz',
    avatar: '/images/artists/salvatore.png',
    description: 'Where restraint becomes romance. Salvatore brings the velvet-grain baritone of 1950s California lounges—silk suits, midnight bourbon, and a voice like aged leather.',
    demoTrack: {
      title: 'Blue Skies',
      artist: 'Salvatore Moretti',
      src: DEMO_AUDIO,
      duration: '3:15',
      coverArt: 'https://images.unsplash.com/photo-1514525253440-b393452e8d26?q=80&w=1000&auto=format&fit=crop'
    }
  }
];

export const RELEASES: Release[] = [
  {
    id: 'r1',
    title: 'Rust Bucket Glory',
    artist: 'Clyde "Iron" Moss',
    coverArt: '/images/covers/rust-bucket-glory.png',
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
    coverArt: '/images/covers/skylarking-at-midnight.png',
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
    coverArt: '/images/covers/front-porch-sundays.png',
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
    coverArt: '/images/covers/devils-in-the-details.png',
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
    coverArt: '/images/covers/coffee-in-the-clouds.png',
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
  { platform: 'YouTube', url: 'https://www.youtube.com/@CraftedMusicHouse', icon: <FaYoutube size={20} /> },
  { platform: 'Instagram', url: 'https://www.instagram.com/craftedmusichouse', icon: <FaInstagram size={20} /> },
  { platform: 'TikTok', url: 'https://www.tiktok.com/@craftedmusichouse', icon: <FaTiktok size={20} /> },
  { platform: 'Twitter', url: 'https://twitter.com/craftedmusichs', icon: <FaTwitter size={20} /> },
];