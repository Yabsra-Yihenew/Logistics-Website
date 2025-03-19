import React from "react";

import FloatingIcons from "../components/FloatingIcons";
import ceo from "../images/moke_2.jpg";
import "../styles/Company.css"; // Import the separate CSS file

function Company() {
  return (
    <div className="company-container">


      {/* Hero Section */}
      <div className="hero-section">
        <img src={ceo} alt="Company Overview" className="hero-image" />
        <div className="hero-overlay">
          <h1 className="hero-title">About Our Company</h1>
        </div>
      </div>

      {/* Company Profile Section */}
      <section className="company-profile">
        <h2 className="section-title">Our Company</h2>
        <p className="section-subtitle">
          We provide high-quality logistics, freight forwarding, and supply chain solutions.
        </p>

        <div className="company-content">
          {/* Left: Company Description */}
          <div className="company-text">
            <p>
              Founded in Ethiopia's capital, Addis Ababa, over eighteen years ago, Gize PLC has established itself
              as a reputed leader in the transportation and logistics sector in the country and region at large. 
              Gize PLC is recognized for a comprehensive range of transportation and logistics solutions, including 
              travel and tours, and much more. The company is known for its dedicated and committed workforce and 
              ability to offer competitive, customized services.
            </p>
          </div>

          {/* Right: Core Values Section */}
          <div className="core-values">
            <div className="value-card">
              <h3>Global Reach</h3>
              <p>
                We operate across over 30 countries, providing fast and reliable logistics solutions tailored to
                meet local needs.
              </p>
            </div>

            <div className="value-card">
              <h3>Innovation at Core</h3>
              <p>
                Emphasizing technological advancements, we streamline processes for better efficiency and reduced
                costs.
              </p>
            </div>
          </div>
        </div>
      </section>

      <FloatingIcons />
 
    </div>
  );
}

export default Company;
