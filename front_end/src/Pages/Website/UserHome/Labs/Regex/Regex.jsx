import React, { useEffect, useRef } from "react";
import $ from "jquery";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import "./Regex.css";
import background from "../../assets/img/background.png";
import imagecourse from "../../assets/img/course_image.png";
import { Link, useNavigate } from "react-router-dom";

export default function Regex() {
  const faqSectionRef = useRef(null);
  const navigate = useNavigate();
  const handleGoToLab = () => {
    navigate("/Regex/Regex_labs");
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
                <Link to="">Regular Expressions</Link>
              </li>
            </ul>
          </div>
          <div className="course-info">
            <img src={imagecourse} alt="" />
            <div className="course-text">
              <h1>Regular Expressions</h1>
              <p>
                Learn how attackers leverage regular expressions (regex) for
                pattern matching in malicious scripts, data exfiltration, and
                crafting payloads. Explore how security professionals use regex
                to identify vulnerabilities, analyze logs, detect threats, and
                filter malicious inputs. Master techniques to create robust
                regex patterns to safeguard applications from injection attacks
                and unauthorized access.
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
                  <span>Task 1</span> Identifying Malicious Patterns
                </dt>
                <dd className="fadeInUp faq-body-lab1">
                  <ul>
                    <li>
                      <p>
                        Regular expressions can be used to identify malicious
                        patterns in files, logs, or user inputs, helping detect
                        potential threats.
                      </p>
                    </li>
                    <li>
                      <p>
                        Attackers often use crafted patterns to bypass
                        detection; well-constructed regex can counteract these
                        attempts by pinpointing anomalies.
                      </p>
                    </li>
                    <li>
                      <p>
                        Ensure that regex-based detection systems are updated to
                        recognize evolving attack patterns.
                      </p>
                    </li>
                  </ul>
                </dd>
                {/* Task 2 */}
                <dt className="wave-lab1 fadeInUp faq-header-lab1">
                  <span>Task 2</span> Preventing Injection Attacks
                </dt>
                <dd className="fadeInUp faq-body-lab1">
                  <ul>
                    <li>
                      <p>
                        Regex can validate user input, ensuring it conforms to
                        expected formats and preventing injection attacks.
                      </p>
                    </li>
                    <li>
                      <p>
                        Attackers may exploit regex flaws to craft payloads;
                        robust patterns help mitigate these risks.
                      </p>
                    </li>
                    <li>
                      <p>
                        Use server-side input validation as an additional layer
                        of defense when employing regex in input handling.
                      </p>
                    </li>
                  </ul>
                </dd>
                {/* Task 3 */}
                <dt className="wave-lab1 fadeInUp faq-header-lab1">
                  <span>Task 3</span> Analyzing Log Files
                </dt>
                <dd className="fadeInUp faq-body-lab1">
                  <ul>
                    <li>
                      <p>
                        Regex simplifies parsing large log files, enabling
                        security analysts to search for specific events or
                        indicators of compromise.
                      </p>
                    </li>
                    <li>
                      <p>
                        Attackers may leave traces that follow a predictable
                        pattern; regex helps quickly locate these patterns.
                      </p>
                    </li>
                    <li>
                      <p>
                        Regularly refine regex patterns to align with the latest
                        security incidents and logging standards.
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
