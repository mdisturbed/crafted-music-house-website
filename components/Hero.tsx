import React from 'react';
import { ArrowRight, Play } from 'lucide-react';

interface HeroProps {
  onNavigate: (page: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background with subtle texture */}
      <div className="absolute inset-0 bg-cmh-cream">
        {/* CSS-only subtle texture */}
        <div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(74, 44, 42, 0.05) 2px, rgba(74, 44, 42, 0.05) 4px)'}}></div>
        {/* Soft gradient orbs */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cmh-gold/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-cmh-sepia/10 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/3"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto flex flex-col items-center">
        
        <div className="mb-6 flex items-center gap-3">
          <div className="h-[1px] w-12 bg-cmh-gold"></div>
          <span className="text-cmh-gold font-sans text-xs md:text-sm tracking-[0.3em] uppercase font-semibold">
            Est. 2025
          </span>
          <div className="h-[1px] w-12 bg-cmh-gold"></div>
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-medium text-cmh-mahogany mb-8 leading-tight">
          Soulful stories, <br />
          <span className="italic text-cmh-sepia relative">
             crafted with care.
             {/* Decorative underline */}
             <svg className="absolute w-full h-3 -bottom-1 left-0 text-cmh-gold/40" viewBox="0 0 100 10" preserveAspectRatio="none">
               <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="2" fill="none" />
             </svg>
          </span>
        </h1>

        <p className="text-cmh-mahogany/70 text-lg md:text-xl font-light mb-12 max-w-2xl mx-auto leading-relaxed">
          An AI music production house bringing vintage jazz, blues, and Americana to life through
          distinct artist personas. Where 1940s New Orleans meets deep South swamp blues.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button 
            onClick={() => onNavigate('#artists')}
            className="group px-8 py-4 bg-cmh-mahogany text-cmh-cream font-sans text-sm font-bold uppercase tracking-widest hover:bg-cmh-midnight transition-colors duration-300 shadow-lg shadow-cmh-mahogany/20"
          >
             <span className="flex items-center gap-2">
               Listen to Our Roster <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
             </span>
          </button>
          
          <button 
            onClick={() => onNavigate('#about')}
            className="px-8 py-4 border border-cmh-mahogany/30 text-cmh-mahogany font-sans text-sm font-bold uppercase tracking-widest hover:border-cmh-gold hover:text-cmh-gold transition-all flex items-center gap-2 bg-transparent hover:bg-white/50"
          >
            <Play className="w-4 h-4" fill="currentColor" /> About Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;