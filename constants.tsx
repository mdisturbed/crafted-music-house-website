import React from 'react';
import { Artist, Release, SocialLink } from './types';
import { FaSpotify, FaYoutube, FaInstagram, FaTiktok, FaTwitter } from 'react-icons/fa';

export const ARTISTS: Artist[] = [
  {
    id: '1',
    name: 'Louis "Sunny" Boudreaux',
    genre: '1940s New Orleans Jazz',
    avatar: '/images/artists/sunny.webp',
    description: 'The golden trumpet of the Quarter. Sunny brings the warmth of 1940s New Orleans to life with raspy, world-weary vocals and soulful brass that echoes through bourbon-soaked nights.',
    demoTrack: {
      title: 'Front Porch Sundays',
      artist: 'Louis "Sunny" Boudreaux',
      src: '/audio/sunny_front-porch-sundays_audio.mp3',
      duration: '3:45',
      coverArt: '/images/covers/front-porch-sundays.webp'
    }
  },
  {
    id: '2',
    name: 'Ruby James',
    genre: '1950s Chicago Vocal Jazz',
    avatar: '/images/artists/ruby.webp',
    description: 'Velvet vocals from the Windy City. Ruby evokes the smoky glamour of 1950s supper clubs with silky phrasing and torch song sensibility.',
    demoTrack: {
      title: 'Skylarking at Midnight',
      artist: 'Ruby James',
      src: '/audio/ruby_skylarking-at-midnight_audio.mp3',
      duration: '4:12',
      coverArt: '/images/covers/skylarking-at-midnight.webp'
    }
  },
  {
    id: '3',
    name: 'Clyde "Iron" Moss',
    genre: 'Deep South Swamp Blues',
    avatar: '/images/artists/clyde.webp',
    description: 'Raw, gritty, and real. Clyde channels the spirits of the Delta with gravelly vocals, rusted resonator guitar, and stories carved from scrapyard iron.',
    demoTrack: {
      title: 'Rust Bucket Glory',
      artist: 'Clyde "Iron" Moss',
      src: '/audio/clyde_rust-bucket-glory_audio.mp3',
      duration: '3:28',
      coverArt: '/images/covers/rust-bucket-glory.webp'
    }
  },
  {
    id: '4',
    name: 'Ashley Wolfe',
    genre: 'Americana Noir',
    avatar: '/images/artists/ashley.webp',
    description: 'The voice of the after-hours. Ashley sings for the desert highways and dive bars, with smoky alto vocals that sit with you in the dark and make it feel less lonely.',
    demoTrack: {
      title: 'Whiskey in the Wound',
      artist: 'Ashley Wolfe',
      src: '/audio/ashley_whiskey-in-the-wound_audio.mp3',
      duration: '3:56',
      coverArt: '/images/covers/rust-bucket-glory.webp'
    }
  },
  {
    id: '5',
    name: 'Belladonna Vale',
    genre: 'Gothic Cabaret',
    avatar: '/images/artists/belladonna.webp',
    description: 'Mistress of the midnight hour. Belladonna crafts theatrical confections of dark swing and cabaret drama—Halloween as a lifestyle, noir as a love language.',
    demoTrack: {
      title: 'Velvet & Thorns',
      artist: 'Belladonna Vale',
      src: '/audio/sunny_front-porch-sundays_audio.mp3',
      duration: '4:05',
      coverArt: '/images/covers/after-the-applause.webp'
    }
  },
  {
    id: '6',
    name: 'Salvatore Moretti',
    genre: 'Crooner, Lounge Jazz',
    avatar: '/images/artists/salvatore.webp',
    description: 'Where restraint becomes romance. Salvatore brings the velvet-grain baritone of 1950s California lounges—silk suits, midnight bourbon, and a voice like aged leather.',
    demoTrack: {
      title: 'After You Leave',
      artist: 'Salvatore Moretti',
      src: '/audio/salvatore_after-you-leave_audio.mp3',
      duration: '3:23',
      coverArt: '/images/covers/after-the-applause.webp'
    }
  }
];

