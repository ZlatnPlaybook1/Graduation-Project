import React from "react";
import { useEffect, useRef } from "react";
import $ from "jquery";
import "./Practice.css";
import Header from "../../Header/Header";
import image from "../../assets/img/card_image.png";
import { Link } from "react-router-dom";
import Footer from "../../Footer/Footer";

export default function Practice() {
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
      <div class="landing-sql-injection">
        <div class="container-sql-injection">
            <div class="course-info-sql-injection">
                <div class="course-text-sql-injection">
                    <h1>Practice</h1>
                    <p class="brief-sql-injection"><i class="fa-solid fa-bullseye lab-sql-injection"></i> Reinforce what you're learning</p>
                    <p>Put your knowledge into practice with gamified cyber security challenges.</p>
                </div>
                <div class="course-icon-sql-injection">
                    <div class="border-sql-injection">
                        <div class="content-sql-injection">
                            <i class="fas fa-book-open lab-sql-injection"></i>
                            <p>Practice</p>
                            <i class="fas fa-bullseye lab-sql-injection"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
      {/* End Landing  */}
      {/* Start Courses  */}
      <div class="course-sql-injection">
        <div class="container-sql-injection">
            <h2>SQL Injection Lab</h2>
            <p class="section-p-sql-injection">Test Your Hacking skills</p>
            <div class="row-sql-injection">
                <Link to="" class="course-card-sql-injection">
                    <div class="course-image-sql-injection">
                        <img src={image} alt="" />
                    </div>
                    <div class="course-text-sql-injection">
                        <h3>Pre Security</h3>
                        <p>Before hacking something, you first need to understand the basics</p>
                        <ul class="circled-order-sql-injection">
                            <li>Cyber Security Basics</li>
                            <li>Networking Basics and Weaknesses</li>
                            <li>The Web And Common Attacks</li>
                            <li>Learn to Use The Linux OS</li>
                        </ul>
                    </div>
                    <div class="easy-sql-injection">
                        <i class="fa-solid fa-signal lab-sql-injection"></i>
                        <p>Easy</p>
                    </div>
                </Link>
                <Link to="" class="course-card-sql-injection">
                    <div class="course-image-sql-injection">
                    <img src={image} alt="" />
                    </div>
                    <div class="course-text-sql-injection">
                        <h3>Pre Security</h3>
                        <p>Before hacking something, you first need to understand the basics</p>
                        <ul class="circled-order-sql-injection">
                            <li>Cyber Security Basics</li>
                            <li>Networking Basics and Weaknesses</li>
                            <li>The Web And Common Attacks</li>
                            <li>Learn to Use The Linux OS</li>
                        </ul>
                    </div>
                    <div class="easy-sql-injection">
                        <i class="fa-solid fa-signal lab-sql-injection"></i>
                        <p>Easy</p>
                    </div>
                </Link>
                <Link to="" class="course-card-sql-injection">
                    <div class="course-image-sql-injection">
                    <img src={image} alt="" />
                    </div>
                    <div class="course-text-sql-injection">
                        <h3>Pre Security</h3>
                        <p>Before hacking something, you first need to understand the basics</p>
                        <ul class="circled-order-sql-injection">
                            <li>Cyber Security Basics</li>
                            <li>Networking Basics and Weaknesses</li>
                            <li>The Web And Common Attacks</li>
                            <li>Learn to Use The Linux OS</li>
                        </ul>
                    </div>
                    <div class="easy-sql-injection">
                        <i class="fa-solid fa-signal lab-sql-injection"></i>
                        <p>Easy</p>
                    </div>
                </Link>
                <Link to="" class="course-card-sql-injection">
                    <div class="course-image-sql-injection">
                    <img src={image} alt="" />
                    </div>
                    <div class="course-text-sql-injection">
                        <h3>Pre Security</h3>
                        <p>Before hacking something, you first need to understand the basics</p>
                        <ul class="circled-order-sql-injection">
                            <li>Cyber Security Basics</li>
                            <li>Networking Basics and Weaknesses</li>
                            <li>The Web And Common Attacks</li>
                            <li>Learn to Use The Linux OS</li>
                        </ul>
                    </div>
                    <div class="easy-sql-injection">
                        <i class="fa-solid fa-signal lab-sql-injection"></i>
                        <p>Easy</p>
                    </div>
                </Link>
                <Link to="" class="course-card-sql-injection">
                    <div class="course-image-sql-injection">
                    <img src={image} alt="" />
                    </div>
                    <div class="course-text-sql-injection">
                        <h3>Pre Security</h3>
                        <p>Before hacking something, you first need to understand the basics</p>
                        <ul class="circled-order-sql-injection">
                            <li>Cyber Security Basics</li>
                            <li>Networking Basics and Weaknesses</li>
                            <li>The Web And Common Attacks</li>
                            <li>Learn to Use The Linux OS</li>
                        </ul>
                    </div>
                    <div class="easy-sql-injection">
                        <i class="fa-solid fa-signal lab-sql-injection"></i>
                        <p>Easy</p>
                    </div>
                </Link>
                <Link to="" class="course-card-sql-injection">
                    <div class="course-image-sql-injection">
                    <img src={image} alt="" />
                    </div>
                    <div class="course-text-sql-injection">
                        <h3>Pre Security</h3>
                        <p>Before hacking something, you first need to understand the basics</p>
                        <ul class="circled-order-sql-injection">
                            <li>Cyber Security Basics</li>
                            <li>Networking Basics and Weaknesses</li>
                            <li>The Web And Common Attacks</li>
                            <li>Learn to Use The Linux OS</li>
                        </ul>
                    </div>
                    <div class="easy-sql-injection">
                        <i class="fa-solid fa-signal lab-sql-injection"></i>
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
