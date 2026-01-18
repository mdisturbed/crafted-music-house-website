import React, { useRef, useEffect, useState } from 'react';
import { Track, Release } from '../types';
import { Play, Pause, SkipBack, SkipForward, Volume2, Disc, ListMusic, X } from 'lucide-react';

interface MusicPlayerProps {
  track: Track | null;
  isPlaying: boolean;
  onTogglePlay: () => void;
  onNext?: () => void;
  onPrev?: () => void;
  releases?: Release[];
  onPlayTrack?: (track: Track) => void;
}

const MusicPlayer: React.FC<MusicPlayerProps> = ({ 
  track, 
  isPlaying, 
  onTogglePlay, 
  onNext, 
  onPrev,
  releases = [],
  onPlayTrack
}) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [showPlaylist, setShowPlaylist] = useState(false);

  // Filter releases to only those with audio sources
  const playableReleases = releases.filter(r => r.src);

  // Audio Playback Logic
  useEffect(() => {
    if (track && audioRef.current) {
      if (isPlaying) {
        const playPromise = audioRef.current.play();
        if (playPromise !== undefined) {
          playPromise.catch((error) => {
            console.log("Playback prevented:", error);
          });
        }
      } else {
        audioRef.current.pause();
      }
    }
  }, [track, isPlaying]);

  useEffect(() => {
    if (audioRef.current) {
        audioRef.current.currentTime = 0;
    }
  }, [track?.src]);

  const hasTrack = !!track;

  const handleSelectTrack = (release: Release) => {
    if (onPlayTrack && release.src) {
        onPlayTrack({
            title: release.title,
            artist: release.artist,
            src: release.src,
            duration: '0:00', // Standard releases don't have duration yet
            coverArt: release.coverArt
        });
        setShowPlaylist(false);
    }
  };

  return (
    // Removed overflow-hidden to allow popup menu to be visible
    <div className="fixed bottom-0 left-0 w-full bg-cmh-mahogany text-cmh-cream z-50 shadow-[0_-5px_20px_rgba(0,0,0,0.3)] border-t border-cmh-gold/20 animate-slide-up h-24 md:h-28">
      
      {hasTrack && (
          <audio 
            ref={audioRef} 
            src={track.src} 
            onEnded={() => onNext && onNext()} 
            loop={false}
          />
      )}
      
      {/* Controls Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 h-full flex items-center justify-between gap-4">
        
        {/* Track Info & Playlist */}
        <div className="flex items-center gap-4 w-1/3 min-w-[140px] relative">
          
          {/* Playlist Dropup */}
          {showPlaylist && (
              <div className="absolute bottom-full left-0 mb-6 w-72 bg-cmh-mahogany/95 backdrop-blur-md border border-cmh-gold/20 rounded-lg shadow-2xl overflow-hidden animate-fade-in flex flex-col">
                  <div className="p-3 border-b border-cmh-gold/10 flex justify-between items-center bg-black/20">
                      <span className="text-xs font-bold uppercase tracking-widest text-cmh-gold">Select Track</span>
                      <button onClick={() => setShowPlaylist(false)} className="text-white/50 hover:text-white"><X size={14}/></button>
                  </div>
                  <div className="max-h-64 overflow-y-auto custom-scrollbar">
                      {playableReleases.length > 0 ? (
                          playableReleases.map((release) => (
                              <button 
                                key={release.id}
                                onClick={() => handleSelectTrack(release)}
                                className={`w-full flex items-center gap-3 p-3 hover:bg-white/10 transition-colors text-left border-b border-white/5 last:border-0 ${track?.title === release.title ? 'bg-cmh-gold/20' : ''}`}
                              >
                                  <img src={release.coverArt} className="w-8 h-8 rounded-sm object-cover" alt="" />
                                  <div className="overflow-hidden">
                                      <div className={`text-sm font-serif truncate ${track?.title === release.title ? 'text-cmh-gold' : 'text-white'}`}>{release.title}</div>
                                      <div className="text-[10px] text-gray-400 truncate uppercase tracking-wide">{release.artist}</div>
                                  </div>
                                  {track?.title === release.title && <div className="ml-auto w-2 h-2 rounded-full bg-cmh-gold animate-pulse"></div>}
                              </button>
                          ))
                      ) : (
                          <div className="p-4 text-center text-gray-500 text-xs italic">No tracks available in catalog.</div>
                      )}
                  </div>
              </div>
          )}

          {hasTrack ? (
            <div className="relative group shrink-0">
               <img 
                src={track.coverArt} 
                alt={track.title} 
                className={`w-12 h-12 md:w-14 md:h-14 object-cover shadow-lg border border-cmh-gold/20 rounded-sm ${isPlaying ? 'animate-[spin_6s_linear_infinite]' : ''}`} 
               />
            </div>
          ) : (
            <div className="w-12 h-12 md:w-14 md:h-14 bg-cmh-cream/10 flex items-center justify-center border border-cmh-gold/10 rounded-sm shrink-0">
                <Disc className="text-cmh-gold/40" />
            </div>
          )}
          
          <div className="overflow-hidden bg-cmh-mahogany/40 backdrop-blur-sm px-2 py-1 rounded flex items-center gap-3">
            <div>
                <h4 className="font-serif font-bold text-sm md:text-base truncate text-white shadow-black drop-shadow-md cursor-pointer hover:text-cmh-gold transition-colors" onClick={() => setShowPlaylist(!showPlaylist)}>
                    {hasTrack ? track.title : "Select a Track"}
                </h4>
                <div className="flex items-center gap-2">
                    <p className="text-xs md:text-sm text-cmh-gold truncate shadow-black drop-shadow-md">
                        {hasTrack ? track.artist : "Crafted Music House"}
                    </p>
                </div>
            </div>
            
            {/* Playlist Toggle Button */}
            <button 
                onClick={() => setShowPlaylist(!showPlaylist)} 
                className={`p-1.5 rounded-full hover:bg-white/10 transition-colors ${showPlaylist ? 'text-cmh-gold bg-white/10' : 'text-white/60'}`}
                title="View Playlist"
            >
                <ListMusic size={18} />
            </button>
          </div>
        </div>

        {/* Controls */}
        <div className="flex flex-col items-center w-1/3">
          <div className="flex items-center gap-4 md:gap-6 mb-1 bg-cmh-mahogany/30 backdrop-blur-sm px-4 py-1 rounded-full border border-white/5">
            <button 
                onClick={onPrev} 
                disabled={!hasTrack}
                className={`text-cmh-cream/80 transition-colors ${hasTrack ? 'hover:text-cmh-gold' : 'opacity-30 cursor-not-allowed'}`}
            >
              <SkipBack size={20} />
            </button>
            <button 
              onClick={hasTrack ? onTogglePlay : undefined} 
              className={`w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-transform shadow-lg ${hasTrack ? 'bg-cmh-gold text-cmh-mahogany hover:scale-105' : 'bg-cmh-gold/20 text-cmh-mahogany/50 cursor-not-allowed'}`}
            >
              {isPlaying ? <Pause size={20} fill="currentColor" /> : <Play size={20} fill="currentColor" className="ml-1" />}
            </button>
            <button 
                onClick={onNext} 
                disabled={!hasTrack}
                className={`text-cmh-cream/80 transition-colors ${hasTrack ? 'hover:text-cmh-gold' : 'opacity-30 cursor-not-allowed'}`}
            >
              <SkipForward size={20} />
            </button>
          </div>
        </div>

        {/* Volume & Extras */}
        <div className="flex items-center justify-end gap-4 w-1/3 hidden sm:flex">
          <div className="flex items-center gap-2 bg-cmh-mahogany/30 backdrop-blur-sm px-3 py-2 rounded-full border border-white/5">
            <Volume2 size={18} className="text-cmh-cream/80 hover:text-white cursor-pointer" />
            <div className="w-16 h-1 bg-white/20 rounded-full">
                <div className="w-3/4 h-full bg-cmh-gold shadow-[0_0_10px_rgba(201,162,39,0.5)]"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;