export const RELEASES: Release[] = [
  {
    id: 'r1',
    title: 'Rust Bucket Glory',
    artist: 'Clyde "Iron" Moss',
    coverArt: '/images/covers/rust-bucket-glory.webp',
    year: '2025',
    src: '/audio/clyde_rust-bucket-glory_audio.mp3',
    links: {
      spotify: 'https://open.spotify.com/artist/5xh3AkSuhQrE66vYbcBjYp',
      apple: 'https://music.apple.com/us/artist/clyde-iron-moss/1862628399',
      amazon: 'https://music.amazon.com/artists/B0G8VYYF15/clyde-iron-moss',
      youtube: 'https://youtu.be/WdfNFo8Miu8'
    }
  },
  {
    id: 'r2',
    title: 'Skylarking at Midnight',
    artist: 'Ruby James',
    coverArt: '/images/covers/skylarking-at-midnight.webp',
    year: '2025',
    src: '/audio/ruby_skylarking-at-midnight_audio.mp3',
    links: {
      spotify: 'https://open.spotify.com/album/2Fi3KLEhBKIfdMaGsjNEz4',
      apple: 'https://music.apple.com/us/artist/ruby-james/1862630436',
      amazon: 'https://music.amazon.com/artists/B0GCFX729G/ruby-james',
      youtube: 'https://youtu.be/5krvIhpB0lc'
    }
  },
  {
    id: 'r3',
    title: 'Front Porch Sundays',
    artist: 'Louis "Sunny" Boudreaux',
    coverArt: '/images/covers/front-porch-sundays.webp',
    year: '2025',
    src: '/audio/sunny_front-porch-sundays_audio.mp3',
    links: {
      spotify: 'https://open.spotify.com/album/0IZPk9SRqsAkozbDgKCP0w',
      apple: 'https://music.apple.com/us/artist/louis-sunny-boudreaux/1862628761',
      amazon: 'https://music.amazon.com/artists/B0G8VZ6TL1/louis-\'sunny\'-boudreaux',
      youtube: 'https://youtu.be/ffSpcDaXYEU'
    }
  },
  {
    id: 'r4',
    title: "Devil's in the Details",
    artist: 'Clyde "Iron" Moss',
    coverArt: '/images/covers/devils-in-the-details.webp',
    year: '2025',
    src: '/audio/clyde_devils-in-the-details_audio.mp3',
    links: {
      spotify: 'https://open.spotify.com/artist/5xh3AkSuhQrE66vYbcBjYp',
      apple: 'https://music.apple.com/us/artist/clyde-iron-moss/1862628399',
      amazon: 'https://music.amazon.com/artists/B0G8VYYF15/clyde-iron-moss',
      youtube: 'https://youtu.be/ga2iwMpe2hI'
    }
  },
  {
    id: 'r5',
    title: 'Coffee in the Clouds',
    artist: 'Ruby James',
    coverArt: '/images/covers/coffee-in-the-clouds.webp',
    year: '2025',
    src: '/audio/ruby_coffee-in-the-clouds_audio.mp3',
    links: {
      spotify: '',
      apple: '',
      amazon: '',
      youtube: 'https://youtu.be/htWaPlSoUHc'
    }
  },
  {
    id: 'r6',
    title: 'After the Applause',
    artist: 'Salvatore Moretti',
    coverArt: '/images/covers/after-the-applause.webp',
    year: '2026',
    type: 'album',
    src: '/audio/salvatore_after-you-leave_audio.mp3',
    tracks: [
      { number: 1, title: 'After You Leave', duration: '4:33' },
      { number: 2, title: 'Selective Memory', duration: '5:11' },
      { number: 3, title: 'One Call Away', duration: '4:27' },
      { number: 4, title: 'What I Didn\'t Say', duration: '5:05' },
      { number: 5, title: 'Bourbon at 3AM', duration: '4:39' },
      { number: 6, title: 'Letting Go Was Love', duration: '5:14' },
      { number: 7, title: 'The Last Song', duration: '4:38' },
      { number: 8, title: 'Morning Arrives', duration: '4:54' },
      { number: 9, title: 'Complete', duration: '4:53' },
      { number: 10, title: 'What Remains', duration: '5:01' }
    ],
    links: {
      spotify: 'https://open.spotify.com/album/6D2hLi8ymRW4GVRjNX7aHo',
      apple: 'https://music.apple.com/us/album/after-the-appluase/1869531102',
      amazon: '',
      youtube: ''
    }
  }
];

export const SOCIALS: SocialLink[] = [
  { platform: 'YouTube', url: 'https://www.youtube.com/@CraftedMusicHouse', icon: <FaYoutube size={20} /> },
  { platform: 'Instagram', url: 'https://www.instagram.com/craftedmusichouse', icon: <FaInstagram size={20} /> },
  { platform: 'TikTok', url: 'https://www.tiktok.com/@craftedmusichouse', icon: <FaTiktok size={20} /> },
  { platform: 'Twitter', url: 'https://twitter.com/craftedmusichs', icon: <FaTwitter size={20} /> },
];