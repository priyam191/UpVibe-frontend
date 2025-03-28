import React from 'react'


export const ServiceCard = ({ title, description, features, image }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md transition-transform hover:-translate-y-2">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-purple-700 mb-3">{title}</h3>
        <p className="mb-4">{description}</p>
        <ul className="list-disc ml-5 space-y-1">
          {features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};