import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        <div className="section-header">
          <h2>ABOUT US</h2>
          <div className="section-divider">
            <span></span>
          </div>
        </div>
        
        <div className="about-content">
          <div className="about-image">
            <img src="https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" alt="Logistics" />
          </div>
          
          <div className="about-text">
            <h3>Your Trusted Logistics Partner</h3>
            <p>
              Gize is a leading logistics company providing comprehensive shipping, freight forwarding, and supply chain solutions. 
              With years of experience in the industry, we have built a reputation for reliability, efficiency, and customer satisfaction.
            </p>
            <p>
              Our mission is to simplify global logistics through innovative solutions, personalized service, and a commitment to excellence. 
              We understand the complexities of international trade and strive to make the process as smooth as possible for our clients.
            </p>
            
            <div className="about-features">
              <div className="feature">
                <div className="feature-icon">
                  <i className="fas fa-globe"></i>
                </div>
                <div className="feature-text">
                  <h4>Global Network</h4>
                  <p>With partners in over 100 countries, we can handle shipments anywhere in the world.</p>
                </div>
              </div>
              
              <div className="feature">
                <div className="feature-icon">
                  <i className="fas fa-clock"></i>
                </div>
                <div className="feature-text">
                  <h4>24/7 Support</h4>
                  <p>Our dedicated team is available around the clock to assist with any inquiries.</p>
                </div>
              </div>
              
              <div className="feature">
                <div className="feature-icon">
                  <i className="fas fa-shield-alt"></i>
                </div>
                <div className="feature-text">
                  <h4>Secure Handling</h4>
                  <p>We prioritize the safety and security of your cargo throughout its journey.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
