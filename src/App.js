import React from 'react';
import './App.css';

function App() {
  return (
    <div className="app">
      <nav className="navbar">
        <div className="container">
          <div className="logo">GIZE PLC</div>
          <div className="nav-links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      <header className="hero">
        <div className="container">
          <h1>Welcome to Gize PLC</h1>
          <p>Your Trusted Partner in Excellence</p>
          <button className="cta-button">Learn More</button>
        </div>
      </header>

      <section className="features">
        <div className="container">
          <div className="feature-grid">
            <div className="feature-card">
              <h3>Innovation</h3>
              <p>Driving progress through innovative solutions</p>
            </div>
            <div className="feature-card">
              <h3>Excellence</h3>
              <p>Committed to delivering excellence in every project</p>
            </div>
            <div className="feature-card">
              <h3>Partnership</h3>
              <p>Building lasting relationships with our clients</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <p>&copy; 2025 Gize PLC. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
