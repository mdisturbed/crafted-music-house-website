import React, { useState } from 'react';
import { Send, Star, UserPlus, CheckCircle, AlertCircle } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Card, CardContent } from './ui/card';

const Inquiry: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    occasion: 'Wedding / Anniversary',
    artistPreference: 'roster',
    customPersonaName: '',
    customGenre: '',
    customBackstory: '',
    details: ''
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  // Pricing Constants
  const BASE_PRICE = 49;
  const CUSTOM_ARTIST_FEE = 50;

  const currentPrice = formData.artistPreference === 'custom' ? BASE_PRICE + CUSTOM_ARTIST_FEE : BASE_PRICE;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      const response = await fetch('https://formspree.io/f/xaqqdrgb', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          occasion: formData.occasion,
          artistPreference: formData.artistPreference,
          customPersonaName: formData.customPersonaName,
          customGenre: formData.customGenre,
          customBackstory: formData.customBackstory,
          details: formData.details,
          estimatedPrice: `$${currentPrice}`,
          _subject: `Inquiry: ${formData.occasion} - ${formData.name}`,
        }),
      });

      if (response.ok) {
        setStatus('success');
        // Reset form after successful submission
        setFormData({
          name: '',
          email: '',
          occasion: 'Wedding / Anniversary',
          artistPreference: 'roster',
          customPersonaName: '',
          customGenre: '',
          customBackstory: '',
          details: ''
        });
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <div className="pt-32 pb-24 min-h-screen bg-cmh-cream flex items-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 w-full">
        
        <Card className="grid grid-cols-1 lg:grid-cols-2 gap-0 overflow-hidden shadow-2xl border-t-4 border-t-cmh-gold border-x-0 border-b-0">
            {/* Left Column (Info) */}
            <div className="p-8 md:p-12 bg-white">
                <span className="text-cmh-gold font-sans text-sm tracking-widest uppercase mb-2 block">Custom Composition</span>
                <h1 className="text-4xl font-serif text-cmh-mahogany mb-6">Start Your Story</h1>
                <p className="text-cmh-mahogany/70 mb-6 leading-relaxed">
                    Tell us about your special occasion. Whether it's a wedding, a birthday, or just a gift for someone special, we'll craft a unique song that captures the moment perfectly.
                </p>
                
                <div className="bg-cmh-cream/50 p-6 rounded-sm border border-cmh-gold/10 mb-6">
                    <h3 className="font-serif text-lg text-cmh-mahogany mb-3 flex items-center gap-2">
                        <Star className="text-cmh-gold fill-current" size={16}/> The Process
                    </h3>
                    <ul className="text-sm space-y-3 text-cmh-mahogany/80">
                        <li>1. <strong>Describe Your Vision:</strong> Share the mood, genre, and key details or lyrics.</li>
                        <li>2. <strong>Select the Voice:</strong> Choose a persona from our roster or create a bespoke artist.</li>
                        <li>3. <strong>Production:</strong> We generate, curate, and engineer the track.</li>
                        <li>4. <strong>Delivery:</strong> Master quality audio in 48 hours.</li>
                    </ul>
                </div>

                <div className="bg-cmh-midnight/5 p-6 rounded-sm border border-cmh-midnight/10">
                    <h3 className="font-serif text-lg text-cmh-mahogany mb-2 flex items-center gap-2">
                        <UserPlus className="text-cmh-gold" size={18}/> New: Bespoke Artist
                    </h3>
                    <p className="text-sm text-cmh-mahogany/70">
                        For an additional <strong>${CUSTOM_ARTIST_FEE}</strong>, we will generate a brand new, exclusive artist persona (name, backstory, and vocal style) tailored specifically to your narrative.
                    </p>
                </div>
            </div>

            {/* Right Column (Form) */}
            <div className="p-8 md:p-12 bg-gray-50/50">
            <form className="space-y-6" onSubmit={handleSubmit}>
                {/* Success Message */}
                {status === 'success' && (
                  <div className="bg-green-50 border border-green-200 rounded-sm p-4 flex items-start gap-3">
                    <CheckCircle className="text-green-600 flex-shrink-0 mt-0.5" size={20} />
                    <div>
                      <h4 className="font-bold text-green-900 mb-1">Request Submitted!</h4>
                      <p className="text-sm text-green-800">Thank you for your inquiry. We'll be in touch within 24 hours to discuss your custom song.</p>
                    </div>
                  </div>
                )}

                {/* Error Message */}
                {status === 'error' && (
                  <div className="bg-red-50 border border-red-200 rounded-sm p-4 flex items-start gap-3">
                    <AlertCircle className="text-red-600 flex-shrink-0 mt-0.5" size={20} />
                    <div>
                      <h4 className="font-bold text-red-900 mb-1">Submission Failed</h4>
                      <p className="text-sm text-red-800">Something went wrong. Please try again or email us directly at hello@craftedmusichouse.com</p>
                    </div>
                  </div>
                )}

                <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-cmh-mahogany">Name</label>
                    <Input 
                      type="text" 
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Jane Doe" 
                      required 
                    />
                </div>
                <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-cmh-mahogany">Email</label>
                    <Input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="jane@example.com" 
                      required 
                    />
                </div>
                <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-cmh-mahogany">Occasion</label>
                    <select 
                      name="occasion"
                      value={formData.occasion}
                      onChange={handleChange}
                      className="flex h-12 w-full rounded-sm border border-cmh-mahogany/20 bg-white px-4 py-2 text-sm ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cmh-gold focus-visible:border-transparent transition-all"
                    >
                        <option>Wedding / Anniversary</option>
                        <option>Birthday</option>
                        <option>Retirement</option>
                        <option>Just Because</option>
                        <option>Commercial License</option>
                    </select>
                </div>
                <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-cmh-mahogany">Artist Preference</label>
                    <select 
                        name="artistPreference"
                        className="flex h-12 w-full rounded-sm border border-cmh-mahogany/20 bg-white px-4 py-2 text-sm ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cmh-gold focus-visible:border-transparent transition-all"
                        onChange={handleChange}
                        value={formData.artistPreference}
                    >
                        <option value="roster">Select from Roster (Standard Price)</option>
                        <option value="sunny">Sunny Boudreaux (Jazz)</option>
                        <option value="ruby">Ruby James (Vocal Jazz)</option>
                        <option value="clyde">Clyde "Iron" Moss (Blues)</option>
                        <option value="ashley">Ashley Wolfe (Americana Noir)</option>
                        <option value="belladonna">Belladonna Vale (Gothic Cabaret)</option>
                        <option value="salvatore">Salvatore Moretti (Lounge Jazz)</option>
                        <option value="custom">✨ Create Custom Persona (+${CUSTOM_ARTIST_FEE})</option>
                    </select>
                </div>

                {formData.artistPreference === 'custom' && (
                     <Card className="bg-cmh-gold/10 border-cmh-gold/20">
                        <CardContent className="space-y-4 pt-6">
                            <h4 className="font-serif text-lg text-cmh-mahogany border-b border-cmh-gold/20 pb-2">Design Your Artist</h4>
                            
                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-widest text-cmh-mahogany">Persona Name</label>
                                <Input 
                                type="text" 
                                name="customPersonaName"
                                value={formData.customPersonaName}
                                onChange={handleChange}
                                placeholder="E.g., Dusty Rhodes" 
                                />
                            </div>
                            
                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-widest text-cmh-mahogany">Genre / Style</label>
                                <Input 
                                type="text" 
                                name="customGenre"
                                value={formData.customGenre}
                                onChange={handleChange}
                                placeholder="E.g., 1970s Outlaw Country" 
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-widest text-cmh-mahogany">Backstory & Vibe</label>
                                <Textarea 
                                name="customBackstory"
                                value={formData.customBackstory}
                                onChange={handleChange}
                                className="resize-none"
                                placeholder="Describe their voice, personality, and origin story..."
                                />
                            </div>
                        </CardContent>
                    </Card>
                )}

                <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-cmh-mahogany">Your Story & Details</label>
                    <Textarea 
                      name="details"
                      value={formData.details}
                      onChange={handleChange}
                      rows={4} 
                      placeholder="Tell us the details, memories, or specific lyrics you want included..."
                      required
                    />
                </div>

                <div className="pt-4 border-t border-cmh-gold/20 flex items-center justify-between">
                    <div>
                        <span className="block text-xs font-bold uppercase tracking-widest text-cmh-mahogany/75">Estimated Total</span>
                        <span className="text-3xl font-serif text-cmh-gold">${currentPrice}</span>
                    </div>
                    <Button type="submit" size="lg" className="gap-2" disabled={status === 'submitting'}>
                        {status === 'submitting' ? 'Sending...' : 'Submit Request'} <Send size={16} />
                    </Button>
                </div>
            </form>
            </div>
        </Card>

      </div>
    </div>
  );
};

export default Inquiry;