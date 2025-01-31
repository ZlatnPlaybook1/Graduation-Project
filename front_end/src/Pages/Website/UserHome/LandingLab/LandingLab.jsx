import React from "react";
import { Link } from "react-router-dom";

const LandingLab = ({
  background,
  imagecourse,
  courseTitle = "Course Title",
  courseDescription = "Course Description",
  difficulty = "Course Difficulty",
  duration = "Course Duration",
  onSaveRoom = () => {},
  onLike = () => {},
  onDislike = () => {},
}) => {
  return (
    <div className="landing-labd">
      <div className="banner">
        <img src={background} alt="" />
      </div>
      <div className="container-labd">
        <div className="breadcrumb">
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="">{courseTitle}</Link>
            </li>
          </ul>
        </div>
        <div className="course-info">
          <img src={imagecourse} alt="Course" />
          <div className="course-text">
            <h1>{courseTitle}</h1>
            <p>{courseDescription}</p>
            <div className="course-icons">
              <div className="diff">
                <div className="easy">
                  <i className="fa-solid fa-signal"></i>
                  <p>{difficulty}</p>
                </div>
              </div>
              <div className="duration">
                <i className="fa-solid fa-clock"></i>
                <p className="time">{duration}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="options">
          <button onClick={onSaveRoom}>
            <i className="far fa-bookmark"></i>
            <p>Save Room</p>
          </button>
          <div className="like">
            <button onClick={onLike}>
              <i className="fas fa-thumbs-up"></i>
            </button>
            <button onClick={onDislike}>
              <i className="fas fa-thumbs-down"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingLab;
