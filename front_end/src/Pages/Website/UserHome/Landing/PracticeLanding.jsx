import React from "react";
import "./Landing.css";

const PracticeLanding = () => {
  return (
    <div className="my-landing">
      <div className="landing__overlay"></div>
      <div className="landing__content">
        <div className="landing__text">
          <h1 className="landing__title">Practice</h1>
          <h2 className="landing__subtitle">Labs for Attack & Vulnerability</h2>
          <p className="landing__description">
            Put your knowledge into action by solving hands-on lab challenges. Sharpen your skills against real vulnerabilities.
          </p>
          <button className="landing__cta">Try a Lab</button>
        </div>

        <div className="landing__icon">
          <div className="landing__icon-border">
            {/* Edge Icons */}
            <div className="landing__edge-icon landing__edge-icon--top">
              <i className="fas fa-laptop-code"></i>
            </div>
            <div className="landing__edge-icon landing__edge-icon--right">
              <i className="fas fa-tools"></i>
            </div>
            <div className="landing__edge-icon landing__edge-icon--bottom landing__edge-icon--active">
              <i className="fas fa-flask"></i>
            </div>
            <div className="landing__edge-icon landing__edge-icon--left">
              <i className="fas fa-user-secret"></i>
            </div>

            {/* Center Circle */}
            <div className="landing__icon-circle">Practice</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PracticeLanding;
