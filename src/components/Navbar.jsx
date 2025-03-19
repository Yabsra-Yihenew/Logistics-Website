import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import logo from "../images/gize_logo.png";

const Navbar = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showTopBar, setShowTopBar] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
        setShowTopBar(false);
      } else {
        setScrolled(false);
        setShowTopBar(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const servicesDropdown = [
    "Shipping",
    "Freight Forwarding",
    "Port Handling",
    "Packing & Moving",
    "Warehousing",
    "Transportation",
    "Customs Clearance",
  ];

  const aboutDropdown = ["Chief Executive Officer", "Company Profile"];

  return (
    <>
      {/* Top Contact Bar (Only Visible When Not Scrolled) */}
      {showTopBar && (
        <div className="nav-top-bar">
          <a href="tel:+1234567890" className="contact-link">📞 Call Us: +123 456 7890</a>
          <a href="mailto:info@gize.com" className="contact-link">✉️ Email: info@gize.com</a>
        </div>
      )}

      {/* Main Navbar */}
      <nav className={`navbar-container ${scrolled ? "scrolled" : ""}`}>
        <div className="nav-main">
          {/* Logo */}
          <Link to="/" className="nav-logo-container">
            <img src={logo} alt="GIZE PLC" className="nav-logo" />
          </Link>

          {/* Desktop Navigation */}
          <div className="nav-links">
            <Link to="/" className="nav-link">
              Home
            </Link>

            {/* Services Dropdown */}
            <div className="dropdown">
              <span className="nav-link">Our Services ▼</span>
              <div className="dropdown-content">
                {servicesDropdown.map((item) => (
                  <Link
                    key={item}
                    to={`/services/${item.toLowerCase().replace(/ /g, "-")}`}
                    className="dropdown-item"
                  >
                    {item}
                  </Link>
                ))}
              </div>
            </div>

            {/* About Us Dropdown */}
            <div className="dropdown">
              <span className="nav-link">About Us ▼</span>
              <div className="dropdown-content">
                {aboutDropdown.map((item) => (
                  <Link
                    key={item}
                    to={item === "Chief Executive Officer" ? "/about/ceo" : "/about/company"}
                    className="dropdown-item"
                  >
                    {item}
                  </Link>
                ))}
              </div>
            </div>

            <Link to="/faq" className="nav-link">
              FAQ
            </Link>

            {/* Contact Us Button */}
            <Link to="/contact" className="contact-btn">
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="mobile-menu-btn" onClick={() => setIsMobileOpen(!isMobileOpen)}>
            ☰
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileOpen && (
          <div className="mobile-menu">
            <Link to="/" className="mobile-nav-link" onClick={() => setIsMobileOpen(false)}>
              Home
            </Link>

            <div className="mobile-nav-dropdown">
              <span onClick={() => setIsMobileOpen(false)}>Our Services ▼</span>
              <div className="mobile-dropdown">
                {servicesDropdown.map((item) => (
                  <Link
                    key={item}
                    to={`/services/${item.toLowerCase().replace(/ /g, "-")}`}
                    className="mobile-nav-link"
                  >
                    {item}
                  </Link>
                ))}
              </div>
            </div>

            <div className="mobile-nav-dropdown">
              <span onClick={() => setIsMobileOpen(false)}>About Us ▼</span>
              <div className="mobile-dropdown">
                {aboutDropdown.map((item) => (
                  <Link
                    key={item}
                    to={`/about/${item.toLowerCase().replace(/ /g, "-")}`}
                    className="mobile-nav-link"
                  >
                    {item}
                  </Link>
                ))}
              </div>
            </div>

            <Link to="/faq" className="mobile-nav-link" onClick={() => setIsMobileOpen(false)}>
              FAQ
            </Link>

            {/* Contact Us Button in Mobile Menu */}
            <Link to="/contact" className="mobile-contact-btn" onClick={() => setIsMobileOpen(false)}>
              Contact Us
            </Link>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
