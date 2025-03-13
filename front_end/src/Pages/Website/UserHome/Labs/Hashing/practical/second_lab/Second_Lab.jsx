import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { FaFileDownload, FaFileUpload, FaInfoCircle, FaCheck, FaShieldAlt } from "react-icons/fa";
import GoBackBtn from "../../../../Components/GoBack_Btn/GoBack_Btn";
import ShowHintBtn from "../../../../Components/ShowHint_Btn/ShowHint_Btn";
import Go2TopBtn from "../../../../Components/Go2Top_Btn/Go2Top_Btn";
import "./SecondLab.css";

import CrackerImage from "../../../../assets/img/Hashing/Cracker.jpg";
import ComparatorImage from "../../../../assets/img/Hashing/Comparator.jpg";
import GeneratorImage from "../../../../assets/img/Hashing/Generator.jpg";
import SaltingImage from "../../../../assets/img/Hashing/Salting.jpg";

// Tools Array
const Tools = [
  {
    title: "Hash Generator",
    brief: "Generate MD5, SHA-1, and SHA-256 hashes for any text input.",
    link: "/Hashing/Hashing_labs/lab1/HashGenerator",
    image: GeneratorImage,
    difficulty: "Easy",
  },
  {
    title: "Hash Comparator",
    brief: "Compare two hashes to see if they match. Useful for verifying data integrity.",
    link: "/Hashing/Hashing_labs/lab1/HashComparator",
    image: ComparatorImage,
    difficulty: "Easy",
  },
  {
    title: "Hash Cracker",
    brief: "Attempt to crack common password hashes using a dictionary attack (for educational purposes only).",
    link: "/Hashing/Hashing_labs/lab1/HashCracker",
    image: CrackerImage,
    difficulty: "Easy",
  },
  {
    title: "Salting Demo",
    brief: "See how salting adds security to password hashing by adding a random string before hashing.",
    link: "/Hashing/Hashing_labs/lab1/SaltingDemo",
    image: SaltingImage,
    difficulty: "Easy",
  },
];

