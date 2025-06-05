import React from 'react';

export const AboutSection = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-purple-700 mb-4">About Us</h2>
          <p className="max-w-2xl mx-auto text-gray-700">
            Know the team that's passionate about taking your brand to new heights.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-10 items-center">
          <div className="flex-1">
            <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
            <p className="mb-4">
              At UpVibe, our mission is to help small businesses grow online with powerful websites,
              engaging videos, and eye-catching visuals. We believe every business deserves a strong digital
              presence — no matter the size or budget.
            </p>
            <p className="mb-6">
              We started UpVibe after seeing many business owners struggle with content, design, and growth.
              Our goal is to take that stress off your shoulders — so you can focus on running your business
              while we build your brand.
            </p>

            <div className="mt-10">
              <h3 className="text-2xl font-semibold text-indigo-800 mb-6">Our Core Values</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="text-xl font-semibold text-purple-700 mb-3">Creativity</h4>
                  <p>We bring fresh, creative ideas to every project — helping your brand stand out and stay memorable.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="text-xl font-semibold text-purple-700 mb-3">Simplicity</h4>
                  <p>We keep things clear and easy to understand. Simple solutions work best for real results.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="text-xl font-semibold text-purple-700 mb-3">Reliability</h4>
                  <p>You can count on us. We deliver on time and always aim for quality.</p>
                </div>
              </div>
              {/* Optional: Add a link to show more values
              <div className="mt-4 text-sm text-indigo-600 underline cursor-pointer hover:text-indigo-800">
                See All 5 Core Values
              </div> */}
            </div>
          </div>

          <div className="flex-1 rounded-lg overflow-hidden shadow-xl mt-10 md:mt-0">
            {/* <img src="media/content.jpg" alt="Content Creation Services" className="w-full" /> */}
          </div>
        </div>
      </div>
    </section>
  );
};
