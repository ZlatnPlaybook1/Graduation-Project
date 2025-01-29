import React from "react";
import { useEffect, useRef } from "react";
import $ from "jquery";
import "../Page_Styles/Lab.css";
import Header from "../../Header/Header";
import image from "../../assets/img/Cryptography/card_image.png";
import { Link } from "react-router-dom";
import Footer from "../../Footer/Footer";

export default function CryptoGraphy_lab() {
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
        <div className="container">
          <div className="course-info">
            <div className="course-text">
              <h1>Practice</h1>
              <p className="brief">
                <i className="fa-solid fa-bullseye"></i> Reinforce what you're
                learning
              </p>
              <p>
                Put your knowledge into practice with gamified cyber security
                challenges.
              </p>
            </div>
            <div className="course-icon">
              <div className="border-icon">
                <div className="content">
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
      <div className="course">
        <div className="container">
          <h2>CryptoGraphy Lab</h2>
          <p className="section-p">Test Your Hacking skills</p>
          <div className="row">
            <Link
              to="/cryptography/cryptography_lab/top-secret"
              className="course-card"
            >
              <div className="course-image">
                <img src={image} alt="" />
              </div>
              <div className="course-text">
                <h3>Top Secret</h3>
                <p>
                   cryptography, a crucial skill for securing data and understanding encryption techniques in cybersecurity environments. 🚀
                </p>
                <ul className="circled-order"></ul>
              </div>
              <div className="easy">
                <i className="fa-solid fa-signal "></i>
                <p>Easy</p>
              </div>
            </Link>
            <Link
              to="/cryptography/cryptography_lab/decode-the-iamge"
              className="course-card"
            >
              <div className="course-image">
                <img src={image} alt="" />
              </div>
              <div className="course-text">
                <h3>Decode the Image</h3>
                <p>
                   cryptography, a crucial skill for securing data and understanding encryption techniques in cybersecurity environments. 🚀
                </p>
                <ul className="circled-order"></ul>
              </div>
              <div className="easy">
                <i className="fa-solid fa-signal "></i>
                <p>Easy</p>
              </div>
            </Link>
            <Link
              to="/cryptography/cryptography_lab/corrupted"
              className="course-card"
            >
              <div className="course-image">
                <img src={image} alt="" />
              </div>
              <div className="course-text">
                <h3>Corrupted</h3>
                <p>
                   cryptography, a crucial skill for securing data and understanding encryption techniques in cybersecurity environments. 🚀
                </p>
                <ul className="circled-order"></ul>
              </div>
              <div className="easy">
                <i className="fa-solid fa-signal "></i>
                <p>Easy</p>
              </div>
            </Link>
            <Link
              to="/cryptography/cryptography_lab/hash-crack"
              className="course-card"
            >
              <div className="course-image">
                <img src={image} alt="" />
              </div>
              <div className="course-text">
                <h3>Hash Crack</h3>
                <p>
                   cryptography, a crucial skill for securing data and understanding encryption techniques in cybersecurity environments. 🚀
                </p>
                <ul className="circled-order"></ul>
              </div>
              <div className="easy">
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
