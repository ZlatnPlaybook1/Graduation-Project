import React from "react";
import "./services.css";
// Import images
import s1 from "../assets/img/icons/s1.png";
import s2 from "../assets/img/icons/s2.png";
import s3 from "../assets/img/icons/s3.png";
import s4 from "../assets/img/icons/s4.png";
import s5 from "../assets/img/icons/s5.png";
import s6 from "../assets/img/icons/s6.png";
import bgBubble from "../assets/img/svg/bg-home-bubble.svg";
const Services = () => {
  const serviceIcons = [s1, s2, s3, s4, s5, s6];
  return (
    <div id="services" className="services section">
      <div className="container">
        <div className="section-row">
          <div className="text">
            <h2 className="first-header section-header">Our Services</h2>
            <h2 className="second-header">Our Core Services</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis
              dicta eius, aliquam similique est totam, laudantium vel error
              dolore, harum iste soluta odio.
            </p>
          </div>
        </div>
        <div className="services-card-section">
          {/* Service card items */}
          {[1, 2, 3, 4, 5, 6].map((num) => (
            <div key={num} className="services-card-item">
              <img src={serviceIcons[num - 1]} alt={`Service ${num}`} />{" "}
              <h2>{getServiceTitle(num)}</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellendus commodi, omnis neque vitae molestiae ex
              </p>
              <img src={bgBubble} className="before" alt="Background bubble" />
              <img src={bgBubble} className="after" alt="Background bubble" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const getServiceTitle = (num) => {
  const titles = [
    "Cyber Security Solutions",
    "Networking and Security",
    "IT & Cloud Management",
    "Deployment and Migration",
    "Managed Web Application",
    "IT & Cloud Management",
  ];
  return titles[num - 1];
};

export default Services;
