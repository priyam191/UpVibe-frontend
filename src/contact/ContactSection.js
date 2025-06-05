import React, { useState } from 'react';
import { FaUser, FaEnvelope, FaCommentDots, FaWhatsapp } from 'react-icons/fa';

export const ContactSection = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const phoneNumber = "918240446317";
    const whatsappMessage = `New Contact Form Submission:\n\n👤 Name: ${formData.name}\n📧 Email: ${formData.email}\n✉️ Message: ${formData.message}`;
    const whatsappURL = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-white to-purple-50">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold text-purple-700 mb-4">Let's Connect</h2>
          <p className="text-lg text-gray-600">
            Ready to grow your brand? Reach out for a free strategy call.
          </p>
        </div>

        <div className="bg-white p-10 rounded-3xl shadow-2xl max-w-3xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block mb-2 text-gray-700 font-medium">
                <FaUser className="inline mr-2 text-purple-500" />
                Full Name
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block mb-2 text-gray-700 font-medium">
                <FaEnvelope className="inline mr-2 text-purple-500" />
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block mb-2 text-gray-700 font-medium">
                <FaCommentDots className="inline mr-2 text-purple-500" />
                Message
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="flex items-center justify-center gap-3 w-full px-6 py-4 bg-green-600 text-white font-semibold text-lg rounded-full hover:bg-green-700 transition duration-300"
            >
              <FaWhatsapp className="text-2xl" />
              Send via WhatsApp
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
