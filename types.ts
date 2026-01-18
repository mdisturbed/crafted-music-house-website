import React from 'react';

export interface Artist {
  id: string;
  name: string;
  genre: string;
  avatar: string; // URL
  description: string;
  demoTrack: Track;
}

export interface Track {
  title: string;
  artist: string;
  src: string; // Audio URL
  duration: string;
  coverArt: string;
}

export interface Release {
  id: string;
  title: string;
  artist: string;
  coverArt: string;
  year: string;
  src?: string; // Audio URL for playback
  links: {
    spotify?: string;
    apple?: string;
    amazon?: string;
    youtube?: string;
  };
}

export interface SocialLink {
  platform: 'Instagram' | 'TikTok' | 'Twitter' | 'YouTube' | 'Spotify';
  url: string;
  icon: React.ReactNode;
}