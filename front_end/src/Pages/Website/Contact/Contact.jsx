import React from "react";
import Header from "../Header/HeaderHome";
import Footer from "../Footer/FooterHome";
import phoneIcon from "./icon-phone-accent.svg";
import mailIcon from "./icon-mail-accent.svg";
import locationIcon from "./icon-location.svg";
import "./Contact.css";

const Contact = () => {
  return (
    <>
      <Header />
      <div className="page-header parallaxie">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <div className="page-header-box">
                <h1>Contact us</h1>
                <nav>
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="/">home</a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      contact us
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="page-contact-us">
        <div className="container">
          <div className="row section-row">
            <div className="col-lg-12">
              <div className="section-title">
                <h3>contact us</h3>
                <h2>
                  Do you have questions? <span>ask us anytime</span>
                </h2>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12">
              <div className="page-contact-box parallaxie">
                <div className="contact-info-list">
                  <div className="contact-info-item">
                    <div className="icon-box">
                      <img src={phoneIcon} alt="Phone Icon" />
                    </div>
                    <div className="contact-info-content">
                      <h3>contact us</h3>
                      <p>
                        <a href="tel:+91123456789">+20 127 894 3656</a>
                      </p>
                      <p>
                        <a href="tel:+91123456789">+15 557 265 387</a>
                      </p>
                    </div>
                  </div>

                  <div className="contact-info-item">
                    <div className="icon-box">
                      <img src={mailIcon} alt="Mail Icon" />
                    </div>
                    <div className="contact-info-content">
                      <h3>e-mail us</h3>
                      <p>
                        <a href="mailto:infodomainname@gmail.com">
                          as4349124@gmail.com
                        </a>
                      </p>
                      <p>
                        <a href="mailto:domainname@gmail.com">
                          as43491241@gmail.com
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="contact-info-item">
                    <div className="icon-box">
                      <img src={locationIcon} alt="Location Icon" />
                    </div>
                    <div className="contact-info-content">
                      <h3>our location</h3>
                      <p>12345 Unity Avenue Suite 100 Springfield, USA 54321</p>
                    </div>
                  </div>
                </div>

                <div className="contact-us-form">
                  <div className="section-title dark-section">
                    <h2>Get in touch with us</h2>
                  </div>

                  <div className="member-contact-form contact-form">
                    <form id="contactForm" action="#" method="POST">
                      <div className="row">
                        <div className="form-group col-md-6 mb-4">
                          <input
                            type="text"
                            name="fname"
                            className="form-control"
                            placeholder="First name"
                            required
                          />
                        </div>

                        <div className="form-group col-md-6 mb-4">
                          <input
                            type="text"
                            name="lname"
                            className="form-control"
                            placeholder="Last name"
                            required
                          />
                        </div>

                        <div className="form-group col-md-6 mb-4">
                          <input
                            type="text"
                            name="phone"
                            className="form-control"
                            placeholder="Enter Your Phone No."
                            required
                          />
                        </div>

                        <div className="form-group col-md-6 mb-4">
                          <input
                            type="email"
                            name="email"
                            className="form-control"
                            placeholder="Enter Your E-mail"
                            required
                          />
                        </div>

                        <div className="form-group col-md-12 mb-5">
                          <textarea
                            name="message"
                            className="form-control"
                            rows="4"
                            placeholder="Write Message"
                          ></textarea>
                        </div>

                        <div className="col-md-12">
                          <button
                            type="submit"
                            className="btn-default btn-highlighted"
                          >
                            <span>submit message</span>
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="google-map">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <div className="google-map-iframe">
                <iframe
                  title="Google Map Location"
                  src="https://www.google.com/maps/embed?..."
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
