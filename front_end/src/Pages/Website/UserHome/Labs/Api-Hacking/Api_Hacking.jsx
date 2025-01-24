import React, { useEffect, useRef } from "react";
import $ from "jquery";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import "./Api_Hacking.css";
import background from "../../assets/img/background.png";
import imagecourse from "../../assets/img/course_image.png";
import { Link, useNavigate } from "react-router-dom";

export default function Api_Hacking() {
  const faqSectionRef = useRef(null);
  const navigate = useNavigate();
  const handleGoToLab = () => {
    navigate("/Api_Hacking/Api_Hacking_labs");
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
                <Link to="/home">Home</Link>
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
                  <span>Introduction</span> Introduction to Access Control
                  Vulnerabilities
                </dt>
                <dd className="fadeInUp faq-body-lab1">
                  <h3>
                    Welcome to the Access Control Vulnerability Learning Room!
                  </h3>
                  <div className="desc">
                    <h4>What is an Access Control Vulnerability?</h4>
                    <p>
                      Access control vulnerabilities occur when an application
                      fails to properly restrict what authenticated users can
                      do. These issues allow attackers to perform actions or
                      access resources beyond their intended permissions,
                      compromising sensitive data or system integrity.
                    </p>
                  </div>
                  <h4>Key Topics Covered:</h4>
                  <ol>
                    <li>
                      <b>Understanding Access Control</b>: Overview of access
                      control mechanisms and their importance.
                    </li>
                    <li>
                      <b>Types of Access Control Flaws</b>: Common
                      vulnerabilities, such as horizontal and vertical privilege
                      escalation.
                    </li>
                    <li>
                      <b>Examples of Exploits</b>: Real-world scenarios
                      showcasing access control weaknesses.
                    </li>
                    <li>
                      <b>Access Control Best Practices</b>: Strategies to
                      prevent access control vulnerabilities in applications.
                    </li>
                  </ol>
                </dd>
                {/* Topic 1 */}
                <dt
                  className="wave-lab1 fadeInUp faq-header-lab1"
                  id="border-left"
                >
                  <span>Topic 1</span> Understanding Access Control
                </dt>
                <dd className="fadeInUp faq-body-lab1" id="border-left">
                  <ul>
                    <li>
                      <b>Definition:</b> Access control ensures users can only
                      perform permitted actions and access authorized resources.
                    </li>
                    <li>
                      <b>Types:</b>
                      <ol>
                        <li>
                          <b>Discretionary Access Control (DAC):</b> Resource
                          owners define access rules.
                        </li>
                        <li>
                          <b>Mandatory Access Control (MAC):</b> Predefined
                          rules control access based on classifications.
                        </li>
                        <li>
                          <b>Role-Based Access Control (RBAC):</b> Permissions
                          assigned based on roles.
                        </li>
                      </ol>
                    </li>
                  </ul>
                </dd>
                {/* Topic 2 */}
                <dt
                  className="wave-lab1 fadeInUp faq-header-lab1"
                  id="border-left"
                >
                  <span>Topic 2</span> Types of Access Control Flaws
                </dt>
                <dd className="fadeInUp faq-body-lab1" id="border-left">
                  <ul>
                    <li>
                      <b>Horizontal Privilege Escalation:</b> A user accesses
                      resources belonging to another user at the same permission
                      level.
                    </li>
                    <li>
                      <b>Vertical Privilege Escalation:</b> A user performs
                      actions requiring higher privileges than they possess.
                    </li>
                    <li>
                      <b>Unauthenticated Access:</b> Resources accessible
                      without proper authentication.
                    </li>
                  </ul>
                </dd>
                {/* Topic 3 */}
                <dt
                  className="wave-lab1 fadeInUp faq-header-lab1"
                  id="border-left"
                >
                  <span>Topic 3</span> Examples of Exploits
                </dt>
                <dd className="fadeInUp faq-body-lab1" id="border-left">
                  <ul>
                    <li>
                      <b>Accessing Other Users' Data:</b> Viewing or modifying
                      another user's account details.
                    </li>
                    <li>
                      <b>Admin Function Misuse:</b> Performing admin-level
                      actions, like changing roles or deleting data.
                    </li>
                    <li>
                      <b>Bypassing Login:</b> Using direct object references to
                      access restricted areas.
                    </li>
                  </ul>
                </dd>
                {/* Topic 4 */}
                <dt
                  className="wave-lab1 fadeInUp faq-header-lab1"
                  id="border-left"
                >
                  <span>Topic 4</span> Access Control Best Practices
                </dt>
                <dd className="fadeInUp faq-body-lab1" id="border-left">
                  <ul>
                    <li>
                      <b>Principle of Least Privilege:</b> Grant users only the
                      access necessary for their roles.
                    </li>
                    <li>
                      <b>Regular Access Reviews:</b> Audit permissions to remove
                      unnecessary access rights.
                    </li>
                    <li>
                      <b>Use Centralized Access Controls:</b> Ensure consistent
                      access enforcement through centralized mechanisms.
                    </li>
                    <li>
                      <b>Test for Vulnerabilities:</b> Use tools and manual
                      testing to identify and address access control issues.
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
