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
                  SQL injection UNION attacks
                </dt>
                <dd className="fadeInUp faq-body-Prices_exp">
                  <ul>
                    <li>
                      This lab contains an SQL injection vulnerability. The
                      results of the SQL query are returned within the
                      application's response, so you can use a UNION attack to
                      retrieve data from other tables.
                    </li>
                    <li>
                      The first step of such an attack is to determine the
                      number of columns that are being returned by the query.
                    </li>
                    <li>
                      You will then use this technique in subsequent labs to
                      construct the full attack.
                    </li>
                    <li>
                      To solve the lab, determine the number of columns returned
                      by the query by performing a SQL injection UNION attack
                      that returns an additional row containing null values.
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
