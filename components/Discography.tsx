import React, { useEffect, useState } from 'react';
import { Release } from '../types';
import { Music, Youtube } from 'lucide-react';

interface DiscographyProps {
  onNavigate: (page: string) => void;
  releases: Release[];
}

const Discography: React.FC<DiscographyProps> = ({ onNavigate, releases }) => {
  const [displayReleases, setDisplayReleases] = useState<Release[]>([]);

  useEffect(() => {
    // Fisher-Yates shuffle algorithm to randomize releases on mount/update
    // We reshuffle if the releases data changes
    const shuffled = [...releases];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    setDisplayReleases(shuffled);
  }, [releases]);

  return (
    <section id="releases" className="py-24 bg-white border-t border-cmh-mahogany/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <span className="text-cmh-gold font-sans text-sm tracking-widest uppercase mb-2 block">Catalog</span>
            <h2 className="text-4xl font-serif text-cmh-mahogany">
              Latest <span className="text-cmh-sepia">Releases</span>
            </h2>
          </div>
          <button 
            onClick={() => onNavigate('catalog')}
            className="text-cmh-mahogany hover:text-cmh-gold transition-colors uppercase text-xs font-bold tracking-widest border-b border-cmh-mahogany pb-1"
          >
            View Full Discography
          </button>
        </div>

        {/* Horizontal Scroll Container */}
        <div className="flex overflow-x-auto gap-8 pb-8 snap-x scrollbar-hide">
          {displayReleases.map((release) => (
            <div key={release.id} className="min-w-[280px] md:min-w-[320px] snap-center group cursor-pointer">
              <div className="relative aspect-square bg-cmh-cream mb-6 overflow-hidden shadow-lg">
                <img 
                  src={release.coverArt} 
                  alt={release.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Hover Links Overlay */}
                <div className="absolute inset-0 bg-cmh-mahogany/90 flex flex-col items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-xs font-sans text-cmh-cream uppercase tracking-widest">Listen On</span>
                  <div className="flex gap-4">
                    {release.links.spotify && (
                      <a href={release.links.spotify} className="p-3 bg-white/10 hover:bg-[#1DB954] hover:text-white rounded-full transition-colors text-white">
                        <Music size={20} />
                      </a>
                    )}
                    {release.links.apple && (
                      <a href={release.links.apple} className="p-3 bg-white/10 hover:bg-[#FA243C] hover:text-white rounded-full transition-colors text-white">
                        <Music size={20} />
                      </a>
                    )}
                    {release.links.youtube && (
                      <a href={release.links.youtube} className="p-3 bg-white/10 hover:bg-[#FF0000] hover:text-white rounded-full transition-colors text-white">
                        <Youtube size={20} />
                      </a>
                    )}
                  </div>
                </div>
              </div>

              <div className="space-y-1">
                <h3 className="text-xl font-serif text-cmh-mahogany group-hover:text-cmh-gold transition-colors">
                  {release.title}
                </h3>
                <p className="text-cmh-sepia text-sm font-medium tracking-wide">{release.artist}</p>
                <p className="text-gray-400 text-xs font-sans">{release.year}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Discography;