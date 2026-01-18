import React from 'react';
import { SOCIALS } from '../constants';
import { ArrowUpRight, Lock, Unlock } from 'lucide-react';
import Logo from './Logo';

interface FooterProps {
  onNavigate: (page: string) => void;
  isAdmin: boolean;
  onToggleAdmin: () => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate, isAdmin, onToggleAdmin }) => {
  return (
    <footer className="bg-cmh-midnight border-t border-cmh-gold/10 pt-20 pb-32 text-cmh-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-6 text-cmh-gold">
               <Logo className="h-10 w-10" />
               <span className="font-serif font-bold text-xl tracking-wide text-white">
                CRAFTED <span className="text-cmh-gold italic">MUSIC</span> HOUSE
               </span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md font-light leading-relaxed">
              We are a boutique music house blending human curation with machine creativity. 
              Discover authentic, emotionally resonant soundscapes for the modern era.
            </p>
          </div>

          <div>
            <h4 className="font-sans font-bold text-white mb-6 uppercase tracking-widest text-xs">Connect</h4>
            <ul className="space-y-4">
              {SOCIALS.map((social) => (
                <li key={social.platform}>
                  <a href={social.url} className="flex items-center gap-2 text-gray-400 hover:text-cmh-gold transition-colors group">
                    <span className="group-hover:scale-110 transition-transform">{social.icon}</span>
                    <span>{social.platform}</span>
                    <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-sans font-bold text-white mb-6 uppercase tracking-widest text-xs">Legal</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><button onClick={() => onNavigate('privacy')} className="hover:text-white transition-colors text-left">Privacy Policy</button></li>
              <li><button onClick={() => onNavigate('terms')} className="hover:text-white transition-colors text-left">Terms of Service</button></li>
              <li><button onClick={() => onNavigate('licensing')} className="hover:text-white transition-colors text-left">Licensing</button></li>
              <li><button onClick={() => onNavigate('press')} className="hover:text-white transition-colors text-left">Press Kit</button></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-gray-500 text-xs uppercase tracking-widest">
          <p>© 2025 Crafted Music House. All rights reserved.</p>
          <div className="flex items-center gap-4 mt-2 md:mt-0">
            <p>Soulful stories, crafted with care.</p>
            {/* Secret Admin Toggle */}
            <button 
              onClick={onToggleAdmin} 
              className={`transition-colors duration-300 ${isAdmin ? 'text-cmh-gold' : 'text-gray-700 hover:text-gray-500'}`}
              title={isAdmin ? "Exit Admin Mode" : "Admin Login"}
            >
              {isAdmin ? <Unlock size={14} /> : <Lock size={14} />}
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;