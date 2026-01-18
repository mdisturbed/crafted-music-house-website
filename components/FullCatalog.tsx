import React, { useState } from 'react';
import { Release } from '../types';
import { Pencil, Trash2, Plus, X, Check, Volume2 } from 'lucide-react';
import { FaSpotify, FaApple, FaAmazon, FaYoutube } from 'react-icons/fa';

interface FullCatalogProps {
  releases: Release[];
  isAdmin: boolean;
  onAddRelease: (release: Release) => void;
  onUpdateRelease: (release: Release) => void;
  onDeleteRelease: (id: string) => void;
}

const FullCatalog: React.FC<FullCatalogProps> = ({ 
  releases, 
  isAdmin, 
  onAddRelease, 
  onUpdateRelease, 
  onDeleteRelease 
}) => {
  const [editingReleaseId, setEditingReleaseId] = useState<string | null>(null);
  const [editForm, setEditForm] = useState<Partial<Release>>({});

  const handleEditRelease = (release: Release) => {
    setEditingReleaseId(release.id);
    // Create a safe copy of the release and ensure links object exists and is a new reference
    setEditForm({
      ...release,
      links: release.links ? { ...release.links } : { spotify: '', apple: '', youtube: '', amazon: '' }
    });
  };

  const handleLinkChange = (platform: keyof Release['links'], value: string) => {
    setEditForm(prev => ({
      ...prev,
      links: {
        ...(prev.links || {}),
        [platform]: value
      }
    }));
  };

  const handleSaveRelease = () => {
    if (!editingReleaseId) return;
    
    // Validate required fields
    if (!editForm.title || !editForm.artist) {
      alert("Title and Artist are required");
      return;
    }

    onUpdateRelease(editForm as Release);
    setEditingReleaseId(null);
    setEditForm({});
  };

  const handleDelete = (id: string) => {
    if (window.confirm("Are you sure you want to delete this release from the catalog?")) {
      onDeleteRelease(id);
    }
  };

  const handleAdd = () => {
    const newRelease: Release = {
      id: `new-${Date.now()}`,
      title: "New Single",
      artist: "Select Artist",
      year: new Date().getFullYear().toString(),
      coverArt: "https://via.placeholder.com/400x400.png?text=Cover+Art",
      src: "",
      links: { spotify: '', apple: '', youtube: '', amazon: '' }
    };
    onAddRelease(newRelease);
    // Immediately enter edit mode for the new item
    setEditingReleaseId(newRelease.id);
    setEditForm(newRelease);
  };

  return (
    <div className="pt-32 pb-24 min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
          <div className="text-center md:text-left">
            <span className="text-cmh-gold font-sans text-sm tracking-widest uppercase mb-2 block">The Archives</span>
            <h1 className="text-5xl font-serif text-cmh-mahogany mb-4">Complete Discography</h1>
            <p className="text-cmh-mahogany/60 max-w-2xl">Browse our entire collection of soulful, AI-assisted releases.</p>
          </div>
          
          {isAdmin && (
            <button 
              onClick={handleAdd}
              className="bg-cmh-gold text-white px-6 py-3 rounded-sm font-bold uppercase tracking-widest hover:bg-cmh-mahogany transition-colors flex items-center gap-2 shadow-lg"
            >
              <Plus size={18} /> Add Release
            </button>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {releases.map((release) => (
               <div key={release.id} className={`group relative transition-all duration-300 ${editingReleaseId === release.id ? 'col-span-1 sm:col-span-2 lg:col-span-3 bg-cmh-cream/30 p-6 rounded-lg border-2 border-cmh-gold shadow-2xl' : ''}`}>
                 
                 {editingReleaseId !== release.id ? (
                   /* View Mode */
                   <>
                     <div className="relative aspect-square bg-cmh-cream mb-4 overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300">
                       <img 
                         src={release.coverArt} 
                         alt={release.title} 
                         className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                       />
                       
                       {/* Admin Edit Overlay */}
                       {isAdmin && (
                         <div className="absolute top-2 right-2 flex gap-2 z-20">
                           <button 
                             onClick={() => handleEditRelease(release)}
                             className="bg-white/90 text-cmh-mahogany p-2 rounded-full hover:bg-cmh-gold hover:text-white transition-colors shadow-md"
                             title="Edit"
                           >
                             <Pencil size={16} />
                           </button>
                           <button 
                             onClick={() => handleDelete(release.id)}
                             className="bg-white/90 text-red-500 p-2 rounded-full hover:bg-red-500 hover:text-white transition-colors shadow-md"
                             title="Delete"
                           >
                             <Trash2 size={16} />
                           </button>
                         </div>
                       )}

                       <div className="absolute inset-0 bg-cmh-mahogany/90 flex flex-col items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                         <div className="flex gap-4">
                           {release.links?.spotify && (
                             <a href={release.links.spotify} target="_blank" rel="noopener noreferrer" className="p-3 bg-white/10 hover:bg-[#1DB954] hover:text-white rounded-full transition-colors text-white">
                               <FaSpotify size={20} />
                             </a>
                           )}
                           {release.links?.apple && (
                             <a href={release.links.apple} target="_blank" rel="noopener noreferrer" className="p-3 bg-white/10 hover:bg-[#FA243C] hover:text-white rounded-full transition-colors text-white">
                               <FaApple size={20} />
                             </a>
                           )}
                           {release.links?.amazon && (
                             <a href={release.links.amazon} target="_blank" rel="noopener noreferrer" className="p-3 bg-white/10 hover:bg-[#FF9900] hover:text-white rounded-full transition-colors text-white">
                               <FaAmazon size={20} />
                             </a>
                           )}
                           {release.links?.youtube && (
                             <a href={release.links.youtube} target="_blank" rel="noopener noreferrer" className="p-3 bg-white/10 hover:bg-[#FF0000] hover:text-white rounded-full transition-colors text-white">
                               <FaYoutube size={20} />
                             </a>
                           )}
                         </div>
                       </div>
                     </div>
       
                     <div className="text-center">
                       <h3 className="text-xl font-serif text-cmh-mahogany group-hover:text-cmh-gold transition-colors">
                         {release.title}
                       </h3>
                       <p className="text-cmh-sepia text-sm font-medium tracking-wide mt-1">{release.artist}</p>
                       <p className="text-gray-400 text-xs font-sans mt-1">{release.year}</p>
                     </div>
                   </>
                 ) : (
                   /* Edit Mode */
                   <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      <div className="space-y-4">
                        <div className="flex justify-between items-center border-b border-cmh-mahogany/10 pb-2 mb-4">
                           <h3 className="font-serif font-bold text-cmh-mahogany uppercase tracking-widest text-lg">Editing Release</h3>
                           <button onClick={() => setEditingReleaseId(null)} className="text-cmh-mahogany/40 hover:text-cmh-mahogany transition-colors"><X size={20}/></button>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                           <div className="col-span-2">
                              <label className="block text-xs font-bold text-cmh-mahogany/80 mb-1 uppercase tracking-wider">Title</label>
                              <input 
                                type="text" 
                                value={editForm.title || ''} 
                                onChange={(e) => setEditForm({...editForm, title: e.target.value})}
                                className="w-full bg-white text-cmh-mahogany border border-cmh-mahogany/20 p-3 rounded-sm focus:border-cmh-gold outline-none transition-colors"
                                placeholder="Enter track title"
                              />
                           </div>
                           <div>
                              <label className="block text-xs font-bold text-cmh-mahogany/80 mb-1 uppercase tracking-wider">Artist Name</label>
                              <input 
                                type="text" 
                                value={editForm.artist || ''} 
                                onChange={(e) => setEditForm({...editForm, artist: e.target.value})}
                                className="w-full bg-white text-cmh-mahogany border border-cmh-mahogany/20 p-3 rounded-sm focus:border-cmh-gold outline-none transition-colors"
                                placeholder="Artist Name"
                              />
                           </div>
                           <div>
                              <label className="block text-xs font-bold text-cmh-mahogany/80 mb-1 uppercase tracking-wider">Year</label>
                              <input 
                                type="text" 
                                value={editForm.year || ''} 
                                onChange={(e) => setEditForm({...editForm, year: e.target.value})}
                                className="w-full bg-white text-cmh-mahogany border border-cmh-mahogany/20 p-3 rounded-sm focus:border-cmh-gold outline-none transition-colors"
                                placeholder="YYYY"
                              />
                           </div>
                           <div className="col-span-2">
                              <label className="block text-xs font-bold text-cmh-mahogany/80 mb-1 uppercase tracking-wider">Cover Art URL</label>
                              <input 
                                type="text" 
                                value={editForm.coverArt || ''} 
                                onChange={(e) => setEditForm({...editForm, coverArt: e.target.value})}
                                className="w-full bg-white text-cmh-mahogany border border-cmh-mahogany/20 p-3 rounded-sm focus:border-cmh-gold outline-none transition-colors"
                                placeholder="https://..."
                              />
                           </div>
                           <div className="col-span-2">
                              <label className="block text-xs font-bold text-cmh-mahogany/80 mb-1 uppercase tracking-wider flex items-center gap-2"><Volume2 size={12}/> Audio Source URL</label>
                              <input 
                                type="text" 
                                value={editForm.src || ''} 
                                onChange={(e) => setEditForm({...editForm, src: e.target.value})}
                                className="w-full bg-white text-cmh-mahogany border border-cmh-mahogany/20 p-3 rounded-sm focus:border-cmh-gold outline-none transition-colors"
                                placeholder="https://example.com/song.mp3"
                              />
                           </div>
                        </div>

                        <div className="bg-cmh-mahogany/5 p-4 rounded-lg mt-2">
                          <label className="block text-xs font-bold text-cmh-mahogany mb-3 uppercase tracking-widest border-b border-cmh-mahogany/10 pb-2">Streaming Links</label>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                              <div className="relative">
                                <FaSpotify size={14} className="absolute top-3.5 left-3 text-cmh-mahogany/40" />
                                <input
                                    type="text"
                                    placeholder="Spotify URL"
                                    value={editForm.links?.spotify || ''}
                                    onChange={(e) => handleLinkChange('spotify', e.target.value)}
                                    className="w-full bg-white text-cmh-mahogany border border-cmh-mahogany/20 p-2.5 pl-9 text-sm rounded-sm focus:border-[#1DB954] outline-none"
                                />
                              </div>
                              <div className="relative">
                                <FaApple size={14} className="absolute top-3.5 left-3 text-cmh-mahogany/40" />
                                <input
                                    type="text"
                                    placeholder="Apple Music URL"
                                    value={editForm.links?.apple || ''}
                                    onChange={(e) => handleLinkChange('apple', e.target.value)}
                                    className="w-full bg-white text-cmh-mahogany border border-cmh-mahogany/20 p-2.5 pl-9 text-sm rounded-sm focus:border-[#FA243C] outline-none"
                                />
                              </div>
                              <div className="relative">
                                <FaYoutube size={14} className="absolute top-3.5 left-3 text-cmh-mahogany/40" />
                                <input
                                    type="text"
                                    placeholder="YouTube URL"
                                    value={editForm.links?.youtube || ''}
                                    onChange={(e) => handleLinkChange('youtube', e.target.value)}
                                    className="w-full bg-white text-cmh-mahogany border border-cmh-mahogany/20 p-2.5 pl-9 text-sm rounded-sm focus:border-[#FF0000] outline-none"
                                />
                              </div>
                              <div className="relative">
                                <FaAmazon size={14} className="absolute top-3.5 left-3 text-cmh-mahogany/40" />
                                <input
                                    type="text"
                                    placeholder="Amazon Music URL"
                                    value={editForm.links?.amazon || ''}
                                    onChange={(e) => handleLinkChange('amazon', e.target.value)}
                                    className="w-full bg-white text-cmh-mahogany border border-cmh-mahogany/20 p-2.5 pl-9 text-sm rounded-sm focus:border-[#FF9900] outline-none"
                                />
                              </div>
                          </div>
                        </div>

                        <div className="flex justify-end gap-3 pt-4 border-t border-cmh-mahogany/10">
                           <button onClick={() => setEditingReleaseId(null)} className="px-6 py-3 text-xs font-bold uppercase tracking-widest text-cmh-mahogany hover:bg-cmh-mahogany/5 rounded-sm transition-colors">Cancel</button>
                           <button onClick={handleSaveRelease} className="px-8 py-3 text-xs font-bold uppercase tracking-widest bg-cmh-gold text-white hover:bg-cmh-mahogany rounded-sm flex items-center gap-2 shadow-lg transition-colors"><Check size={16}/> Save Changes</button>
                        </div>
                      </div>
                      
                      {/* Live Preview of Card */}
                      <div className="flex flex-col items-center justify-center bg-white border border-cmh-mahogany/10 p-8 rounded-lg shadow-inner">
                          <span className="text-xs uppercase tracking-widest text-cmh-mahogany/40 mb-6">Live Preview</span>
                          <div className="w-64 bg-white p-6 shadow-2xl rounded-sm border border-gray-100">
                             <div className="aspect-square bg-gray-100 mb-6 overflow-hidden">
                                <img src={editForm.coverArt} className="w-full h-full object-cover" alt="Preview" onError={(e) => (e.currentTarget.src = 'https://via.placeholder.com/400x400.png?text=No+Image')}/>
                             </div>
                             <div className="text-center">
                               <h3 className="font-serif text-xl text-cmh-mahogany leading-tight mb-2">{editForm.title || 'Track Title'}</h3>
                               <p className="text-xs text-cmh-gold font-bold uppercase tracking-widest">{editForm.artist || 'Artist Name'}</p>
                             </div>
                          </div>
                      </div>
                   </div>
                 )}
               </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default FullCatalog;