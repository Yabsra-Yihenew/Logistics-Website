import React, { useState, useEffect } from 'react';
import './Testimonials.css';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  
  const testimonials = [
    {
      name: "John Smith",
      position: "CEO, Global Imports",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      text: "Gize Logistics has transformed our supply chain operations. Their efficient services and dedicated team have significantly reduced our shipping times and costs."
    },
    {
      name: "Sarah Johnson",
      position: "Operations Manager, Tech Solutions",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      text: "We've been working with Gize for over 5 years now, and their consistent quality and reliability have made them an invaluable partner for our business."
    },
    {
      name: "Michael Chen",
      position: "Director, International Trade Co.",
      image: "https://randomuser.me/api/portraits/men/67.jpg",
      text: "The customs clearance expertise provided by Gize has helped us navigate complex regulations with ease. Their knowledge and professionalism are unmatched."
    },
    {
      name: "Aisha Mohammed",
      position: "Supply Chain Manager, African Exports",
      image: "https://randomuser.me/api/portraits/women/28.jpg",
      text: "Gize's local knowledge combined with their global network has been crucial for our export business. They understand our unique needs and deliver exceptional service."
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const goToTestimonial = (index) => {
    setCurrentTestimonial(index);
  };

  const goToPrevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToNextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        <div className="section-header">
          <h2>WHAT OUR CLIENTS SAY</h2>
          <div className="section-divider">
            <span></span>
          </div>
        </div>
        
        <div className="testimonials-slider">
          <div className="testimonials-track" style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}>
            {testimonials.map((testimonial, index) => (
              <div className="testimonial-slide" key={index}>
                <div className="testimonial-content">
                  <div className="testimonial-quote">
                    <i className="fas fa-quote-left"></i>
                    <p>{testimonial.text}</p>
                  </div>
                  <div className="testimonial-author">
                    <div className="author-image">
                      <img src={testimonial.image} alt={testimonial.name} />
                    </div>
                    <div className="author-info">
                      <h4>{testimonial.name}</h4>
                      <p>{testimonial.position}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="testimonial-navigation">
            <button className="testimonial-arrow prev-arrow" onClick={goToPrevTestimonial}>
              <i className="fas fa-chevron-left"></i>
            </button>
            
            <div className="testimonial-dots">
              {testimonials.map((_, index) => (
                <span 
                  key={index} 
                  className={`dot ${index === currentTestimonial ? 'active' : ''}`}
                  onClick={() => goToTestimonial(index)}
                ></span>
              ))}
            </div>
            
            <button className="testimonial-arrow next-arrow" onClick={goToNextTestimonial}>
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
