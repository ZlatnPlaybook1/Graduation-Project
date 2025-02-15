import React, { useState } from "react";
import Swal from "sweetalert2";
import GoBackBtn from "../../../../GoBack_Btn/GoBack_Btn";
import ShowHintBtn from "../../../../ShowHint_Btn/ShowHint_Btn";
import Go2TopBtn from "../../../../Go2Top_Btn/Go2Top_Btn";
import "./First_Lab.css"; // Custom CSS file

const hintMessage = `
  <ul style="text-align: left; font-size: 16px; line-height: 1.8;">
    <li>1. Use tools like Audacity to analyze the waveform.</li>
    <li>2. Look for unusual patterns or hidden spectrogram data.</li>
  </ul>
`;

const AudioForensicsLab = () => {
  const [userMessage, setUserMessage] = useState("");
  const correctMessage = "Cyber Labs";

  const handleDownload = () => {
    const audioUrl = "/front_end/public/AudioForensics.wav"; // Replace with your actual audio file URL
    const link = document.createElement("a");
    link.href = audioUrl;
    link.download = "AudioForensics.wav";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userMessage.trim().toLowerCase() === correctMessage.toLowerCase()) {
      Swal.fire({
        icon: "success",
        title: "Congratulations!",
        text: "You successfully extracted the hidden message!",
        confirmButtonText: "Great job!",
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Try Again!",
        text: "The message you entered is incorrect. Keep trying!",
        confirmButtonText: "Okay",
      });
    }
  };

  return (
    <div className="audio-lab-container">
      <GoBackBtn />
      <ShowHintBtn hintText={hintMessage} />
      <h1 className="title">Audio Forensics Lab</h1>
      <main className="main-content">
        <div className="content-wrapper">
          {/* Title Section */}
          <div className="intro-section">
            <p className="intro-text">
              Discover how to extract hidden messages from audio files. This lab
              will enhance your audio analysis and forensic investigation
              skills.
            </p>
          </div>

          {/* Helper Links */}
          <div className="helper-links">
            <h2 className="section-title">Helpful Resources:</h2>
            <ul className="link-list">
              <li>
                <a
                  href="https://www.audacityteam.org/"
                  className="link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Audacity - Audio Editing Tool
                </a>
              </li>
              <li>
                <a
                  href="https://www.sonicvisualiser.org/"
                  className="link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Sonic Visualiser - Visualize Audio Data
                </a>
              </li>
            </ul>
          </div>

          {/* Embedded YouTube Video */}
          <div className="video-section">
            <h2 className="section-title">Watch This Guide:</h2>
            <div className="video-container">
              <iframe
                src="https://www.youtube.com/embed/1EqCQrVEEVs"
                title="Audio Forensics Guide"
                allowFullScreen
                Aspect="9:6"
              ></iframe>
            </div>
          </div>

          {/* Audio Download and Form */}
          <div className="form-section">
            <h2 className="section-title">Step 1: Download the Audio File</h2>
            <button onClick={handleDownload} className="download-btn">
              Download Audio File
            </button>
            <audio controls className="audio-player">
              <source src="./AudioForensics.wav" type="audio/wav" />
              Your browser does not support the audio element.
            </audio>

            <h2 className="section-title">
              Step 2: Extract the Hidden Message
            </h2>
            <form onSubmit={handleSubmit} className="message-form">
              <div className="form-group">
                <label htmlFor="message" className="form-label">
                  Type the Hidden Message:
                </label>
                <input
                  type="text"
                  id="message"
                  placeholder="Enter the hidden message here"
                  value={userMessage}
                  onChange={(e) => setUserMessage(e.target.value)}
                  className="form-input"
                  required
                />
              </div>
              <button type="submit" className="submit-btn">
                Submit
              </button>
            </form>
          </div>
        </div>
      </main>
      <Go2TopBtn />
    </div>
  );
};

export default AudioForensicsLab;
