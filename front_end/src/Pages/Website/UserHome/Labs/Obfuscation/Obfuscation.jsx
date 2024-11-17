import React from "react";
import { useEffect, useRef } from "react";
import $ from "jquery";
import styles from "./Obfuscation.module.css";
import Header from "../../Header/Header";
import background from "../../assets/img/background.png";
import image from "../../assets/img/bash/full_colored_dark (1).png";
import { Link } from "react-router-dom";
import Footer from "../../Footer/Footer";


export default function Obfuscation() {
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
      <div className={styles.landing}>
        <div className={styles.banner}>
          <img src={background} alt="bacground" />
        </div>
        <div className={styles.container}>
          <div className={styles.breadcrumb}>
            <ul>
              <li>
                <Link to="">Home</Link>
              </li>
              <li>
                <Link to="">Obfuscation</Link>
              </li>
              {/* <li>
                <span className="active-breadcrumb">
                  Intro To Offensive Security
                </span>
              </li> */}
            </ul>
          </div>
          <div className={styles["course-info"]}>
            <img src={image} alt="logo" />
            <div className={styles["course-text"]}>
              <h1>Obfuscation</h1>
              <p>
              Master the basics of Obfuscation, a powerful tool for automating tasks and managing systems in cybersecurity environments.
              </p>
              <div className={styles["course-icons"]}>
                <div className={styles.diff}>
                  <div className={styles.easy}>
                    <i className="fa-solid fa-signal"></i>
                    <p>Easy</p>
                  </div>
                </div>
                <div className={styles.duration}>
                  <i className="fa-solid fa-clock"></i>
                  <p className={styles.time}>50 min</p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.options}>
            <button>
              <i className="far fa-bookmark"></i>
              <p>Save Room</p>
            </button>
            <div className={styles.like}>
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
      <div className={styles.course}>
        <div className={styles.container} ref={faqSectionRef}>
          <div className={styles.row}>
            <div className={styles["faq-section"]}>
              <dl className={styles["section-text"]}>
                {/* Single FAQ Area  */}
                <dt className={`wave fadeInUp ${styles["faq-header"]}`}>
                  <span>Lesson 1</span> Introduction
                </dt>
                <dd className={`fadeInUp ${styles["faq-body"]}`}>
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
                
              
                {/* 
            # main slider

            <dt className="wave fadeInUp faq-header"><span>Lesson 3</span> Variables </dt>
                <dd className="fadeInUp faq-body">
                <p><br></br></p>


            </dd> 
            
            */}
              </dl>
            </div>
            <div className={styles["go-to-section"]}>
              <Link to="/obfuscation/obfuscation_lab" className={styles["go-to"]}>
                Go To Lab
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
