import React from 'react'
import { useState } from 'react';

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-6xl mx-auto px-4">
        <nav className="flex justify-between items-center py-4">
          {/* Logo */}
          <div style={{height: '50px', width: '50px'}} className="flex items-center">
            <a href='#home'><img src='media/upvibe.png' alt='logo'/></a>
          </div>
            
          

          {/* Mobile menu button */}
          <button 
            className="md:hidden focus:outline-none" 
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>

          {/* Desktop navigation */}
          <ul className="hidden md:flex space-x-6">
            
            <li><a href="#about" className="font-medium hover:text-purple-700 transition-colors">About</a></li>
            <li><a href="#services" className="font-medium hover:text-purple-700 transition-colors">Services</a></li>
            <li><a href="#portfolio" className="font-medium hover:text-purple-700 transition-colors">Portfolio</a></li>
            <li><a href="#pricing" className="font-medium hover:text-purple-700 transition-colors">Pricing</a></li>
            <li><a href="#contact" className="font-medium hover:text-purple-700 transition-colors">Contact</a></li>
          </ul>
        </nav>

        {/* Mobile navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 bg-white border-t">
            <ul className="flex flex-col space-y-4">
              
              <li><a href="#about" className="block font-medium hover:text-purple-700 transition-colors" onClick={toggleMobileMenu}>About</a></li>
              <li><a href="#services" className="block font-medium hover:text-purple-700 transition-colors" onClick={toggleMobileMenu}>Services</a></li>
              <li><a href="#portfolio" className="block font-medium hover:text-purple-700 transition-colors" onClick={toggleMobileMenu}>Portfolio</a></li>
              <li><a href="#pricing" className="block font-medium hover:text-purple-700 transition-colors" onClick={toggleMobileMenu}>Pricing</a></li>
              <li><a href="#contact" className="block font-medium hover:text-purple-700 transition-colors" onClick={toggleMobileMenu}>Contact</a></li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};
  