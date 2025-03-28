import React from 'react'

export const CaseStudyCard = ({ title, description, beforeImage, afterImage }) => {
    return (
      <div className="bg-white rounded-lg overflow-hidden shadow-md">
        <div className="relative h-48 overflow-hidden">
          <img 
            src={beforeImage} 
            alt="Before transformation" 
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out opacity-100 hover:opacity-0"
          />
          <img 
            src={afterImage} 
            alt="After transformation" 
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out opacity-0 hover:opacity-100"
          />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold text-purple-700 mb-2">{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    );
  };