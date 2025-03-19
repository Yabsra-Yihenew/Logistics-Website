import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import "../styles/Footer.css"; // Make sure to include this CSS file

const Footer = () => {
  const services = [
    "Shipping",
    "Freight Forwarding",
    "Port Handling",
    "Packing & Moving",
    "Warehousing",
    "Transportation",
    "Customs Clearance",
  ];

  const quickLinks = ["About Us", "Careers", "FAQ", "News", "Privacy Policy"];

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* About Us Section */}
        <div className="footer-section">
          <h3>About Us</h3>
          <p>
            GIZE PLC specializes in providing comprehensive logistics solutions,
            ensuring efficient and reliable services tailored to meet your business needs.
          </p>
          <p>📍 Addis Ababa, Ethiopia</p>
          <p>📞 +251 912 345 678</p>
          <p>✉️ contact@gizeplc.com</p>
        </div>

        {/* Links Section */}
        <div className="footer-section">
          <h3>Links</h3>
          <ul>
            {quickLinks.map((link) => (
              <li key={link}>
                <Link to={`/${link.toLowerCase().replace(/ /g, "-")}`}>
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Our Services Section */}
        <div className="footer-section">
          <h3>Our Services</h3>
          <ul>
            {services.map((service) => (
              <li key={service}>
                <Link to={`/services/${service.toLowerCase().replace(/ /g, "-")}`}>
                  {service}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Social Media Icons */}
      <div className="footer-social">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebookF />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <FaLinkedinIn />
        </a>
        <a href="https://wa.me/251912345678" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp />
        </a>
      </div>

      {/* Copyright Section */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} GIZE PLC. All Rights Reserved.</p>
        <p>website designed and built by <a href="https://melatechsolutions.com" target="_blank" rel="noopener noreferrer">MT</a></p>
        </div>
    </footer>
  );
};

export default Footer;
