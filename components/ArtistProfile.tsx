import React, { useState, useRef, useEffect } from 'react';
import { ARTISTS } from '../constants';
import { Track, Release } from '../types';
import { Play, Pause, ArrowLeft, Share2, Pencil, Save, X, Bold, Italic, Underline, Upload, Trash2, Plus, Check, Strikethrough, Quote } from 'lucide-react';
import { FaSpotify, FaApple, FaAmazon, FaYoutube } from 'react-icons/fa';

interface ArtistProfileProps {
  artistId: string;
  onNavigate: (page: string) => void;
  onPlayTrack: (track: Track) => void;
  currentTrack: Track | null;
  isPlaying: boolean;
  isAdmin: boolean;
  releases: Release[];
  onAddRelease: (release: Release) => void;
  onUpdateRelease: (release: Release) => void;
  onDeleteRelease: (id: string) => void;
}

const ArtistProfile: React.FC<ArtistProfileProps> = ({ 
  artistId, 
  onNavigate, 
  onPlayTrack, 
  currentTrack, 
  isPlaying, 
  isAdmin,
  releases,
  onAddRelease,
  onUpdateRelease,
  onDeleteRelease
}) => {
  const artist = ARTISTS.find(a => a.id === artistId);
  
  // State for bio editing
  const [bio, setBio] = useState('');
  const [isEditingBio, setIsEditingBio] = useState(false);
  const editorRef = useRef<HTMLDivElement>(null);

  // State for Image Editing
  const [avatarUrl, setAvatarUrl] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  // State for Discography Editing
  const [editingReleaseId, setEditingReleaseId] = useState<string | null>(null);
  const [editForm, setEditForm] = useState<Partial<Release>>({});
  
  const artistReleases = releases.filter(r => r.artist === artist?.name);

  useEffect(() => {
    if (artist) {
      // Initialize bio
      const initialBio = `
        <p>${artist.description}</p>
        <p>Generated from a unique seed of archival recordings and trained on thousands of hours of genre-specific data, ${artist.name.split(' ')[0]} represents a perfect fusion of analog nostalgia and digital precision. Every breath, crackle, and melodic turn is calculated to evoke maximum emotional resonance, curated by our team of human engineers to ensure soulfulness remains at the core.</p>
      `;
      setBio(initialBio);
      
      // Initialize Avatar
      setAvatarUrl(artist.avatar);
    }
  }, [artist]);

  if (!artist) {
    return (
      <div className="min-h-screen pt-32 text-center bg-cmh-cream">
        <h2 className="text-2xl font-serif text-cmh-mahogany">Artist Not Found</h2>
        <button onClick={() => onNavigate('home')} className="mt-4 text-cmh-gold hover:underline">Return Home</button>
      </div>
    );
  }

  const isArtistPlaying = currentTrack?.artist === artist.name && isPlaying;

  // Bio Handlers
  const handleSaveBio = () => {
    if (editorRef.current) {
      setBio(editorRef.current.innerHTML);
    }
    setIsEditingBio(false);
  };

  const handleCancelBio = () => {
    setIsEditingBio(false);
  };

  const execCmd = (command: string, value?: string) => {
    document.execCommand(command, false, value);
  };

  // Image Handlers
  const handleImageLink = () => {
      const url = window.prompt("Enter new image URL:", avatarUrl);
      if (url) setAvatarUrl(url);
  };

  const handleImageUploadTrigger = () => {
      fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (file) {
          const reader = new FileReader();
          reader.onloadend = () => {
              setAvatarUrl(reader.result as string);
          };
          reader.readAsDataURL(file);
      }
  };

  // Discography Handlers
  const handleEditRelease = (release: Release) => {
      setEditingReleaseId(release.id);
      setEditForm({
          ...release,
          links: { ...release.links }
      });
  };

  const handleLinkChange = (platform: keyof Release['links'], value: string) => {
      setEditForm(prev => ({
          ...prev,
          links: {
              ...prev.links,
              [platform]: value
          }
      }));
  };

  const handleSaveRelease = () => {
      if (!editingReleaseId) return;
      onUpdateRelease(editForm as Release);
      setEditingReleaseId(null);
      setEditForm({});
  };

  const handleDeleteReleaseLocal = (id: string) => {
      if (window.confirm("Delete this release?")) {
          onDeleteRelease(id);
      }
  };

  const handleAddReleaseLocal = () => {
      const newRelease: Release = {
          id: `new-${Date.now()}`,
          title: "Untitled Release",
          artist: artist.name, // Pre-fill with current artist
          year: new Date().getFullYear().toString(),
          coverArt: "https://via.placeholder.com/150",
          links: { spotify: '', apple: '', youtube: '', amazon: '' }
      };
      onAddRelease(newRelease);
      setEditingReleaseId(newRelease.id);
      setEditForm(newRelease);
  };

  return (
    <div className="bg-cmh-cream min-h-screen pt-24 pb-20 animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb / Back */}
        <button 
          onClick={() => onNavigate('home')}
          className="flex items-center gap-2 text-cmh-mahogany/60 hover:text-cmh-gold transition-colors mb-8 group"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform"/> Back to Roster
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Image & Quick Actions */}
          <div className="lg:col-span-5">
            <div className="sticky top-32">
              <div className="relative aspect-[3/4] rounded-sm overflow-hidden shadow-2xl mb-8 group bg-gray-100">
                <img 
                  src={avatarUrl} 
                  alt={artist.name} 
                  className="w-full h-full object-cover transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cmh-mahogany/80 via-transparent to-transparent opacity-60 pointer-events-none"></div>
                
                {/* Admin Image Edit Controls */}
                {isAdmin && (
                    <div className="absolute top-4 right-4 flex flex-col gap-2 z-30">
                        <button 
                            onClick={handleImageUploadTrigger}
                            className="w-10 h-10 bg-white text-cmh-mahogany rounded-full flex items-center justify-center shadow-lg hover:bg-cmh-gold hover:text-white transition-colors"
                            title="Upload Image"
                        >
                            <Upload size={18} />
                        </button>
                         <button 
                            onClick={handleImageLink}
                            className="w-10 h-10 bg-white text-cmh-mahogany rounded-full flex items-center justify-center shadow-lg hover:bg-cmh-gold hover:text-white transition-colors"
                            title="Enter Image URL"
                        >
                            <LinkIcon size={18} />
                        </button>
                        <input 
                            type="file" 
                            ref={fileInputRef} 
                            className="hidden" 
                            accept="image/*" 
                            onChange={handleFileChange}
                        />
                    </div>
                )}

                {/* Play Button Overlay */}
                <button 
                  onClick={() => onPlayTrack(artist.demoTrack)}
                  className="absolute bottom-8 right-8 w-16 h-16 bg-cmh-gold text-cmh-mahogany rounded-full flex items-center justify-center shadow-lg hover:scale-110 hover:bg-white transition-all duration-300 z-20"
                >
                   {isArtistPlaying ? <Pause size={24} fill="currentColor" /> : <Play size={24} fill="currentColor" className="ml-1" />}
                </button>
              </div>

            </div>
          </div>

          {/* Right Column: Bio & Discography */}
          <div className="lg:col-span-7 flex flex-col justify-center">
             <div className="flex justify-between items-start">
               <div>
                  <span className="text-cmh-gold font-sans text-sm tracking-[0.2em] uppercase font-bold mb-4 block animate-slide-up" style={{animationDelay: '100ms'}}>
                    {artist.genre}
                  </span>
                  <h1 className="text-5xl md:text-7xl font-serif text-cmh-mahogany mb-8 leading-tight animate-slide-up" style={{animationDelay: '200ms'}}>
                    {artist.name}
                  </h1>
               </div>
               
               {/* Edit Bio Button (Admin Only) */}
               {isAdmin && !isEditingBio && (
                 <button 
                  onClick={() => setIsEditingBio(true)}
                  className="flex items-center gap-2 bg-cmh-mahogany text-white px-4 py-2 text-xs uppercase tracking-widest hover:bg-cmh-gold hover:text-cmh-mahogany transition-colors shadow-lg"
                 >
                   <Pencil size={14} /> Edit Bio
                 </button>
               )}
             </div>
             
             {/* Bio Section */}
             <div className="animate-slide-up mb-12" style={{animationDelay: '300ms'}}>
               {isEditingBio ? (
                 <div className="bg-white border-2 border-cmh-gold rounded-lg overflow-hidden shadow-xl animate-fade-in">
                   {/* Editor Toolbar */}
                   <div className="bg-cmh-cream border-b border-cmh-gold/30 p-2 flex gap-2">
                     <button onClick={() => execCmd('bold')} className="p-2 hover:bg-cmh-gold/20 rounded text-cmh-mahogany" title="Bold">
                       <Bold size={18} />
                     </button>
                     <button onClick={() => execCmd('italic')} className="p-2 hover:bg-cmh-gold/20 rounded text-cmh-mahogany" title="Italic">
                       <Italic size={18} />
                     </button>
                     <button onClick={() => execCmd('underline')} className="p-2 hover:bg-cmh-gold/20 rounded text-cmh-mahogany" title="Underline">
                       <Underline size={18} />
                     </button>
                     <button onClick={() => execCmd('strikethrough')} className="p-2 hover:bg-cmh-gold/20 rounded text-cmh-mahogany" title="Strikethrough">
                       <Strikethrough size={18} />
                     </button>
                     <button onClick={() => execCmd('formatBlock', 'blockquote')} className="p-2 hover:bg-cmh-gold/20 rounded text-cmh-mahogany" title="Blockquote">
                       <Quote size={18} />
                     </button>
                   </div>
                   
                   {/* Editable Area */}
                   <div 
                     ref={editorRef}
                     contentEditable
                     className="p-6 prose prose-lg focus:outline-none min-h-[200px] text-cmh-mahogany/80 font-light"
                     dangerouslySetInnerHTML={{ __html: bio }}
                   ></div>

                   {/* Action Buttons */}
                   <div className="p-4 bg-gray-50 flex justify-end gap-3 border-t border-gray-100">
                     <button 
                      onClick={handleCancelBio}
                      className="px-4 py-2 text-cmh-mahogany text-xs font-bold uppercase tracking-widest hover:bg-gray-200 transition-colors flex items-center gap-2 rounded"
                     >
                       <X size={14} /> Cancel
                     </button>
                     <button 
                      onClick={handleSaveBio}
                      className="px-6 py-2 bg-cmh-gold text-cmh-mahogany text-xs font-bold uppercase tracking-widest hover:bg-cmh-mahogany hover:text-white transition-colors flex items-center gap-2 rounded shadow-sm"
                     >
                       <Save size={14} /> Save Changes
                     </button>
                   </div>
                 </div>
               ) : (
                 <div 
                   className="prose prose-lg text-cmh-mahogany/80 font-light leading-relaxed"
                   dangerouslySetInnerHTML={{ __html: bio }}
                 />
               )}
             </div>

             {/* Discography Section within Profile */}
             <div className="border-t border-cmh-mahogany/10 pt-12 animate-slide-up" style={{animationDelay: '400ms'}}>
               <div className="flex justify-between items-center mb-8">
                 <h3 className="text-2xl font-serif text-cmh-mahogany">Discography</h3>
                 {isAdmin && (
                     <button 
                        onClick={handleAddReleaseLocal}
                        className="flex items-center gap-2 bg-cmh-gold/20 text-cmh-mahogany px-3 py-1 rounded hover:bg-cmh-gold hover:text-white transition-colors text-xs font-bold uppercase tracking-widest"
                     >
                         <Plus size={14} /> Add Release
                     </button>
                 )}
               </div>
               
               <div className="space-y-4">
                 {artistReleases.length > 0 ? artistReleases.map((release) => (
                   <div key={release.id} className={`group flex items-center gap-6 p-4 rounded-lg border transition-all ${editingReleaseId === release.id ? 'bg-white border-cmh-gold shadow-lg' : 'hover:bg-white border-transparent hover:border-cmh-gold/20'}`}>
                      
                      {/* View Mode */}
                      {editingReleaseId !== release.id && (
                          <>
                            <img src={release.coverArt} alt={release.title} className="w-16 h-16 object-cover shadow-sm" />
                            <div className="flex-1">
                                <h4 className="font-serif text-lg text-cmh-mahogany group-hover:text-cmh-gold transition-colors">{release.title}</h4>
                                <span className="text-xs text-cmh-sepia uppercase tracking-widest">
                                  {release.year} • {release.type === 'album' ? `Album (${release.tracks?.length || 0} tracks)` : 'Single'}
                                </span>

                                {/* Album Track Listing */}
                                {release.type === 'album' && release.tracks && (
                                  <div className="mt-3 pl-2 border-l-2 border-cmh-gold/20">
                                    <div className="space-y-1">
                                      {release.tracks.map((track) => (
                                        <div key={track.number} className="flex items-center gap-2 text-xs text-cmh-mahogany/60">
                                          <span className="text-cmh-gold/60 font-mono w-4">{track.number}.</span>
                                          <span className="flex-1">{track.title}</span>
                                          <span className="text-cmh-sepia/40 font-mono text-[10px]">{track.duration}</span>
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                )}
                            </div>
                            
                            {/* Streaming Links - Visible to everyone */}
                            <div className="flex gap-3 opacity-60 hover:opacity-100 transition-opacity mr-4">
                                {release.links?.spotify && <a href={release.links.spotify} target="_blank" rel="noopener noreferrer" className="p-2 hover:text-[#1DB954] transition-colors" title="Spotify"><FaSpotify size={18} /></a>}
                                {release.links?.apple && <a href={release.links.apple} target="_blank" rel="noopener noreferrer" className="p-2 hover:text-[#FA243C] transition-colors" title="Apple Music"><FaApple size={18} /></a>}
                                {release.links?.youtube && <a href={release.links.youtube} target="_blank" rel="noopener noreferrer" className="p-2 hover:text-[#FF0000] transition-colors" title="YouTube"><FaYoutube size={18} /></a>}
                                {release.links?.amazon && <a href={release.links.amazon} target="_blank" rel="noopener noreferrer" className="p-2 hover:text-[#FF9900] transition-colors" title="Amazon Music"><FaAmazon size={18} /></a>}
                            </div>

                            {/* Admin Controls */}
                            {isAdmin && (
                                <div className="flex gap-2 border-l pl-4 border-cmh-mahogany/10">
                                    <button onClick={() => handleEditRelease(release)} className="p-2 text-gray-400 hover:text-cmh-gold transition-colors" title="Edit Release">
                                        <Pencil size={16} />
                                    </button>
                                    <button onClick={() => handleDeleteReleaseLocal(release.id)} className="p-2 text-gray-400 hover:text-red-500 transition-colors" title="Delete Release">
                                        <Trash2 size={16} />
                                    </button>
                                </div>
                            )}
                          </>
                      )}

                      {/* Edit Mode */}
                      {editingReleaseId === release.id && (
                          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 bg-gray-50 p-4 rounded-lg">
                              <div className="col-span-full mb-2 border-b pb-2 text-xs font-bold uppercase tracking-widest text-cmh-gold flex justify-between items-center">
                                  <span>Editing Release</span>
                                  <button onClick={() => setEditingReleaseId(null)} className="text-gray-400 hover:text-red-500"><X size={16}/></button>
                              </div>
                              
                              <div>
                                  <label className="block text-xs text-gray-500 mb-1">Title</label>
                                  <input 
                                    type="text" 
                                    value={editForm.title || ''} 
                                    onChange={(e) => setEditForm({...editForm, title: e.target.value})}
                                    className="w-full bg-white border p-2 text-sm rounded focus:border-cmh-gold outline-none"
                                  />
                              </div>
                              <div>
                                  <label className="block text-xs text-gray-500 mb-1">Year</label>
                                  <input 
                                    type="text" 
                                    value={editForm.year || ''} 
                                    onChange={(e) => setEditForm({...editForm, year: e.target.value})}
                                    className="w-full bg-white border p-2 text-sm rounded focus:border-cmh-gold outline-none"
                                  />
                              </div>
                              <div className="col-span-full">
                                  <label className="block text-xs text-gray-500 mb-1">Cover Art URL</label>
                                  <input 
                                    type="text" 
                                    value={editForm.coverArt || ''} 
                                    onChange={(e) => setEditForm({...editForm, coverArt: e.target.value})}
                                    className="w-full bg-white border p-2 text-sm rounded focus:border-cmh-gold outline-none"
                                  />
                              </div>

                              {/* Streaming Links Section */}
                              <div className="col-span-full mt-2">
                                <label className="block text-xs font-bold text-cmh-mahogany mb-2 uppercase tracking-widest">Streaming Links</label>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                    <div className="relative">
                                        <FaSpotify size={14} className="absolute top-3 left-3 text-gray-400" />
                                        <input
                                            type="text"
                                            placeholder="Spotify URL"
                                            value={editForm.links?.spotify || ''}
                                            onChange={(e) => handleLinkChange('spotify', e.target.value)}
                                            className="w-full bg-white border p-2 pl-9 text-sm rounded focus:border-[#1DB954] outline-none"
                                        />
                                    </div>
                                    <div className="relative">
                                        <FaApple size={14} className="absolute top-3 left-3 text-gray-400" />
                                        <input
                                            type="text"
                                            placeholder="Apple Music URL"
                                            value={editForm.links?.apple || ''}
                                            onChange={(e) => handleLinkChange('apple', e.target.value)}
                                            className="w-full bg-white border p-2 pl-9 text-sm rounded focus:border-[#FA243C] outline-none"
                                        />
                                    </div>
                                    <div className="relative">
                                        <FaYoutube size={14} className="absolute top-3 left-3 text-gray-400" />
                                        <input
                                            type="text"
                                            placeholder="YouTube URL"
                                            value={editForm.links?.youtube || ''}
                                            onChange={(e) => handleLinkChange('youtube', e.target.value)}
                                            className="w-full bg-white border p-2 pl-9 text-sm rounded focus:border-[#FF0000] outline-none"
                                        />
                                    </div>
                                     <div className="relative">
                                        <FaAmazon size={14} className="absolute top-3 left-3 text-gray-400" />
                                        <input
                                            type="text"
                                            placeholder="Amazon Music URL"
                                            value={editForm.links?.amazon || ''}
                                            onChange={(e) => handleLinkChange('amazon', e.target.value)}
                                            className="w-full bg-white border p-2 pl-9 text-sm rounded focus:border-[#FF9900] outline-none"
                                        />
                                    </div>
                                </div>
                              </div>
                              
                              <div className="col-span-full flex justify-end gap-2 mt-4 pt-4 border-t border-gray-200">
                                  <button onClick={() => setEditingReleaseId(null)} className="px-4 py-2 text-xs font-bold uppercase tracking-widest bg-gray-200 hover:bg-gray-300 rounded text-gray-700">Cancel</button>
                                  <button onClick={handleSaveRelease} className="px-6 py-2 text-xs font-bold uppercase tracking-widest bg-cmh-gold text-white hover:bg-cmh-mahogany rounded flex items-center gap-2 shadow-sm"><Check size={16}/> Save Changes</button>
                              </div>
                          </div>
                      )}

                   </div>
                 )) : (
                   <p className="text-cmh-mahogany/50 italic">No releases listed yet.</p>
                 )}
               </div>
             </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default ArtistProfile;