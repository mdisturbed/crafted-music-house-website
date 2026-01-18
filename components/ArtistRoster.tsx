import React, { useState, useEffect, useMemo } from 'react';
import { ARTISTS } from '../constants';
import { Artist, Track } from '../types';
import { Play, Pause, Sparkles } from 'lucide-react';

interface ArtistRosterProps {
  onPlayTrack: (track: Track) => void;
  currentTrack: Track | null;
  isPlaying: boolean;
  onNavigate?: (page: string) => void;
}

// Map genres to broader "Vibes"
const VIBES = [
  { id: 'all', label: 'All Voices' },
  { id: 'nostalgic', label: 'Nostalgic', genres: ['1940s New Orleans Jazz', '1950s Chicago Vocal Jazz', 'Crooner, Lounge Jazz'] },
  { id: 'moody', label: 'Dark & Moody', genres: ['Deep South Swamp Blues', 'Americana Noir', 'Gothic Cabaret'] },
  { id: 'ethereal', label: 'Dreamy', genres: ['1950s Chicago Vocal Jazz', 'Crooner, Lounge Jazz'] },
  { id: 'energetic', label: 'Energetic', genres: ['1940s New Orleans Jazz', 'Deep South Swamp Blues'] },
];

const ArtistRoster: React.FC<ArtistRosterProps> = ({ onPlayTrack, currentTrack, isPlaying, onNavigate }) => {
  const [hoveredArtist, setHoveredArtist] = useState<string | null>(null);
  const [activeVibe, setActiveVibe] = useState('all');
  
  // We keep the randomized list but filter it
  const [shuffledArtists, setShuffledArtists] = useState<Artist[]>([]);

  useEffect(() => {
    // Randomize artists order on mount
    const shuffled = [...ARTISTS];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    setShuffledArtists(shuffled);
  }, []);

  const filteredArtists = useMemo(() => {
    if (activeVibe === 'all') return shuffledArtists;
    const selectedVibe = VIBES.find(v => v.id === activeVibe);
    if (!selectedVibe) return shuffledArtists;
    return shuffledArtists.filter(artist => selectedVibe.genres?.includes(artist.genre));
  }, [activeVibe, shuffledArtists]);

  const handleCardClick = (artistId: string) => {
    if (onNavigate) {
      onNavigate(`artist:${artistId}`);
    }
  };

  const handlePlayClick = (e: React.MouseEvent, track: Track) => {
    e.stopPropagation(); // Prevent card navigation when clicking play
    onPlayTrack(track);
  };

  return (
    <section id="artists" className="py-32 bg-cmh-cream relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
           <span className="text-cmh-sepia font-sans text-sm tracking-widest uppercase mb-2 block">Our Talent</span>
          <h2 className="text-4xl md:text-6xl font-serif text-cmh-mahogany mb-6">
            Meet the <span className="italic text-cmh-gold">Voices</span>
          </h2>
          <p className="text-cmh-mahogany/60 max-w-2xl mx-auto font-light leading-relaxed mb-8">
            From the jazz clubs of 1940s New Orleans to the swamps of the Deep South, 
            our personas span time and space to bring you authentic emotional experiences.
          </p>

          {/* Vibe Selector */}
          <div className="flex flex-wrap justify-center gap-3 animate-fade-in">
            {VIBES.map((vibe) => (
              <button
                key={vibe.id}
                onClick={() => setActiveVibe(vibe.id)}
                className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 border ${
                  activeVibe === vibe.id 
                    ? 'bg-cmh-mahogany text-cmh-gold border-cmh-mahogany shadow-lg scale-105' 
                    : 'bg-transparent text-cmh-mahogany/60 border-cmh-mahogany/20 hover:border-cmh-gold hover:text-cmh-gold'
                }`}
              >
                {vibe.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 min-h-[50vh]">
          {filteredArtists.map((artist) => {
            const isArtistPlaying = currentTrack?.artist === artist.name && isPlaying;

            return (
              <div 
                key={artist.id}
                className="group relative h-[450px] bg-white overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-cmh-mahogany/5 cursor-pointer animate-slide-up"
                onMouseEnter={() => setHoveredArtist(artist.id)}
                onMouseLeave={() => setHoveredArtist(null)}
                onClick={() => handleCardClick(artist.id)}
              >
                {/* Image Container */}
                <div className="absolute inset-0 h-3/5 overflow-hidden">
                    <div 
                    className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105 sepia-[0.3] group-hover:sepia-0"
                    style={{ backgroundImage: `url(${artist.avatar})` }}
                    ></div>
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/90"></div>
                    
                    {/* Exclusive Tag */}
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur text-cmh-mahogany text-[10px] font-bold uppercase px-2 py-1 tracking-widest opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                        <Sparkles size={10} className="text-cmh-gold" /> Exclusive
                    </div>
                </div>

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 text-center">
                    {/* Floating Play Button */}
                    <button 
                        onClick={(e) => handlePlayClick(e, artist.demoTrack)}
                        className={`mx-auto mb-4 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 shadow-md transform z-10 ${isArtistPlaying ? 'bg-cmh-gold scale-110' : 'bg-cmh-mahogany text-white translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100'}`}
                    >
                        {isArtistPlaying ? <span className="animate-pulse w-3 h-3 bg-white rounded-full"></span> : <Play size={20} fill="currentColor" className="ml-1" />}
                    </button>

                  <div className="bg-white/80 backdrop-blur-sm p-4 border-t border-cmh-gold/20 transform transition-transform duration-500">
                    <span className="block text-cmh-gold text-xs font-sans uppercase tracking-widest mb-2">
                      {artist.genre}
                    </span>
                    
                    <h3 className="text-2xl font-serif text-cmh-mahogany mb-3 group-hover:text-cmh-gold transition-colors">
                      {artist.name}
                    </h3>
                    
                    <p className="text-cmh-mahogany/60 text-sm line-clamp-3 leading-relaxed">
                      {artist.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
          
          {filteredArtists.length === 0 && (
             <div className="col-span-full flex flex-col items-center justify-center text-cmh-mahogany/40 py-12">
                 <p className="font-serif italic text-xl">No artists found for this vibe.</p>
                 <button onClick={() => setActiveVibe('all')} className="mt-4 text-xs font-bold uppercase tracking-widest text-cmh-gold hover:underline">Clear Filter</button>
             </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ArtistRoster;