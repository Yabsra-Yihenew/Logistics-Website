import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FloatingIcons from "../components/FloatingIcons";
import "./Home.css";

function Home() {
  return (
    <div>
      <Navbar />
      <div className="hero">
        <h1>Welcome to Our Logistics Company</h1>
        <p>Providing top-notch shipping, freight, and warehousing services.</p>
        <div className="hero-buttons">
          <button className="btn-discover">Discover Now</button>
          <button className="btn-contact">Contact Us</button>
        </div>
      </div>
      <FloatingIcons />
      <Footer />
    </div>
  );
}

export default Home;
