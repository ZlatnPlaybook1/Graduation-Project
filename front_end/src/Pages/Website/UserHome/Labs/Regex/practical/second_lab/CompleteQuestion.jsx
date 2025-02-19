import React, { useState } from "react";
import Swal from "sweetalert2";
import "./CompleteQuestion.css"; // External CSS file
import GoBackBtn from "../../../../Components/GoBack_Btn/GoBack_Btn";
import ShowHintBtn from "../../../../Components/ShowHint_Btn/ShowHint_Btn";
import Go2TopBtn from "../../../../Components/Go2Top_Btn/Go2Top_Btn";
const CompleteQuestion = ({ questionsData }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");
  const [showAnswer, setShowAnswer] = useState(false);
  const [userAnswers, setUserAnswers] = useState([]);
  const [score, setScore] = useState(0);

  const questions = questionsData.questions;
  const totalQuestions = questions.length;
  const currentQuestion = questions[currentQuestionIndex];

  // Progress Bar and navigation logic
  const progressPercentage =
    ((currentQuestionIndex + 1) / totalQuestions) * 100;

  const handleNext = () => {
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setUserAnswer("");
      setShowAnswer(false);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      setUserAnswer("");
      setShowAnswer(false);
    }
  };

  const handleAnswerSubmit = () => {
    setShowAnswer(true);
    const newAnswers = [...userAnswers];
    newAnswers[currentQuestionIndex] = userAnswer;
    setUserAnswers(newAnswers);

    if (
      userAnswer.toLowerCase() === currentQuestion.correctAnswer.toLowerCase()
    ) {
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
        text: `You failed. Final score: ${finalScore}. Please try again.`,
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };
  const hintMessage = `
    <ul style="text-align: left; font-size: 16px; line-height: 1.8;">
      <li>1.
        
      </li>      
    </ul>
  `;
  return (
    <div className="quiz-container">
      {/* Progress Bar */}
      <GoBackBtn />
      <ShowHintBtn hintText={hintMessage} />
      <h2>Complete the questions</h2>
      <div className="progress-bar">
        <div
          className="progress"
          style={{
            width: `${progressPercentage}%`,
          }}
        ></div>
      </div>
      <div className="progress-text">
        Question {currentQuestionIndex + 1} of {totalQuestions}
      </div>

      {/* Question */}
      <div className="question-container">
        <h2 className="question">{currentQuestion.question}</h2>

        {/* Answer Input */}
        <input
          type="text"
          className="answer-input"
          value={userAnswer}
          onChange={(e) => setUserAnswer(e.target.value)}
          disabled={showAnswer}
        />
        <button onClick={handleAnswerSubmit} disabled={showAnswer}>
          Submit Answer
        </button>

        {/* Feedback */}
        {showAnswer && (
          <p className="feedback">
            {userAnswer.toLowerCase() ===
            currentQuestion.correctAnswer.toLowerCase()
              ? "Correct!"
              : `Wrong! The correct answer is: ${currentQuestion.correctAnswer}`}
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
      <Go2TopBtn />
    </div>
  );
};

export default CompleteQuestion;
