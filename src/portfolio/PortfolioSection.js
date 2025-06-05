import React from 'react';
import { CaseStudyCard } from './CaseStudyCard';
import { TestimonialCard } from './TestimonialCard';

export const PortfolioSection = () => {
  const socialMediaProjects = [
    {
      title: "TechParts Reseller",
      description: "✅ 78% Growth in engagement, 45% more followers in 3 months through consistent, high-quality content and campaigns.",
      icon: "📈",
      image: "media/techparts.jpg",
    },
    {
      title: "Local Café",
      description: "✅ 35% increase in foot traffic, 50% rise in online orders — using storytelling and Instagram growth hacks.",
      icon: "☕",
      image: "media/cafe.jpg",
    },
    {
      title: "Fashion Boutique",
      description: "✅ 65% boost in online sales with targeted content and influencer collabs in 4 months.",
      icon: "👗",
      image: "media/boutique.jpg",
    },
  ];

  const videoGraphicProjects = [
    {
      title: "Promotional Reel for Local Café",
      description: "🎥 Reels | Shot + edited by UpVibe. Result: more reach and foot traffic.",
      image: "media/reel.jpg",
    },
    {
      title: "Festival Poster Design",
      description: "🖼 Posters | Vibrant, seasonal visual to drive local engagement.",
      image: "media/poster.jpg",
    },
    {
      title: "YouTube Thumbnails (Branded)",
      description: "🎞 Thumbnails | Clean, bold thumbnails designed for clicks.",
      image: "media/thumbnail.jpg",
    },
  ];

  const websiteProjects = [
    {
      title: "Tech Repair Hub Website",
      description: "✅ 2x more inquiries in 6 weeks | Custom, mobile-friendly, SEO optimized.",
      image: "media/techrepair.jpg",
    },
    {
      title: "Fashion Store Landing Page",
      description: "✅ 38% higher conversion | Conversion-optimized layout with product highlights.",
      image: "media/fashionlanding.jpg",
    },
  ];

  const testimonials = [
    {
      text: "UpVibe has completely transformed our social media presence. Our engagement has skyrocketed, and we're getting real business inquiries through Instagram now!",
      name: "Rajesh Kumar",
      position: "TechParts Reseller",
      image: "/api/placeholder/50/50",
    },
    {
      text: "Working with UpVibe has been the best business decision we've made. They understand our brand and create content that truly represents who we are.",
      name: "Priya Sharma",
      position: "Local Café Owner",
      image: "/api/placeholder/50/50",
    },
  ];

  return (
    <section id="portfolio" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Portfolio Intro */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-purple-700 mb-4 mt-5">Our Portfolio</h2>
          <p className="max-w-2xl mx-auto text-gray-700">
            See the transformations we've created for other businesses
          </p>
        </div>

        {/* 1️⃣ Social Media & Marketing */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Social Media Growth & Campaign Results</h3>
          <p className="text-gray-600 mb-8">Helping brands grow online through strategy, content, and engagement.</p>
          <div className="grid md:grid-cols-3 gap-8">
            {socialMediaProjects.map((project, index) => (
              <CaseStudyCard
                key={index}
                title={`${project.icon} ${project.title}`}
                description={project.description}
                beforeImage={project.image}
                afterImage={project.image}
              />
            ))}
          </div>
        </div>

        {/* 2️⃣ Graphics & Videos */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Creative Visuals: Reels, Videos & Graphics That Connect</h3>
          <p className="text-gray-600 mb-8">We turn your ideas into scroll-stopping visuals.</p>
          <div className="grid md:grid-cols-3 gap-8">
            {videoGraphicProjects.map((project, index) => (
              <CaseStudyCard
                key={index}
                title={project.title}
                description={project.description}
                beforeImage={project.image}
                afterImage={project.image}
              />
            ))}
          </div>
        </div>

        {/* 3️⃣ Websites */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Websites That Convert: Designed for Growth</h3>
          <p className="text-gray-600 mb-8">Custom-built websites that look good and perform better.</p>
          <div className="grid md:grid-cols-2 gap-8">
            {websiteProjects.map((project, index) => (
              <CaseStudyCard
                key={index}
                title={project.title}
                description={project.description}
                beforeImage={project.image}
                afterImage={project.image}
              />
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-purple-700 mb-4">What Our Clients Say</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>

        {/* CTA Footer */}
        <div className="text-center mt-20">
          <p className="text-lg text-gray-700 mb-4">
            💬 Want results like these? Let’s build your brand together.
          </p>
          <a
            href="mailto:worksukanta200ty@gmail.com"
            className="inline-block bg-purple-700 text-white px-6 py-3 rounded-full font-medium hover:bg-purple-800 transition"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};
