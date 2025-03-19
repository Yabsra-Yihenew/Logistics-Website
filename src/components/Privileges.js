import React from 'react';
import './Privileges.css';

const Privileges = () => {
  const privileges = [
    {
      icon: "fas fa-globe",
      title: "Global Network",
      description: "Access to our extensive network of partners worldwide helping us provide seamless door-to-door service for all your cargo needs."
    },
    {
      icon: "fas fa-truck",
      title: "Diversified Services",
      description: "From shipping and freight forwarding to customs clearance and warehousing, we offer comprehensive solutions tailored to your business requirements."
    },
    {
      icon: "fas fa-clock",
      title: "Fast & Timely Delivery",
      description: "We pride ourselves on providing fast and timely door-to-door services that meet your schedule constraints."
    },
    {
      icon: "fas fa-shield-alt",
      title: "Cargo Safety",
      description: "Proper handling of all cargo types including normal, DG, chemical, liquid, high pressure, and specialized materials with appropriate packaging."
    },
    {
      icon: "fas fa-file-alt",
      title: "Documentation Support",
      description: "We handle all documentation requirements including review of Letters of Credit, issuing Bills of Lading, and legalization of invoices."
    },
    {
      icon: "fas fa-search",
      title: "Real-Time Tracking",
      description: "Monitor your shipment from your office or home through our online tracking system, keeping you informed at every step."
    }
  ];

  return (
    <section className="privileges-section" id="privileges">
      <div className="privileges-container">
        <div className="section-header">
          <h2>WHY CHOOSE GIZE</h2>
          <div className="section-divider">
            <span></span>
          </div>
          <p className="section-subtitle">
            Gize Logistics and Transport is managed by a team of professionals dedicated to responding promptly to customer demands
          </p>
        </div>
        
        <div className="privileges-grid">
          {privileges.map((item, index) => (
            <div className="privilege-card" key={index}>
              <div className="privilege-icon">
                <i className={item.icon}></i>
              </div>
              <h3 className="privilege-title">{item.title}</h3>
              <p className="privilege-description">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Privileges;
