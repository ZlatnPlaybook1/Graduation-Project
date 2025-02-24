import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../assets/css/Landing.css";

const CourseLanding = ({
  background,
  backgroundStyle = {},
  courseImage,
  courseTitle = "Course Title",
  courseDescription = "Course Description",
  difficulty = "Course Difficulty",
  duration = "Course Duration",
  onSaveRoom = () => {},
  onLike = () => {},
  onDislike = () => {},
}) => {
  const [isSaved, setIsSaved] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [isDisliked, setIsDisliked] = useState(false);
  const [isStarted, setIsStarted] = useState(false);

  useEffect(() => {
    const savedState = JSON.parse(localStorage.getItem("buttonStates")) || {};
    setIsSaved(savedState.isSaved || false);
    setIsLiked(savedState.isLiked || false);
    setIsDisliked(savedState.isDisliked || false);

    const startedCourseTitle = localStorage.getItem("startedCourse");
    if (startedCourseTitle === courseTitle) {
      setIsStarted(true);
    }
  }, [courseTitle]);

  useEffect(() => {
    const buttonStates = { isSaved, isLiked, isDisliked };
    localStorage.setItem("buttonStates", JSON.stringify(buttonStates));

    if (isStarted) {
      localStorage.setItem("startedCourse", courseTitle);
    } else {
      const startedCourseTitle = localStorage.getItem("startedCourse");
      if (startedCourseTitle === courseTitle) {
        localStorage.removeItem("startedCourse");
      }
    }
  }, [isStarted, isSaved, isLiked, isDisliked, courseTitle]);

  const toggleSaveRoom = () => {
    setIsSaved((prev) => !prev);
    onSaveRoom();
  };

  const toggleLike = () => {
    setIsLiked((prev) => !prev);
    if (isDisliked) setIsDisliked(false);
    onLike();
  };

  const toggleDislike = () => {
    setIsDisliked((prev) => !prev);
    if (isLiked) setIsLiked(false);
    onDislike();
  };

  const handleStartCourse = () => {
    setIsStarted(true);
  };

  return (
    <div className="landing">
      {/* Optional overlay */}
      <div className="landing__overlay"></div>

      {/* Background Banner */}
      <div className="landing__banner">
        {background && (
          <img src={background} alt="Course Background" style={backgroundStyle} />
        )}
      </div>

      <div className="container">
        <div className="row align-items-center ">
          {/* LEFT COLUMN: Breadcrumb + Course Info */}
          <div className="landing__content col-lg-8">
            {/* Breadcrumb */}
            <div className="landing__breadcrumb">
              <ul className="landing__breadcrumb-list">
                <li className="landing__breadcrumb-item">
                  <Link to="/home">Home</Link>
                </li>
                <li className="landing__breadcrumb-item">
                  <Link to="#">{courseTitle}</Link>
                </li>
              </ul>
            </div>

            {/* Course Info */}
            <div className="landing__course-info">
              {courseImage && (
                <img
                  className="landing__course-info-image"
                  src={courseImage}
                  alt="Course"
                />
              )}
              <div className="landing__course-text">
                <h1 className="landing__course-title">{courseTitle}</h1>
                <p className="landing__course-description">{courseDescription}</p>
                <div className="landing__course-icons">
                  <div className="landing__course-difficulty">
                    <i className="fa-solid fa-signal"></i>
                    <p>{difficulty}</p>
                  </div>
                  <div className="landing__course-duration">
                    <i className="fa-solid fa-clock"></i>
                    <p>{duration}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Start/Options + Icon Circle */}
          <div className="d-flex flex-column align-items-end">
            {/* If not started, show Start Course; else show Favorite/Like/Dislike */}
            {!isStarted ? (
              <button className="landing__cta mb-3" onClick={handleStartCourse}>
                Start Course
              </button>
            ) : (
              <div className="landing__options mb-3">
                <button
                  onClick={toggleSaveRoom}
                  className={`landing__options-button ${
                    isSaved ? "landing__options-button--active" : ""
                  }`}
                >
                  <i className="far fa-bookmark"></i>
                  <p>{isSaved ? "Remove from Favorite" : "Add to Favorite"}</p>
                </button>
                <div className="landing__options-like">
                  <button
                    onClick={toggleLike}
                    className={`landing__options-like-button ${
                      isLiked ? "landing__options-like-button--active" : ""
                    }`}
                  >
                    <i className="fas fa-thumbs-up"></i>
                  </button>
                  <button
                    onClick={toggleDislike}
                    className={`landing__options-like-button ${
                      isDisliked ? "landing__options-like-button--active" : ""
                    }`}
                  >
                    <i className="fas fa-thumbs-down"></i>
                  </button>
                </div>
              </div>
            )}

          </div>
            {/* Icon Circle & Edge Icons */}
            <div className="landing__icon">
              <div className="landing__icon-border">
                <div className="landing__edge-icon landing__edge-icon--top">
                  <i className="fas fa-user-secret"></i>
                </div>
                <div className="landing__edge-icon landing__edge-icon--right landing__edge-icon--active">
                  <i className="fas fa-book-open"></i>
                </div>
                <div className="landing__edge-icon landing__edge-icon--left">
                  <i className="fas fa-lightbulb"></i>
                </div>
                <div className="landing__icon-circle">Course</div>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default CourseLanding;
