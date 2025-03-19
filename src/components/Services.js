import React from 'react';
import { Link } from 'react-router-dom';
import './Services.css';

const Services = () => {
  const services = [
    {
      title: "SHIPPING",
      icon: "fas fa-ship",
      description: "We provide comprehensive shipping solutions tailored to your business needs, ensuring your cargo reaches its destination safely and on time.",
      link: "/services/shipping"
    },
    {
      title: "FREIGHT FORWARDING",
      icon: "fas fa-truck-moving",
      description: "Our expert team handles all aspects of freight forwarding, from documentation to customs clearance, making international shipping seamless.",
      link: "/services/freight-forwarding"
    },
    {
      title: "PORT HANDLING",
      icon: "fas fa-anchor",
      description: "We offer efficient port handling services to ensure smooth loading and unloading of your cargo at ports worldwide.",
      link: "/services/port-handling"
    },
    {
      title: "WAREHOUSING",
      icon: "fas fa-warehouse",
      description: "Our secure warehousing facilities provide safe storage for your goods with inventory management and distribution services.",
      link: "/services/warehousing"
    },
    {
      title: "TRANSPORTATION",
      icon: "fas fa-truck",
      description: "We provide reliable transportation services for local and international cargo movement with real-time tracking.",
      link: "/services/transportation"
    },
    {
      title: "CUSTOMS CLEARANCE",
      icon: "fas fa-clipboard-check",
      description: "Our customs clearance services ensure your shipments comply with all regulations and pass through customs without delays.",
      link: "/services/customer-clearance"
    }
  ];

  return (
    <section className="services-section">
      <div className="services-container">
        <div className="section-header">
          <h2>WHAT WE PROVIDE</h2>
          <div className="section-divider">
            <span></span>
          </div>
        </div>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="service-icon">
                <i className={service.icon}></i>
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <Link to={service.link} className="service-link">
                Learn More <i className="fas fa-arrow-right"></i>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
