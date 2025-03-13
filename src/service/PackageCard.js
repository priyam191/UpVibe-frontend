import React from 'react'


export const PackageCard = ({ title, price, features, isHighlighted = false }) => {
    return (
      <div className={`bg-white rounded-lg overflow-hidden shadow-md border-2 ${isHighlighted ? 'border-purple-700' : 'border-transparent'} transition-all hover:border-purple-700 flex flex-col`}>
        <div className="bg-purple-700 text-white p-6">
          <h3 className="text-xl font-semibold">{title}</h3>
        </div>
        <div className="p-6 flex-grow flex flex-col">
          <div className="text-4xl font-bold text-indigo-800 my-4">{price}<span className="text-sm font-normal">/month</span></div>
          <ul className="space-y-3 mb-8 flex-grow">
            {features.map((feature, index) => (
              <li key={index} className="relative pl-7">
                <span className="absolute left-0 text-green-600">✓</span> {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  };