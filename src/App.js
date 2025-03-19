import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Privileges from './components/Privileges';
import Services from './components/Services';
import SocialProof from './components/SocialProof';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Hero />
        <Privileges />
        <Services />
        <SocialProof />
        <Testimonials />
        <FAQ />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
