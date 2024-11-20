import React from "react";
import Header from "../../Header/Header";
import "./AudFor_labs.css";
import labImg from "../../assets/img/ACV/lab.jpeg";

import { Link } from "react-router-dom";
import Footer from "../../Footer/Footer";
export default function AudFor_labs() {
  return (
    <>
      <Header />
      {/* Start Landing */}
      <div className="landing-AudFor">
        <div className="container-AudFor">
          <div className="course-info-AudFor">
            <div className="course-text-AudFor">
              <h1>Practice</h1>
              <p className="brief-AudFor">
                <i className="fa-solid fa-bullseye lab-AudFor"></i>
                Reinforce what you're learning
              </p>
              <p>
                Put your knowledge into practice with gamified cyber security
                challenges.
              </p>
            </div>
            <div className="course-icon-AudFor">
              <div className="border-AudFor">
                <div className="content-AudFor">
                  <i className="fas fa-book-open lab-AudFor"></i>
                  <p>Practice</p>
                  <i className="fas fa-bullseye lab-AudFor"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Landing */}

      {/* Start Course */}
      <div className="course-AudFor">
        <div className="container-AudFor">
          <h2>Audio Forensics</h2>
          <p className="section-p-AudFor">Test Your Hacking Skills</p>
          <div className="row-AudFor">
            {/* lab1 */}
            <Link
              to="/AudFor/AudFor_labs/first_lab/ProductList"
              className="course-card-AudFor"
            >
              <div className="course-image-AudFor">
                <img src={labImg} alt="Lab 1" />
              </div>
              <div className="course-text-AudFor">
                <h3>Audio Forensics: Investigating Audio Manipulations</h3>
                <p>
                  Go to the lab and examine the audio file for traces of
                  tampering or manipulation. Identify inconsistencies in the
                  metadata and waveform analysis.
                  <br />
                  Explore how attackers can manipulate audio recordings for
                  malicious purposes.
                  <br />
                  Learn how to authenticate audio files and detect signs of
                  digital alterations.
                </p>
              </div>
              <div className="easy-AudFor">
                <i className="fa-solid fa-signal lab-AudFor"></i>
                <p>Medium</p>
              </div>
            </Link>

            {/* lab2 */}
            <Link
              to="/AudFor/AudFor_labs/second_lab/ProductList"
              className="course-card-AudFor"
            >
              <div className="course-image-AudFor">
                <img src={labImg} alt="Lab 2" />
              </div>
              <div className="course-text-AudFor">
                <h3>
                  Audio Forensics: Detecting Hidden Messages in Audio Files
                </h3>
                <p>
                  Go to the lab and explore how steganography techniques are
                  used to hide messages within audio files.
                  <br />
                  Investigate how attackers may use these methods to conceal
                  harmful information in otherwise innocent audio recordings.
                  <br />
                  Learn to extract hidden messages and understand the ethical
                  implications of audio forensics.
                </p>
              </div>
              <div className="easy-AudFor">
                <i className="fa-solid fa-signal lab-AudFor"></i>
                <p>Hard</p>
              </div>
            </Link>

            {/* lab3 */}
            <Link
              to="/AudFor/AudFor_labs/third_lab"
              className="course-card-AudFor"
            >
              <div className="course-image-AudFor">
                <img src={labImg} alt="Lab 3" />
              </div>
              <div className="course-text-AudFor">
                <h3>
                  Audio Forensics: Verifying the Authenticity of Audio Sources
                </h3>
                <p>
                  In this lab, you will learn how to verify the authenticity of
                  audio sources and recordings.
                  <br />
                  Analyze audio files for signs of synthetic generation or
                  manipulation.
                  <br />
                  Practice techniques to compare audio samples and identify
                  discrepancies that may indicate fabrication.
                </p>
              </div>
              <div className="easy-AudFor">
                <i className="fa-solid fa-signal lab-AudFor"></i>
                <p>Medium</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
      {/* End Course */}
      <Footer />
    </>
  );
}
