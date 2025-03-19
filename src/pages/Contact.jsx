import React from "react";

import "../styles/Contact.css";
import contactHero from "../images/i4.jpeg";

const ContactUs = () => {
  return (
    <div className="contact-page">

{/* Hero Section */}
<div className="contact-hero">
  {/* Dark Overlay */}
  <div className="hero-overlay-bg"></div>

  {/* Hero Image */}
  <img src={contactHero} alt="Contact Us" className="hero-image" />

  {/* Text Content */}
  <div className="hero-overlay">
    <h1>Contact</h1>
  </div>
</div>


      {/* Contact Section */}
      <div className="contact-container">
        <h2 className="contact-heading">Get in touch with our expert team</h2>

        <div className="contact-content">
          {/* Left Side - Contact Form */}
          <div className="contact-form">
            <h3>Send us a Message</h3>
            <form>
              <input type="text" className="form-input" placeholder="Your Name" required />
              <input type="email" className="form-input" placeholder="Email Address" required />
              <input type="tel" className="form-input" placeholder="Phone Number" required />
              <textarea className="form-input" placeholder="Your Message" rows="4" required></textarea>
              <button type="submit" className="form-button">Send Message</button>
            </form>
          </div>

          {/* Right Side - Contact Information */}
          <div className="contact-info">
            <h3>Contact Information</h3>
            <div className="info-item">
              <span className="info-icon">📍</span>
              <p>Bole Road, Addis Ababa, Ethiopia</p>
            </div>
            <div className="info-item">
              <span className="info-icon">📞</span>
              <p>+251 912 345 678</p>
            </div>
            <div className="info-item">
              <span className="info-icon">✉️</span>
              <p>contact@gizeplc.com</p>
            </div>
            <h3>Business Hours</h3>
            <div className="info-item">
              <span className="info-icon">⏰</span>
              <p>Mon-Fri: 8:00 AM - 6:00 PM</p>
              <p>Sat: 9:00 AM - 1:00 PM</p>
              <p>Sun: Closed</p>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2425.8870609742436!2d-72.11140484845674!3d44.47466624761865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ca4b87db63171f1%3A0xc9dbce9de98f500b!2sBole%20Road%2C%20Addis%20Ababa%2C%20Ethiopia!5e0!3m2!1sen!2sus!4v1678134298992!5m2!1sen!2sus"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>


    </div>
  );
};

export default ContactUs;
