import React from 'react';
import { Link } from 'react-router-dom';

export const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center bg-gradient-to-br from-purple-50 to-indigo-50 pt-24">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

        {/* Text Content */}
        <div>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
            Boost Your Brand's Vibe — Grow with UpVibe!
          </h1>
          <p className="text-base md:text-lg mb-8">
            We help small businesses elevate their social media presence with expert management, engaging content, and data-driven strategies.
          </p>
          <Link
            to="/contact"
            className="inline-block px-6 md:px-8 py-3 bg-purple-700 text-white font-bold uppercase rounded-full hover:bg-indigo-800 transform hover:-translate-y-1 transition-all shadow-lg"
          >
            Get a Free Consultation
          </Link>
        </div>

        {/* Laptop Video Section */}
        <div className="relative w-full max-w-xl mx-auto aspect-[16/10]">

         {/* Laptop Frame */}
         <img
            src="media/laptop2.png"
            alt="Laptop Frame"
            className="relative w-full z-10 pointer-events-none"
          />
          {/* Video positioned inside the screen */}
          <div className="absolute top-[19.5%] left-[17%] w-[65.8%] h-[43.6%] z-10 overflow-hidden rounded-md bg-black flex items-center justify-center">
            <video
              src="media/upvibe_video.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-contain"
            />
          </div>

         
        </div>

      </div>
    </section>
  );
};
