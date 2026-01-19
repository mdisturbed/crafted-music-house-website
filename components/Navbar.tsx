import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

interface NavbarProps {
  onNavigate: (page: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Artists', href: '#artists' },
    { name: 'Releases', href: '#releases' },
    { name: 'Occasions', href: '#occasions' },
    { name: 'About', href: '#about' },
  ];

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    onNavigate(href);
  };

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-500 border-b ${
        scrolled 
          ? 'bg-cmh-cream/95 backdrop-blur-md border-cmh-gold/20 py-3 shadow-sm' 
          : 'bg-transparent border-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <button onClick={() => onNavigate('home')} className="flex items-center gap-3 group">
              <div className="text-cmh-mahogany group-hover:text-cmh-gold transition-colors duration-500">
                <Logo className="h-10 w-10 md:h-12 md:w-12" />
              </div>
              <span className="font-serif font-bold text-xl tracking-wide text-cmh-mahogany whitespace-nowrap">
                CRAFTED <span className="text-cmh-gold italic">MUSIC</span> HOUSE
              </span>
            </button>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.href)}
                className="font-sans text-sm uppercase tracking-widest text-cmh-mahogany/70 hover:text-cmh-gold transition-colors relative after:content-[''] after:absolute after:w-0 after:h-px after:bg-cmh-gold after:left-0 after:-bottom-1 after:transition-all hover:after:w-full"
              >
                {link.name}
              </button>
            ))}
            <button 
              onClick={() => onNavigate('#releases')}
              className="px-6 py-2 bg-cmh-mahogany text-cmh-cream font-serif text-sm font-bold tracking-wider hover:bg-cmh-gold hover:text-cmh-mahogany transition-all duration-300 rounded-sm"
            >
              Latest Release
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-cmh-mahogany hover:text-cmh-gold focus:outline-none"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-cmh-cream border-b border-cmh-sepia/20 absolute w-full shadow-lg h-screen top-[60px] left-0">
          <div className="px-2 pt-10 pb-3 space-y-6 sm:px-3 flex flex-col items-center">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.href)}
                className="block px-3 py-2 text-2xl font-serif text-cmh-mahogany hover:text-cmh-gold w-full text-center"
              >
                {link.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;