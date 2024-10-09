import Header from "../../../../Header/Header";
import "./Prices_exp.css";
import $ from "jquery";
import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import Footer from "../../../../../Footer/Footer";

export default function Prices_exp() {
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
      {/* Start Courses  */}
      <div className="course-Prices_exp ">
        <div className="container-Prices_exp ">
          <div className="row">
            <div className="faq-section-Prices_exp" ref={faqSectionRef}>
              <dl className="section-text-Prices_exp">
                <dt className="wave-Prices_exp fadeInUp faq-header-Prices_exp">
                  <span>Task 1</span> SQL injection UNION attacks
                </dt>
                <dd className="fadeInUp faq-body-Prices_exp">
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
                            The UNION keyword enables you to execute one or more
                            additional SELECT queries and append the results to
                            the original query. For example:
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
                  </ul>
                </dd>
                <dt className="wave-Prices_exp fadeInUp faq-header-Prices_exp">
                  <span>Task 1</span> Determining the number of columns
                </dt>
                <dd className="fadeInUp faq-body-Prices_exp">
                  <ul>
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
              </dl>
            </div>
          </div>

          <h2>Click The Link To Go To Prices Test</h2>
          <div className="row-practice">
            <Link
              to="/Sql_Injection/sql_Injection_lab/third_lab/show-prices"
              className="store-link-sp"
            >
              Prices
            </Link>
          </div>
        </div>
      </div>
      {/* End Course Content  */}
      <Footer />
    </>
  );
}
