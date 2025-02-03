import React, { useState } from "react";
import Swal from "sweetalert2";
import "./MCQ.css"; // Assuming this is where the CSS is defined

const MCQQuiz = ({ questionsData }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [showAnswer, setShowAnswer] = useState(false);
  const [userAnswers, setUserAnswers] = useState([]);
  const [score, setScore] = useState(0);

  const questions = questionsData.questions;
  const totalQuestions = questions.length;
  const currentQuestion = questions[currentQuestionIndex];

  const handleNext = () => {
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption("");
      setShowAnswer(false);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      setSelectedOption("");
      setShowAnswer(false);
    }
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setShowAnswer(true);

    // Save the selected answer for final score calculation
    const newAnswers = [...userAnswers];
    newAnswers[currentQuestionIndex] = option;
    setUserAnswers(newAnswers);

    // Update the score
    if (option === currentQuestion.answer) {
      setScore(score + 1);
    }
  };

  const handleSubmit = () => {
    const finalScore = score;
    if (finalScore >= 15) {
      Swal.fire({
        title: "Congratulations!",
        text: `Your level is fair! Final score: ${finalScore}`,
        icon: "success",
        confirmButtonText: "OK",
      });
    } else {
      Swal.fire({
        title: "Try again!",
        text: `You failed. Final score: ${finalScore}. \n\nPlease try again.`,
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  return (
    <div className="quiz-container">
      {/* Progress Bar */}
      <div className="progress-bar">
        <div
          className="progress"
          style={{
            width: `${((currentQuestionIndex + 1) / totalQuestions) * 100}%`,
          }}
        ></div>
      </div>
      <div className="progress-text">
        Question {currentQuestionIndex + 1} of {totalQuestions}
      </div>

      {/* Question */}
      <div className="question-container">
        <h2 className="question">{currentQuestion.question}</h2>
        <div className="options">
          {currentQuestion.options.map((option, index) => (
            <button
              key={index}
              className={`option-button ${
                showAnswer && option === currentQuestion.answer ? "correct" : ""
              } ${
                showAnswer &&
                selectedOption === option &&
                option !== currentQuestion.answer
                  ? "incorrect"
                  : ""
              }`}
              onClick={() => handleOptionSelect(option)}
              disabled={showAnswer}
            >
              {option}
            </button>
          ))}
        </div>
        {showAnswer && (
          <p className="feedback">
            {selectedOption === currentQuestion.answer ? "Correct!" : "Wrong!"}
          </p>
        )}
      </div>

      {/* Navigation Buttons */}
      <div className="navigation-buttons">
        <button onClick={handlePrevious} disabled={currentQuestionIndex === 0}>
          Previous
        </button>
        {currentQuestionIndex === totalQuestions - 1 ? (
          <button onClick={handleSubmit}>Submit</button>
        ) : (
          <button
            onClick={handleNext}
            disabled={currentQuestionIndex === totalQuestions - 1}
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default MCQQuiz;
