import Header from "../../../../Header/Header";
import "./fifth_lab_exp.css";
import $ from "jquery";
import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import Footer from "../../../../Footer/Footer";

export default function Fifth_lab_exp() {
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
      <div className="course-Prices_exp_fifth ">
        <div className="container-Prices_exp_fifth ">
          <div className="row">
            <div className="faq-section-Prices_exp_fifth" ref={faqSectionRef}>
              <dl className="section-text-Prices_exp_fifth">
                <dt className="wave-Prices_exp_fifth fadeInUp faq-header-Prices_exp_fifth">
                  SQL injection UNION attacks
                </dt>
                <dd className="fadeInUp faq-body-Prices_exp_fifth">
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
                      To construct such an attack, you need to combine some of
                      the techniques you learned in previous labs.
                    </li>
                    <li>
                      The database contains a different table called users, with
                      columns called username and password.
                    </li>
                    <li>
                      To solve the lab, perform a SQL injection UNION attack
                      that retrieves all usernames and passwords, and use the
                      information to log in as the administrator user.
                    </li>
                  </ul>
                </dd>
              </dl>
            </div>
          </div>

          <h2>Click The Link To Go To Prices Test</h2>
          <div className="row-practice">
            <Link
              to="/Sql_Injection/sql_Injection_lab/fifth_lab/login"
              className="store-link-sp"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
      {/* End Course Content  */}
      <Footer />
    </>
  );
}
