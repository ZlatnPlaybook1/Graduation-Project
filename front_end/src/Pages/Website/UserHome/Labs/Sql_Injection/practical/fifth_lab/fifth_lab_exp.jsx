import Header from "../../../../Header/Header";
import styles from"./fifth_lab_exp.module.css";
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
      <div className={styles.course}>
        <div className={styles.container}>
          <div className={styles.row}>
            <div className={styles["row-practice"]}>
              <Link
                to="/Sql_Injection/sql_Injection_lab/fifth_lab/login"
                className={styles["acc-link-sp"]}
              >
                My Account
              </Link>
            </div>
            <div className={styles["faq-section"]} ref={faqSectionRef}>
              <dl className={styles["section-text"]}>
                <dt className={`${styles.wave} ${styles.fadeInUp} ${styles["faq-header"]}`}>
                  SQL injection UNION attacks
                </dt>
                <dd className={`${styles.fadeInUp} ${styles["faq-body"]}`}>
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
        </div>
      </div>
      {/* End Course Content  */}
      <Footer />
    </>
  );
}
