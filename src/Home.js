// src/pages/Home.jsx
import React from 'react';
import { HeroSection } from './hero/HeroSection';
import { AboutSection } from './about/AboutSection';
import { ContactSection } from './contact/ContactSection';

export const Home = () => {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ContactSection />
    </>
  );
};


