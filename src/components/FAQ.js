import React, { useState } from 'react';
import './FAQ.css';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  
  const faqs = [
    {
      question: "What logistics services does Gize offer?",
      answer: "Gize offers a comprehensive range of logistics services including shipping, freight forwarding, port handling, warehousing, transportation, and customs clearance. We provide end-to-end supply chain solutions tailored to your specific business needs."
    },
    {
      question: "How can I track my shipment?",
      answer: "You can track your shipment through our online tracking portal using your tracking number. Alternatively, you can contact our customer service team who will provide you with real-time updates on your shipment status."
    },
    {
      question: "What areas do you serve?",
      answer: "We operate globally with a strong presence in Africa, Europe, Asia, and the Americas. Our extensive network of partners allows us to provide seamless logistics services across more than 50 countries worldwide."
    },
    {
      question: "How are shipping costs calculated?",
      answer: "Shipping costs are calculated based on several factors including the weight and dimensions of your cargo, shipping distance, mode of transportation, special handling requirements, and current fuel prices. Contact us for a detailed quote tailored to your specific shipment."
    },
    {
      question: "What documentation is required for international shipping?",
      answer: "Required documentation typically includes a commercial invoice, packing list, bill of lading or airway bill, certificate of origin, and customs declaration forms. Additional documents may be required depending on the nature of the goods and destination country regulations."
    },
    {
      question: "How do you handle customs clearance?",
      answer: "Our experienced customs brokers handle all aspects of customs clearance, including documentation preparation, tariff classification, duty and tax calculation, and compliance with import/export regulations. We ensure your shipments clear customs efficiently and in compliance with all relevant laws."
    }
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section" id="faq">
      <div className="faq-container">
        <div className="section-header">
          <h2>FREQUENTLY ASKED QUESTIONS</h2>
          <div className="section-divider">
            <span></span>
          </div>
        </div>
        
        <div className="faq-accordion">
          {faqs.map((faq, index) => (
            <div className="faq-item" key={index}>
              <div 
                className={`faq-question ${activeIndex === index ? 'active' : ''}`}
                onClick={() => toggleAccordion(index)}
              >
                <h3>{faq.question}</h3>
                <span className="faq-icon">
                  <i className={`fas ${activeIndex === index ? 'fa-minus' : 'fa-plus'}`}></i>
                </span>
              </div>
              <div className={`faq-answer ${activeIndex === index ? 'active' : ''}`}>
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
