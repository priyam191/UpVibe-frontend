import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const scrollToTop = () =>{
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  return (
    <header className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-6xl mx-auto px-4">
        <nav className="flex justify-between items-center py-4">
          <div style={{ height: '50px', width: '50px' }} className="flex items-center">
            <Link to="/"><img src="media/upvibe.png" alt="logo" onClick={scrollToTop}/></Link>
          </div>

          <button
            className="md:hidden focus:outline-none"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>

          <ul className="hidden md:flex space-x-6">
            {/* <li><Link to="/about" className="font-medium hover:text-purple-700 transition-colors">About</Link></li> */}
            <li><Link to="/services" className="font-medium hover:text-purple-700 transition-colors">Services</Link></li>
            <li><Link to="/portfolio" className="font-medium hover:text-purple-700 transition-colors">Portfolio</Link></li>
            <li><Link to="/pricing" className="font-medium hover:text-purple-700 transition-colors">Pricing</Link></li>
          </ul>
        </nav>

        {mobileMenuOpen && (
          <div className="md:hidden py-4 bg-white border-t">
            <ul className="flex flex-col space-y-4">
              <li><Link to="/services" className="block font-medium hover:text-purple-700 transition-colors" onClick={toggleMobileMenu}>Services</Link></li>
              <li><Link to="/portfolio" className="block font-medium hover:text-purple-700 transition-colors" onClick={toggleMobileMenu}>Portfolio</Link></li>
              <li><Link to="/pricing" className="block font-medium hover:text-purple-700 transition-colors" onClick={toggleMobileMenu}>Pricing</Link></li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};
