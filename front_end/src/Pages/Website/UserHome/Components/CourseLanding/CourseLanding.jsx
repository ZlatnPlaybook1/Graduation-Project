import React from "react";
import "../../assets/css/Landing.css";
import bg from "../../assets/css/bg.jpg";

const CourseLanding = () => {
  return (
    <div className="my-landing" style={{ backgroundImage: bg }}>
      <div className="landing__overlay"></div>
      <div className="landing__content">
        <div className="landing__text">
          <h1 className="landing__title">Course  Info</h1>
          <h2 className="landing__subtitle">Dive into Vulnerabilities</h2>
          <p className="landing__description">
            Explore detailed explanations of main topics, vulnerabilities, 
            and best practices to secure your applications and systems.
          </p>
          <button className="landing__cta">Start Course</button>
        </div>

        <div className="landing__icon">
          <div className="landing__icon-border">
            {/* Edge Icons */}
            <div className="landing__edge-icon landing__edge-icon--top ">
              <i className="fas fa-user-secret"></i>
            </div>
            <div className="landing__edge-icon landing__edge-icon--right landing__edge-icon--active ">
              <i className="fas fa-book-open"></i>
            </div>
            <div className="landing__edge-icon landing__edge-icon--left">
              <i className="fas fa-lightbulb"></i>
            </div>
            {/* Center Circle */}
            <div className="landing__icon-circle">Course</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseLanding;