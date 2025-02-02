import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { FaFileDownload, FaFileUpload } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faCheck,
  faFileUpload,
  faFileDownload,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import "../first_lab/First_Lab.css";

const CyberLabTask = () => {
  const [instructions, setInstructions] = useState("");
  const [answerText, setAnswerText] = useState("");
  const [jsonAnswer, setJsonAnswer] = useState([]);
  const [score, setScore] = useState(null);
  const [correctAnswers, setCorrectAnswers] = useState([]);
  const [fileName, setFileName] = useState("");
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);

  // Fetching task instructions and correct answers from external files
  useEffect(() => {
    fetch("./Hash Task.txt")
      .then((response) => response.text())
      .then((data) => setInstructions(data));

    fetch("./hashWords.json")
      .then((response) => response.json())
      .then((data) => setCorrectAnswers(data));
  }, []);

  // Handle file upload (uploaded text file from the user)
  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file && file.name.endsWith(".txt")) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const content = event.target.result;
        setAnswerText(content);
        extractAnswers(content);
      };
      reader.readAsText(file);
      setFileName(file.name);
    } else {
      alert("Please upload a valid .txt file.");
    }
  };

  // Extract answers from the uploaded text
  const extractAnswers = (content) => {
    const regex = /Hashed Word (\d+):\s*([a-f0-9]+)\n/g;
    let matches;
    const extractedAnswers = [];
    while ((matches = regex.exec(content)) !== null) {
      const wordNumber = matches[1];
      const hashedWord = matches[2];
      extractedAnswers.push({
        word: `word${wordNumber}`,
        hashed_algorithm: "MD5/SHA-1/SHA-256", // Placeholder, modify as needed
      });
    }
    setJsonAnswer(extractedAnswers);
  };

  // Calculate the score based on the trainer's answers
  const calculateScore = () => {
    let score = 0;
    jsonAnswer.forEach((answer, index) => {
      if (
        answer.word === correctAnswers[index].word &&
        answer.hashed_algorithm === correctAnswers[index].hashed_algorithm
      ) {
        score += 1;
      }
    });
    setScore(score);
    return score;
  };

  // Handle answer submission
  const handleSubmitAnswers = () => {
    const score = calculateScore();
    const totalScore = correctAnswers.length;

    if (score < totalScore * 0.75) {
      Swal.fire({
        title: "Fail",
        text: `You scored ${score} out of ${totalScore}! Better luck next time.`,
        icon: "error",
        confirmButtonText: "Try Again",
      });
    } else {
      Swal.fire({
        title: "Congratulations!",
        text: `You scored ${score} out of ${totalScore}. Great job!`,
        icon: "success",
        confirmButtonText: "Download Correct Answers",
      }).then(() => {
        downloadJsonFile();
      });
    }
  };

  // Handle downloading the correct answers in JSON format
  const downloadJsonFile = () => {
    const jsonContent = JSON.stringify({ data: correctAnswers }, null, 2);
    const blob = new Blob([jsonContent], { type: "application/json" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "cyber_lab_task_correct_answers.json";
    link.click();
  };

  // Handle downloading the task instructions in .txt format
  const downloadTxtFile = () => {
    const blob = new Blob([instructions], { type: "text/plain" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "cyber_lab_task_instructions.txt";
    link.click();
  };

  return (
    <div className="w-100 p-y5">
      <div className="container p-0 my-5">
        <div className="card shadow-lg">
          <div className="card-body">
            {/* Title */}
            <h2 className="card-title my-4 display-5 title-gradient">
              Hashing Task 🔒
            </h2>

            {/* Explanation Section */}
            <div className="mb-5 text-left">
              <h3 className="mb-3">
                What is a Cybersecurity Hashing Task?
                <FontAwesomeIcon icon={faInfoCircle} className="ms-2" />
              </h3>
              <p>
                A <strong>Cybersecurity Hashing Task</strong> involves
                identifying the original words and the hashing algorithms used
                to generate their hashes. This task helps you understand:
              </p>
              <ul className="list-group list-group-flush mb-4">
                <li className="list-group-item">✔️ How hashing works</li>
                <li className="list-group-item">
                  ✔️ Differences between MD5, SHA-1, and SHA-256
                </li>
                <li className="list-group-item">
                  ✔️ Practical applications of hashing in cybersecurity
                </li>
              </ul>
            </div>

            {/* Example Section with Creative Accordion */}
            <div className="mb-5 text-left">
              <h3 className="mb-3">
                Example Task & Answer Format
                <FontAwesomeIcon icon={faChevronDown} className="ms-2" />
              </h3>
              <div className="accordion custom-accordion" id="exampleAccordion">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="exampleHeading">
                    <button
                      className="accordion-button collapsed custom-accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#exampleCollapse"
                      aria-expanded="false"
                      aria-controls="exampleCollapse"
                      onClick={() => setIsAccordionOpen(!isAccordionOpen)}
                    >
                      <span className="ms-2">
                        {isAccordionOpen ? "Hide Examples" : "Show Examples"}
                      </span>
                    </button>
                  </h2>

                  <div
                    id="exampleCollapse"
                    className="accordion-collapse collapse"
                    aria-labelledby="exampleHeading"
                    data-bs-parent="#exampleAccordion"
                  >
                    <div className="accordion-body text-left">
                      <h5>Example Input:</h5>
                      <pre className="bg-light p-2 rounded">
                        Hashed Word 1: 5f4dcc3b5aa765d61d8327deb882cf99
                      </pre>
                      <h5>Example Output:</h5>
                      <pre className="bg-light p-2 rounded">
                        {'{ "word": "password", "hashed_algorithm": "MD5" }'}
                      </pre>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Download Instructions Section */}
            <div className="mb-5 text-left">
              <h3 className="mb-3">
                Download Instructions
                <FontAwesomeIcon icon={faFileDownload} className="ms-2" />
              </h3>
              <button onClick={downloadTxtFile} className="btn btn-primary">
                <FaFileDownload className="me-2" /> Download Instructions
              </button>
            </div>

            {/* Upload Answers Section */}
            <div className="mb-5 text-left">
              <h3 className="mb-3">
                Upload Your Answers
                <FontAwesomeIcon icon={faFileUpload} className="ms-2" />
              </h3>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-floating mb-3">
                    <input
                      type="file"
                      accept=".txt"
                      onChange={handleFileUpload}
                      className="form-control"
                      id="fileInput"
                    />
                    <label htmlFor="fileInput">Upload your answer file</label>
                  </div>
                  <p className="text-muted">
                    {fileName
                      ? `Uploaded file: ${fileName}`
                      : "No file uploaded yet"}
                  </p>
                </div>
                <div className="col-md-6 d-flex align-items-end">
                  <button
                    onClick={handleSubmitAnswers}
                    className="btn btn-success w-100 py-2"
                    disabled={jsonAnswer.length === 0}
                  >
                    <FaFileUpload className="me-2" /> Submit Answers
                  </button>
                </div>
              </div>
            </div>

            {/* Result Section */}
            {score !== null && (
              <div className="mb-5 text-left">
                <h3 className="mb-3">
                  Result
                  <FontAwesomeIcon icon={faCheck} className="ms-2" />
                </h3>
                <div className="alert alert-info">
                  <strong>
                    Your Score: {score} / {correctAnswers.length}
                  </strong>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CyberLabTask;
