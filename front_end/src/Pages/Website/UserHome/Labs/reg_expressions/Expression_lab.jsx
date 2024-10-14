import React from "react";
import { useEffect, useRef } from "react";
import $ from "jquery";
import "./Expression_lab.css";
import Header from "../../Header/Header";
import image from "../../assets/img/card_image.png";
import { Link } from "react-router-dom";
import Footer from "../../Footer/Footer";

export default function Expression_lab() {
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
      <div className="landing-Expression-lab">
        <div className="container-Expression-lab">
            <div className="course-info-Expression-lab">
                <div className="course-text-Expression-lab">
                    <h1>Practice</h1>
                    <p className="brief-Expression-lab"><i className="fa-solid fa-bullseye lab-Expression-lab"></i> Reinforce what you're learning</p>
                    <p>Put your knowledge into practice with gamified cyber security challenges.</p>
                </div>
                <div className="course-icon-Expression-lab">
                    <div className="border-Expression-lab">
                        <div className="content-Expression-lab">
                            <i className="fas fa-book-open lab-Expression-lab"></i>
                            <p>Practice</p>
                            <i className="fas fa-bullseye lab-Expression-lab"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
      {/* End Landing  */}
      {/* Start Courses  */}
      <div className="course-Expression-lab">
        <div className="container-Expression-lab">
            <h2>Expression Lab</h2>
            <p className="section-p-Expression-lab">Test Your Hacking skills</p>
            <div className="row-Expression-lab">
                <Link to="/Expression-lab/Expression-lab_lab/first/login" className="course-card-Expression-lab">
                    <div className="course-image-Expression-lab">
                        <img src={image} alt="" />
                    </div>
                    <div class="course-text-Expression-lab">
                        <h3>Pre Security</h3>
                        <p>Before hacking something, you first need to understand the basics</p>
                        <ul class="circled-order-Expression-lab">
                            <li>Cyber Security Basics</li>
                            <li>Networking Basics and Weaknesses</li>
                            <li>The Web And Common Attacks</li>
                            <li>Learn to Use The Expression-lab OS</li>
                        </ul>
                    </div>
                    <div class="easy-Expression-lab">
                        <i class="fa-solid fa-signal lab-Expression-lab"></i>
                        <p>Easy</p>
                    </div>
                </Link>
                <Link to="/Expression-lab/Expression-lab_lab/second/login" class="course-card-Expression-lab">
                    <div class="course-image-Expression-lab">
                    <img src={image} alt="" />
                    </div>
                    <div class="course-text-Expression-lab">
                        <h3>Pre Security</h3>
                        <p>Before hacking something, you first need to understand the basics</p>
                        <ul class="circled-order-Expression-lab">
                            <li>Cyber Security Basics</li>
                            <li>Networking Basics and Weaknesses</li>
                            <li>The Web And Common Attacks</li>
                            <li>Learn to Use The Expression-lab OS</li>
                        </ul>
                    </div>
                    <div class="easy-Expression-lab">
                        <i class="fa-solid fa-signal lab-Expression-lab"></i>
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
