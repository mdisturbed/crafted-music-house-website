import React from 'react';
import { Download, Camera, FileText } from 'lucide-react';
import Logo from './Logo';

const PressKit: React.FC = () => {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
            <h1 className="text-5xl font-serif text-cmh-mahogany mb-4">Press Kit</h1>
            <p className="text-cmh-mahogany/75">Assets and information for media and partners.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Bio Section */}
            <div className="space-y-6">
                <h3 className="text-2xl font-serif text-cmh-mahogany border-b border-cmh-gold/30 pb-2">About Crafted Music House</h3>
                <div className="prose text-cmh-mahogany/80 font-light">
                    <p>
                        Crafted Music House is a boutique record label pioneering the ethical use of generative AI in music production. 
                        Established in 2024, the label focuses on "soulful stories, crafted with care," prioritizing emotional authenticity 
                        over mass production.
                    </p>
                    <p>
                        Our roster features distinct AI personas, each carefully curated with unique backstories, visual identities, 
                        and musical styles ranging from 1940s Jazz to Deep South Blues.
                    </p>
                </div>
                <button className="flex items-center gap-2 text-cmh-gold font-bold uppercase text-xs tracking-widest hover:text-cmh-mahogany transition-colors">
                    <FileText size={16} /> Download Full Bio (PDF)
                </button>
            </div>

            {/* Assets Section */}
            <div className="space-y-8">
                <div>
                    <h3 className="text-2xl font-serif text-cmh-mahogany border-b border-cmh-gold/30 pb-2 mb-4">Logos</h3>
                    <div className="bg-cmh-cream p-8 flex items-center justify-center gap-8 mb-2 border border-cmh-mahogany/10">
                        {/* Stacked Version (Implicit) */}
                        <div className="flex flex-col items-center gap-4">
                             <div className="text-cmh-mahogany">
                                <Logo className="h-16 w-16" />
                             </div>
                             <span className="text-xl font-serif font-bold text-cmh-mahogany">
                                CRAFTED <span className="text-cmh-gold italic">MUSIC</span> HOUSE
                            </span>
                        </div>
                    </div>
                    <button className="flex items-center gap-2 text-cmh-mahogany/75 hover:text-cmh-gold text-sm">
                        <Download size={16} /> Download Vector Pack (.EPS)
                    </button>
                </div>

                <div>
                    <h3 className="text-2xl font-serif text-cmh-mahogany border-b border-cmh-gold/30 pb-2 mb-4">Artist Photos</h3>
                    <div className="grid grid-cols-4 gap-2 mb-2">
                        <div className="aspect-square bg-gray-200"></div>
                        <div className="aspect-square bg-gray-200"></div>
                        <div className="aspect-square bg-gray-200"></div>
                        <div className="aspect-square bg-gray-200"></div>
                    </div>
                    <button className="flex items-center gap-2 text-cmh-mahogany/75 hover:text-cmh-gold text-sm">
                        <Camera size={16} /> Download High-Res Gallery
                    </button>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default PressKit;