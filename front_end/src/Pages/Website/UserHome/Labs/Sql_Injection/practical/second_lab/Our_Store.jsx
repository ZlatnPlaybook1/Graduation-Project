import Header from "../../../../Header/Header";
import "./Our_Store.css";
import $ from "jquery";
import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import Footer from "../../../../../Footer/Footer";

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
                  <span>Task 1</span> Retrieving hidden data
                </dt>
                <dd className="fadeInUp faq-body-Our_Store">
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
