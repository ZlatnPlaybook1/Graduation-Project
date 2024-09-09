import React from "react";
import "./ourfeature.css";
import image from "../assets/img/icons/w4.png";
import image2 from "../assets/img/svg/bg-home-bubble.svg";
import image3 from "../assets/img/icons/w6.png";
import image4 from "../assets/img/icons/w5.png";
import image5 from "../assets/img/icons/i1.png";
import image6 from "../assets/img/icons/i2.png";
import image7 from "../assets/img/icons/i3.png";
import image8 from "../assets/img/icons/i4.png";
import image9 from "../assets/img/core-img/appo.png";
import image10 from "../assets/img/core-img/about-11.png";
import image11 from "../assets/img/core-img/about-12.png";
import image12 from "../assets/img/core-img/dotted1.svg";
import image13 from "../assets/img/core-img/map.png";
export default function OurFeature() {
  return (
    <>
      {/* Start Features */}
      <div className="features section">
        <div className="container">
          <div className="row">
            <div className="section-row">
              <div className="text">
                <h2 className="section-header first-header">Our Features</h2>
                <h2 className="second-header">Why Choose Us</h2>
                <p className="feature-body">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos
                  perferendis nostrum officiis molestias tenetur placeat quam.
                </p>
              </div>
            </div>
            <div className="feature-section">
              <div className="feature-card">
                <img
                  src={image}
                  alt="Creative Security Solutions"
                  style={{ width: "200px", height: "200px" }}
                />
                <h2>Creative Security Solutions</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Repellendus commodi, omnis neque vitae molestiae ex
                </p>
                <img src={image2} className="before" alt="" />
                <img src={image2} className="after" alt="" />
              </div>
              <div className="feature-card">
                <img
                  src={image4}
                  alt="Fast & New Equipment"
                  style={{ width: "200px", height: "200px" }}
                />
                <h2>Fast & New Equipment</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Repellendus commodi, omnis neque vitae molestiae ex
                </p>
                <img src={image2} className="before" alt="" />
                <img src={image2} className="after" alt="" />
              </div>
              <div className="feature-card">
                <img
                  src={image3}
                  alt="Dedicated Support Team"
                  style={{ width: "200px", height: "200px" }}
                />
                <h2>Dedicated Support Team</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Repellendus commodi, omnis neque vitae molestiae ex
                </p>
                <img src={image2} className="before" alt="" />
                <img src={image2} className="after" alt="" />
              </div>
            </div>
          </div>
          <div className="our-features-text section">
            <div className="row">
              <div className="text">
                <div className="feature-text">
                  <img src={image5} alt="" />
                  <div>
                    <h3>Choose Your Security Package</h3>
                    <p>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Esse, vel explicabo, dicta quidem minima repudiandae iure
                      ea distinctio ratione, accusamus labore quibusdam rem at
                      provident earum qui .
                    </p>
                  </div>
                </div>
                <div className="feature-text">
                  <img src={image6} alt="" />
                  <div>
                    <h3>Enter Your Information Details</h3>
                    <p>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Esse, vel explicabo, dicta quidem minima repudiandae iure
                      ea distinctio ratione, accusamus labore quibusdam rem at
                      provident earum qui .
                    </p>
                  </div>
                </div>
                <div className="feature-text">
                  <img src={image7} alt="" />
                  <div>
                    <h3>Get Prepared For Security Test</h3>
                    <p>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Esse, vel explicabo, dicta quidem minima repudiandae iure
                      ea distinctio ratione, accusamus labore quibusdam rem at
                      provident earum qui .
                    </p>
                  </div>
                </div>
                <div className="feature-text">
                  <img src={image8} alt="" />
                  <div>
                    <h3>Totally Secure From Cyber Attacks</h3>
                    <p>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Esse, vel explicabo, dicta quidem minima repudiandae iure
                      ea distinctio ratione, accusamus labore quibusdam rem at
                      provident earum qui .
                    </p>
                  </div>
                </div>
              </div>
              <div className="image">
                <img
                  src={image9}
                  alt=""
                  style={{ width: "560px", height: "500px" }}
                  className="resized-image"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="reliable-it section">
          <div className="container">
            <div className="row">
              <div className="images">
                <img className="abso-img1" src={image10} alt="" />
                <img
                  className="wow abso-img2 fadeInUp floating"
                  src={image11}
                  alt=""
                />
                <img className="abso-img3" src={image12} alt="" />
              </div>
              <div className="text">
                <div className="text-header section-header">
                  <span>Reliable IT & Cyber Security Company</span>
                </div>
                <h4 className="text-body">
                  All IT and Cyber Security Services You Expect With Top IT
                  Experts
                </h4>
                <p className="text-footer">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Suscipit eum illum tempora? Ducimus eum culpa voluptates
                  dolorem dolorum et sit nisi, mollitia animi porro fuga sequi,
                  molestias repellat excepturi nobis eum culpa voluptates
                  dolorem dolorum et.
                </p>
                <div className="services-card">
                  <i className="fa fa-check services-icon"></i>
                  <h3>
                    <a href="#">
                      Affordable Security Packages & Detailed Results
                    </a>
                  </h3>
                  <p className="services-text">
                    Lorem ipsum dolor sit amet, conse ctetur dolor adipisicing
                    elit alias officia aperiam.
                  </p>
                </div>
                <div className="services-card">
                  <i className="fa fa-check services-icon"></i>
                  <h3>
                    <a href="#">Brings More Transparency And Speed</a>
                  </h3>
                  <p className="services-text">
                    Lorem ipsum dolor sit amet, conse ctetur dolor adipisicing
                    elit alias officia aperiam.
                  </p>
                </div>
                <div className="services-card">
                  <i className="fa fa-check services-icon"></i>
                  <h3>
                    <a href="#">Best Networking & Security Solutions</a>
                  </h3>
                  <p className="services-text">
                    Lorem ipsum dolor sit amet, conse ctetur dolor adipisicing
                    elit alias officia aperiam.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Features */}

      {/* Start Growth Section */}
      <div className="growth section">
        <div className="container">
          <div className="section-row">
            <div className="text">
              <h2 className="section-header">Our Expected Growth</h2>
              <h2 className="second-header">Our Global Growth</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis
                dicta eius, aliquam similique est totam, laudantium vel error
                dolore, harum iste soluta odio.
              </p>
            </div>
          </div>
          <div className="growth-section">
            <div className="growth-text">
              <div className="growth-card">
                <h3>Fully Encrypted</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
              </div>
              <div className="growth-card">
                <h3>Safe And Secure</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
              </div>
            </div>
            <div className="growth-image">
              <img src={image13} alt="Growth Map" />
            </div>
            <div className="growth-text">
              <div className="growth-card">
                <h3>24/7 Services</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
              </div>
              <div className="growth-card">
                <h3>Strong FireWalls</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Growth Section */}
    </>
  );
}
