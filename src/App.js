import React, { useEffect } from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShip, faPlane, faTruck, faWarehouse, faFileContract, faGlobe } from '@fortawesome/free-solid-svg-icons';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });
  }, []);

  return (
    <div className="app">
      <nav className="navbar">
        <div className="container">
          <div className="logo">GIZE LOGISTICS</div>
          <div className="nav-links">
            <a href="#home">Home</a>
            <a href="#services">Services</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      <header className="hero" id="home">
        <div className="hero-content">
          <h1 data-aos="fade-up">Your Best Solution For Logistics</h1>
          <p data-aos="fade-up" data-aos-delay="200">Global Reach. Local Excellence.</p>
          <button className="cta-button" data-aos="fade-up" data-aos-delay="400">Get Started</button>
        </div>
      </header>

      <section className="services" id="services">
        <div className="container">
          <h2 data-aos="fade-up">What We Provide</h2>
          <div className="service-grid">
            <div className="service-card" data-aos="fade-up">
              <FontAwesomeIcon icon={faShip} className="service-icon" />
              <h3>Sea Freight</h3>
              <p>Global sea freight solutions for your cargo</p>
            </div>
            <div className="service-card" data-aos="fade-up" data-aos-delay="100">
              <FontAwesomeIcon icon={faPlane} className="service-icon" />
              <h3>Air Freight</h3>
              <p>Fast and reliable air freight services</p>
            </div>
            <div className="service-card" data-aos="fade-up" data-aos-delay="200">
              <FontAwesomeIcon icon={faTruck} className="service-icon" />
              <h3>Land Transport</h3>
              <p>Comprehensive ground transportation</p>
            </div>
            <div className="service-card" data-aos="fade-up" data-aos-delay="300">
              <FontAwesomeIcon icon={faWarehouse} className="service-icon" />
              <h3>Warehouse</h3>
              <p>Modern warehousing solutions</p>
            </div>
            <div className="service-card" data-aos="fade-up" data-aos-delay="400">
              <FontAwesomeIcon icon={faFileContract} className="service-icon" />
              <h3>Customs Clearance</h3>
              <p>Efficient customs documentation</p>
            </div>
            <div className="service-card" data-aos="fade-up" data-aos-delay="500">
              <FontAwesomeIcon icon={faGlobe} className="service-icon" />
              <h3>Global Network</h3>
              <p>Worldwide logistics coverage</p>
            </div>
          </div>
        </div>
      </section>

      <section className="about" id="about">
        <div className="container">
          <div className="about-content">
            <div className="about-text" data-aos="fade-right">
              <h2>About Us</h2>
              <p>GIZE Logistics is your trusted partner in global logistics solutions. With years of experience and a commitment to excellence, we provide comprehensive logistics services tailored to your needs.</p>
              <ul>
                <li>24/7 Customer Support</li>
                <li>Global Network Coverage</li>
                <li>Custom Solutions</li>
                <li>Professional Team</li>
              </ul>
            </div>
            <div className="about-stats" data-aos="fade-left">
              <div className="stat">
                <h3>15+</h3>
                <p>Years Experience</p>
              </div>
              <div className="stat">
                <h3>50+</h3>
                <p>Countries</p>
              </div>
              <div className="stat">
                <h3>1000+</h3>
                <p>Happy Clients</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="container">
          <h2 data-aos="fade-up">Contact Us</h2>
          <div className="contact-content">
            <div className="contact-info" data-aos="fade-right">
              <h3>Get in Touch</h3>
              <p>Email: info@gizelogistics.com</p>
              <p>Phone: +251 123 456 789</p>
              <p>Address: Addis Ababa, Ethiopia</p>
            </div>
            <form className="contact-form" data-aos="fade-left">
              <input type="text" placeholder="Your Name" />
              <input type="email" placeholder="Your Email" />
              <textarea placeholder="Your Message"></textarea>
              <button type="submit" className="submit-button">Send Message</button>
            </form>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3>About Us</h3>
              <p>GIZE Logistics provides comprehensive logistics solutions worldwide.</p>
            </div>
            <div className="footer-section">
              <h3>Quick Links</h3>
              <a href="#home">Home</a>
              <a href="#services">Services</a>
              <a href="#about">About</a>
              <a href="#contact">Contact</a>
            </div>
            <div className="footer-section">
              <h3>Services</h3>
              <a href="#services">Sea Freight</a>
              <a href="#services">Air Freight</a>
              <a href="#services">Land Transport</a>
              <a href="#services">Warehousing</a>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2025 GIZE Logistics. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
