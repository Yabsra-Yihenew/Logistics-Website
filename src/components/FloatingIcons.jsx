import React from "react";
import "../styles/FloatingIcons.css";
import call from "../images/call2.png";
import whats from "../images/whats_up.png";

function FloatingIcons() {
  return (
    <div className="floating-icons">
    
      <a
        href="https://wa.me/1234567890"
        className="floating-icon whatsapp"
        aria-label="Chat on WhatsApp"
      >
        <img
          src={whats}
          alt="WhatsApp Icon"
          className="icon"
        />
      </a>
      <a
        href="tel:+1234567890"
        className="floating-icon phone"
        aria-label="Call us"
      >
        <img
          src={call}
          alt="Phone Icon"
          className="icon"
        />
      </a>
    </div>
  );
}

export default FloatingIcons;
