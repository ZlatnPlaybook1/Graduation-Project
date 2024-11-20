import React, { useEffect, useRef } from "react";
import $ from "jquery";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import "./AudFor.css";
import background from "../../assets/img/background.png";
import imagecourse from "../../assets/img/course_image.png";
import { Link, useNavigate } from "react-router-dom";

export default function AudFor() {
  const faqSectionRef = useRef(null);
  const navigate = useNavigate();
  const handleGoToLab = () => {
    navigate("/AudFor/AudFor_labs");
  };
  useEffect(() => {
    const $faqSection = $(faqSectionRef.current);
    const $dt = $faqSection.find("dt");
    const $dd = $faqSection.find("dd");

    $dd.hide();
    $dt.first().addClass("active");
    $dd.first().show();

    $dt.on("click", function () {
      const $this = $(this);
      const $nextDd = $this.next("dd");

      if ($this.hasClass("active")) {
        $this.removeClass("active");
        $nextDd.slideUp(500);
      } else {
        $dt.removeClass("active");
        $dd.slideUp(500);
        $this.addClass("active");
        $nextDd.slideDown(500);
      }
    });

    return () => {
      $dt.off("click");
    };
  }, []);

  return (
    <>
      <Header />
      {/* Start Landing */}
      <div className="landing-lab1">
        <div className="banner">
          <img src={background} alt="" />
        </div>
        <div className="container-lab1">
          <div className="breadcrumb">
            <ul>
              <li>
                <Link to="">Home</Link>
              </li>
              <li>
                <Link to="">Audio Forensics</Link>
              </li>
            </ul>
          </div>
          <div className="course-info">
            <img src={imagecourse} alt="" />
            <div className="course-text">
              <h1>Audio Forensics</h1>
              <p>
                Learn how audio forensics is used to investigate and analyze
                manipulated audio files, uncover hidden messages or tampered
                content, and verify the authenticity of recordings. Discover the
                techniques and tools used to detect alterations in audio,
                extract concealed data, and ensure the integrity of audio
                evidence in forensic investigations.
              </p>
              <div className="course-icons">
                <div className="diff">
                  <div className="easy">
                    <i className="fa-solid fa-signal"></i>
                    <p> Easy</p>
                  </div>
                </div>
                <div className="duration">
                  <i className="fa-solid fa-clock"></i>
                  <p className="time">20 min</p>
                </div>
              </div>
            </div>
          </div>
          <div className="options">
            <button>
              <i className="far fa-bookmark"></i>
              <p>Save Room</p>
            </button>
            <div className="like">
              <button>
                <i className="fas fa-thumbs-up"></i>
                <p></p>
              </button>
              <button>
                <i className="fas fa-thumbs-down"></i>
                <p></p>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* End Landing */}
      {/* Start Course */}
      <div className="course-lab1">
        <div className="container">
          <div className="row">
            <div className="faq-section-lab1" ref={faqSectionRef}>
              <dl className="section-text-lab1">
                {/* Task 1 */}
                <dt className="wave-lab1 fadeInUp faq-header-lab1">
                  <span>Task 1</span> Audio Authentication and Identification
                </dt>
                <dd className="fadeInUp faq-body-lab1">
                  <ul>
                    <li>
                      <p>
                        Audio authentication and identification are critical for
                        verifying the origin and authenticity of audio
                        recordings.
                      </p>
                    </li>
                    <li>
                      <p>
                        Use audio fingerprinting techniques to uniquely identify
                        and track specific audio files.
                      </p>
                    </li>
                    <li>
                      <p>
                        Apply machine learning models to detect manipulations or
                        alterations in audio data.
                      </p>
                    </li>
                  </ul>
                </dd>

                {/* Task 2 */}
                <dt className="wave-lab1 fadeInUp faq-header-lab1">
                  <span>Task 2</span> Detecting Audio Manipulations
                </dt>
                <dd className="fadeInUp faq-body-lab1">
                  <ul>
                    <li>
                      <p>
                        Audio manipulation detection focuses on identifying
                        alterations such as splicing, looping, or changing audio
                        pitch.
                      </p>
                    </li>
                    <li>
                      <p>
                        Implement techniques like spectrogram analysis to detect
                        inconsistencies that may suggest manipulation.
                      </p>
                    </li>
                    <li>
                      <p>
                        Investigate the use of deep learning models to classify
                        manipulated audio and distinguish it from genuine
                        recordings.
                      </p>
                    </li>
                  </ul>
                </dd>

                {/* Task 3 */}
                <dt className="wave-lab1 fadeInUp faq-header-lab1">
                  <span>Task 3</span> Acoustic Analysis and Audio Source
                  Attribution
                </dt>
                <dd className="fadeInUp faq-body-lab1">
                  <ul>
                    <li>
                      <p>
                        Acoustic analysis helps determine the origin and
                        authenticity of an audio file based on characteristics
                        like recording equipment and environment.
                      </p>
                    </li>
                    <li>
                      <p>
                        Use techniques such as waveform analysis and signal
                        processing to trace audio sources.
                      </p>
                    </li>
                    <li>
                      <p>
                        Analyze frequency patterns and audio signatures to
                        attribute a recording to a specific source.
                      </p>
                    </li>
                  </ul>
                </dd>
              </dl>
            </div>
            <div className="go-to-section">
              <button onClick={handleGoToLab} className="go-to">
                Go To Labs
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
