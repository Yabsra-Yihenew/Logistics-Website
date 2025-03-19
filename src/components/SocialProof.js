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
      logo: require('../images/partners/hae-group.png')
    },
    {
      name: "The World Bank",
      logo: require('../images/partners/world-bank.png')
    },
    {
      name: "IATA",
      logo: require('../images/partners/iata.png')
    },
    {
      name: "DHL",
      logo: require('../images/partners/dhl.png')
    },
    {
      name: "FedEx",
      logo: require('../images/partners/fedex.png')
    },
    {
      name: "UPS",
      logo: require('../images/partners/ups.png')
    }
  ];

  // Duplicate partners array for continuous loop
  const partnersLoop = [...partners, ...partners];

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
          <div className="partners-content">
            {partnersLoop.map((partner, index) => (
              <div key={index} className="partner-item">
                <div className="partner-logo">
                  <img src={partner.logo} alt={partner.name} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
