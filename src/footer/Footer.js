import React from 'react'
import { Link } from 'react-router-dom';

export const Footer = () => {
    return (
      <footer className="bg-gray-900 text-white pt-16 pb-6">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-16">
            <div>
              <div className="text-2xl font-bold text-sky-400 mb-6">Up<span>Vibe</span></div>
              <p className="text-gray-400 mb-6">
                Elevating small businesses through strategic social media management and content creation.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
              <ul className="space-y-3">
                <li><Link to ="/" className="text-gray-400 hover:text-sky-400 transition-colors">Home</Link></li>
                <li><Link to ="/about" className="text-gray-400 hover:text-sky-400 transition-colors">About</Link></li>
                <li><Link to ="/services" className="text-gray-400 hover:text-sky-400 transition-colors">Services</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-6">Resources</h3>
              <ul className="space-y-3">
                <li><Link to ="/portfolio" className="text-gray-400 hover:text-sky-400 transition-colors">Portfolio</Link></li>
                <li><Link to ="/pricing" className="text-gray-400 hover:text-sky-400 transition-colors">Pricing</Link></li>
                <li><Link to ="/contact" className="text-gray-400 hover:text-sky-400 transition-colors">Contact</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-6">Connect With Us</h3>
              <div className="flex space-x-4">
                <Link to ="https://www.instagram.com/up__vibe?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-sky-400 transition-colors">
                  <span><i class="fa-brands fa-instagram"></i></span>
                </Link>
                <Link to ="https://www.facebook.com/profile.php?id=61572881707498&mibextid=wwXIfr&rdid=2HlzrvQYHE9t9U5v&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1FV9ksDdKX%2F%3Fmibextid%3DwwXIfr#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-sky-400 transition-colors">
                  <span><i class="fa-brands fa-facebook"></i></span>
                </Link>
                <Link to ="https://wa.me/+918240446317" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-sky-400 transition-colors">
                  <span><i class="fa-brands fa-whatsapp"></i></span>
                </Link>
              </div>
            </div>
          </div>
          
          <div className="text-center pt-8 border-t border-gray-800 text-gray-400 text-sm">
            &copy; 2025 UpVibe. All Rights Reserved.
          </div>
        </div>
      </footer>
    );
  };