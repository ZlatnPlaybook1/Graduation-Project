import React from "react";
import "./Landing.css";

const Landing = () => {
  return (
    <div className="landing-home">
      <div className="container-home">
        <div className="course-info">
          {/* Course Text Section */}
          <div className="course-text">
            <h1>Learn</h1>
            <p className="brief">
              <i className="fa-solid fa-book-open"></i> Hands-on Hacking
            </p>
            <p>
              Our content is guided with interactive exercises based on
              real-world scenarios, from hacking machines to investigating
              attacks, we've got you covered.
            </p>
          </div>

          {/* Course Icon Section */}
          <div className="course-icon">
            <div className="border">
              <div className="content">
                <i className="fas fa-book-open"></i>
                <p>Learn</p>
                <i className="fas fa-bullseye"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
