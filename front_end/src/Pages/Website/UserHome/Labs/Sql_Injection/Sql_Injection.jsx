import React, { useEffect, useRef } from "react";
import $ from "jquery";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import "./Sql_Injection.css";
import background from "../../assets/img/background.png";
import imagecourse from "../../assets/img/course_image.png";
import { Link, useNavigate } from "react-router-dom";

export default function Sql_Injection() {
  const faqSectionRef = useRef(null);
  const navigate = useNavigate();
  const handleGoToLab = () => {
    navigate("/sql_Injection/sql_Injection_labs");
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
                <Link to="">SQL Injection</Link>
              </li>
            </ul>
          </div>
          <div className="course-info">
            <img src={imagecourse} alt="" />
            <div className="course-text">
              <h1>SQL Injection</h1>
              <p>
                Learn how attackers exploit vulnerabilities in web applications
                using SQL injection and understand the techniques to detect and
                prevent them.
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
                  <span>Task 2</span> Retrieving hidden data
                </dt>
                <dd className="faq-body-lab1">
                  <ul>
                    <li>
                      The single quote character <span>'</span> and look for
                      errors or other anomalies.
                    </li>
                    <li>
                      Some SQL-specific syntax that evaluates to the base
                      (original) value of the entry point, and to a different
                      value, and look for systematic differences in the
                      application responses.
                    </li>
                    <li>
                      Boolean conditions such as <span>OR 1=1</span> and{" "}
                      <span>OR 1=2</span>, and look for differences in the
                      application's responses.
                    </li>
                    <li>
                      Imagine a shopping application that displays products in
                      different categories. When the user clicks on the{" "}
                      <span>T-Shirts</span> their browser requests the URL:{" "}
                      <br />
                      <span>
                        Localhost:3000/Sql_ingection/sql_ingection_lab/second_lab/in_store
                      </span>
                    </li>
                    <li>
                      This causes the application to make a SQL query to
                      retrieve details of the relevant products from the
                      database:
                      <pre>
                        <code>
                          <span>
                            SELECT * FROM products WHERE category = ' T-Shirts '
                            AND released = 1
                          </span>
                        </code>
                      </pre>
                    </li>
                    <li>
                      The restriction <span>released = 1</span> is being used to
                      hide products that are not released. We could assume for
                      unreleased products, <span>released = 2</span>.
                    </li>
                    <li>
                      This results in the SQL query:
                      <pre>
                        <code>
                          <span>
                            SELECT * FROM products WHERE category =
                            'T-shirts'--' AND released = 1
                          </span>
                        </code>
                      </pre>
                    </li>
                    <li>
                      Crucially, note that <span>--</span> is a comment
                      indicator in SQL. This means that the rest of the query is
                      interpreted as a comment, effectively removing it. In this
                      example, this means the query no longer includes{" "}
                      <span>AND released = 1</span> . As a result, all products
                      are displayed, including those that are not yet released.
                    </li>
                    <li>
                      You can use a similar attack to cause the application to
                      display all the products in any category, including
                      categories that they don't know about: <br />{" "}
                      <span>
                        Localhost:3000/Sql_ingection/sql_ingection_lab/second_lab/in_store'+or+1=1--
                      </span>
                    </li>
                    <li>
                      This results in the SQL query:
                      <pre>
                        <code>
                          <span>
                            SELECT * FROM products WHERE category = T-Shirts OR
                            1=1--' AND released = 1
                          </span>
                        </code>
                      </pre>
                    </li>
                    <li>
                      The modified query returns all items where either the
                      <span> category</span> is <span>T-Shirts</span> , or{" "}
                      <span>1</span> is equal to <span>1</span>. As{" "}
                      <span>1=1</span> is always true, the query returns all
                      items.
                    </li>
                  </ul>
                </dd>
                <dt className="wave-lab1  fadeInUp faq-header-lab1">
                  <span>Task 3</span> SQL injection UNION attacks
                </dt>
                <dd className="faq-body-lab1">
                  <ul>
                    <li>
                      When an application is vulnerable to SQL injection, and
                      the results of the query are returned within the
                      application's responses, you can use the{" "}
                      <span>UNION</span> keyword to retrieve data from other
                      tables within the database. This is commonly known as a
                      SQL injection UNION attack.
                    </li>
                    <li>
                      The <span>UNION</span> keyword enables you to execute one
                      or more additional <span>SELECT</span> queries and append
                      the results to the original query. For example:
                      <pre>
                        <code>
                          <span>
                            SELECT a, b FROM table1 UNION SELECT c, d FROM
                            table2
                          </span>
                        </code>
                      </pre>
                    </li>
                    <li>
                      This SQL query returns a single result set with two
                      columns, containing values from columns <span>a</span> and{" "}
                      <span>b</span> in table1 and columns <span>c</span> and{" "}
                      <span>d</span> in <span>table2</span>.
                    </li>
                    <li>
                      <h2>Determining the number of columns</h2>
                    </li>
                    <li>
                      The second method involves submitting a series of{" "}
                      <span>UNION SELECT</span> payloads specifying a different
                      number of null values:
                      <pre>
                        <code>
                          <span>' UNION SELECT NULL--</span>
                          <span>' UNION SELECT NULL,NULL--</span>
                          <span>' UNION SELECT NULL,NULL,NULL--</span>
                        </code>
                      </pre>
                    </li>
                  </ul>
                </dd>
                <dt className="wave-lab1  fadeInUp faq-header-lab1">
                  <span>Task 4</span> Finding columns with a useful data type
                </dt>
                <dd className="faq-body-lab1">
                  <ul>
                    <li>
                      A SQL injection UNION attack enables you to retrieve the
                      results from an injected query.
                    </li>
                    <li>
                      The interesting data that you want to retrieve is normally
                      in string form.
                    </li>
                    <li>
                      This means you need to find one or more columns in the
                      original query results whose data type is, or is
                      compatible with, string data.
                    </li>
                    <li>
                      After you determine the number of required columns, you
                      can probe each column to test whether it can hold string
                      data.
                    </li>
                    <li>
                      You can submit a series of<span> UNION SELECT </span>
                      payloads that place a string value into each column in
                      turn.
                    </li>
                    <li>
                      For example, if the query returns four columns, you would
                      submit:
                    </li>
                    <pre>
                      <code>
                        <span>' UNION SELECT 'a',NULL,NULL,NULL--</span>
                        <span>' UNION SELECT NULL,'a',NULL,NULL--</span>
                        <span>' UNION SELECT NULL,NULL,'a',NULL--</span>
                        <span>' UNION SELECT NULL,NULL,NULL,'a'--</span>
                      </code>
                    </pre>
                    <li>
                      If the column data type is not compatible with string
                      data, the injected query will cause a database error, such
                      as:
                    </li>
                    <pre>
                      <code>
                        <span>
                          Conversion failed when converting the varchar value
                          'a' to data type int.
                        </span>
                      </code>
                    </pre>
                    <li>
                      If an error does not occur, and the application's response
                      contains some additional content including the injected
                      string value, then the relevant column is suitable for
                      retrieving string data.
                    </li>
                  </ul>
                </dd>
                <dt className="wave-lab1  fadeInUp faq-header-lab1">
                  <span>Task 5</span>Using a SQL injection UNION attack to
                  retrieve interesting data
                </dt>
                <dd className="faq-body-lab1">
                  <ul>
                    <li>
                      When you have determined the number of columns returned by
                      the original query and found which columns can hold string
                      data, you are in a position to retrieve interesting data.
                    </li>
                    <li>
                      Suppose that:
                      <ol>
                        <li>
                          The original query returns two columns, both of which
                          can hold string data.
                        </li>
                        <li>
                          The injection point is a quoted string within the{" "}
                          <span>WHERE</span> clause.
                        </li>
                        <li>
                          The database contains a table called
                          <span> users</span> with the columns
                          <span> username</span> and <span>password</span>.
                        </li>
                      </ol>
                    </li>
                    <li>
                      In this example, you can retrieve the contents of the{" "}
                      <span>users</span> table by submitting the input:
                    </li>
                    <pre>
                      <code>
                        <span>
                          ' UNION SELECT username, password FROM users--
                        </span>
                      </code>
                    </pre>
                    <li>
                      In order to perform this attack, you need to know that
                      there is a table called <span>users</span> with two
                      columns called
                      <span>username</span> and <span>password</span>. Without
                      this information, you would have to guess the names of the
                      tables and columns. All modern databases provide ways to
                      examine the database structure, and determine what tables
                      and columns they contain.
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
