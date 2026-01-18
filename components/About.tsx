import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-cmh-mahogany text-cmh-cream relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-cmh-gold via-cmh-mahogany to-cmh-mahogany"></div>

      <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
        <h2 className="text-4xl md:text-5xl font-serif text-white mb-8">
          Quality over <span className="italic text-cmh-gold">Quantity</span>.
        </h2>
        
        <div className="space-y-6 text-cmh-cream/80 text-lg leading-relaxed font-light">
          <p>
            Crafted Music House isn't a content mill. We are curators of emotion. 
            We utilize advanced generative AI to create the raw materials of our sound, but every track is 
            meticulously refined, arranged, and polished by human hands.
          </p>
          <p>
            We believe in transparency. Our artists—<span className="text-cmh-gold">Sunny, Ruby, Clyde</span>—are 
            digital personas, but the feelings they evoke are real. We prioritize authenticity, 
            coherence, and storytelling above all else.
          </p>
        </div>

        <div className="mt-16 flex flex-col md:flex-row justify-center gap-12 text-center">
            <div>
                <div className="text-4xl font-serif text-cmh-gold mb-2">100%</div>
                <div className="text-xs uppercase tracking-widest opacity-70">Transparent AI</div>
            </div>
            <div>
                <div className="text-4xl font-serif text-cmh-gold mb-2">Vintage</div>
                <div className="text-xs uppercase tracking-widest opacity-70">Aesthetic</div>
            </div>
            <div>
                <div className="text-4xl font-serif text-cmh-gold mb-2">Human</div>
                <div className="text-xs uppercase tracking-widest opacity-70">Curation</div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default About;