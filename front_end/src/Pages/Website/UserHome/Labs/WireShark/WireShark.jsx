import React from "react";
import { useEffect, useRef } from "react";
import $ from "jquery";
import "../Page_Styles/Content.css";
import Header from "../../Header/Header";
// import background from "../../assets/img/background.png";
import image from "../../assets/img/Obfuscation/course_image.png";
import { Link } from "react-router-dom";
import Footer from "../../Footer/Footer";
import exampleImage1 from "../../assets/img/Obfuscation/1.png";
import exampleImage2 from "../../assets/img/Obfuscation/2.png";
import exampleImage3 from "../../assets/img/Obfuscation/3.png";
import exampleImage4 from "../../assets/img/Obfuscation/4.png";

export default function WireShark() {
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
      <div className="landing-lab1">
        <div className="banner">
          {/* <img src={background} alt="bacground" /> */}
        </div>
        <div className="container-lab1">
          <div className="breadcrumb">
            <ul>
              <li>
                <Link to="">Home</Link>
              </li>
              <li>
                <Link to="">Wire Shark</Link>
              </li>
              {/* <li>
                <span className="active-breadcrumb">
                  Intro To Offensive Security
                </span>
              </li> */}
            </ul>
          </div>
          <div className="course-info">
            <img src={image} alt="logo" />
            <div className="course-text">
              <h1>Wire Shark</h1>
              <p>
                Master the basics of Wire Shark, a powerful technique for
                securing code and protecting intellectual property in
                cybersecurity environments.
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
      <div className="course-lab1">
        <div className="container" ref={faqSectionRef}>
          <div className="row">
            <div className="faq-section-lab1">
              <dl className="section-text-lab1">
                {/* Single FAQ Area  */}
                <dt className="wave-lab1 fadeInUp faq-header-lab1">
                  <span>Topic 1</span> Introduction
                </dt>
                <dd className="fadeInUp faq-body-lab1" id="border-left">
           
                </dd>

                <dt className="wave-lab1 fadeInUp faq-header-lab1">
                  <span>Topic 2</span> What are Obfuscation & Deobfuscation ?
                </dt>
                <dd className="fadeInUp faq-body-lab1" id="border-left">
                  
                </dd>

                <dt className="wave-lab1 fadeInUp faq-header-lab1">
                  <span> Topic 3</span>Javascript Obfuscation{" "}
                </dt>
                <dd className="fadeInUp faq-body-lab1" id="border-left">
                  
                </dd>

                {/* 
            # main slider

            <dt className="wave-lab1 fadeInUp faq-header-lab1">
                  <span> Topic 2</span> What are Obfuscation & Deobfuscation ?</dt>
                  <dd className="fadeInUp faq-body-lab1" id="border-left">
                <p><br></br></p>


            </dd> 
            
            */}
              </dl>
            </div>
            <div className="go-to-section">
              <Link to="/obfuscation/obfuscation_lab" className="go-to">
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
