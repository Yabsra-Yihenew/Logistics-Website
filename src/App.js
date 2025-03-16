import React, { useEffect } from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShip, faPlane, faTruck, faWarehouse, faFileContract, faGlobe, faSolarPanel, faLaptop, faBuildingColumns, faHandshake } from '@fortawesome/free-solid-svg-icons';
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
          <div className="logo">GIZE PLC</div>
          <div className="nav-links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      <header className="hero" id="home">
        <div className="hero-content">
          <h1 data-aos="fade-up">Excellence in Global Logistics Since 2001</h1>
          <p data-aos="fade-up" data-aos-delay="200">Your Trusted Partner in Transportation, Logistics, and Beyond</p>
          <button className="cta-button" data-aos="fade-up" data-aos-delay="400">Explore Our Services</button>
        </div>
      </header>

      <section className="about" id="about">
        <div className="container">
          <div className="about-content">
            <div className="about-text" data-aos="fade-right">
              <h2>About Us</h2>
              <p>Established in 2001 by entrepreneur Gizeshwork Tessema, Gize PLC has grown into a globally recognized leader in transportation and logistics. Headquartered in Addis Ababa, Ethiopia, we've spent over two decades building a reputation for excellence and innovation.</p>
              <ul>
                <li>20+ Years of Excellence</li>
                <li>Dedicated Professional Team</li>
                <li>Customized Solutions</li>
                <li>Global Network Coverage</li>
              </ul>
            </div>
            <div className="about-stats" data-aos="fade-left">
              <div className="stat">
                <h3>22+</h3>
                <p>Years Experience</p>
              </div>
              <div className="stat">
                <h3>1000+</h3>
                <p>Happy Clients</p>
              </div>
              <div className="stat">
                <h3>24/7</h3>
                <p>Support</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="services" id="services">
        <div className="container">
          <h2 data-aos="fade-up">Our Services</h2>
          <div className="service-grid">
            <div className="service-card" data-aos="fade-up">
              <FontAwesomeIcon icon={faShip} className="service-icon" />
              <h3>International Freight</h3>
              <p>Comprehensive freight forwarding and shipping solutions worldwide</p>
            </div>
            <div className="service-card" data-aos="fade-up" data-aos-delay="100">
              <FontAwesomeIcon icon={faFileContract} className="service-icon" />
              <h3>Customs Clearance</h3>
              <p>Expert customs clearance and port handling services</p>
            </div>
            <div className="service-card" data-aos="fade-up" data-aos-delay="200">
              <FontAwesomeIcon icon={faWarehouse} className="service-icon" />
              <h3>Warehousing</h3>
              <p>Secure warehousing and storage solutions</p>
            </div>
            <div className="service-card" data-aos="fade-up" data-aos-delay="300">
              <FontAwesomeIcon icon={faSolarPanel} className="service-icon" />
              <h3>Energy Consulting</h3>
              <p>Renewable energy and infrastructure project development</p>
            </div>
            <div className="service-card" data-aos="fade-up" data-aos-delay="400">
              <FontAwesomeIcon icon={faBuildingColumns} className="service-icon" />
              <h3>Financial Services</h3>
              <p>Digital banking, investment banking, and FinTech solutions</p>
            </div>
            <div className="service-card" data-aos="fade-up" data-aos-delay="500">
              <FontAwesomeIcon icon={faLaptop} className="service-icon" />
              <h3>Digital Health</h3>
              <p>Innovative digital health solutions and services</p>
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
              <p>Email: gize@gizeplc.com</p>
              <p>Phone: +251 115 528080</p>
              <p>Address: Bole Rwanda Embassy Road, Addis Ababa, Ethiopia</p>
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
              <h3>About Gize PLC</h3>
              <p>A globally recognized leader in transportation, logistics, and innovative business solutions since 2001.</p>
            </div>
            <div className="footer-section">
              <h3>Quick Links</h3>
              <a href="#home">Home</a>
              <a href="#about">About</a>
              <a href="#services">Services</a>
              <a href="#contact">Contact</a>
            </div>
            <div className="footer-section">
              <h3>Core Services</h3>
              <a href="#services">Freight Forwarding</a>
              <a href="#services">Customs Clearance</a>
              <a href="#services">Energy Consulting</a>
              <a href="#services">Financial Services</a>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2025 Gize PLC. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
