import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import $ from "jquery";
import "./header.css";
import "./landing.css";
import "../Preload/preload.css";
import image1 from "../assets/img/core-img/shield.png";
import image2 from "../assets/img/core-img/banner1.png";
import logo from "../assets/img/core-img/logo.png";
import pg from "../assets/img/bg-img/header-bg1.png";

const Header = () => {
  const [isSidebarVisible, setSidebarVisible] = useState(false);

  const showSidebar = () => setSidebarVisible(true);
  const hideSidebar = () => setSidebarVisible(false);

  useEffect(() => {
    // Sticky header
    $(window).on("scroll", function () {
      if ($(document).scrollTop() > 86) {
        $(".header").addClass("shrink");
      } else {
        $(".header").removeClass("shrink");
      }
    });

    // Accordion
    (function () {
      var dd = $("dd");
      dd.filter(":nth-child(n+3)").hide();
      $("dl").on("click", "dt", function () {
        $(this).next().slideDown(500).siblings("dd").slideUp(500);
      });
    })();

    // Headline animation
    const animationDelay = 2500;
    const barAnimationDelay = 3800;
    const barWaiting = barAnimationDelay - 3000;
    const lettersDelay = 50;
    const typeLettersDelay = 150;
    const selectionDuration = 500;
    const typeAnimationDelay = selectionDuration + 800;
    const revealDuration = 600;
    const revealAnimationDelay = 1500;

    function initHeadline() {
      singleLetters($(".cd-headline.letters").find("b"));
      animateHeadline($(".cd-headline"));
    }

    function singleLetters($words) {
      $words.each(function () {
        var word = $(this),
          letters = word.text().split(""),
          selected = word.hasClass("is-visible");
        for (let i in letters) {
          if (word.parents(".rotate-2").length > 0)
            letters[i] = "<em>" + letters[i] + "</em>";
          letters[i] = selected
            ? '<i class="in">' + letters[i] + "</i>"
            : "<i>" + letters[i] + "</i>";
        }
        var newLetters = letters.join("");
        word.html(newLetters).css("opacity", 1);
      });
    }

    function animateHeadline($headlines) {
      var duration = animationDelay;
      $headlines.each(function () {
        var headline = $(this);

        if (headline.hasClass("loading-bar")) {
          duration = barAnimationDelay;
          setTimeout(function () {
            headline.find(".cd-words-wrapper").addClass("is-loading");
          }, barWaiting);
        } else if (headline.hasClass("clip")) {
          var spanWrapper = headline.find(".cd-words-wrapper"),
            newWidth = spanWrapper.width() + 10;
          spanWrapper.css("width", newWidth);
        } else if (!headline.hasClass("type")) {
          var words = headline.find(".cd-words-wrapper b"),
            width = 0;
          words.each(function () {
            var wordWidth = $(this).width();
            if (wordWidth > width) width = wordWidth;
          });
          headline.find(".cd-words-wrapper").css("width", width);
        }

        setTimeout(function () {
          hideWord(headline.find(".is-visible").eq(0));
        }, duration);
      });
    }

    function hideWord($word) {
      var nextWord = takeNext($word);

      if ($word.parents(".cd-headline").hasClass("type")) {
        var parentSpan = $word.parent(".cd-words-wrapper");
        parentSpan.addClass("selected").removeClass("waiting");
        setTimeout(function () {
          parentSpan.removeClass("selected");
          $word
            .removeClass("is-visible")
            .addClass("is-hidden")
            .children("i")
            .removeClass("in")
            .addClass("out");
        }, selectionDuration);
        setTimeout(function () {
          showWord(nextWord, typeLettersDelay);
        }, typeAnimationDelay);
      } else if ($word.parents(".cd-headline").hasClass("letters")) {
        var bool =
          $word.children("i").length >= nextWord.children("i").length
            ? true
            : false;
        hideLetter($word.find("i").eq(0), $word, bool, lettersDelay);
        showLetter(nextWord.find("i").eq(0), nextWord, bool, lettersDelay);
      } else if ($word.parents(".cd-headline").hasClass("clip")) {
        $word
          .parents(".cd-words-wrapper")
          .animate({ width: "2px" }, revealDuration, function () {
            switchWord($word, nextWord);
            showWord(nextWord);
          });
      } else if ($word.parents(".cd-headline").hasClass("loading-bar")) {
        $word.parents(".cd-words-wrapper").removeClass("is-loading");
        switchWord($word, nextWord);
        setTimeout(function () {
          hideWord(nextWord);
        }, barAnimationDelay);
        setTimeout(function () {
          $word.parents(".cd-words-wrapper").addClass("is-loading");
        }, barWaiting);
      } else {
        switchWord($word, nextWord);
        setTimeout(function () {
          hideWord(nextWord);
        }, animationDelay);
      }
    }

    function showWord($word, $duration) {
      if ($word.parents(".cd-headline").hasClass("type")) {
        showLetter($word.find("i").eq(0), $word, false, $duration);
        $word.addClass("is-visible").removeClass("is-hidden");
      } else if ($word.parents(".cd-headline").hasClass("clip")) {
        $word
          .parents(".cd-words-wrapper")
          .animate({ width: $word.width() + 10 }, revealDuration, function () {
            setTimeout(function () {
              hideWord($word);
            }, revealAnimationDelay);
          });
      }
    }

    function hideLetter($letter, $word, $bool, $duration) {
      $letter.removeClass("in").addClass("out");

      if (!$letter.is(":last-child")) {
        setTimeout(function () {
          hideLetter($letter.next(), $word, $bool, $duration);
        }, $duration);
      } else if ($bool) {
        setTimeout(function () {
          hideWord(takeNext($word));
        }, animationDelay);
      }

      if (
        $letter.is(":last-child") &&
        $("html").hasClass("no-csstransitions")
      ) {
        var nextWord = takeNext($word);
        switchWord($word, nextWord);
      }
    }

    function showLetter($letter, $word, $bool, $duration) {
      $letter.addClass("in").removeClass("out");

      if (!$letter.is(":last-child")) {
        setTimeout(function () {
          showLetter($letter.next(), $word, $bool, $duration);
        }, $duration);
      } else {
        if ($word.parents(".cd-headline").hasClass("type")) {
          setTimeout(function () {
            $word.parents(".cd-words-wrapper").addClass("waiting");
          }, 200);
        }
        if (!$bool) {
          setTimeout(function () {
            hideWord($word);
          }, animationDelay);
        }
      }
    }

    function takeNext($word) {
      return !$word.is(":last-child")
        ? $word.next()
        : $word.parent().children().eq(0);
    }

    function takePrev($word) {
      return !$word.is(":first-child")
        ? $word.prev()
        : $word.parent().children().last();
    }

    function switchWord($oldWord, $newWord) {
      $oldWord.removeClass("is-visible").addClass("is-hidden");
      $newWord.removeClass("is-hidden").addClass("is-visible");
    }

    initHeadline();
  }, []);

  return (
    <>
      {/* Start Header */}
      <div className="header">
        <div className="container">
          <div className="row">
            <div className="logo">
              <img
                src={logo}
                alt="Logo"
                style={{ width: "50px", height: "auto" }}
              />
              <h2>Cyber Labs</h2>
            </div>
            <div className="links">
              {/* Sidebar */}
              <ul className={`sidebar ${isSidebarVisible ? "active" : ""}`}>
                <li onClick={hideSidebar}>
                  <Link to="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="26"
                      viewBox="0 96 960 960"
                      width="26"
                    >
                      <path d="M249 849L207 807 438 576 207 345l42-42 231 231 231-231 42 42L480 576l231 231-42 42-231-231-231 231z" />
                    </svg>
                  </Link>
                </li>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/">About Us</Link>
                </li>
                <li>
                  <Link to="/">Services</Link>
                </li>
                <li>
                  <Link to="/">Pricing</Link>
                </li>
                <li>
                  <Link to="/">Contact</Link>
                </li>
                <li>
                  <Link to="/login" className="login">
                    Login
                  </Link>
                </li>
                <li>
                  <Link to="/register" className="login">
                    Register
                  </Link>
                </li>
              </ul>

              {/* Navbar */}
              <nav>
                <ul className="web-version">
                  <div className="center-link">
                    <li className="hideOnMobile">
                      <Link to="/">Home</Link>
                    </li>
                    <li className="hideOnMobile">
                      <Link to="/">About Us</Link>
                    </li>
                    <li className="hideOnMobile">
                      <Link to="/">Services</Link>
                    </li>
                    <li className="hideOnMobile">
                      <Link to="/">Pricing</Link>
                    </li>
                    <li className="hideOnMobile">
                      <Link to="/">Contact</Link>
                    </li>
                  </div>
                  <div className="log-reg">
                    <li className="hideOnMobile ">
                      <Link to="/login" className="login">
                        Login
                      </Link>
                    </li>
                    <li className="hideOnMobile">
                      <Link to="/register" className="login">
                        Register
                      </Link>
                    </li>
                  </div>
                  <li className="menu-button" onClick={showSidebar}>
                    <Link to="#">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="26"
                        viewBox="0 96 960 960"
                        width="26"
                      >
                        <path d="M120 816v-60h720v60H120zM120 606v-60h720v60H120zM120 396v-60h720v60H120z" />
                      </svg>
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
      {/* End Header */}
      {/* Start Landing Page */}
      <div className="landing section">
        <img src={pg} className="background-image" alt="Background" />
        <div className="container">
          <div className="row">
            <div className="text">
              <h3 className="text-header">
                Become totally secure from cyber attacks
              </h3>
              <div className="cd-intro v2 text-left">
                <h1
                  className="cd-headline clip is-full-width thin"
                  style={{ lineHeight: "1.7" }}
                >
                  <span className="w-text bold">
                    Trusted IT & Cyber Security Experts Provide
                  </span>
                  <span
                    className="cd-words-wrapper wrapper"
                    style={{
                      width: "250px",
                      display: "inline",
                    }}
                  >
                    <b
                      className="gradient-text cyan bolder is-hidden"
                      style={{
                        width: "250px",
                        display: "block",
                      }}
                    >
                      Best Quality
                    </b>
                    <b
                      className="gradient-text cyan bolder is-visible"
                      style={{
                        width: "250px",
                        display: "block",
                      }}
                    >
                      Fast Results
                    </b>
                    <b
                      className="gradient-text cyan bolder is-hidden"
                      style={{
                        width: "250px",
                        display: "block",
                      }}
                    >
                      Total Support
                    </b>
                  </span>
                </h1>
              </div>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Blanditiis assumenda quam rem eaque ullam pariatur harum
                possimus optio eius. Accusantium laudantium deleniti.
              </p>
              <div className="learn-more">
                <Link to="#" className="learn-btn">
                  Learn More
                </Link>
                <Link to="#" className="play">
                  <i className="fas fa-play play-btn"></i> Watch Demo
                </Link>
              </div>
            </div>
            <div className="image">
              <img src={image1} className="shield" alt="Shield" />
              <img src={image2} className="banner" alt="Banner" />
            </div>
          </div>
        </div>
      </div>
      {/* End Landing Page */}
    </>
  );
};

export default Header;
