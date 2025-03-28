import React, { useState } from 'react';

export const ContactSection = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const phoneNumber = "918240446317"; // Replace with the owner's WhatsApp number (with country code)
        
        const whatsappMessage = `New Contact Form Submission:\n\n👤 Name: ${formData.name}\n📧 Email: ${formData.email}\n✉️ Message: ${formData.message}`;
        
        const whatsappURL = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(whatsappMessage)}`;
        
        window.open(whatsappURL, "_blank"); // Opens WhatsApp with the pre-filled message
    };

    return (
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-purple-700 mb-4">Get In Touch</h2>
            <p className="max-w-2xl mx-auto text-gray-700">
              Ready to boost your social media presence? Reach out for a free consultation
            </p>
          </div>
          
          <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label htmlFor="name" className="block mb-2 text-gray-800">Your Name</label>
                <input 
                  type="text" 
                  id="name"
                  value={formData.name} 
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-md"
                  required
                />
              </div>
              <div className="mb-6">
                <label htmlFor="email" className="block mb-2 text-gray-800">Your Email</label>
                <input 
                  type="email" 
                  id="email"
                  value={formData.email} 
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-md"
                  required
                />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block mb-2 text-gray-800">Your Message</label>
                <textarea 
                  id="message"
                  value={formData.message} 
                  onChange={handleChange}
                  rows="6" 
                  className="w-full p-3 border border-gray-300 rounded-md"
                  required
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full px-6 py-3 bg-green-600 text-white font-bold uppercase rounded-full hover:bg-green-800 transition-colors"
              >
                Send Message via WhatsApp
              </button>
            </form>
          </div>
        </div>
      </section>
    );
};
