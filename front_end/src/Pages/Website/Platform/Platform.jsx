import React, { useState } from "react";
import "./platform.css";
import about1 from "../assets/img/core-img/about-2.png";

export default function Platform() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "What are the objectives of this Platform?",
      answer:
        "Our platform is designed to provide users with comprehensive knowledge in cybersecurity, offering practical exercises and tutorials for real-world skills development.",
    },
    {
      question: "What are the best features and services we deliver?",
      answer:
        "We deliver hands-on cybersecurity training, LAPS implementation guidance, interactive exercises, and tailored content for users of all levels.",
    },
    {
      question: "Why is this Platform important to me?",
      answer:
        "This platform is crucial for anyone looking to build a career in cybersecurity or strengthen their knowledge in protecting systems and networks from modern threats.",
    }
  ];
  

  return (
    <div className="striples-bg">
      <div className="platform section">
        <div className="container">
          <div className="section-row">
            <div className="text">
              <h2 className="first-header section-header">Our Platform FAQ</h2>
              <h2 className="second-header">Frequently Asked Questions</h2>
            </div>
          </div>
          <div className="faq-section">
            <div className="image">
              <img src={about1} alt="About" />
            </div>
            <dl className="section-text">
              {faqData.map((faq, index) => (
                <div key={index} className="faq-item">
                  <dt
                    className={`wavee faq-header ${
                      activeIndex === index ? "active" : ""
                    }`}
                    onClick={() => toggleFAQ(index)}
                  >
                    {faq.question}
                  </dt>
                  <dd
                    className={`faq-body ${
                      activeIndex === index ? "active" : ""
                    }`}
                  >
                    <p>{faq.answer}</p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}
