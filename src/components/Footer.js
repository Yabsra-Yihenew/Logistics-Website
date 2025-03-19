import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="contact-buttons">
        <a href="https://wa.me/251911516478" className="whatsapp-button" target="_blank" rel="noopener noreferrer">
          <div className="button-icon">
            <i className="fab fa-whatsapp"></i>
          </div>
          <div className="button-text">
            <span>Chat With Us</span>
            <small>We're online now</small>
          </div>
        </a>
        <a href="tel:+251911516478" className="call-button">
          <div className="button-icon">
            <i className="fas fa-phone-alt"></i>
          </div>
          <div className="button-text">
            <span>Call Us Now</span>
            <small>24/7 Support</small>
          </div>
        </a>
      </div>

      <div className="footer-top">
        <div className="footer-container">
          <div className="footer-columns">
            <div className="footer-column">
              <div className="footer-logo">
                <img src="/logo.png" alt="Gize Logo" />
              </div>
              <p className="footer-description">
                Gize Logistics and Transport is a Freight forwarding Company managed by a team of professionals who are dedicated to responding promptly to customer demands. We offer comprehensive services customized to suit your needs.
              </p>
              <div className="footer-social">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
            
            <div className="footer-column">
              <h3 className="footer-title">Our Services</h3>
              <ul className="footer-links">
                <li><Link to="/services/shipping">Shipping</Link></li>
                <li><Link to="/services/freight-forwarding">Freight Forwarding</Link></li>
                <li><Link to="/services/port-handling">Port Handling</Link></li>
                <li><Link to="/services/packing-moving">Packing And Moving</Link></li>
                <li><Link to="/services/warehousing">Warehousing</Link></li>
                <li><Link to="/services/transportation">Transportation</Link></li>
                <li><Link to="/services/customs-clearance">Customs Clearance</Link></li>
              </ul>
            </div>
            
            <div className="footer-column">
              <h3 className="footer-title">Quick Links</h3>
              <ul className="footer-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about-us">About Us</Link></li>
                <li><Link to="/global-locations">Global Locations</Link></li>
                <li><Link to="/faq">FAQ</Link></li>
                <li><Link to="/track-shipment">Track Shipment</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/privacy-policy">Privacy Policy</Link></li>
              </ul>
            </div>
            
            <div className="footer-column">
              <h3 className="footer-title">Contact Us</h3>
              <ul className="footer-contact">
                <li>
                  <i className="fas fa-map-marker-alt"></i>
                  <span>Bole Rwanda Embassy Road</span>
                </li>
                <li>
                  <i className="fas fa-phone"></i>
                  <span>Tel: +251 115 528080</span>
                </li>
                <li>
                  <i className="fas fa-mobile-alt"></i>
                  <span>Mob: +251 911 516478</span>
                </li>
                <li>
                  <i className="fas fa-envelope"></i>
                  <span>gize@gizeplc.com</span>
                </li>
                <li>
                  <i className="fas fa-clock"></i>
                  <span>Mon - Fri: 8:00 AM - 6:00 PM</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="footer-container">
          <a href="https://melaTechsolution.com" target="_blank" rel="noopener noreferrer" className="copyright">MelaTech Solution</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
