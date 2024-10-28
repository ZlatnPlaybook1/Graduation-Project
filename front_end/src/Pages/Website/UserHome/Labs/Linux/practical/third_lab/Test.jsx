import Footer from "../../../../Footer/Footer";
import Header from "../../../../Header/Header";
import styles from "./Test.module.css";
import React, { useEffect, useState } from "react";

export default function Test() {
  const [showSuccess, setShowSuccess] = useState(false);
  const [showFail, setShowFail] = useState(false);
  const fileUrl = "/test_your_self.rar";
  const fileName = "test_your_self.rar";
  useEffect(() => {
    document.title = "Test Yourself";
    injectKeyframes();
  }, []);
  const injectKeyframes = () => {
    const style = document.createElement("style");
    style.type = "text/css";
    style.innerHTML = `
      @keyframes explode {
        0% {
          transform: scale(0);
          opacity: 1;
        }
        100% {
          transform: scale(3);
          opacity: 0;
        }
      }
    `;
    document.head.appendChild(style); // Inject CSS into the head
  };
  const checkAnswer = (e) => {
    e.preventDefault(); // Prevent form submission
    const answer = e.target.answer.value; // Get answer from input
    if (answer === "flag{y0u_h4v3_d0n3_1t}") {
      setShowSuccess(true);
      launchFireworks();
      setTimeout(() => {
        setShowSuccess(false);
      }, 1500); // Hide success message after 3 seconds
    } else {
      setShowFail(true);
      setTimeout(() => {
        setShowFail(false);
      }, 1500); // Hide fail message after 3 seconds
    }
  };

  const launchFireworks = () => {
    const fireworkContainer = document.getElementById("firework");
    const numParticles = window.innerWidth > 768 ? 100 : 50;
    for (let i = 0; i < numParticles; i++) {
      const particle = document.createElement("div");
      particle.style.position = "absolute";
      particle.style.width = "10px";
      particle.style.height = "10px";
      particle.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
      particle.style.borderRadius = "50%";
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.top = `${Math.random() * 100}%`;
      particle.style.willcChange = "transform, opacity";
      particle.style.animation = "explode 1.5s forwards";

      fireworkContainer.appendChild(particle);
      setTimeout(() => particle.remove(), 1600); // Match the animation duration to particle removal
      particle.addEventListener("animationend", () => {
        particle.remove(); // Remove particle after animation completes
      });
    }
  };

  return (
    <>
      <Header />
      <div className={styles.course}>
        <div className={styles.firework} id="firework"></div>
        {showSuccess && (
          <div className={`${styles.message} ${styles.success}`}>
            Congratulations!
          </div>
        )}
        {showFail && (
          <div className={`${styles.message} ${styles.fail}`}>Wrong!</div>
        )}
        <div className={styles.container}>
          <div className={styles.container}>
            <div className={styles["faq-section"]}>
              <div className={styles.caution}>
                <p>
                  Download This file and open it in your linux machine Linux
                </p>
                <i className="fa-solid fa-triangle-exclamation"></i>
              </div>
              <div className={styles.fileViewer}>
                <a href={fileUrl} download={fileName}>
                  {/* <button onClick={download} className={styles.downloadButton}> */}
                  <button className={styles.downloadButton}>
                    <i className="fas fa-download"></i>
                    {fileName}
                  </button>
                </a>
              </div>
              <div className={styles["question-div"]}>
                <h1 className={styles.question}>Check your Flag here:</h1>
                <form onSubmit={checkAnswer}>
                  <input
                    type="text"
                    name="answer"
                    placeholder="Flag Format: flag{**********}"
                  />
                  <button type="submit">
                    <i className="fa-regular fa-paper-plane"></i>Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
