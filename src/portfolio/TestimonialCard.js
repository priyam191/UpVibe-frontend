import React from 'react'


export const TestimonialCard = ({ text, name, position, image }) => {
    return (
      <div className="bg-white rounded-lg p-8 shadow-md relative">
        <div className="text-8xl absolute top-2 left-2 text-purple-100 leading-none">"</div>
        <p className="relative z-10 mb-6">{text}</p>
        <div className="flex items-center">
          <img src={image} alt={name} className="w-12 h-12 rounded-full mr-4" />
          <div>
            <h4 className="font-semibold text-purple-700">{name}</h4>
            <p className="text-sm">{position}</p>
          </div>
        </div>
      </div>
    );
  };