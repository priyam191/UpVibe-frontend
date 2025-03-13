import React from 'react'

export const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center bg-gradient-to-br from-purple-50 to-indigo-50 pt-24">
      <div className="max-w-6xl mx-auto px-4">
        <div className="max-w-2xl">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
            Boost Your Brand's Vibe — Grow with UpVibe!
          </h1>
          <p className="text-base md:text-lg mb-8">
            We help small businesses elevate their social media presence with expert management, engaging content, and data-driven strategies.
          </p>
          <a 
            href="#contact" 
            className="inline-block px-6 md:px-8 py-3 bg-purple-700 text-white font-bold uppercase rounded-full hover:bg-indigo-800 transform hover:-translate-y-1 transition-all shadow-lg"
          >
            Get a Free Consultation
          </a>
        </div>
      </div>
    </section>
  );
};