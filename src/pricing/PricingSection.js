import React from 'react';

const pricingData = [
  {
    category: 'Social Media & Marketing Packs (Fully Managed)',
    plans: [
      {
        name: '💼 Starter Plan',
        price: '₹5,499/month',
        features: [
          '2 reels per week (8/month)',
          'Stories for 3 days a week',
          'Instagram & Facebook management',
          'Monthly performance report',
          '✅ Build your digital identity',
        ],
      },
      {
        name: '🚀 Premium Plan',
        price: '₹9,999/month',
        features: [
          '4 reels per week (16/month)',
          'Stories 7 days a week',
          'Instagram, Facebook & GMB management',
          'Competitor research + trend hashtags',
          'Ads setup & Meta management',
          'Monthly reports (IG, FB, GMB)',
        ],
        highlighted: true,
      },
      {
        name: '👑 Business Plan',
        price: 'Custom Quote',
        features: [
          'Advanced audience research',
          'Ad funnel creation (awareness to conversion)',
          'Custom campaign creatives',
          'Growth consultation calls',
          'Weekly insights & priority support',
        ],
      },
    ],
  },
  {
    category: 'Graphics & Video Packs',
    plans: [
      {
        name: '💼 Starter Plan',
        price: '₹999/month',
        features: [
          '2 reels (30s–1min)',
          '1 poster/banner design',
          '1 revision included',
        ],
      },
      {
        name: '🚀 Premium Plan',
        price: '₹4,999/month',
        features: [
          '10 reels (up to 1min each)',
          '4 custom graphics',
          '2 revision cycles included',
        ],
        highlighted: true,
      },
      {
        name: '👑 Business Plan',
        price: 'Custom Quote (Starts at ₹10,000)',
        features: [
          'Long-form videos (1–10 mins)',
          'Full scripting, shooting & editing',
          'Advanced motion graphics',
          'Product packaging, brochures, banners',
          'Dedicated strategy support',
        ],
      },
    ],
  },
  {
    category: 'Website Design Packs',
    plans: [
      {
        name: '💼 Starter Plan',
        price: '₹1,999 (One-time)',
        features: [
          '1-page coded website (Home, Location, Contact)',
          'Mobile & desktop responsive',
          'Domain & hosting not included',
        ],
      },
      {
        name: '🚀 Premium Plan',
        price: '₹14,999 (One-time)',
        features: [
          '5-page dynamic website',
          'WhatsApp & email contact form',
          'Built-in SEO & structure',
          '1-month free support',
          'Domain & hosting not included',
        ],
        highlighted: true,
      },
      {
        name: '👑 Business Plan',
        price: 'Custom Quote',
        features: [
          'E-commerce or booking system',
          'Custom CMS design (WordPress/Webflow)',
          'Payment gateway + WhatsApp chat',
          'Hosting, SSL, speed optimization',
          'Ongoing updates & bug fixes',
        ],
      },
    ],
  },
];

export const PricingSection = () => {
  return (
    <section id="pricing" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-purple-700 mb-4">💰 Our Pricing</h2>
          <p className="max-w-2xl mx-auto text-gray-700">
            Plans tailored to grow your business, whether you're just starting or ready to scale big.
          </p>
        </div>

        {pricingData.map((section, i) => (
          <div key={i} className="mb-20">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">{section.category}</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {section.plans.map((plan, idx) => (
                <div
                  key={idx}
                  className={`rounded-lg shadow-md p-6 bg-white ${
                    plan.highlighted ? 'border-2 border-purple-600' : ''
                  }`}
                >
                  <h4 className="text-xl font-bold text-purple-700 mb-2">{plan.name}</h4>
                  <p className="text-lg font-semibold text-gray-800 mb-4">{plan.price}</p>
                  <ul className="text-gray-600 space-y-2 list-disc pl-5">
                    {plan.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* CTA */}
        <div className="text-center mt-20">
          <p className="text-lg text-gray-700 mb-4">
            🎯 Not sure which plan fits you best? Let’s talk and find what works for your business goals.
          </p>
          <a
            href="mailto:ghoshpriyam191@gmail.com"
            className="inline-block bg-purple-700 text-white px-6 py-3 rounded-full font-medium hover:bg-purple-800 transition"
          >
            👉 Book a Free Consultation
          </a>
        </div>
      </div>
    </section>
  );
};
