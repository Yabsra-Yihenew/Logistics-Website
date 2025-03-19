import React from 'react';
import './SocialProof.css';

const SocialProof = () => {
  const stats = [
    {
      number: "15+",
      label: "Years Experience",
      icon: "fas fa-calendar-alt"
    },
    {
      number: "1000+",
      label: "Clients Worldwide",
      icon: "fas fa-users"
    },
    {
      number: "50+",
      label: "Countries Served",
      icon: "fas fa-globe-africa"
    },
    {
      number: "24/7",
      label: "Customer Support",
      icon: "fas fa-headset"
    }
  ];

  const partners = [
    {
      name: "HAE Group",
      logo: "https://via.placeholder.com/150x80?text=HAE+Group"
    },
    {
      name: "The World Bank",
      logo: "https://via.placeholder.com/150x80?text=World+Bank"
    },
    {
      name: "IATA",
      logo: "https://via.placeholder.com/150x80?text=IATA"
    },
    {
      name: "Wilhelmship Navigation",
      logo: "https://via.placeholder.com/150x80?text=Wilhelmship"
    },
    {
      name: "CARGOLINK",
      logo: "https://via.placeholder.com/150x80?text=CARGOLINK"
    },
    {
      name: "United Nations",
      logo: "https://via.placeholder.com/150x80?text=United+Nations"
    }
  ];

  return (
    <section className="social-proof-section">
      <div className="social-proof-container">
        <div className="stats-container">
          {stats.map((stat, index) => (
            <div className="stat-item" key={index}>
              <div className="stat-icon">
                <i className={stat.icon}></i>
              </div>
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
        
        <div className="partners-container">
          <div className="section-header">
            <h2>OUR PARTNERS</h2>
            <div className="section-divider">
              <span></span>
            </div>
          </div>
          
          <div className="partners-logos">
            {partners.map((partner, index) => (
              <div className="partner-logo" key={index}>
                <img src={partner.logo} alt={partner.name} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
