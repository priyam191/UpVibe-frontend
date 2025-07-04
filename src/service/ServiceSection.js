import React from 'react'
import { ServiceCard } from './ServiceCard';
// import { PackageCard } from './PackageCard'; // Corrected import statement


export const ServiceSection = () => {
  const services = [
    {
      title: "Social Media Management",
      description: "We take care of your entire social media presence so you can focus on running your business.",
      features: [
        "Instagram & Facebook handling",
        "Google My Business optimization",
        "Post planning & scheduling",
        "Comment moderation"
      ],
      image: "media/content.jpg"
    },
    {
      title: "Content Creation",
      description: "We shoot and edit videos that grab attention and grow your reach.",
      features: [
        "Short Reels for Instagram, Facebook, and YouTube",
        "Long-form videos for YouTube and websites",
        "On-location shooting (if needed)",
        "Full editing, subtitles, and effects"
      ],
      image: "media/social_media.jpg"
    },
    {
      title: "Strategy & Analytics",
      description: "Data-driven approaches to grow your audience and convert followers into customers.",
      features: [
        "Account growth tracking",
        "Engagement analysis",
        "Competitor research",
        "Monthly performance reports"
      ],
      image: "media/strategy.jpg"
    },
    {
      title: "Website Development/Web Design",
      description: "We create stunning websites that not only look great but also drive results.",
      features: [
        "Custom design based on your brand",
        "Mobile-friendly and fast loading",
        "SEO optimization",
        "Hosting and maintenance"
      ],
      image: "media/website.jpeg"
    },
    {
      title: "Graphic Design",
      description: "We create graphics that speak for your brand.",
      features: [
        "Logos, posters, banners",
        "Business cards and brochures",
        "Social media creatives",
        "Festival & event designs"
      ],
      image: "media/website.jpeg"
    },
    {
      title: "Influencer Marketing",
      description: "Reach more people by working with local influencers.",
      features: [
        "Connect with trusted influencers",
        "Product shoutouts and collaborations",
        "Reel & Story promotions",
      ],
      image: "media/website.jpeg"
    }
  ];

  // const packages = [
  //   {
  //     title: "Basic Package",
  //     price: "₹3,000",
  //     features: [
  //       "5 posts per week",
  //       "2 reels per week",
  //       "Basic engagement",
  //       "Monthly report"
  //     ]
  //   },
  //   {
  //     title: "Standard Package",
  //     price: "₹5,000",
  //     features: [
  //       "10 posts per week",
  //       "4 reels per week",
  //       "Daily engagement",
  //       "Bi-weekly strategy calls",
  //       "Google My Business management"
  //     ],
  //     isHighlighted: true
  //   },
  //   {
  //     title: "Growth Package",
  //     price: "₹7,000",
  //     features: [
  //       "15 posts per week",
  //       "6 reels per week",
  //       "Daily stories",
  //       "Premium engagement strategy",
  //       "Weekly strategy calls",
  //       "Competitor analysis",
  //       "Customized growth roadmap"
  //     ]
  //   },
    
  // ];

  return (
    <section id="services" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-purple-700 mb-4">Our Services</h2>
          <p className="max-w-2xl mx-auto text-gray-700">
            Comprehensive social media solutions tailored for small businesses
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
        
        {/* <div className="text-center mb-12 md:mb-16 mt-20">
          <h2 className="text-3xl md:text-4xl font-bold text-purple-700 mb-4">Our Packages</h2>
          <p className="max-w-2xl mx-auto text-gray-700">
            Choose the perfect plan for your business needs
          </p>
        </div> */}
        
        {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <PackageCard key={index} {...pkg} />
          ))}
        </div> */}
      </div>
    </section>
  );
};