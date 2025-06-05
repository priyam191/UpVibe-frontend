import React from 'react'
// import ReactDOM from 'react-dom/client';
import { BrowserRouter , Routes, Route} from 'react-router-dom';
import './index.css';
import {Header} from './header/Header';
import { Home } from './Home';
import { ServiceSection } from './service/ServiceSection';
import { PortfolioSection } from './portfolio/PortfolioSection';
import {PricingSection} from './pricing/PricingSection';
import { Footer } from './footer/Footer';
function App() {
    return ( 
        <>
            <BrowserRouter>
                <Header/>
                <Routes>
                    <Route path= "/" element={<Home/>}/>                  <Route path="/services" element={<ServiceSection/>} />
                    <Route path="/portfolio" element={<PortfolioSection/>} />
                    <Route path="/pricing" element={<PricingSection/>} />
                </Routes>
                <Footer/>
            </BrowserRouter>

        </>
        
     );
}

export default App;