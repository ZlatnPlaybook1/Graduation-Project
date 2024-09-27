import React, { useEffect, useRef } from "react";
import $ from "jquery";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import "./Lab1.css";
import background from "../../assets/img/background.png";
import imagecourse from "../../assets/img/course_image.png";
import { Link, useNavigate } from "react-router-dom";

export default function Lab1() {
  const faqSectionRef = useRef(null);
  const navigate = useNavigate();
  const handleGoToLab = () => {
    navigate("/lab1/SqlInjectionLab");
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
                <Link to="">Pre Security</Link>
              </li>
              <li>
                <Link to="">Introduction To Cyber Security</Link>
              </li>
              <li>
                <span className="active-breadcrumb">
                  Intro To Offensive Security
                </span>
              </li>
            </ul>
          </div>
          <div className="course-info">
            <img src={imagecourse} alt="" />
            <div className="course-text">
              <h1>Intro to Offensive Security</h1>
              <p>
                Hack your first website (legally in a safe environment) and
                experience an ethical hacker's job.
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
                  <p className="time">15 min</p>
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
                <dt className="wave-lab1 fadeInUp faq-header-lab1">
                  <span>Task 1</span> SQL Injection
                </dt>
                <dd className="fadeInUp faq-body-lab1">
                  <ul>
                    <li>
                      <p>
                        SQL injection is a code injection technique that might
                        destroy your database.
                      </p>
                    </li>
                    <li>
                      <p>
                        SQL injection is one of the most common web hacking
                        techniques.
                      </p>
                    </li>
                    <li>
                      <p>
                        SQL injection is the placement of malicious code in SQL
                        statements, via web page input.
                      </p>
                    </li>
                  </ul>
                </dd>
                <dt className="wave-lab1  fadeInUp faq-header-lab1">
                  <span>Task 2</span> SQL in Web Pages
                </dt>
                <dd className="faq-body-lab1">
                  <ul>
                    <li>
                      SQL injection usually occurs when you ask a user for
                      input, like their username/userid, and instead of a
                      name/id, the user gives you an SQL statement that you will
                      unknowingly run on your database.
                    </li>
                    <li>
                      Look at the following example which creates a{" "}
                      <span>SELECT</span> statement by adding a variable
                      (txtUserId) to a select string. The variable is fetched
                      from user input (getRequestString):
                    </li>
                    <li>
                      <h2>Example</h2>
                    </li>
                    <pre>
                      <code>
                        <span>txtUserId = getRequestString("UserId");</span>
                        <span>
                          txtSQL = "SELECT * FROM Users WHERE UserId = " +
                          txtUserId;
                        </span>
                      </code>
                    </pre>
                  </ul>
                </dd>
                <dt className="wave-lab1  fadeInUp faq-header-lab1">
                  <span>Task 3</span> SQL Injection Based on 1=1 is Always True
                </dt>
                <dd className="faq-body-lab1">
                  <ul>
                    <li>SQL Injection Based on 1=1 is Always True</li>
                    <li>
                      If there is nothing to prevent a user from entering
                      "wrong" input, the user can enter some "smart" input like
                      this:
                    </li>
                    <pre>
                      <code>
                        <span>UserId: 105 OR 1=1</span>
                      </code>
                    </pre>
                    <li>Then, the SQL statement will look like this:</li>
                    <pre>
                      <code>
                        <span>
                          SELECT * FROM Users WHERE UserId = 105 OR 1=1;
                        </span>
                      </code>
                    </pre>
                    <li>
                      The SQL above is valid and will return ALL rows from the
                      "Users" table, since OR 1=1 is always TRUE.
                    </li>
                  </ul>
                </dd>
                <dt className="wave-lab1  fadeInUp faq-header-lab1">
                  <span>Task 4</span> SQL Injection Based on ""="" is Always
                  True
                </dt>
                <dd className="faq-body-lab1">
                  <ul>
                    <li>Here is an example of a user login on a web site:</li>
                    <div className="input">
                      <label>Username: </label>
                      <input type="text" placeholder="John Doe" disabled />
                    </div>
                    <div className="input">
                      <label>Password: </label>
                      <input type="text" placeholder="myPass" disabled />
                    </div>
                    <li>
                      <h2>Example</h2>
                    </li>
                    <pre>
                      <code>
                        <span>uName = getRequestString("username");</span>
                        <span>uPass = getRequestString("userpassword");</span>
                        <span>
                          sql = 'SELECT * FROM Users WHERE Name ="' + uName + '"
                          AND Pass ="' + uPass + '"'
                        </span>
                      </code>
                    </pre>
                    <li>
                      <h2>Result</h2>
                    </li>
                    <pre>
                      <code>
                        <span>
                          SELECT * FROM Users WHERE Name ="John Doe" AND Pass
                          ="myPass"
                        </span>
                      </code>
                    </pre>
                    <li>
                      A hacker might get access to <span>user names</span> and{" "}
                      <span>passwords</span> in a database by simply inserting{" "}
                      <span>" OR ""="</span> into the user name or password text
                      box:
                    </li>
                    <div className="input">
                      <label>Username: </label>
                      <input type="text" placeholder='" or ""="' disabled />
                    </div>
                    <div className="input">
                      <label>Password: </label>
                      <input type="text" placeholder='" or ""="' disabled />
                    </div>
                    <li>
                      The code at the server will create a valid SQL statement
                      like this:
                    </li>
                    <li>
                      <h2>Result</h2>
                    </li>
                    <pre>
                      <code>
                        <span>
                          SELECT * FROM Users WHERE Name ="" or ""="" AND Pass
                          ="" or ""=""
                        </span>
                      </code>
                    </pre>
                    <li>
                      The SQL above is valid and will return all rows from the
                      "Users" table, since OR ""="" is always TRUE.
                    </li>
                  </ul>
                </dd>
                <dt className="wave-lab1  fadeInUp faq-header-lab1">
                  <span>Task 5</span> SQL Injection Based on Batched SQL
                  Statements
                </dt>
                <dd className="faq-body-lab1">
                  <ul>
                    <li>
                      A batch of SQL statements is a group of one or more SQL
                      statements sent together as a single unit of work to the
                      database.
                    </li>
                    <li>
                      Consider the following SQL statement, the user input is
                      appended after a semicolon:
                    </li>
                    <pre>
                      <code>
                        <span>DELETE FROM Users WHERE UserId = 105; --</span>
                      </code>
                    </pre>
                    <li>
                      The SQL above is valid and will delete a user with ID 105.
                    </li>
                  </ul>
                </dd>
              </dl>
            </div>
            <div className="go-to-section">
              <button onClick={handleGoToLab} className="go-to">
                Go To Lab
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
