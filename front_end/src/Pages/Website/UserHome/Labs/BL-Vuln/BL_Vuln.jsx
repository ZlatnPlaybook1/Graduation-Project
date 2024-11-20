import React, { useEffect, useRef } from "react";
import $ from "jquery";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import "./BL_Vuln.css";
import background from "../../assets/img/background.png";
import imagecourse from "../../assets/img/course_image.png";
import { Link, useNavigate } from "react-router-dom";

export default function BL_Vuln() {
  const faqSectionRef = useRef(null);
  const navigate = useNavigate();
  const handleGoToLab = () => {
    navigate("/AC-Vuln/BL_Vuln_labs");
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
                <Link to="">Access control vulnerability</Link>
              </li>
            </ul>
          </div>
          <div className="course-info">
            <img src={imagecourse} alt="" />
            <div className="course-text">
              <h1>Access control vulnerability</h1>
              <p>
                Learn how attackers exploit access control vulnerabilities in
                web applications, gaining unauthorized access to sensitive areas
                or data, and the techniques used to detect and prevent these
                attacks.
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
                  <span>Task 1</span> Unprotected Admin Functionality
                </dt>
                <dd className="fadeInUp faq-body-lab1">
                  <ul>
                    <li>
                      <p>
                        Admin panels that are not properly secured can lead to
                        unauthorized access by attackers.
                      </p>
                    </li>
                    <li>
                      <p>
                        Attackers may exploit weak authentication mechanisms to
                        bypass access control and take over admin functionality.
                      </p>
                    </li>
                    <li>
                      <p>
                        Ensure proper role-based access control is in place to
                        restrict admin functionalities to authorized users only.
                      </p>
                    </li>
                  </ul>
                </dd>
                {/* Task 2 */}
                <dt className="wave-lab1 fadeInUp faq-header-lab1">
                  <span>Task 2</span> Insecure Direct Object References (IDOR)
                </dt>
                <dd className="fadeInUp faq-body-lab1">
                  <ul>
                    <li>
                      <p>
                        IDOR vulnerabilities occur when an application allows
                        users to access objects (files, data) by providing
                        direct input, such as an ID, without proper
                        authorization checks.
                      </p>
                    </li>
                    <li>
                      <p>
                        Attackers can modify the object ID in the URL or request
                        to gain unauthorized access to other users' data.
                      </p>
                    </li>
                    <li>
                      <p>
                        Protect sensitive objects by implementing proper access
                        control checks before allowing access to objects.
                      </p>
                    </li>
                  </ul>
                </dd>
                {/* Task 3 */}
                <dt className="wave-lab1 fadeInUp faq-header-lab1">
                  <span>Task 3</span> Lack of Secure Session Management
                </dt>
                <dd className="fadeInUp faq-body-lab1">
                  <ul>
                    <li>
                      <p>
                        Insufficient session management can allow attackers to
                        hijack or impersonate legitimate users, gaining
                        unauthorized access to protected resources.
                      </p>
                    </li>
                    <li>
                      <p>
                        Weak session IDs or improper session expiration can be
                        exploited to steal a user's session.
                      </p>
                    </li>
                    <li>
                      <p>
                        Ensure that secure session handling mechanisms are in
                        place, such as using HTTPS, rotating session IDs, and
                        implementing proper session expiration.
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
