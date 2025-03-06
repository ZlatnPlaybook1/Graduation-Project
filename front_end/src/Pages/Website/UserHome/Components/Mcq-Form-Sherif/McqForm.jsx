import React, { useState, useEffect } from "react";
import imageQuiz from "./images/Manthinking-bro.png";
import checkPng from "./images/check.png";
import loading from "./images/loading.gif";
import "./McqForm.css";
import "./animation.css";
import "./result_style.css";
import "./responsive.css";

function App() {
  const [currentStep, setCurrentStep] = useState(1);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(60);

  const questions = [
    {
      text: "Who is Anakin Skywalker when he goes to the Dark Side?",
      options: ["Darth Sidious", "Darth Tyannus", "Darth Vader", "Darth Maul"],
      correctAnswer: "Darth Vader",
    },
    {
      text: "Which animal spends 18 to 21 hours a day resting and sleeping?",
      options: ["Lion", "Lioness", "Sea Lion", "Cub"],
      correctAnswer: "Lion",
    },
    {
      text: "The logo for luxury car maker Porsche features which animal?",
      options: ["Dog", "Tiger", "Cat", "Horse"],
      correctAnswer: "Horse",
    },
    {
      text: "What is the capital of France?",
      options: ["Berlin", "Madrid", "Paris", "Rome"],
      correctAnswer: "Paris",
    },
    {
      text: "Which planet is known as the Red Planet?",
      options: ["Earth", "Mars", "Jupiter", "Venus"],
      correctAnswer: "Mars",
    },
  ];

  useEffect(() => {
    if (timeLeft === 0) {
      calculateScore();
      setShowResult(true);
      return;
    }

    const intervalId = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [timeLeft]);

  const handleNext = () => {
    if (currentStep < questions.length) {
      setCurrentStep(currentStep + 1);
    } else {
      calculateScore();
      setShowResult(true);
    }
  };

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleAnswer = (step, answer) => {
    setAnswers((prevAnswers) => ({ ...prevAnswers, [step]: answer }));
  };

  const calculateScore = () => {
    let totalScore = 0;
    questions.forEach((question, index) => {
      if (answers[index + 1] === question.correctAnswer) {
        totalScore += 1;
      }
    });
    setScore((totalScore / questions.length) * 100);
  };

  return (
    <main className="overflow-hidden">
      {!showResult ? (
        <>
          <Timer timeLeft={timeLeft} />
          <Quiz
            currentStep={currentStep}
            questions={questions}
            handleNext={handleNext}
            handlePrev={handlePrev}
            handleAnswer={handleAnswer}
            answers={answers}
          />
        </>
      ) : (
        <Result score={score} />
      )}
    </main>
  );
}

function Timer({ timeLeft }) {
  return (
    <div className="timer">
      <div className="timer-inner">
        <div className="timer-count">
          <span id="countdown-timer">{timeLeft}</span> sec
        </div>
      </div>
    </div>
  );
}

function Quiz({
  currentStep,
  questions,
  handleNext,
  handlePrev,
  handleAnswer,
  answers,
}) {
  const currentQuestion = questions[currentStep - 1];

  return (
    <div className="container">
      <div className="step-count">
        <span id="activeStep">{currentStep}</span>/ {questions.length} Question
      </div>
      <header className="step-bar">
        <div
          className="fill"
          style={{ width: `${(currentStep / questions.length) * 100}%` }}
        ></div>
      </header>
      <form method="post" className="show-section">
        <section className="steps">
          <div className="step-inner">
            <div className="quiz-question">
              <h3>{currentQuestion.text}</h3>
            </div>
            <fieldset>
              {currentQuestion.options.map((option, idx) => (
                <div key={idx} className="input-field">
                  <div className="option">{String.fromCharCode(65 + idx)}</div>
                  <div className="radio-field bounce-left">
                    <input
                      type="radio"
                      name={`op${currentStep}`}
                      value={option}
                      checked={answers[currentStep] === option}
                      onChange={() => handleAnswer(currentStep, option)}
                    />
                    <label>{option}</label>
                  </div>
                </div>
              ))}
            </fieldset>
            <img className="thinking_bro" src={imageQuiz} alt="thinking-bro" />
          </div>
          <div className="next-prev">
            {currentStep > 1 && (
              <button className="prev" type="button" onClick={handlePrev}>
                <i className="fa-solid fa-arrow-left"></i> Last question
              </button>
            )}
            <button className="next" type="button" onClick={handleNext}>
              {currentStep === questions.length ? "Submit" : "Next Question"}
              <i className="fa-solid fa-arrow-right"></i>
            </button>
          </div>
        </section>
      </form>
    </div>
  );
}
function Result({ score }) {
  return (
    <>
      <div className="loadingresult">
        <img src={loading} alt="loading" />
      </div>
      <div className="result_page">
        <div className="container">
          <div className="result_inner">
            <header className="resultheader">
              Your Result is here
              <div className="h-border"></div>
            </header>
            <div className="result_content">
              <div className="result_msg">
                <img src={checkPng} alt="check" />
                Wow! You are Brilliant!
              </div>
              <span>Your overall score</span>
              <div className="u_prcnt">{score.toFixed(0)}%</div>
              <div className="prcnt_bar">
                <div className="fill" style={{ width: `${score}%` }}></div>
              </div>
              <div className="prcnt_bar_lvl">
                {score < 50 ? "Low" : score < 80 ? "Medium" : "High"}
              </div>
              <div className="lvl_overview">
                <div className="lvl-single">
                  <div className="lvl-color low"></div>
                  <div className="lvl-name">Low</div>
                  <div className="lvl-line"></div>
                </div>
                <div className="lvl-single">
                  <div className="lvl-color medium"></div>
                  <div className="lvl-name">Medium</div>
                  <div className="lvl-line"></div>
                </div>
                <div className="lvl-single">
                  <div className="lvl-color high"></div>
                  <div className="lvl-name">High</div>
                </div>
              </div>
            </div>
            <footer className="resultfooter"></footer>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
