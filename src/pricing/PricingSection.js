import React from 'react'
import { PackageCard } from '../service/PackageCard';

export const PricingSection = () => {
    const pricingPackages = [
      {
        title: "Starter Pack",
        price: "₹3,000",
        features: [
          "5 posts per week",
          "2 reels per week",
          "Instagram management",
          "Basic community engagement",
          "Monthly performance report"
        ]
      },
      {
        title: "Growth Pack",
        price: "₹7,000",
        features: [
          "15 posts per week",
          "6 reels per week",
          "Daily stories",
          "Full Instagram management",
          "Google My Business optimization",
          "Active community management",
          "Competitor analysis",
          "Weekly performance reports",
          "Bi-weekly strategy calls"
        ],
        isHighlighted: true
      },
      {
        title: "Custom Solution",
        price: "Custom",
        features: [
          "Tailored to your specific needs",
          "Multiple platform management",
          "Advanced content strategy",
          "Priority support",
          "Custom reporting dashboard"
        ]
      }
    ];
  
    return (
      <section id="pricing" className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-purple-700 mb-4">Our Pricing</h2>
            <p className="max-w-2xl mx-auto text-gray-700">
              Transparent pricing that fits your business needs
            </p>
          </div>
          
          <div className="overflow-x-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPackages.map((pkg, index) => (
                <PackageCard key={index} {...pkg} />
              ))}
            </div>
          </div>

        </div>
      </section>
    );
  };