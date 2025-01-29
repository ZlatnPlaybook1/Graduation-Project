import Footer from "../../../../Footer/Footer";
import GoBack_Btn from "../../../../GoBack_Btn/GoBack_Btn";
import Header from "../../../../Header/Header";
import ShowHint_Btn from "../../../../ShowHint_Btn/ShowHint_Btn";
import "../../../Page_Styles/Practical_Flag_answers.css";
import React, { useEffect, useState } from "react";

export default function Decode_image() {
  const [showSuccess, setShowSuccess] = useState(false);
  const [showFail, setShowFail] = useState(false);
  const fileUrl = "/CryptoGraphy/Decode the Image.rar";
  const fileName = "Decode the Image.rar";

  useEffect(() => {
    document.title = "Decode the Image";
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
    if (answer === "Y3liZXJfbGFiX3N0ZWc=") {
      setShowSuccess(true);
      document.getElementById("check").disabled = true;
      document.getElementById("check").innerHTML =
        '<i class="fa-solid fa-check"></i> Correct Answer';
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
      <div className="course-labcc">
        <GoBack_Btn />
        <ShowHint_Btn hintText="Try using steghide to extract the hidden message."/>
        <div className="firework" id="firework"></div>
        {showSuccess && <div className="message success">Congratulations!</div>}
        {showFail && <div className="message fail">Wrong!</div>}
        <div className="container-labcc">
          <div className="faq-section-labcc">
            <div className="fileViewer">
              <p id="lab-info">
                Ebrahim stumbled upon an old digital image on his computer
                titled "secure_mountain.jpg." The image, however, was far from
                ordinary—it was said to have a hidden secret a file buried deep
                within its pixels. Ebrahim set off on a mission to decrypt the
                image and retrieve the secret .
              </p>
            </div>
            <div className="caution">
              <p>Download this file and open it on your Linux machine</p>
              <i className="fa-solid fa-triangle-exclamation"></i>
            </div>
            <div className="fileViewer info">
              <a href={fileUrl} download={fileName}>
                <button className="downloadButton">
                  <i className="fas fa-download"></i>
                  {fileName}
                </button>
              </a>
            </div>
            <div className="question-div">
              <h1 className="question">Check your Flag here:</h1>
              <form onSubmit={checkAnswer}>
                <input
                  type="text"
                  name="answer"
                  placeholder="Flag Format: flag{**********}"
                />
                <button type="submit" id="check">
                  <i className="fa-regular fa-paper-plane"></i> Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
