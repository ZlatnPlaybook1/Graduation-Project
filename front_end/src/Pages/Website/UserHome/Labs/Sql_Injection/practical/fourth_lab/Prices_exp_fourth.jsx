import Header from "../../../../Header/Header";
import "./Prices_exp_fourth.css";
import $ from "jquery";
import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import Footer from "../../../../Footer/Footer";

export default function Prices_exp_fourth() {
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
      <div className="course-Prices_exp_fourth ">
        <div className="container-Prices_exp_fourth ">
          <div className="row">
            <div className="faq-section-Prices_exp_fourth" ref={faqSectionRef}>
              <dl className="section-text-Prices_exp_fourth">
                <dt className="wave-Prices_exp_fourth fadeInUp faq-header-Prices_exp_fourth">
                  SQL injection UNION attacks
                </dt>
                <dd className="fadeInUp faq-body-Prices_exp_fourth">
                  <ul>
                    <li>
                      This lab contains a SQL injection vulnerability in the
                      product category filter.
                    </li>
                    <li>
                      The results from the query are returned in the
                      application's response, so you can use a UNION attack to
                      retrieve data from other tables.
                    </li>
                    <li>
                      To construct such an attack, you first need to determine
                      the number of columns returned by the query.
                    </li>
                    <li>
                      You can do this using a technique you learned in a
                      previous lab.
                    </li>
                    <li>
                      The next step is to identify a column that is compatible
                      with string data.
                    </li>
                    <li>
                      The lab will provide a random value that you need to make
                      appear within the query results.
                    </li>
                    <li>
                      To solve the lab, perform a SQL injection UNION attack
                      that returns an additional row containing the value
                      provided.
                    </li>
                    <li>
                      This technique helps you determine which columns are
                      compatible with string data.
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
