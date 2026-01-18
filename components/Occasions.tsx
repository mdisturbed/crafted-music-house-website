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
                            <h4 className="font-serif text-xl mb-1 text-cmh-cream">Weddings & Anniversaries</h4>
                            <p className="text-sm text-gray-400">Capture your love story in a soulful ballad by Ruby James or a gentle acoustic track by Ezra Blue.</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="w-12 h-12 bg-cmh-mahogany/50 border border-cmh-gold/30 rounded-full flex items-center justify-center shrink-0">
                            <Gift className="text-cmh-gold" size={20} />
                        </div>
                        <div>
                            <h4 className="font-serif text-xl mb-1 text-cmh-cream">Birthdays & Retirements</h4>
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

            {/* Right Visuals */}
            <div className="relative">
                <div className="grid grid-cols-2 gap-4">
                    <img src="https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?q=80&w=600&auto=format&fit=crop" className="rounded-sm translate-y-8 grayscale hover:grayscale-0 transition-all duration-700" alt="Vintage microphone" />
                    <img src="https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?q=80&w=600&auto=format&fit=crop" className="rounded-sm grayscale hover:grayscale-0 transition-all duration-700" alt="Musician performing" />
                    <img src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=600&auto=format&fit=crop" className="rounded-sm grayscale hover:grayscale-0 transition-all duration-700" alt="Music writing" />
                    <img src="https://images.unsplash.com/photo-1470229538611-16ba8c7ffbd7?q=80&w=600&auto=format&fit=crop" className="rounded-sm -translate-y-8 grayscale hover:grayscale-0 transition-all duration-700" alt="Recording studio" />
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