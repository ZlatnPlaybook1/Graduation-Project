import React from "react";
import { useEffect, useRef } from "react";
import $ from "jquery";
import "./Linux.css";
import Header from "../../Header/Header";
import background from "../../assets/img/background.png";
import image from "../../assets/img/course_image.png";
import { Link } from "react-router-dom";
import Footer from "../../Footer/Footer";

export default function Linux() {
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
      {/* Start Landing  */}
      <div className="landing-Linux">
        <div className="banner-Linux">
          <img src={background} alt="bacground" />
        </div>
        <div className="container-Linux">
          <div className="breadcrumb-Linux">
            <ul>
              <li>
                <Link to="">Pre Security</Link>
              </li>
              <li>
                <Link to="">Introduction To Cyber Security</Link>
              </li>
              <li>
                <span className="active-breadcrumb-Linux">
                  Intro To Offensive Security
                </span>
              </li>
            </ul>
          </div>
          <div className="course-info-Linux">
            <img src={image} alt="logo" />
            <div className="course-text-Linux">
              <h1>Cross-Site Scripting</h1>
              <p>
                Hack your first website (legally in a safe environment) and
                experience an ethical hacker's job.
              </p>
              <div className="course-icons-Linux">
                <div className="diff-Linux">
                  <div className="easy-Linux">
                    <i className="fa-solid fa-signal for-Linux"></i>
                    <p>Easy</p>
                  </div>
                </div>
                <div className="duration-Linux">
                  <i className="fa-solid fa-clock for-Linux"></i>
                  <p className="time">15 min</p>
                </div>
              </div>
            </div>
          </div>
          <div className="options-Linux">
            <button>
              <i className="far fa-bookmark for-Linux"></i>
              <p>Save Room</p>
            </button>
            <div className="like-Linux">
              <button>
                <i className="fas fa-thumbs-up for-Linux"></i>
                <p></p>
              </button>
              <button>
                <i className="fas fa-thumbs-down for-Linux"></i>
                <p></p>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* End Landing  */}
      {/* Start Course Content  */}
      <div className="course-Linux">
        <div className="container-Linux" ref={faqSectionRef}>
          <div className="row-Linux">
            <div className="faq-section-Linux">
              <dl className="section-text-Linux">
                {/* Single FAQ Area  */}
                <dt className="wave-Linux fadeInUp faq-header-Linux">
                  <span>Task 1</span> A Bit of Background onn Linux
                </dt>
                <dd className="fadeInUp faq-body-Linux">
                  <ul>
                    <li>
                      <h2>Where is Linux Used?</h2>
                      <p>
                        It's fair to say that Linux is a lot more intimidating
                        to approach than Operating System's (OSs) such as
                        Windows. Both variants have their own advantages and
                        disadvantages. For example, Linux is considerably much
                        more lightweight and you'd be surprised to know that
                        there's a good chance you've used Linux in some form or
                        another every day! Linux powers things such as:
                      </p>
                      <ol>
                        <li>Websites that you visit</li>
                        <li>Car entertainment/control panels</li>
                        <li>
                          Point of Sale (PoS) systems such as checkout tills and
                          registers in shops
                        </li>
                        <li>
                          Critical infrastructures such as traffic light
                          controllers or industrial sensors
                        </li>
                      </ol>
                    </li>
                    <li>
                      <h2>Flavours Of Linux</h2>
                      <p>
                        The name "Linux" is actually an umbrella term for
                        multiple OS's that are based on UNIX (another operating
                        system). Thanks to Linux being open-source, variants of
                        Linux come in all shapes and sizes - suited best for
                        what the system is being used for.
                      </p>
                      <p>
                        For example, Ubuntu & Debian are some of the more
                        commonplace distributions of Linux because it is so
                        extensible. I.e. you can run Ubuntu as a server (such as
                        websites & web applications) or as a fully-fledged
                        desktop. For this series, we're going to be using
                        Ubuntu.
                      </p>
                      <p>
                        Similar to how you have different versions Windows (7, 8
                        and 10), there are many different versions/distributions
                        of Linux.
                      </p>
                    </li>
                  </ul>
                    <p className="question">
                      What year was the first release of a Linux operating
                      system?
                    </p>
                  <form action="">
                    <input
                      type="text"
                      name="answer"
                      placeholder="Answer Format: **********"
                    />
                    <button>
                      <i class="fa-regular fa-paper-plane"></i>Submit
                    </button>
                  </form>
                </dd>
                <dt>
                  <span>Task 2</span> Interacting With Your First Linux Machine (In-Browser)
                </dt>
                <dd className="fadeInUp faq-body-Linux">
                  <ul>
                    <li>
                      <h2>Where is Linux Used?</h2>
                      <p>
                        It's fair to say that Linux is a lot more intimidating
                        to approach than Operating System's (OSs) such as
                        Windows. Both variants have their own advantages and
                        disadvantages. For example, Linux is considerably much
                        more lightweight and you'd be surprised to know that
                        there's a good chance you've used Linux in some form or
                        another every day! Linux powers things such as:
                      </p>
                      <ol>
                        <li>Websites that you visit</li>
                        <li>Car entertainment/control panels</li>
                        <li>
                          Point of Sale (PoS) systems such as checkout tills and
                          registers in shops
                        </li>
                        <li>
                          Critical infrastructures such as traffic light
                          controllers or industrial sensors
                        </li>
                      </ol>
                    </li>
                    <li>
                      <h2>Flavours Of Linux</h2>
                      <p>
                        The name "Linux" is actually an umbrella term for
                        multiple OS's that are based on UNIX (another operating
                        system). Thanks to Linux being open-source, variants of
                        Linux come in all shapes and sizes - suited best for
                        what the system is being used for.
                      </p>
                      <p>
                        For example, Ubuntu & Debian are some of the more
                        commonplace distributions of Linux because it is so
                        extensible. I.e. you can run Ubuntu as a server (such as
                        websites & web applications) or as a fully-fledged
                        desktop. For this series, we're going to be using
                        Ubuntu.
                      </p>
                      <p>
                        Similar to how you have different versions Windows (7, 8
                        and 10), there are many different versions/distributions
                        of Linux.
                      </p>
                    </li>
                  </ul>
                    <p className="question">
                      What year was the first release of a Linux operating
                      system?
                    </p>
                  <form action="">
                    <input
                      type="text"
                      name="answer"
                      placeholder="Answer Format: **********"
                    />
                    <button>
                      <i class="fa-regular fa-paper-plane"></i>Submit
                    </button>
                  </form>
                </dd>
              </dl>
            </div>
            <div className="go-to-section-Linux">
              <Link to="/linux/linux_lab" className="go-to-Linux">
                Go To Lab
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* End Course Content  */}
      <Footer />
    </>
  );
}
