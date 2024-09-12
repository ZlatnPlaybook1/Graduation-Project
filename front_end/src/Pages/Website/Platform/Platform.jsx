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
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore omnis quaerat nostrum, pariatur ipsam sunt accusamus enim necessitatibus est fugiat, assumenda dolorem, deleniti corrupti cupiditate ipsum, dolorum voluptatum esse error?",
    },
    {
      question: "What are the best features and services we deliver?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore omnis quaerat nostrum, pariatur ipsam sunt accusamus enim necessitatibus est fugiat, assumenda dolorem, deleniti corrupti cupiditate ipsum, dolorum voluptatum esse error?",
    },
    {
      question: "Why is this Platform important to me?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore omnis quaerat nostrum, pariatur ipsam sunt accusamus enim necessitatibus est fugiat, assumenda dolorem, deleniti corrupti cupiditate ipsum, dolorum voluptatum esse error?",
    },
    {
      question: "How may I take part in and purchase this Platform?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore omnis quaerat nostrum, pariatur ipsam sunt accusamus enim necessitatibus est fugiat, assumenda dolorem, deleniti corrupti cupiditate ipsum, dolorum voluptatum esse error?",
    },
    {
      question: "What are the best features and services we deliver?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore omnis quaerat nostrum, pariatur ipsam sunt accusamus enim necessitatibus est fugiat, assumenda dolorem, deleniti corrupti cupiditate ipsum, dolorum voluptatum esse error?",
    },
  ];

  return (
    <div className="striples-bg">
      <div className="platform section">
        <div className="container">
          <div className="section-row">
            <div className="text">
              <h2 className="first-header section-header">Our Platform FAQ</h2>
              <h2 className="second-header">Frequently Asked Questions</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis
                dicta eius, aliquam similique est totam, laudantium vel error
                dolore, harum iste soluta odio.
              </p>
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
