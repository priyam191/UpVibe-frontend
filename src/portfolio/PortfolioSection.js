import React from 'react'
import { CaseStudyCard } from './CaseStudyCard';
import { TestimonialCard } from './TestimonialCard';

export const PortfolioSection = () => {
    const caseStudies = [
      {
        title: "TechParts Reseller",
        description: "We increased engagement by 78% and followers by 45% in just 3 months through consistent, high-quality content.",
        beforeImage: "media/content.jpg",
        afterImage: "media/strategy.jpg"
      },
      {
        title: "Local Café",
        description: "Our reels strategy helped this café increase foot traffic by 35% and online orders by 50% within 2 months.",
        beforeImage: "/api/placeholder/400/200",
        afterImage: "/api/placeholder/400/200"
      },
      {
        title: "Fashion Boutique",
        description: "Through targeted content and engagement strategies, we helped increase online sales by 65% in just 4 months.",
        beforeImage: "/api/placeholder/400/200",
        afterImage: "/api/placeholder/400/200"
      }
    ];
  
    const testimonials = [
      {
        text: "UpVibe has completely transformed our social media presence. Our engagement has skyrocketed, and we're getting real business inquiries through Instagram now!",
        name: "Rajesh Kumar",
        position: "TechParts Reseller",
        image: "/api/placeholder/50/50"
      },
      {
        text: "Working with UpVibe has been the best business decision we've made. They understand our brand and create content that truly represents who we are.",
        name: "Priya Sharma",
        position: "Local Café Owner",
        image: "/api/placeholder/50/50"
      }
    ];
  
    return (
      <section id="portfolio" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-purple-700 mb-4">Our Portfolio</h2>
            <p className="max-w-2xl mx-auto text-gray-700">
              See the transformations we've created for other businesses
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {caseStudies.map((study, index) => (
              <CaseStudyCard key={index} {...study} />
            ))}
          </div>
          
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-purple-700 mb-4">What Our Clients Say</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>
    );
  };
  