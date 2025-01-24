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
                  <span>Introduction</span> Intro to API Testing
                </dt>
                <dd className="fadeInUp faq-body-lab1">
                  <h3>
                    Welcome to the API Testing Learning Room! logic flaw img
                  </h3>
                  <div className="desc">
                    <h4>What is an Access Control Vulnerability?</h4>
                    <p>
                      In this section, we'll introduce the concept of API
                      testing, focusing on how APIs enable communication between
                      different software systems and why testing them is crucial
                      for identifying vulnerabilities. We'll dive into API
                      recon, the importance of understanding API documentation,
                      and how to identify potential weaknesses in APIs,
                      especially RESTful and JSON APIs. Lastly, we’ll give you
                      the opportunity to practice with our interactive labs,
                      simulating real-world API testing scenarios.
                    </p>
                  </div>
                  <h4>Labs:</h4>
                  <p>
                    If you already understand the basics of API testing and want
                    to apply your knowledge to vulnerable targets, you can
                    access all the labs in this topic through the link below.
                  </p>
                </dd>
                {/* Topic 1 */}
                <dt
                  className="wave-lab1 fadeInUp faq-header-lab1"
                  id="border-left"
                >
                  <span>Topic 1</span> What is API Testing?
                </dt>
                <dd className="fadeInUp faq-body-lab1" id="border-left">
                  <ul>
                    <li>
                      <b>API testing</b> is a critical aspect of ensuring the
                      security and functionality of modern web applications.
                      APIs (Application Programming Interfaces) allow systems to
                      communicate and share data, but flawed APIs can lead to
                      vulnerabilities that compromise a website's security. APIs
                      are often used in dynamic websites, and testing them
                      ensures that common vulnerabilities like SQL injection or
                      parameter pollution are prevented. This section will help
                      you understand the role of API testing in maintaining the
                      confidentiality, integrity, and availability of web
                      applications.
                    </li>
                    <li>
                      <b>Key Areas Covered:</b>
                      <ol>
                        <li>RESTful API testing</li>
                        <li>JSON API testing</li>
                        <li>Server-side parameter pollution vulnerabilities</li>
                      </ol>
                    </li>
                  </ul>
                </dd>
                {/* Topic 2 */}
                <dt
                  className="wave-lab1 fadeInUp faq-header-lab1"
                  id="border-left"
                >
                  <span>Topic 2</span> How Do APIs Work?
                </dt>
                <dd className="fadeInUp faq-body-lab1" id="border-left">
                  <p>
                    To begin testing an API, you need to understand how it
                    functions and how to interact with it. This includes:
                  </p>
                  <ul>
                    <li>
                      <b>Identifying Endpoints:</b> These are the locations
                      where an API receives requests, such as{" "}
                      <code>/api/books</code> for retrieving books from a
                      library.
                    </li>
                    <li>
                      <b>Understanding Input Data:</b> Knowing both mandatory
                      and optional parameters helps in constructing valid
                      requests.
                    </li>
                    <li>
                      <b>HTTP Methods:</b> APIs accept specific methods like
                      <code>GET</code>, <code>POST</code>, <code>PUT</code>, and
                      <code>DELETE</code> to perform different operations.
                    </li>
                    <li>
                      <b>Rate Limits and Authentication: </b> APIs may restrict
                      access to certain actions based on factors like the number
                      of requests or the type of user authentication.
                    </li>
                  </ul>
                  <p>
                    <i>
                      In this section, you'll learn how to identify these
                      elements and understand how they impact API behavior
                      during testing.
                    </i>
                  </p>
                </dd>
                {/* Topic 3 */}
                <dt
                  className="wave-lab1 fadeInUp faq-header-lab1"
                  id="border-left"
                >
                  <span>Topic 3</span>Discovering API Documentation
                </dt>
                <dd className="fadeInUp faq-body-lab1" id="border-left">
                  <p>
                    API documentation provides developers with the information
                    needed to interact with the API. This documentation can be
                    human-readable (for developers) or machine-readable (for
                    automated tasks). Even if API documentation is not publicly
                    available, you can use tools to uncover hidden documentation
                    by crawling through the application.
                  </p>
                  <ul>
                    <b>Where to Look:</b>
                    <li>
                      Endpoints like <code>/api</code>,{" "}
                      <code>/swagger/index.html</code>, or{" "}
                      <code>/openapi.json</code>
                      often provide documentation.
                    </li>
                    <li>
                      Burp Suite and other tools can help in identifying hidden
                      endpoints.
                    </li>
                  </ul>
                  <p>
                    <i>
                      By discovering the documentation, you can start
                      constructing test cases and simulate realistic API
                      requests.
                    </i>
                  </p>
                </dd>
                {/* Topic 4 */}
                <dt
                  className="wave-lab1 fadeInUp faq-header-lab1"
                  id="border-left"
                >
                  <span>Topic 4</span> Common API Vulnerabilities
                </dt>
                <dd className="fadeInUp faq-body-lab1" id="border-left">
                  <p>
                    APIs can be vulnerable to a variety of attacks if not
                    properly tested. These include:
                  </p>
                  <ul>
                    <li>
                      <b>SQL Injection: </b> Attacks that exploit input
                      validation flaws to manipulate database queries.
                    </li>
                    <li>
                      <b>Parameter Pollution: </b> When attackers introduce
                      additional parameters that the server doesn't expect,
                      leading to unintended behaviors.
                    </li>
                    <li>
                      <b>Authentication Flaws:</b> If authentication mechanisms
                      (like API keys or tokens) are improperly configured, they
                      can be bypassed by attackers.
                    </li>
                  </ul>
                  <p>
                    <i>
                      In this section, we'll walk you through common API
                      vulnerabilities and how to test for them.
                    </i>
                  </p>
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
