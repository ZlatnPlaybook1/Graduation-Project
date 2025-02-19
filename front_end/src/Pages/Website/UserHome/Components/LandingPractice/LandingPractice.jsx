import React from "react";

// Landing page for Practice section
//  where CSS File For this section,
export default function LandingPractice() {
  return (
    <div className="landing">
      <div className="container">
        <div className="course-info">
          <div className="course-text">
            <h1>Practice</h1>
            <p className="brief">
              <i className="fa-solid fa-bullseye"></i> Reinforce what you're
              learning
            </p>
            <p>
              Put your knowledge into practice with gamified cyber security
              challenges.
            </p>
          </div>
          <div className="course-icon">
            <div className="border-icon">
              <div className="content">
                <i className="fas fa-book-open"></i>
                <p>Practice</p>
                <i className="fas fa-bullseye"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
