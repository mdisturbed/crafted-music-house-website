import React, { useState, lazy, Suspense } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ArtistRoster from './components/ArtistRoster';
import Discography from './components/Discography';
import Occasions from './components/Occasions';
import About from './components/About';
import Footer from './components/Footer';
import MusicPlayer from './components/MusicPlayer';
import AdminLoginModal from './components/AdminLoginModal';
import Reviews from './components/Reviews';
import Newsletter from './components/Newsletter';
import { Track, Release } from './types';
import { RELEASES } from './constants';

// Code-split heavy components that aren't needed on initial load
const Legal = lazy(() => import('./components/Legal'));
const FullCatalog = lazy(() => import('./components/FullCatalog'));
const Inquiry = lazy(() => import('./components/Inquiry'));
const PressKit = lazy(() => import('./components/PressKit'));
const ArtistProfile = lazy(() => import('./components/ArtistProfile'));

const App: React.FC = () => {
  const [currentTrack, setCurrentTrack] = useState<Track | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');
  const [isAdmin, setIsAdmin] = useState(false); // Admin state
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  
  // Lifted State for Releases
  const [releases, setReleases] = useState<Release[]>(RELEASES);

  // Release Handlers
  const handleAddRelease = (newRelease: Release) => {
    setReleases(prev => [newRelease, ...prev]);
  };

  const handleUpdateRelease = (updatedRelease: Release) => {
    setReleases(prev => prev.map(r => r.id === updatedRelease.id ? updatedRelease : r));
  };

  const handleDeleteRelease = (id: string) => {
    setReleases(prev => prev.filter(r => r.id !== id));
  };

  const handlePlayTrack = (track: Track) => {
    if (currentTrack?.title === track.title) {
      setIsPlaying(!isPlaying);
    } else {
      setCurrentTrack(track);
      setIsPlaying(true);
    }
  };

  const handleTogglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNavigate = (page: string) => {
    if (page.startsWith('#')) {
      // Navigation to an anchor on the home page
      if (currentPage !== 'home') {
        setCurrentPage('home');
        // Small delay to allow home component to mount before scrolling
        setTimeout(() => scrollToSection(page.substring(1)), 100);
      } else {
        scrollToSection(page.substring(1));
      }
    } else {
      // Navigation to a different "page" view
      setCurrentPage(page);
      window.scrollTo(0, 0);
    }
  };

  // Admin Logic
  const handleToggleAdmin = () => {
    if (isAdmin) {
      setIsAdmin(false);
    } else {
      setIsLoginModalOpen(true);
    }
  };

  const handleAdminLogin = (password: string) => {
    // In a real app, verify against backend
    if (password === 'crafted2025' || password === 'admin') {
      setIsAdmin(true);
      setIsLoginModalOpen(false);
      return true;
    }
    return false;
  };

  const renderContent = () => {
    // Dynamic route matching for artist profile
    if (currentPage.startsWith('artist:')) {
      const artistId = currentPage.split(':')[1];
      return (
        <ArtistProfile 
          artistId={artistId} 
          onNavigate={handleNavigate}
          onPlayTrack={handlePlayTrack}
          currentTrack={currentTrack}
          isPlaying={isPlaying}
          isAdmin={isAdmin} // Pass admin state
          releases={releases}
          onAddRelease={handleAddRelease}
          onUpdateRelease={handleUpdateRelease}
          onDeleteRelease={handleDeleteRelease}
        />
      );
    }

    switch (currentPage) {
      case 'home':
        return (
          <>
            <Hero onNavigate={handleNavigate} />
            <ArtistRoster 
              onPlayTrack={handlePlayTrack} 
              currentTrack={currentTrack}
              isPlaying={isPlaying}
              onNavigate={handleNavigate}
            />
            <Occasions onNavigate={handleNavigate} />
            <Discography 
              onNavigate={handleNavigate} 
              releases={releases}
            />
            <Reviews />
            <About />
            <Newsletter />
          </>
        );
      case 'privacy':
        return <Legal type="privacy" />;
      case 'terms':
        return <Legal type="terms" />;
      case 'licensing':
        return <Legal type="licensing" />;
      case 'catalog':
        return (
          <FullCatalog 
            releases={releases}
            isAdmin={isAdmin}
            onAddRelease={handleAddRelease}
            onUpdateRelease={handleUpdateRelease}
            onDeleteRelease={handleDeleteRelease}
          />
        );
      case 'inquiry':
        return <Inquiry />;
      case 'press':
        return <PressKit />;
      default:
        return null;
    }
  };

  return (
    <div className="bg-cmh-cream min-h-screen text-cmh-mahogany font-sans selection:bg-cmh-gold selection:text-cmh-mahogany">
      <Navbar onNavigate={handleNavigate} />
      <main>
        <Suspense fallback={
          <div className="flex items-center justify-center min-h-screen">
            <div className="animate-pulse text-cmh-gold text-xl">Loading...</div>
          </div>
        }>
          {renderContent()}
        </Suspense>
      </main>

      <Footer
        onNavigate={handleNavigate}
        isAdmin={isAdmin}
        onToggleAdmin={handleToggleAdmin}
      />

      <MusicPlayer
        track={currentTrack}
        isPlaying={isPlaying}
        onTogglePlay={handleTogglePlay}
        onNext={() => console.log('Next track')}
        onPrev={() => console.log('Prev track')}
        releases={releases}
        onPlayTrack={handlePlayTrack}
      />

      <AdminLoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
        onLogin={handleAdminLogin}
      />
    </div>
  );
};

export default App;