import React from 'react';

export const CaseStudyCard = ({ title, description, image, icon, tag }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition duration-300">
      {image && (
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover rounded-md mb-4"
        />
      )}
      <h3 className="text-xl font-semibold text-purple-700 mb-2">
        {icon && <span className="mr-1">{icon}</span>}
        {title}
      </h3>
      <p className="text-gray-700 mb-2">{description}</p>
      {tag && (
        <span className="inline-block bg-green-100 text-green-700 text-sm px-3 py-1 rounded-full font-medium">
          ✅ {tag}
        </span>
      )}
    </div>
  );
};
