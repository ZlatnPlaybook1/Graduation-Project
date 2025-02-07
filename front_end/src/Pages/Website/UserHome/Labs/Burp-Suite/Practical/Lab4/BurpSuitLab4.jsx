import React, { useState } from "react";
import data from "./questions.json";
import "./BurpSuitLab4.css";
import GOBack from "../../../../GoBack_Btn/GoBack_Btn";
import ShowHint from "../../../../ShowHint_Btn/ShowHint_Btn";

export default function BurpSuitLab4() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userInput, setUserInput] = useState("");
  const [isCorrect, setIsCorrect] = useState(null);
  const [completed, setCompleted] = useState(false);

  const handleCheckAnswer = () => {
    const correctAnswer = data.data[currentIndex].decoded_value.toUpperCase();
    if (userInput.trim().toUpperCase() === correctAnswer) {
      setIsCorrect(true);
      setTimeout(() => {
        if (currentIndex < data.data.length - 1) {
          setCurrentIndex(currentIndex + 1);
          setUserInput("");
          setIsCorrect(null);
        } else {
          setCompleted(true);
        }
      }, 1000);
    } else {
      setIsCorrect(false);
    }
  };

  return (
    <>
      <GOBack />
      <ShowHint hintText="<p>Complete the Questions</p>" />
      <div className="burp-center">
        <div className="burp-container">
          <h2 className="burp-title">Decode & Verify</h2>
          {!completed ? (
            <>
              <p className="burp-question">
                What is the decoded answer for this encoded string?
              </p>
              <ul className="burp-list">
                <li className="burp-list-item">
                  {data.data[currentIndex].encoded_data}
                </li>
              </ul>
              <input
                type="text"
                className="burp-input"
                placeholder="Enter your answer"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
              />
              <button className="burp-button" onClick={handleCheckAnswer}>
                Check Answer
              </button>
              {isCorrect !== null && (
                <p className={isCorrect ? "burp-correct" : "burp-wrong"}>
                  {isCorrect
                    ? "Correct! 🎉 Moving to next question..."
                    : "Incorrect! ❌"}
                </p>
              )}
            </>
          ) : (
            <p className="burp-completion">
              🎉 Congratulations! You have successfully completed all questions.
              🚀
            </p>
          )}
        </div>
      </div>
    </>
  );
}
