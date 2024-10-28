import React from "react";
import { useEffect, useRef } from "react";
import $ from "jquery";
import "./Cookies_lab.css";
import Header from "../../Header/Header";
import image from "../../assets/img/cookies/Cookies_logo.png";
import { Link } from "react-router-dom";
import Footer from "../../Footer/Footer";

export default function Cookies_lab() {
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
      <div className="landing-cookies">
        <div className="container-cookies">
            <div className="course-info-cookies">
                <div className="course-text-cookies">
                    <h1>Practice</h1>
                    <p className="brief-cookies"><i className="fa-solid fa-bullseye lab-cookies"></i> Reinforce what you're learning</p>
                    <p>Put your knowledge into practice with gamified cyber security challenges.</p>
                </div>
                <div className="course-icon-cookies">
                    <div className="border-cookies">
                        <div className="content-cookies">
                            <i className="fas fa-book-open lab-cookies"></i>
                            <p>Practice</p>
                            <i className="fas fa-bullseye lab-cookies"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
      {/* End Landing  */}
      {/* Start Courses  */}
      <div className="course-cookies">
        <div className="container-cookies">
            <h2>Cookies Lab</h2>
            <p className="section-p-cookies">Test Your Hacking skills</p>
            <div className="row-cookies">
                <Link to="/cookies/cookies_lab/first/login" className="course-card-cookies">
                    <div className="course-image-cookies">
                        <img src={image} alt="" />
                    </div>
                    <div class="course-text-cookies">
                        <h3>Admin has the power</h3>
                        <p>try to login as admin</p>
                        {/* <ul class="circled-order-cookies">
                            <li>Cyber Security Basics</li>
                            <li>Networking Basics and Weaknesses</li>
                            <li>The Web And Common Attacks</li>
                            <li>Learn to Use The Linux OS</li>
                        </ul> */}
                    </div>
                    <div class="easy-cookies">
                        <i class="fa-solid fa-signal lab-cookies"></i>
                        <p>Easy</p>
                    </div>
                </Link>
                <Link to="/cookies/cookies_lab/second/login" class="course-card-cookies">
                    <div class="course-image-cookies">
                    <img src={image} alt="" />
                    </div>
                    <div class="course-text-cookies">
                        <h3>Hashing</h3>
                        <p>try to login as admin</p>
                        {/* <ul class="circled-order-cookies">
                            <li>Cyber Security Basics</li>
                            <li>Networking Basics and Weaknesses</li>
                            <li>The Web And Common Attacks</li>
                            <li>Learn to Use The Linux OS</li>
                        </ul> */}
                    </div>
                    <div class="easy-cookies">
                        <i class="fa-solid fa-signal lab-cookies"></i>
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
