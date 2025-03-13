import React from 'react'

export const AboutSection = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-purple-700 mb-4">About Us</h2>
          <p className="max-w-2xl mx-auto text-gray-700">
            Know the team that's passionate about taking your brand to new heights
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-10 items-center">
          <div className="flex-1">
            <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
            <p className="mb-4">
              At UpVibe, we're on a mission to help small businesses thrive in the digital world. We believe that every business deserves a strong online presence, regardless of size or budget.
            </p>
            <p className="mb-6">
              We started UpVibe because we saw too many small businesses struggling to maintain consistent, engaging social media while trying to run their day-to-day operations. Our goal is simple: to take that burden off your shoulders and transform your social media into a powerful growth engine.
            </p>
            
            <div className="mt-10">
              <h3 className="text-2xl font-semibold text-indigo-800 mb-6">Our Core Values</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="text-xl font-semibold text-purple-700 mb-3">Creativity</h4>
                  <p>We infuse fresh ideas into every post to make your brand stand out from the crowd.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="text-xl font-semibold text-purple-700 mb-3">Consistency</h4>
                  <p>We maintain a regular posting schedule to keep your audience engaged and growing.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="text-xl font-semibold text-purple-700 mb-3">Growth</h4>
                  <p>We focus on strategies that drive real business results, not just vanity metrics.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex-1 rounded-lg overflow-hidden shadow-xl mt-10 md:mt-0">
            <img src="media/content.jpg" alt="UpVibe Team" className="w-full" />
          </div>
        </div>
      </div>
    </section>
  );
};