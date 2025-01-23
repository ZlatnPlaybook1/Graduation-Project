import React from "react";
import { useEffect, useRef } from "react";
import $ from "jquery";
import "./style.css";
import "../AC-Vuln/AC_Vuln.css";
import Header from "../../Header/Header";
import background from "../../assets/img/background.png";
import imagecourse from "../../assets/img/course_image.png";
import { Link } from "react-router-dom";
import Footer from "../../Footer/Footer";

export default function Bash() {
  const faqSectionRef = useRef(null);

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
      {/* Start Landing  */}
      <div className="landing">
        <div className="banner">
          <img src={background} alt="background" />
        </div>
        <div className="container">
          <div className="breadcrumb">
            <ul>
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="">Bash Scripting</Link>
              </li>
              {/* <li>
                <span className="active-breadcrumb">
                  Intro To Offensive Security
                </span>
              </li> */}
            </ul>
          </div>
          <div className="course-info">
            <img src={imagecourse} alt="logo" />
            <div className="course-text">
              <h1>Bash Scripting</h1>
              <p>
                Master the basics of Bash scripting, a powerful tool for
                automating tasks and managing systems in cybersecurity
                environments.
              </p>
              <div className="course-icons">
                <div className="diff">
                  <div className="easy">
                    <i className="fa-solid fa-signal"></i>
                    <p>Easy</p>
                  </div>
                </div>
                <div className="duration">
                  <i className="fa-solid fa-clock"></i>
                  <p className="time">50 min</p>
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
      {/* End Landing  */}
      {/* Start Course Content  */}
      <div className="course">
        <div className="container" ref={faqSectionRef}>
          <div className="row">
            <div className="faq-section">
              <dl className="section-text">
                {/* Single FAQ Area  */}
                <dt className="wave fadeInUp faq-header">
                  <span>Lesson 1</span> Introduction
                </dt>
                <dd className=" fadeInUp faq-body">
                  <h1>Welcome to the introductory bash scripting room!</h1>
                  <h2>What is bash?</h2>
                  <p>
                    Bash is a scripting language that runs within the terminal
                    on most Linux distros, as well as MacOS. Shell scripts are a
                    sequence of bash commands within a file, combined together
                    to achieve more complex Lessons than simple one-liner and
                    are especially useful when it comes to automating sysadmin
                    Lessons such as backups.
                  </p>
                  <p>
                    This is a few things among many that you will learn in this
                    room:
                  </p>
                  <ol>
                    <li>Bash syntax</li>
                    <li>Variables</li>
                    <li>Using parameters</li>
                    <li>Arrays</li>
                    <li>Conditionals</li>
                  </ol>
                </dd>
              </dl>
            </div>
            <div className="go-to-section">
              <Link to="/bash-scripting/bash_quiz" className="go-to">
                Go To Quiz
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* End Course Content  */}
      <Footer />
    </>
  );
}
