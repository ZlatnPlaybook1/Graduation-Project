import React from "react";
import { useEffect, useRef } from "react";
import $ from "jquery";
import "./Cookies.css";
import Header from "../../Header/Header";
import background from "../../assets/img/cookies/baner_lap.png";
import image from "../../assets/img/course_image.png";
import inLab3 from "../../assets/img/inLab3.png";
import { Link } from "react-router-dom";
import Footer from "../../Footer/Footer";


export default function Cookies() {
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
      <div className="landing-lab3">
        <div className="banner-lab3">
          <img src={background} alt="bacground" />
        </div>
        <div className="container-lab3">
          <div className="breadcrumb-lab3">
            <ul>
              <li>
                <Link to="">Pre Security</Link>
              </li>
              <li>
                <Link to="">Introduction To Cyber Security</Link>
              </li>
              <li>
                <span className="active-breadcrumb-lab3">
                  Intro To Offensive Security
                </span>
              </li>
            </ul>
          </div>
          <div className="course-info-lab3">
            <img src={image} alt="logo" />
            <div className="course-text-lab3">
              <h1>Cookies</h1>
              <p>
                Hack your first website (legally in a safe environment) and
                experience an ethical hacker's job.
              </p>
              <div className="course-icons-lab3">
                <div className="diff-lab3">
                  <div className="easy-lab3">
                    <i className="fa-solid fa-signal for-lab3"></i>
                    <p>Easy</p>
                  </div>
                </div>
                <div className="duration-lab3">
                  <i className="fa-solid fa-clock for-lab3"></i>
                  <p className="time">15 min</p>
                </div>
              </div>
            </div>
          </div>
          <div className="options-lab3">
            <button>
              <i className="far fa-bookmark for-lab3"></i>
              <p>Save Room</p>
            </button>
            <div className="like-lab3">
              <button>
                <i className="fas fa-thumbs-up for-lab3"></i>
                <p></p>
              </button>
              <button>
                <i className="fas fa-thumbs-down for-lab3"></i>
                <p></p>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* End Landing  */}
      {/* Start Course Content  */}
      <div className="course-lab3">
        <div className="container-lab3" ref={faqSectionRef}>
          <div className="row-lab3">
            <div className="faq-section-lab3">
              <dl className="section-text-lab3">
                {/* Single FAQ Area  */}
                <dt className="wave-lab3 fadeInUp faq-header-lab3">
                  <span>Task 1</span> What Are Cookies?
                </dt>
                <dd className="fadeInUp faq-body-lab3">
                <ul>
                                <li>
                                    <p>Cookies are data that browsers store in small text files on your computer.</p>
                                </li>
                                <li>
                                    <p>Cookies were invented to solve the problem of "how to remember information about
                                        the user?".</p>
                                </li>
                                <li>
                                    <p>When you sign in to a web application like Cyberlabs, you won’t need to type your
                                        email and password again next time because it stores your credentials in the
                                        cookies.</p>
                                </li>
                                <li>
                                    <p>Cookies are saved in name-value pairs like:</p>
                                </li>
                                <pre><code>
                                        <span>usersname = user</span>
                                    </code></pre>
                                <li>When a browser requests a web page from a server, cookies belonging to the page are
                                    added to the request. This way the server gets the necessary data to "remember"
                                    information about users.</li>
                            </ul>
                  {/* <form action="">
                                <input type="text" name="answer" placeholder="Answer Format: **********">
                                <button><i class="fa-regular fa-paper-plane"></i>Submit</button>
                            </form>  */}
                </dd>
                {/* Single FAQ Area  */}
                <dt className="wave-lab3 fadeInUp faq-header-lab3">
                  <span>Task 2</span>What are Cookies Used For?
                </dt>
                <dd className="faq-body-lab3">
                <ul>
                                <li>
                                    <h2>Session Management:</h2> Cookies store things like items in your shopping
                                    cart or your language preference, so you don’t have to re enter this
                                    information each time you visit. Cookies let websites allow users and
                                    recollect their individual login information and preferences.
                                </li>
                                <li>
                                    <h2>Tracking:</h2> Advertisers use cookies to track your browsing habits and
                                    show you ads that are relevant to you based on the sites you visit.
                                    E Commerce sites also use cookies to track items users had previously
                                    viewed allowing the sites to suggest other goods in which you are
                                    interested.
                                </li>
                                <li>
                                    <h2>Personalization:</h2> They allow websites to show you content that
                                    matches your interests, like suggesting videos or products similar to
                                    what you’ve viewed before. It is customized advertising which is the
                                    main way cookies are used to personalize your sessions.
                                </li>
                                <li>
                                    <h2>Keeping You Logged In:</h2> : Cookies remember your login details, so you
                                    don’t need to enter your username and password every time you visit
                                    a website.
                                </li>
                                <img src={inLab3} alt="" />
                            </ul>
                </dd>
                {/* Single FAQ Area  */}
                <dt className="wave-lab3 fadeInUp faq-header-lab3">
                  <span>Task 3</span>Where are Cookies Stored?
                </dt>
                <dd className="faq-body-lab3">
                <ul>
                                <li>Cookies are stored on your device in special folders or files
                                    within your web browser. Here’s where they can typically be
                                    found:</li>
                                <ol>
                                    <li><span>On Your Computer or Device: </span>Cookies are stored as small text
                                        files on your hard drive or in your device’s storage.</li>
                                    <li><span>In Your Web Browser: </span>Each browser (like Chrome, Firefox, or
                                        Safari) has its own way of storing cookies. They keep cookies
                                        in a specific location within the browser’s data storage.</li>
                                    <li><span>In the Browser’s Data Folder: </span>For instance, in Chrome, cookies
                                        are kept in the “ file located in the browser’s profile
                                        directory, while Firefox uses a database file called
                                        cookies.sqlite.</li>
                                </ol>
                            </ul>
                </dd>
                {/* Single FAQ Area  */}
                <dt className="wave fadeInUp faq-header-lab3">
                  <span>Task 4</span>Cookies Manipulation
                </dt>
                <dd className="faq-body-lab3">
                <ul>
                                <li>
                                    <h2>Create a Cookie With JavaScript:</h2>
                                </li>
                                <li>JavaScript can create, read, and delete cookies with the document.cookie
                                    property</li>
                                <li>With JavaScript, a cookie can be created like this</li>
                                <pre><code>
                                    <span>document.cookie="username= user";</span>
                                </code></pre>
                                <li>You can also add an expiry date (in UTC time). By default, the cookie is
                                    deleted when the browser is closed</li>
                                <pre><code>
                                        <span>document.cookie = "username=user; expires=Thu, 18 Dec 2013 12:00:00 UTC";</span>
                                    </code></pre>
                                <li>With a path parameter, you can tell the browser what path the cookie
                                    belongs to. By default, the cookie belongs to the current page</li>
                                <pre><code>
                                            <span>document.cookie = "username=user; expires=Thu, 18 Dec 2013 12:00:00 UTC; path=/";</span>
                                        </code></pre>
                                <li>
                                    <h2>Read a Cookie With JavaScript:</h2>
                                </li>
                                <li>With JavaScript, cookies can be read like this</li>
                                <pre><code>
                                            <span>var x = document.cookie;</span>
                                        </code></pre>
                                <li>
                                    <h2>Change a Cookie With JavaScript:</h2>
                                </li>
                                <li>With JavaScript, you can change a cookie the same way as you create it</li>
                                <pre><code>
                                            <span>document.cookie = "username= test ; expires=Thu, 18 Aug 2020 12:00:00 UTC; path=/";</span>
                                        </code></pre>
                                <li>
                                    <h2>Delete a Cookie With JavaScript:</h2>
                                </li>
                                <li>Deleting a cookie is very simple. You don't have to specify a cookie value
                                    when you delete a cookie. Just set the expires parameter to a passed date:</li>
                                <pre><code>
                                            <span>document.cookie = "username=test; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";</span>
                                        </code></pre>
                                <li>
                                    <h2>A Function to Set a Cookie:</h2>
                                </li>
                                <li>First, we create a <span>function</span> that stores the name of the visitor in a
                                    cookie variable:</li>
                                <pre><code>
                                            <span>function setCookie(cname, cvalue, exdays) {"{"}</span>
                                            <span>var d = new Date();</span>
                                            <span>d.setTime(d.getTime() + (exdays*24*60*60*1000));</span>
                                            <span>var expires = "expires="+ d.toUTCString();</span>
                                            <span>document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";</span>
                                            <span>{"}"}</span>
                                        </code></pre>
                            </ul>
                </dd>
              </dl>
            </div>
            <div className="go-to-section-lab3">
              <Link to="/cookies/cookies_lab" className="go-to-lab3">
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
