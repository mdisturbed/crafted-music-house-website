import React, { useState } from 'react';
import { ArrowRight, Mail } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'subscribed'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setStatus('subscribed');
      // In a real app, this would send to an API
      setEmail('');
    }
  };

  return (
    <section className="relative py-24 overflow-hidden group">
        {/* Background Layer */}
        <div className="absolute inset-0 bg-cmh-midnight">
             {/* Radial gradient pattern instead of image */}
             <div className="absolute inset-0 opacity-20" style={{backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(212, 165, 116, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(201, 162, 39, 0.2) 0%, transparent 50%)'}}></div>

             {/* Gradient Overlays for readability */}
             <div className="absolute inset-0 bg-gradient-to-t from-cmh-midnight via-cmh-mahogany/90 to-cmh-midnight/80"></div>

             {/* CSS noise texture */}
             <div className="absolute inset-0 opacity-5" style={{backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 1px, rgba(255,255,255,0.03) 1px, rgba(255,255,255,0.03) 2px), repeating-linear-gradient(0deg, transparent, transparent 1px, rgba(255,255,255,0.03) 1px, rgba(255,255,255,0.03) 2px)'}}></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 relative z-10 text-center text-cmh-cream">
            <div className="inline-flex items-center gap-2 bg-cmh-gold/20 text-cmh-gold px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-6 border border-cmh-gold/20 backdrop-blur-sm">
                <Mail size={12} /> The Inner Circle
            </div>
            
            <h2 className="text-3xl md:text-5xl font-serif mb-4 drop-shadow-lg">
                Don't miss the next <span className="text-cmh-gold italic">drop.</span>
            </h2>
            <p className="text-cmh-cream/70 mb-8 font-light max-w-xl mx-auto leading-relaxed drop-shadow-md">
                Join our exclusive list to receive early notification on new artists, music dropping and more.
            </p>

            {status === 'idle' ? (
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                    <Input 
                        type="email" 
                        placeholder="Enter your email address" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="bg-white/10 border-white/20 text-white placeholder:text-white/40 focus-visible:ring-cmh-gold h-14"
                    />
                    <Button 
                        type="submit" 
                        variant="gold"
                        size="lg"
                        className="gap-2"
                    >
                        Join <ArrowRight size={16} />
                    </Button>
                </form>
            ) : (
                <div className="bg-white/10 border border-cmh-gold/30 p-6 rounded-sm animate-fade-in max-w-md mx-auto backdrop-blur-md">
                    <p className="text-xl font-serif text-cmh-gold mb-2">Welcome to the family.</p>
                    <p className="text-sm text-cmh-cream/70">Keep an eye on your inbox. We'll be in touch soon.</p>
                </div>
            )}
            
            <p className="mt-8 text-xs text-cmh-cream/40 uppercase tracking-widest">
                No Spam. Just Soul.
            </p>
        </div>
    </section>
  );
};

export default Newsletter;