import React from 'react';
import { Gift, Heart, Calendar, ArrowRight } from 'lucide-react';

interface OccasionsProps {
  onNavigate: (page: string) => void;
}

const Occasions: React.FC<OccasionsProps> = ({ onNavigate }) => {
  return (
    <section id="occasions" className="py-32 bg-cmh-midnight text-cmh-cream relative overflow-hidden">
        {/* Background Accents */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-cmh-gold/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cmh-sepia/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Content */}
            <div>
                <span className="text-cmh-gold font-sans text-sm tracking-widest uppercase mb-4 block">Crafted For You</span>
                <h2 className="text-4xl md:text-6xl font-serif mb-8 text-white leading-tight">
                    Turn your memories <br/> into <span className="text-cmh-sepia italic">melody.</span>
                </h2>
                <p className="text-gray-300 text-lg mb-8 leading-relaxed font-light">
                    Looking for a gift that truly resonates? We create custom, AI-assisted songs for life's most meaningful moments. 
                    Choose a persona from our roster, tell us your story, and receive a one-of-a-kind track that sounds like a timeless classic.
                </p>

                <div className="space-y-6">
                    <div className="flex gap-4">
                        <div className="w-12 h-12 bg-cmh-mahogany/50 border border-cmh-gold/30 rounded-full flex items-center justify-center shrink-0">
                            <Heart className="text-cmh-gold" size={20} />
                        </div>
                        <div>
                            <p className="font-serif text-xl mb-1 text-cmh-cream font-semibold">Weddings & Anniversaries</p>
                            <p className="text-sm text-gray-400">Capture your love story in a soulful ballad by Ruby James or an intimate lounge track by Salvatore Moretti.</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="w-12 h-12 bg-cmh-mahogany/50 border border-cmh-gold/30 rounded-full flex items-center justify-center shrink-0">
                            <Gift className="text-cmh-gold" size={20} />
                        </div>
                        <div>
                            <p className="font-serif text-xl mb-1 text-cmh-cream font-semibold">Birthdays & Retirements</p>
                            <p className="text-sm text-gray-400">Celebrate milestones with a personalized upbeat jazz number from Sunny Boudreaux.</p>
                        </div>
                    </div>
                </div>

                <button 
                  onClick={() => onNavigate('inquiry')}
                  className="mt-12 px-8 py-4 bg-cmh-gold text-cmh-mahogany font-bold uppercase tracking-widest hover:bg-white transition-colors duration-300 flex items-center gap-2"
                >
                    Start Your Story <ArrowRight size={16} />
                </button>
            </div>

            {/* Right Visuals - Occasion themed patterns */}
            <div className="relative">
                <div className="grid grid-cols-2 gap-4">
                    {/* Wedding/Romance theme */}
                    <div className="rounded-sm translate-y-8 aspect-[3/2] border border-cmh-gold/30 relative overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-br from-cmh-sepia/40 via-cmh-gold/20 to-cmh-mahogany/30"></div>
                        <div className="absolute inset-0 flex items-center justify-center opacity-40 group-hover:opacity-60 transition-opacity">
                            <Heart size={80} className="text-cmh-gold" strokeWidth={1.5} />
                        </div>
                    </div>
                    {/* Celebration theme */}
                    <div className="rounded-sm aspect-[3/2] border border-cmh-gold/30 relative overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-br from-cmh-gold/30 via-cmh-cream/10 to-cmh-sepia/40"></div>
                        <div className="absolute inset-0 flex items-center justify-center opacity-40 group-hover:opacity-60 transition-opacity">
                            <Gift size={80} className="text-cmh-gold" strokeWidth={1.5} />
                        </div>
                    </div>
                    {/* Musical moment theme */}
                    <div className="rounded-sm aspect-[3/2] border border-cmh-gold/30 relative overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-br from-cmh-mahogany/30 via-cmh-sepia/20 to-cmh-gold/30"></div>
                        <div className="absolute inset-0 flex items-center justify-center opacity-40 group-hover:opacity-60 transition-opacity">
                            <Calendar size={80} className="text-cmh-gold" strokeWidth={1.5} />
                        </div>
                    </div>
                    {/* Memory theme */}
                    <div className="rounded-sm -translate-y-8 aspect-[3/2] border border-cmh-gold/30 relative overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-br from-cmh-sepia/35 via-cmh-mahogany/25 to-cmh-gold/35"></div>
                        <div className="absolute inset-0 flex items-center justify-center opacity-40 group-hover:opacity-60 transition-opacity">
                            <Heart size={80} className="text-cmh-gold" strokeWidth={1.5} />
                        </div>
                    </div>
                </div>
                {/* Decorative border */}
                <div className="absolute inset-0 border border-cmh-gold/20 m-4 pointer-events-none"></div>
            </div>

        </div>
      </div>
    </section>
  );
};

export default Occasions;