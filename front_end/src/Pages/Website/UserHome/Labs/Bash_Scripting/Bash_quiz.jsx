import React, { useEffect, useState } from "react";
import styles from "./Bash_quiz.module.css";
import variables from "../../assets/img/bash/Quiz_img/variables.png"; // Example image import
import { Link } from "react-router-dom";

export default function Bash_Quiz() {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);

  const quizData = [
    {
      topic: "Our first simple bash scripts",
      questions: [
        {
          question:
            "What piece of code can we insert at the start of a line to comment out our code?",
          correctAnswer: "#",
        },
        {
          question:
            "What will the following script output to the screen, echo “BishBashBosh”",
          correctAnswer: "BishBashBosh",
        },
      ],
    },
    {
      topic: "Variables",
      image: variables, // Example image URL
      questions: [
        {
          question: "What would this code return?",
          correctAnswer: "#",
        },
        {
          question: "How would you print out the city to the screen?",
          correctAnswer: "#",
        },
        {
          question: "How would you print out the country to the screen?",
          correctAnswer: "#",
        },
      ],
    },
    {
      topic: "Parameters",
      questions: [
        {
          question:
            "How can we get the number of arguments supplied to a script?",
          correctAnswer: "$#",
        },
        {
          question:
            "How can we get the filename of our current script (aka our first argument)?",
          correctAnswer: "$0",
        },
        {
          question: "How can we get the 4th argument supplied to the script?",
          correctAnswer: "$4",
        },
        {
          question:
            "If a script asks us for input, how can we direct our input into a variable called ‘test’ using 'read'?",
          correctAnswer: "read test",
        },
        {
          question:
            "What will the output of 'echo $1 $3' be if the script was run with './script.sh hello hola aloha'?",
          correctAnswer: "hello aloha",
        },
      ],
    },
    {
      topic: "Arrays",
      arrayExample: "cars=('honda' 'audi' 'bmw' 'tesla')",
      questions: [
        {
          question:
            "What would be the command to print audi to the screen using indexing?",
          correctAnswer: "echo ${cars[1]}",
        },
        {
          question:
            "If we wanted to remove tesla from the array how would we do so?",
          correctAnswer: "unset cars[3]",
        },
        {
          question:
            "How could we insert a new value called toyota to replace tesla?",
          correctAnswer: "cars[3]='toyota'",
        },
      ],
    },
    {
      topic: "Conditionals",
      arrayExample:
        'To finish off our little project from the previous task. You can build on your script using an if/else statement. Test to see if the age is under 18, if it is then echo out their name with "You are not eligible for work" or something along these lines, if they are over 18 then ask them for their job, you can do this with read',
      questions: [
        {
          question:
            "What is the flag to check if we have read access to a file?",
          correctAnswer: "-r",
        },
        {
          question: "What is the flag to check to see if it's a directory?",
          correctAnswer: "-d",
        },
      ],
    },
  ];

  // Initialize state to hold answers, feedback, and button states
  const [userAnswers, setUserAnswers] = useState(
    quizData.flatMap((topic) => topic.questions.map(() => ""))
  );
  const [feedback, setFeedback] = useState(
    quizData.flatMap((topic) => topic.questions.map(() => ""))
  );
  const [buttonState, setButtonState] = useState(
    quizData.flatMap((topic) =>
      topic.questions.map(() => ({
        disabled: false,
        buttonText: "Submit Answer",
      }))
    )
  );
  const [inputDisabled, setInputDisabled] = useState(
    quizData.flatMap((topic) => topic.questions.map(() => false))
  );

  const handleAnswerChange = (topicIndex, questionIndex, event) => {
    const updatedAnswers = [...userAnswers];
    updatedAnswers[
      topicIndex * quizData[topicIndex].questions.length + questionIndex
    ] = event.target.value;
    setUserAnswers(updatedAnswers);
  };

  const handleSubmitAnswer = (topicIndex, questionIndex) => {
    const currentQuestion = quizData[topicIndex].questions[questionIndex];
    const updatedFeedback = [...feedback];
    const index =
      topicIndex * quizData[topicIndex].questions.length + questionIndex;

    if (
      userAnswers[index].toLowerCase() ===
      currentQuestion.correctAnswer.toLowerCase()
    ) {
      updatedFeedback[index] = "Correct!";
      // Update button state to disabled with text change
      const updatedButtonState = [...buttonState];
      updatedButtonState[index] = {
        disabled: true,
        buttonText: "Correct Answer",
      };
      setButtonState(updatedButtonState);

      // Disable input field for this question
      const updatedInputDisabled = [...inputDisabled];
      updatedInputDisabled[index] = true;
      setInputDisabled(updatedInputDisabled);
    } else {
      updatedFeedback[index] = `Incorrect!`;
      // updatedFeedback[index] = `Incorrect! The correct answer is: ${currentQuestion.correctAnswer}`;
    }

    setFeedback(updatedFeedback);
  };
  const top = document.getElementById("top");
  if (document.body.scrollDown > 20) {
    top.style.display = "block";
  }
  const topfunction = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  return (
    <div className="parent">
      <Link to="/bash-scripting" className={styles.back}>
        Go Back
      </Link>
      <div className={styles.quizContainer}>
        <h1 className={styles.title}>Bash Scripting Quiz</h1>

        <div className={styles.quiz}>
          {quizData.map((topic, topicIndex) => (
            <div
              key={topicIndex}
              className={`${styles.topicSection} ${
                topic.topic === "Arrays" ? styles.arrayTopic : ""
              }`}
            >
              <h3 className={styles.topicTitle} id={topic.topic}>
                {topic.topic}
              </h3>

              {/* Conditionally render image if available */}
              {topic.image && (
                <div className={styles.topicImage}>
                  <img
                    src={topic.image}
                    alt={`${topic.topic}`}
                    className={styles.image}
                  />
                </div>
              )}

              {/* Conditionally render array example if the topic is about Arrays */}
              {topic.arrayExample && (
                <div className={styles.arrayExample}>
                  <p>
                    <strong>Array Example:</strong> {topic.arrayExample}
                  </p>
                </div>
              )}

              {topic.questions.map((question, questionIndex) => {
                const answerIndex =
                  topicIndex * topic.questions.length + questionIndex;
                return (
                  <div key={questionIndex} className={styles.questionContainer}>
                    <div className={styles.question}>{question.question}</div>
                    <input
                      type="text"
                      value={userAnswers[answerIndex]}
                      onChange={(event) =>
                        handleAnswerChange(topicIndex, questionIndex, event)
                      }
                      placeholder="Enter your answer"
                      className={styles.input}
                      disabled={inputDisabled[answerIndex]} // Disable input after correct answer
                    />
                    <button
                      onClick={() =>
                        handleSubmitAnswer(topicIndex, questionIndex)
                      }
                      className={styles.submitBtn}
                      disabled={buttonState[answerIndex].disabled} // Disable button after submission
                    >
                      {buttonState[answerIndex].buttonText}
                    </button>

                    {feedback[answerIndex] && (
                      <div className={styles.result}>
                        {feedback[answerIndex]}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
      <button onClick={topfunction} className={styles.top}>
        <i class="fa-solid fa-arrow-up"></i>
      </button>
    </div>
  );
}
