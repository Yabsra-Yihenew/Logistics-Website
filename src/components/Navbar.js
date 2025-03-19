import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className={`header-container ${isSticky ? 'sticky' : ''}`}>
        <div className="top-bar">
          <div className="top-bar-inner">
            <div className="contact-info">
              <a href="mailto:info@gize.com"><i className="fas fa-envelope"></i> info@gize.com</a>
              <a href="tel:+251912345678"><i className="fas fa-phone"></i> +251 91 234 5678</a>
            </div>
          </div>
        </div>
        
        <nav className="navbar">
          <div className="navbar-inner">
            <div className="logo">
              <Link to="/">
                <img src="/logo.png" alt="Gize Logo" />
              </Link>
            </div>
            
            <div className="nav-links">
              <Link to="/">HOME</Link>
              
              <div 
                className="dropdown"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                <span>SERVICES <i className="fas fa-chevron-down"></i></span>
                {isServicesOpen && (
                  <div className="dropdown-content">
                    <Link to="/services/shipping">SHIPPING</Link>
                    <Link to="/services/freight-forwarding">FREIGHT FORWARDING</Link>
                    <Link to="/services/port-handling">PORT HANDLING</Link>
                    <Link to="/services/warehousing">WAREHOUSING</Link>
                    <Link to="/services/transportation">TRANSPORTATION</Link>
                    <Link to="/services/customer-clearance">CUSTOMS CLEARANCE</Link>
                  </div>
                )}
              </div>
              
              <Link to="/faq">FAQ</Link>
              
              <div 
                className="dropdown"
                onMouseEnter={() => setIsAboutOpen(true)}
                onMouseLeave={() => setIsAboutOpen(false)}
              >
                <span>ABOUT US <i className="fas fa-chevron-down"></i></span>
                {isAboutOpen && (
                  <div className="dropdown-content">
                    <Link to="/about-us/ceo">CEO</Link>
                    <Link to="/about-us/company-profile">COMPANY PROFILE</Link>
                  </div>
                )}
              </div>
            </div>
            
            <Link to="/contact" className="contact-button">CONTACT US</Link>
          </div>
        </nav>
      </div>
      
      {/* Floating Social Icons */}
      <div className="floating-social">
        {/* <a href="https://wa.me/251912345678" className="social-icon whatsapp-icon" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-whatsapp"></i>
        </a>
        <a href="tel:+251912345678" className="social-icon phone-icon">
          <i className="fas fa-phone"></i>
        </a> */}
      </div>
    </>
  );
};

export default Navbar;
