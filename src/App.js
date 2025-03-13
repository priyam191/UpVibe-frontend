import React from 'react'
// import ReactDOM from 'react-dom/client';
import './index.css';
import {Header} from './header/Header';
import {HeroSection} from './hero/HeroSection';
import {AboutSection} from './about/AboutSection';
import { ServiceSection } from './service/ServiceSection';
import { PortfolioSection } from './portfolio/PortfolioSection';
import {PricingSection} from './pricing/PricingSection';
import { ContactSection } from './contact/ContactSection';
import { Footer } from './footer/Footer';
function App() {
    return ( 
        <>
            <Header/>
            <HeroSection/>
            <AboutSection/>
            <ServiceSection/>
            <PortfolioSection/>
            <PricingSection/>
            <ContactSection/>
            <Footer/>
        </>
        
     );
}

export default App;