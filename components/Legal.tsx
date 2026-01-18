import React from 'react';

interface LegalProps {
  type: 'privacy' | 'terms' | 'licensing';
}

const Legal: React.FC<LegalProps> = ({ type }) => {
  const content = {
    privacy: {
      title: "Privacy Policy",
      date: "Last Updated: January 12, 2025",
      body: (
        <>
          <p className="mb-4">At Crafted Music House, we value your privacy as much as we value authentic sound. This Privacy Policy explains how we collect, use, and protect your information.</p>
          <h3 className="text-xl font-serif mt-6 mb-3 text-cmh-mahogany">Information Collection</h3>
          <p className="mb-4">We collect information you provide directly to us, such as when you sign up for our newsletter or submit an inquiry for a custom song. This may include your name, email address, and details about your special occasions.</p>
          <h3 className="text-xl font-serif mt-6 mb-3 text-cmh-mahogany">Use of Information</h3>
          <p className="mb-4">We use your information to communicate with you about our releases, artists, and services. We do not sell your personal data to third parties.</p>
        </>
      )
    },
    terms: {
      title: "Terms of Service",
      date: "Last Updated: January 10, 2025",
      body: (
        <>
          <p className="mb-4">Welcome to Crafted Music House. By accessing our website and services, you agree to these Terms of Service.</p>
          <h3 className="text-xl font-serif mt-6 mb-3 text-cmh-mahogany">AI Disclosure</h3>
          <p className="mb-4">Crafted Music House uses generative artificial intelligence tools to assist in the creation of our music. By streaming or purchasing our music, you acknowledge the role of AI in our creative process.</p>
          <h3 className="text-xl font-serif mt-6 mb-3 text-cmh-mahogany">Intellectual Property</h3>
          <p className="mb-4">All content, including music, artwork, and text, is the property of Crafted Music House. You may not distribute, modify, or reproduce our content without explicit permission.</p>
        </>
      )
    },
    licensing: {
      title: "Licensing",
      date: "Effective Date: January 1, 2025",
      body: (
        <>
          <p className="mb-4">Crafted Music House offers flexible licensing options for film, television, and commercial use.</p>
          <h3 className="text-xl font-serif mt-6 mb-3 text-cmh-mahogany">Sync Licensing</h3>
          <p className="mb-4">Our catalog is available for sync licensing. Because we own 100% of the masters and publishing, we can offer "one-stop" clearance for quick and easy licensing.</p>
          <h3 className="text-xl font-serif mt-6 mb-3 text-cmh-mahogany">Custom Composition</h3>
          <p className="mb-4">Need something specific? Our team can create custom bespoke tracks for your project in under 48 hours. Contact us for a quote.</p>
        </>
      )
    }
  };

  const data = content[type];

  return (
    <div className="pt-32 pb-24 min-h-screen bg-cmh-cream">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="border-b border-cmh-gold/30 pb-8 mb-8">
            <h1 className="text-4xl md:text-5xl font-serif text-cmh-mahogany mb-4">{data.title}</h1>
            <p className="text-cmh-sepia font-sans text-sm uppercase tracking-widest">{data.date}</p>
        </div>
        <div className="prose prose-lg text-cmh-mahogany/80 font-light">
          {data.body}
        </div>
      </div>
    </div>
  );
};

export default Legal;