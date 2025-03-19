import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      title: "Door to door your cargo matters",
      description: "Gize Logistics and Transport is a Freight forwarding Company managed by a team of professionals who are dedicated and sincere to responding promptly to customer demands.",
      background: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      buttonText: "Our Services",
      buttonLink: "/services"
    },
    {
      title: "Complete Shipping Solutions",
      description: "We offer a comprehensive range of services that are customized to suit the needs and wants of our clients across global markets.",
      background: "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      buttonText: "Learn More",
      buttonLink: "/about-us"
    },
    {
      title: "Global Logistics Network",
      description: "Providing door to door services fast & timely with our extensive network of partners worldwide.",
      background: "https://images.unsplash.com/photo-1578575436955-ef29da568c6c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      buttonText: "Discover Now",
      buttonLink: "/services"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  return (
    <div className="hero-container">
      {slides.map((slide, index) => (
        <div 
          key={index} 
          className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
          style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${slide.background})` }}
        >
          <div className="hero-content">
            <h1>{slide.title}</h1>
            <p>{slide.description}</p>
            <div className="hero-buttons">
              <Link to={slide.buttonLink} className="btn btn-primary">{slide.buttonText}</Link>
              <Link to="/contact" className="btn btn-secondary">Contact Us</Link>
            </div>
          </div>
        </div>
      ))}
      
      <button className="slider-arrow prev-arrow" onClick={goToPrevSlide}>
        <i className="fas fa-chevron-left"></i>
      </button>
      
      <button className="slider-arrow next-arrow" onClick={goToNextSlide}>
        <i className="fas fa-chevron-right"></i>
      </button>
      
      <div className="slider-navigation">
        <div className="slider-dots">
          {slides.map((_, index) => (
            <span 
              key={index} 
              className={`dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
