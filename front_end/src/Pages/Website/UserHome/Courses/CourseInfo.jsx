import React from "react";
import "./CourseInfo.css";
const CourseInfo = ({ imgSrc, title, description }) => {
  return (
    <div className="course-info-landing">
      <img src={imgSrc} alt="logo" />
      <div className="course-text-landing">
        <h1>{title}</h1>
        <p>{description}</p>
        <div className="course-icons-landing">
          <div className="diff-landing">
            <div className="easy-landing">
              <i className="fa-solid fa-signal for-landing"></i>
              <p>Easy</p>
            </div>
          </div>
          <div className="duration-landing">
            <i className="fa-solid fa-clock for-landing"></i>
            <p className="time">15 min</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseInfo;
