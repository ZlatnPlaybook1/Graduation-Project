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
  // Button toggles
  const [isSaved, setIsSaved] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [isDisliked, setIsDisliked] = useState(false);

  // Track whether the course has been started
  const [isStarted, setIsStarted] = useState(false);

  // On component mount, load states from localStorage
  useEffect(() => {
    const savedState = JSON.parse(localStorage.getItem("buttonStates")) || {};
    setIsSaved(savedState.isSaved || false);
    setIsLiked(savedState.isLiked || false);
    setIsDisliked(savedState.isDisliked || false);

    // Check if this specific course was started
    const startedCourseTitle = localStorage.getItem("startedCourse");
    if (startedCourseTitle === courseTitle) {
      setIsStarted(true);
    }
  }, [courseTitle]);

  // Whenever our states change, persist them in localStorage
  useEffect(() => {
    const buttonStates = { isSaved, isLiked, isDisliked };
    localStorage.setItem("buttonStates", JSON.stringify(buttonStates));

    // Also store the started course if isStarted is true
    if (isStarted) {
      localStorage.setItem("startedCourse", courseTitle);
    } else {
      const startedCourseTitle = localStorage.getItem("startedCourse");
      if (startedCourseTitle === courseTitle) {
        localStorage.removeItem("startedCourse");
      }
    }
  }, [isStarted, isSaved, isLiked, isDisliked, courseTitle]);

  // Handlers for toggling states
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

  // Handle starting the course
  const handleStartCourse = () => {
    setIsStarted(true);
  };

  return (
    <div
      className="my-landing"
      style={{
        backgroundImage: background ? `url(${background})` : "none",
        backgroundSize: "cover",
        backgroundPosition: "center",
        ...backgroundStyle,
      }}
    >
      {/* Optional background banner */}
      {background && (
        <div className="landing__banner">
          <img src={background} alt="Course Background" />
        </div>
      )}
      <div className="landing__overlay"></div>
      <div className="landing__content">
        {/* Breadcrumb */}
        <div className="landing__breadcrumb">
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="#">{courseTitle}</Link>
            </li>
          </ul>
        </div>

        {/* Course Info Section */}
        <div className="landing__course--info">
          {courseImage && <img src={courseImage} alt="Course" />}
          <div className="course-text">
            <h1>{courseTitle}</h1>
            <p>{courseDescription}</p>
            <div className="landing__course--icons">
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

        {/* Conditional rendering for Start Course vs. Options */}
        {!isStarted ? (
          <button className="landing__cta" onClick={handleStartCourse}>
            Start Course
          </button>
        ) : (
          <div className="landing__options">
            <button onClick={toggleSaveRoom} className={isSaved ? "active" : ""}>
              <i className="far fa-bookmark"></i>
              <p>{isSaved ? "Remove from Favorite" : "Add to Favorite"}</p>
            </button>
            <div className="like">
              <button onClick={toggleLike} className={isLiked ? "active" : ""}>
                <i className="fas fa-thumbs-up"></i>
              </button>
              <button onClick={toggleDislike} className={isDisliked ? "active" : ""}>
                <i className="fas fa-thumbs-down"></i>
              </button>
            </div>
          </div>
        )}

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
  );
};

export default CourseLanding;