const Second_Lab = () => {
  const [instructions, setInstructions] = useState("");
  const [jsonAnswer, setJsonAnswer] = useState([]);
  const [score, setScore] = useState(null);
  const [correctAnswers, setCorrectAnswers] = useState([]);
  const [fileName, setFileName] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    // Fetch Task Instructions
    fetch("/Hashing/HashTask.txt")
      .then((response) => response.text())
      .then((data) => setInstructions(data))
      .catch((err) => console.error("Error fetching instructions:", err));

    // Fetch Correct Answers
    fetch("/Hashing/hashWords.json")
      .then((response) => response.json())
      .then((data) => setCorrectAnswers(data.data))
      .catch((err) => console.error("Error fetching correctAnswers:", err));
  }, []);

  // Determine the hashing algorithm based on word number.
  const algorithmForWord = (num) => {
    if ([3, 7, 9, 13, 16, 20].includes(num)) {
      return "SHA-256";
    } else if ([2, 5, 11, 15, 18].includes(num)) {
      return "SHA-1";
    } else {
      return "MD5";
    }
  };

  // Handle file upload and parse .txt or .json
  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file && (file.name.endsWith(".txt") || file.name.endsWith(".json"))) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const content = event.target.result;
        extractAnswers(content);
      };
      reader.readAsText(file);
      setFileName(file.name);
    } else {
      Swal.fire("Invalid File", "Please upload a valid .txt or .json file.", "error");
    }
  };

  const extractAnswers = (content) => {
    try {
      if (content.trim().startsWith("{")) {
        // It's JSON
        const parsed = JSON.parse(content);
        if (parsed.data && Array.isArray(parsed.data)) {
          setJsonAnswer(parsed.data);
        } else {
          console.error("JSON does not contain a valid 'data' array.");
        }
      } else {
        // Possibly .txt with lines
        const regex = /Hashed Word (\d+):\s*([a-f0-9]+)/g;
        let matches;
        const extractedAnswers = [];
        while ((matches = regex.exec(content)) !== null) {
          const wordNumber = Number(matches[1]);
          extractedAnswers.push({
            word: `original_word_${wordNumber}`,
            hashed_algorithm: algorithmForWord(wordNumber),
          });
        }
        setJsonAnswer(extractedAnswers);
      }
    } catch (error) {
      console.error("Error processing file content:", error);
    }
  };

  // Calculate total score
  const calculateScore = () => {
    let correctCount = 0;
    jsonAnswer.forEach((answer, index) => {
      if (
        correctAnswers[index] &&
        answer.word === correctAnswers[index].word &&
        answer.hashed_algorithm === correctAnswers[index].hashed_algorithm
      ) {
        correctCount += 1;
      }
    });
    const scorePoints = correctCount * 5;
    setScore(scorePoints);
    return scorePoints;
  };

  // Submit answers with 2-second delay
  const handleSubmitAnswers = async () => {
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    const scorePoints = calculateScore();
    const totalScorePoints = correctAnswers.length * 5;
    setIsSubmitting(false);

    const percentage = ((scorePoints / totalScorePoints) * 100).toFixed(0);
    if (scorePoints < totalScorePoints * 0.75) {
      Swal.fire({
        title: "Fail",
        text: `You scored ${scorePoints} out of ${totalScorePoints} (${percentage}%). Please review your answers and try again.`,
        icon: "error",
        confirmButtonText: "Try Again",
      });
    } else {
      Swal.fire({
        title: "Congratulations!",
        text: `You scored ${scorePoints} out of ${totalScorePoints} (${percentage}%). Great job!`,
        icon: "success",
        confirmButtonText: "Download Correct Answers",
      }).then(() => {
        downloadJsonFile();
      });
    }
  };

  const downloadJsonFile = () => {
    const jsonContent = JSON.stringify({ data: correctAnswers }, null, 2);
    const blob = new Blob([jsonContent], { type: "application/json" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "hashWords_correct_answers.json";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const downloadTxtFile = () => {
    const blob = new Blob([instructions], { type: "text/plain" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "HashTask.txt";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Hint message
  const hintMessage = `
    <ul class="pro-hint-list">
      <li>Identify the hashing algorithm for each hash.</li>
      <li>Follow the provided JSON answer format exactly.</li>
      <li>Each correct answer is worth 5 points.</li>
      <li>Review task instructions for details on provided data and answer format.</li>
    </ul>
  `;

  const totalPoints = correctAnswers.length * 5;
  const percentage = score !== null ? ((score / totalPoints) * 100).toFixed(0) : 0;

  return (
    <div className="pro-container Custom__body--bg primary-text my-0 container">
      {/* Sticky Buttons */}
      <GoBackBtn />
      <ShowHintBtn hintText={hintMessage} />
      
      {/* Sidebar */}
      <aside className="pro-sidebar secondary-bg shadow-sm">
        <ul>
          <li><a className="main-color" href="#overview">Overview</a></li>
          <li><a className="main-color" href="#instructions">Task Instructions</a></li>
          <li><a className="main-color" href="#data">Provided Data</a></li>
          <li><a className="main-color" href="#answerFormat">Answer Format</a></li>
          <li><a className="main-color" href="#insights">Cybersecurity Insights</a></li>
          <li><a className="main-color" href="#tools">Helper Tools</a></li>
        </ul>
      </aside>

      <main className="pro-main">
        {/* Header */}
        <header className="pro-header-section" id="overview">
          <h1 className="pro-header text-center main-color">Cybersecurity Hashing Task</h1>
          <p className="pro-subheader text-center secondary-text">
            Test your hashing knowledge by identifying the algorithm used for each hash and submitting your answers in JSON format.
          </p>
        </header>

        {/* Overview */}
        <section className="pro-overview-section mb-4">
          <div className="pro-card pro-shadow primary-bg hover-lift">
            <div className="pro-card-body">
              <h5 className="pro-card-title main-color">What is Hashing?</h5>
              <p className="pro-card-text secondary-text">
                Hashing transforms data into a fixed-size string using an algorithm (e.g., MD5, SHA-1, SHA-256). It is a core concept in cybersecurity used to verify data integrity and secure information.
              </p>
            </div>
          </div>
        </section>

        {/* Task Instructions */}
        <section className="pro-task-instructions mb-4" id="instructions">
          <div className="pro-accordion">
            <div className="pro-accordion-item">
              <h2 className="pro-accordion-header" id="taskOverviewHeading">
                <button
                  className="pro-accordion-button primary-bg main-color"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#taskOverviewCollapse"
                  aria-expanded="true"
                  aria-controls="taskOverviewCollapse"
                >
                  Task Overview & Instructions
                </button>
              </h2>
              <div
                id="taskOverviewCollapse"
                className="pro-accordion-collapse collapse show"
                aria-labelledby="taskOverviewHeading"
              >
                <div className="pro-accordion-body secondary-text">
                  <p>
                    You will be provided with a series of hashed words. Your task is to identify the hashing algorithm (MD5, SHA-1, or SHA-256) used for each hash, then provide the original word and algorithm in JSON format.
                  </p>
                  <p>
                    Trainers: Remind participants to carefully review the provided data and example in the “Detailed Instructions” modal below.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <button
            type="button"
            className="pro-btn bg-main-color primary-text"
            data-bs-toggle="modal"
            data-bs-target="#instructionsModal"
          >
            View Detailed Instructions
          </button>
        </section>

        {/* Provided Data */}
        <section className="pro-provided-data mb-4" id="data">
          <div className="pro-card pro-shadow primary-bg hover-lift">
            <div className="pro-card-body">
              <h5 className="pro-card-title main-color">Provided Data</h5>
              <div className="pro-data-list secondary-text">
                <p><strong>Hashed Word 1:</strong> f28b28d536f2db2de59da8a4c1351a49</p>
                <p><strong>Hashed Word 2:</strong> 6c78a2d3f4cf0521e1f5d29932c1e4f6b9eddb68</p>
                <p><strong>Hashed Word 3:</strong> ee3a31c0a78bbf35e24bb9bc3d94aaf7e60d7003f0ddefb4b625b415c73b1b2a</p>
                {/* ...continue for all 20 hashes */}
              </div>
              <button onClick={downloadTxtFile} className="pro-btn bg-main-color primary-text mt-2">
                <FaFileDownload className="me-2" /> Download Full Instructions
              </button>
            </div>
          </div>
        </section>

        {/* Answer Format Section */}
        <section className="mb-4" id="answerFormat">
          <div className="pro-card pro-shadow primary-bg hover-lift">
            <div className="pro-card-body">
              <h5 className="pro-card-title main-color">Answer Format</h5>
              <p className="secondary-text">
                Your answers must follow this JSON structure exactly:
              </p>
              <pre className="pro-code secondary-text">
{`{
  "data": [
    {
      "word": "original_word",
      "hashed_algorithm": "MD5/SHA-1/SHA-256"
    },
    ...
  ]
}`}
              </pre>
              <p className="secondary-text">
                Once complete, submit your .txt or .json file below.
              </p>
            </div>
          </div>
        </section>

        {/* Cybersecurity Insights */}
        <section className="pro-additional-info mb-4" id="insights">
          <h2 className="pro-info-header text-center main-color">Cybersecurity Insights</h2>
          <div className="pro-info-cards d-flex flex-wrap gap-3 mt-3">
            <div className="pro-info-card secondary-bg p-3 rounded hover-lift">
              <h5 className="pro-info-title main-color">
                <FaInfoCircle className="me-1" /> Why Hashing Matters
              </h5>
              <p className="pro-info-text secondary-text">
                Hashing is fundamental in cybersecurity to secure sensitive data and verify file integrity. It ensures that any tampering is easily detectable.
              </p>
            </div>
            <div className="pro-info-card secondary-bg p-3 rounded hover-lift">
              <h5 className="pro-info-title main-color">
                <FaShieldAlt className="me-1" /> Data Protection
              </h5>
              <p className="pro-info-text secondary-text">
                Using strong algorithms like SHA-256 enhances your data protection. Follow best practices to safeguard against vulnerabilities.
              </p>
            </div>
            <div className="pro-info-card secondary-bg p-3 rounded hover-lift">
              <h5 className="pro-info-title main-color">
                <FaCheck className="me-1" /> Best Practices
              </h5>
              <p className="pro-info-text secondary-text">
                Always validate your answers, follow the prescribed JSON format, and review the task instructions to ensure consistency.
              </p>
            </div>
          </div>
        </section>

        {/* Helper Tools */}
        <section id="tools" className="pro-additional-info mb-5">
          <h2 className="pro-info-header text-center main-color">Helper Tools</h2>
          <p className="secondary-text text-center mb-4">Explore these additional hashing tools if needed.</p>
          <div className="row">
            {Tools.map((tool, index) => (
              <div key={index} className="col-md-3 mb-4">
                <div className="card secondary-bg h-100 hover-lift">
                  <img src={tool.image} alt={tool.title} className="card-img-top tool-image" />
                  <div className="card-body">
                    <h5 className="main-color">{tool.title}</h5>
                    <p className="secondary-text">{tool.brief}</p>
                    <a href={tool.link} className="btn bg-main-color primary-text">Go to Tool</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* File Upload & Score Submission */}
        <section className="pro-upload-section mb-5">
          <div className="pro-upload">
            <label htmlFor="fileUpload" className="pro-label main-color">Submit Your Answers</label>
            <input
              type="file"
              className="pro-input focus-bg-transparent mb-3"
              id="fileUpload"
              accept=".txt,.json"
              onChange={handleFileUpload}
            />
            <button
              onClick={handleSubmitAnswers}
              className="pro-btn bg-main-color primary-text"
              disabled={isSubmitting}
            >
              <FaFileUpload className="me-2" /> Submit Answers
            </button>
          </div>

          {score !== null && !isSubmitting && (
            <div className="pro-score mt-4">
              <div className="pro-alert pro-alert-success">
                Your Score: {score} / {totalPoints} ({percentage}%)
              </div>
              <div className="pro-progress">
                <div
                  className="pro-progress-bar"
                  style={{ width: `${percentage}%` }}
                  role="progressbar"
                  aria-valuenow={percentage}
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  {percentage}%
                </div>
              </div>
            </div>
          )}
        </section>

        {/* Footer */}
        <footer className="pro-footer text-center">
          <p className="secondary-text">&copy; {new Date().getFullYear()} CyberLab. All rights reserved.</p>
          <p className="secondary-text">Empowering you with cybersecurity knowledge and cutting-edge web development insights.</p>
        </footer>
      </main>

      <Go2TopBtn />

      {/* Detailed Instructions Modal */}
      <div className="modal fade" id="instructionsModal" tabIndex="-1" aria-labelledby="instructionsModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-scrollable">
          <div className="modal-content pro-modal-content">
            <div className="modal-header">
              <h5 className="modal-title main-color" id="instructionsModalLabel">Detailed Task Instructions</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body pro-modal-body secondary-text">
              <h6 className="pro-modal-subtitle main-color">Cybersecurity Hashing Task</h6>
              <p>Welcome to the Cybersecurity Hashing Task! Follow these steps:</p>
              <hr />
              <h6 className="main-color">Provided Data:</h6>
              <ol className="pro-instruction-list">
                <li>Hashed Word 1: f28b28d536f2db2de59da8a4c1351a49</li>
                <li>Hashed Word 2: 6c78a2d3f4cf0521e1f5d29932c1e4f6b9eddb68</li>
                <li>Hashed Word 3: ee3a31c0a78bbf35e24bb9bc3d94aaf7e60d7003f0ddefb4b625b415c73b1b2a</li>
                {/* ...list all hashed words */}
              </ol>
              <hr />
              <h6 className="main-color">Required Answer Format:</h6>
              <pre className="pro-code">
{`{
  "data": [
    {
      "word": "original_word",
      "hashed_algorithm": "MD5/SHA-1/SHA-256"
    },
    ...
  ]
}`}
              </pre>
              <hr />
              <h6 className="main-color">Trainer Instructions:</h6>
              <ol className="pro-instruction-list">
                <li>Identify the algorithm used for each hash.</li>
                <li>Provide the original word and the corresponding hashing algorithm.</li>
                <li>Format your answers exactly as shown.</li>
                <li>Submit in .txt or .json format.</li>
              </ol>
              <p><strong>Note:</strong> Once the task is complete, please submit your answers.</p>
            </div>
            <div className="modal-footer">
              <button type="button" className="pro-btn bg-main-color primary-text" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Second_Lab;
