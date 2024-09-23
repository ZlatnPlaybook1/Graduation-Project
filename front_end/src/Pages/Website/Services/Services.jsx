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
  const serviceIcons = [s1, s2, s3, s4 , s5 ,s6];
  return (
    <div id="learningPath" className="services section">
      <div className="container">
        <div className="section-row">
          <div className="text">
            <h2 className="first-header section-header">Our Cybersecurity Learning Pathways</h2>
            <h2 className="second-header">Explore Our Courses</h2>
            <p>
              Our platform offers a variety of learning pathways designed to equip you with
              the skills needed to excel in the field of cybersecurity.
            </p>
          </div>
        </div>
        <div className="services-card-section">
          {/* Service card items */}
          {[1, 2, 3, 4 ,5 ,6 ].map((num) => (
            <div key={num} className="services-card-item">
              <img src={serviceIcons[num - 1]} alt={`Service ${num}`} />{" "}
              <h2>{getServiceTitle(num)}</h2>
              <p>
                {getServiceDescription(num)} {/* Updated to use new description function */}
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
    "Cybersecurity Fundamentals",
    "Network Security",
    "Threat Detection and Response",
    "Ethical Hacking and Penetration Testing",
    "Incident Response and Management",
    "Cloud Security",
  ];
  return titles[num - 1];
};

// New function for descriptions
const getServiceDescription = (num) => {
  const descriptions = [
    "Introduces the basics of cybersecurity, including key concepts, terminologies, and best practices for securing information systems.",
    "Covers essential techniques for securing networks, including firewalls, intrusion detection systems, and network monitoring.",
    "Focuses on identifying and responding to security threats, covering incident response, forensics, and threat intelligence.",
    "Teaches ethical hacking techniques to assess security, including penetration testing and vulnerability assessments.",
    "Covers the processes and best practices for effectively responding to and managing cybersecurity incidents, including preparation, detection, analysis, and recovery.",
    "Explores security challenges in cloud computing environments, covering best practices for securing cloud infrastructure and services.",
  ];
  return descriptions[num - 1];
};

export default Services;



