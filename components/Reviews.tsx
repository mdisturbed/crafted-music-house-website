import React from 'react';
import { Star, Quote } from 'lucide-react';
import { Card, CardContent, CardFooter } from './ui/card';

const REVIEWS = [
  {
    id: 1,
    name: "Sarah Jenkins",
    role: "Wedding Client",
    text: "We commissioned a custom song for our first dance. Salvatore's voice was hauntingly beautiful. Nobody believed it was AI-assisted; it felt so human.",
    rating: 5,
  },
  {
    id: 2,
    name: "Marcus Thorne",
    role: "Music Critic",
    text: "I was skeptical about 'Crafted Music House' at first. But after listening to Sunny Boudreaux, I'm a believer. The texture, the crackle, the soul... it's all there.",
    rating: 5,
  },
  {
    id: 3,
    name: "Elena Rodriguez",
    role: "Birthday Gift",
    text: "Got a custom blues track for my dad's 60th. He cried. He literally cried. Best gift I've ever given. The process was smooth and the result was incredible.",
    rating: 5,
  }
];

const Reviews: React.FC = () => {
  return (
    <section className="py-24 bg-cmh-cream relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-cmh-gold/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cmh-mahogany/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="text-cmh-gold font-sans text-sm tracking-widest uppercase mb-2 block">Testimonials</span>
          <h2 className="text-4xl md:text-5xl font-serif text-cmh-mahogany">Resonance & <span className="italic text-cmh-sepia">Reviews</span></h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {REVIEWS.map((review) => (
            <Card key={review.id} className="relative group hover:-translate-y-1 border-cmh-mahogany/5">
              <CardContent className="pt-8">
                <Quote className="absolute top-6 right-6 text-cmh-gold/20 group-hover:text-cmh-gold/40 transition-colors" size={40} />
                
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={14} className="fill-cmh-gold text-cmh-gold" />
                  ))}
                </div>

                <p className="text-cmh-mahogany/80 font-light italic mb-6 leading-relaxed">"{review.text}"</p>
              </CardContent>
              <CardFooter className="border-t border-cmh-mahogany/10 pt-4 bg-gray-50/50">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-cmh-mahogany text-white rounded-full flex items-center justify-center font-serif font-bold text-lg shadow-md">
                    {review.name[0]}
                    </div>
                    <div>
                    <h4 className="font-serif text-cmh-mahogany text-sm font-bold">{review.name}</h4>
                    <p className="text-xs text-cmh-sepia uppercase tracking-wider">{review.role}</p>
                    </div>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;