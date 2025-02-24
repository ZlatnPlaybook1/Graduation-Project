import React, { useState } from "react";
import "../../assets/css/Landing.css";

const CourseLanding = ({
  background,
  backgroundStyle,
  courseImage,
  courseTitle = "Course Title",
  courseDescription = "Course Description",
  difficulty = "Course Difficulty",
  duration = "Course Duration",
  onSaveRoom = () => {},
  onLike = () => {},
  onDislike = () => {},
}) => {
  // Track toggles for favorite, like, and dislike
  const [isFavorite, setIsFavorite] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [isDisliked, setIsDisliked] = useState(false);

  // Toggle favorite status
  const handleToggleFavorite = () => {
    setIsFavorite((prev) => !prev);
    onSaveRoom(); // Trigger callback
  };

  // Toggle like status
  const handleToggleLike = () => {
    setIsLiked((prev) => !prev);
    if (isDisliked) setIsDisliked(false);
    onLike(); // Trigger callback
  };

  // Toggle dislike status
  const handleToggleDislike = () => {
    setIsDisliked((prev) => !prev);
    if (isLiked) setIsLiked(false);
    onDislike(); // Trigger callback
  };

  return (
    <div className="my-landing">
      {/* Optional overlay for styling */}
      <div className="landing__overlay"></div>

      {/* If a background image is provided, render it here */}
      {background && (
        <div className="landing__banner">
          <img
            src={background}
            alt="Course Background"
            style={backgroundStyle}
          />
        </div>
      )}

      <div className="landing__content">
        {/* Breadcrumb (static example, can be made dynamic as needed) */}
        <div className="breadcrumb">
          <ul>
            <li>
              <a href="/home">Home</a>
            </li>
            <li>{courseTitle}</li>
          </ul>
        </div>

        {/* Main text/content area */}
        <div className="landing__text">
          <h1 className="landing__title">{courseTitle}</h1>
          <p className="landing__description">{courseDescription}</p>

          {/* Course details section (image, difficulty, duration) */}
          <div className="landing__details">
            {courseImage && (
              <img
                src={courseImage}
                alt="Course"
                className="landing__course-image"
              />
            )}
            <div className="landing__info-icons">
              <div className="landing__difficulty">
                <i className="fa-solid fa-signal"></i>
                <span className="landing__diff-label">{difficulty}</span>
              </div>
              <div className="landing__duration">
                <i className="fa-solid fa-clock"></i>
                <span className="landing__duration-label">{duration}</span>
              </div>
            </div>
          </div>

          {/* Actions: Favorite, Like, Dislike */}
          <div className="landing__actions">
            <button className="landing__cta" onClick={handleToggleFavorite}>
              {isFavorite ? "Remove from Favorite" : "Add to Favorite"}
            </button>
            <div className="landing__like-dislike">
              <button
                className={`landing__like ${isLiked ? "active" : ""}`}
                onClick={handleToggleLike}
              >
                <i className="fas fa-thumbs-up"></i>
              </button>
              <button
                className={`landing__dislike ${isDisliked ? "active" : ""}`}
                onClick={handleToggleDislike}
              >
                <i className="fas fa-thumbs-down"></i>
              </button>
            </div>
          </div>
        </div>

        {/* Decorative icon section (circle + edge icons) */}
        <div className="landing__icon">
          <div className="landing__icon-border">
            {/* Edge Icons */}
            <div className="landing__edge-icon landing__edge-icon--top">
              <i className="fas fa-user-secret"></i>
            </div>
            <div className="landing__edge-icon landing__edge-icon--right landing__edge-icon--active">
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
