import React from "react";
import { useEffect, useRef } from "react";
import $ from "jquery";
import styles from"./Obfuscation_lab.module.css";
import Header from "../../Header/Header";
import image from "../../assets/img/card_image.png";
import { Link } from "react-router-dom";
import Footer from "../../Footer/Footer";

export default function Bash_lab() {
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
        <div className={styles.container}>
            <div className={styles["course-info"]}>
                <div className={styles["course-text"]}>
                    <h1>Practice</h1>
                    <p className={styles.brief}><i className={`fa-solid fa-bullseye`}></i> Reinforce what you're learning</p>
                    <p>Put your knowledge into practice with gamified cyber security challenges.</p>
                </div>
                <div className={styles["course-icon"]}>
                    <div className={styles.border}>
                        <div className={styles.content}>
                            <i className="fas fa-book-open"></i>
                            <p>Practice</p>
                            <i className="fas fa-bullseye"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
      {/* End Landing  */}
      {/* Start Courses  */}
      <div className={styles.course}>
        <div className={styles.container}>
            <h2>Obfuscation Lab</h2>
            <p className={styles["section-p"]}>Test Your Hacking skills</p>
            <div className={styles.row}>
                <Link to="#" className={styles["course-card"]}>
                    <div className={styles["course-image"]}>
                        <img src={image} alt="" />
                    </div>
                    <div className={styles["course-text"]}>
                        <h3>Pre Security</h3>
                        <p>Before hacking something, you first need to understand the basics</p>
                        <ul className={styles["circled-order"]}>
                            <li>Cyber Security Basics</li>
                            <li>Networking Basics and Weaknesses</li>
                            <li>The Web And Common Attacks</li>
                            <li>Learn to Use The bash-lab OS</li>
                        </ul>
                    </div>
                    <div className={styles.easy}>
                        <i className="fa-solid fa-signal "></i>
                        <p>Easy</p>
                    </div>
                </Link>
            </div>
        </div>
    </div>
      {/* End Course Content  */}
      <Footer />
    </>
  );
}
