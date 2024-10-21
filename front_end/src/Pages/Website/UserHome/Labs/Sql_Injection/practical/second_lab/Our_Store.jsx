import Header from "../../../../Header/Header";
import "./Our_Store.css";
import $ from "jquery";
import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import Footer from "../../../../Footer/Footer";

export default function Our_Store() {
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
      <div className="course-Our_Store ">
        <div className="container-Our_Store ">
          <div className="row">
            <div className="faq-section-Our_Store" ref={faqSectionRef}>
              <dl className="section-text-Our_Store">
                <dt className="wave-Our_Store fadeInUp faq-header-Our_Store">
                  Retrieving hidden data
                </dt>
                <dd className="fadeInUp faq-body-Our_Store">
                  <ul>
                    <li>
                      This lab contains a SQL injection vulnerability in the
                      product category filter. When the user selects a category,
                      the application carries out a SQL query like the
                      following:
                    </li>
                    <pre>
                      <code>
                        <span>
                          SELECT * FROM products WHERE category = 'T-shirts' AND
                          released = 1
                        </span>
                      </code>
                    </pre>
                    <li>
                      To solve the lab, perform a SQL injection attack that
                      causes the application to display one or more unreleased
                      products.
                    </li>
                  </ul>
                </dd>
              </dl>
            </div>
          </div>

          <h2>Click The Link To Go To T-Shirts In Our Store</h2>
          <div className="row-practice">
            <Link
              to="/Sql_Injection/sql_Injection_lab/second_lab/in_store"
              className="store-link"
            >
              T-Shirts
            </Link>
          </div>
        </div>
      </div>
      {/* End Course Content  */}
      <Footer />
    </>
  );
}
