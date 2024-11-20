import React, { useEffect, useRef } from "react";
import $ from "jquery";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import "./CSRF.css";
import background from "../../assets/img/background.png";
import imagecourse from "../../assets/img/course_image.png";
import { Link, useNavigate } from "react-router-dom";

export default function CSRF() {
  const faqSectionRef = useRef(null);
  const navigate = useNavigate();
  const handleGoToLab = () => {
    navigate("/CSRF/CSRF_labs");
  };
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
      <div className="landing-lab1">
        <div className="banner">
          <img src={background} alt="" />
        </div>
        <div className="container-lab1">
          <div className="breadcrumb">
            <ul>
              <li>
                <Link to="">Home</Link>
              </li>
              <li>
                <Link to="">Cross-Site Request Forgery (CSRF)</Link>
              </li>
            </ul>
          </div>
          <div className="course-info">
            <img src={imagecourse} alt="" />
            <div className="course-text">
              <h1>Cross-Site Request Forgery (CSRF)</h1>
              <p>
                Discover how attackers exploit CSRF vulnerabilities to perform
                unauthorized actions on behalf of authenticated users without
                their consent. Learn the strategies to detect, mitigate, and
                safeguard web applications against such attacks, ensuring robust
                protection for your users.
              </p>
              <div className="course-icons">
                <div className="diff">
                  <div className="easy">
                    <i className="fa-solid fa-signal"></i>
                    <p> Easy</p>
                  </div>
                </div>
                <div className="duration">
                  <i className="fa-solid fa-clock"></i>
                  <p className="time">20 min</p>
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
      {/* End Landing */}
      {/* Start Course */}
      <div className="course-lab1">
        <div className="container">
          <div className="row">
            <div className="faq-section-lab1" ref={faqSectionRef}>
              <dl className="section-text-lab1">
                {/* Task 1 */}
                <dt className="wave-lab1 fadeInUp faq-header-lab1">
                  <span>Task 1</span> Exploiting CSRF Vulnerabilities
                </dt>
                <dd className="fadeInUp faq-body-lab1">
                  <ul>
                    <li>
                      <p>
                        CSRF vulnerabilities occur when a web application
                        processes unauthorized actions on behalf of an
                        authenticated user.
                      </p>
                    </li>
                    <li>
                      <p>
                        Attackers can trick users into executing malicious
                        requests by embedding hidden forms, links, or scripts
                        into trusted websites or emails.
                      </p>
                    </li>
                    <li>
                      <p>
                        Implement anti-CSRF tokens in all forms and sensitive
                        actions, and validate their presence and authenticity on
                        the server side.
                      </p>
                    </li>
                  </ul>
                </dd>

                {/* Task 2 */}
                <dt className="wave-lab1 fadeInUp faq-header-lab1">
                  <span>Task 2</span> Lack of CSRF Protection in Forms
                </dt>
                <dd className="fadeInUp faq-body-lab1">
                  <ul>
                    <li>
                      <p>
                        Forms without CSRF protection are highly vulnerable to
                        exploitation by attackers.
                      </p>
                    </li>
                    <li>
                      <p>
                        Attackers can create malicious forms that mimic
                        legitimate ones, tricking users into submitting them
                        unknowingly.
                      </p>
                    </li>
                    <li>
                      <p>
                        Ensure that all forms handling sensitive data include
                        CSRF tokens, and use proper referrer checks to verify
                        request sources.
                      </p>
                    </li>
                  </ul>
                </dd>

                {/* Task 3 */}
                <dt className="wave-lab1 fadeInUp faq-header-lab1">
                  <span>Task 3</span> Insufficient Validation of HTTP Requests
                </dt>
                <dd className="fadeInUp faq-body-lab1">
                  <ul>
                    <li>
                      <p>
                        Improper validation of incoming HTTP requests can make a
                        web application susceptible to CSRF attacks.
                      </p>
                    </li>
                    <li>
                      <p>
                        Attackers can execute unauthorized requests by
                        exploiting the victim’s active session and the lack of
                        request validation.
                      </p>
                    </li>
                    <li>
                      <p>
                        Implement SameSite cookie attributes, enforce CSRF
                        tokens in requests, and use strong authentication
                        mechanisms to validate the origin of requests.
                      </p>
                    </li>
                  </ul>
                </dd>
              </dl>
            </div>
            <div className="go-to-section">
              <button onClick={handleGoToLab} className="go-to">
                Go To Labs
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
