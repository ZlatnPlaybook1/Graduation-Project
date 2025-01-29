import React, { useEffect, useRef } from "react";
import $ from "jquery";
import { Link } from "react-router-dom";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import CourseInfo from "../../Courses/CourseInfo";
import "./CommandInjection.css";
export default function CommandInjection() {
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
      {/* Start Landing */}
      <div className="landing-landing">
        <div className="banner-landing">
          {/* <img src={uplode} alt="background" /> */}
        </div>
        <div className="container-landing">
          <div className="breadcrumb-landing">
            <ul>
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to=""> Command Injection </Link>
              </li>
            </ul>
          </div>
          {/* <CourseInfo
            imgSrc={}
            title="Broken : "
            description="Understand the role of cookies in web security, how they are used, and the potential privacy concerns they introduce."
          /> */}
          <div className="options-landing">
            <button>
              <i className="far fa-bookmark for-landing"></i>
              <p>Save Room</p>
            </button>
            <div className="like-landing">
              <button>
                <i className="fas fa-thumbs-up for-landing"></i>
                <p>Like</p>
              </button>
              <button>
                <i className="fas fa-thumbs-down for-landing"></i>
                <p>Dislike</p>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* End Landing */}
      <div className="SecureUploadContent">
        <div className="secure-container" ref={faqSectionRef}>
          <div className="secure-row">
            <div className="secure-faq-section">
              <dl className="secure-section-text">
                {/* Single FAQ Area */}
                <dt className="secure-wave fadeInUp secure-faq-header">
                  <span>Task 1</span>Description
                </dt>
                <dd className="fadeInUp Auth-faq-body">
                  <ul className="auth-issues-list">
                    <li className="auth-issue-item">
                      <span className="special-highlight">
                        Broken authentication
                      </span>{" "}
                      occurs when an application’s authentication mechanism is
                      improperly designed or implemented, allowing attackers to
                      bypass authentication or impersonate users. Common causes
                      include:
                    </li>
                    <li className="auth-issue-item">
                      <ul className="auth-causes-list">
                        <li className="auth-cause-item">
                          <span className="special-highlight">
                            Failure to enforce strong password policies.
                          </span>
                        </li>
                        <li className="auth-cause-item">
                          Session management flaws (e.g., session IDs exposed or
                          not invalidated after logout).
                        </li>
                        <li className="auth-cause-item">
                          Lack of multi-factor authentication (MFA).
                        </li>
                        <li className="auth-cause-item">
                          Insecure storage or transmission of credentials.
                        </li>
                        <li className="auth-cause-item">
                          Poor defense against automated attacks, like
                          credential stuffing or brute-force attacks.
                        </li>
                      </ul>
                    </li>
                    <li className="auth-issue-item">
                      These weaknesses can result in unauthorized access,
                      leading to account compromise, data theft, and
                      unauthorized actions.
                    </li>
                  </ul>
                </dd>
              </dl>
            </div>
            <div className="go-to-section-lab">
              <Link
                to="/Command_Injection/Command_Injection_labs"
                className="go-to-lab"
              >
                Go To Lab
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
