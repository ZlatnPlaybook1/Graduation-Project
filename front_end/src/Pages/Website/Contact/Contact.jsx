// Contact.jsx
import React from "react";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaTwitter,
  FaFacebookF,
  FaYoutube,
} from "react-icons/fa";

const ContactDetails = () => {
  const contactInfo = [
    {
      icon: <FaMapMarkerAlt />,
      label: "My office:",
      value: "123 Street, New York, USA",
    },
    {
      icon: <FaPhone />,
      label: "Call me:",
      value: "+012 345 6789",
    },
    {
      icon: <FaEnvelope />,
      label: "Mail me:",
      value: "info@example.com",
    },
  ];

  const socialMediaIcons = [
    <FaTwitter key="twitter" />,
    <FaFacebookF key="facebook" />,
    <FaYoutube key="youtube" />,
  ];

  return (
    <div className="col-lg-5 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
      {contactInfo.map((info, index) => (
        <React.Fragment key={index}>
          <p className="mb-2">{info.label}</p>
          <h3 className="fw-bold">
            {info.icon} {info.value}
          </h3>
          <hr className="w-100" />
        </React.Fragment>
      ))}
      <p className="mb-2">Follow me:</p>
      <div className="d-flex pt-2">
        {socialMediaIcons.map((icon, index) => (
          <a key={index} className="btn btn-square btn-primary me-2" href="">
            {icon}
          </a>
        ))}
      </div>
    </div>
  );
};

const Form = () => {
  return (
    <div className="col-lg-7 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
      <p className="mb-4">
        The contact form is currently inactive. Get a functional and working
        contact form with Ajax &amp; PHP in a few minutes. Just copy and paste
        the files, add a little code and you&apos;re done.{" "}
        <a href="https://htmlcodex.com/contact-form">Download Now</a>.
      </p>
      <form>
        <div className="row g-3">
          <div className="col-md-6">
            <div className="form-floating">
              <input
                type="text"
                className="form-control"
                id="firstName"
                placeholder="Your First Name"
                required
              />
              <label htmlFor="firstName">Your First Name</label>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-floating">
              <input
                type="text"
                className="form-control"
                id="lastName"
                placeholder="Your Last Name"
                required
              />
              <label htmlFor="lastName">Your Last Name</label>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-floating">
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Your Email"
                required
              />
              <label htmlFor="email">Your Email</label>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-floating">
              <input
                type="tel"
                className="form-control"
                id="phone"
                placeholder="Your Phone Number"
                required
              />
              <label htmlFor="phone">Your Phone Number</label>
            </div>
          </div>
          <div className="col-12">
            <div className="form-floating">
              <input
                type="text"
                className="form-control"
                id="subject"
                placeholder="Subject"
                required
              />
              <label htmlFor="subject">Subject</label>
            </div>
          </div>
          <div className="col-12">
            <div className="form-floating">
              <textarea
                className="form-control"
                placeholder="Leave a message here"
                id="message"
                style={{ height: 100 }}
                required
              />
              <label htmlFor="message">Message</label>
            </div>
          </div>
          <div className="col-12">
            <button className="btn btn-primary py-3 px-5" type="submit">
              Send Message
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

const Contact = () => {
  return (
    <div>
      <div className="container-xxl pb-5" id="contact">
        <div className="container py-5">
          <div className="row g-5 mb-5 wow fadeInUp" data-wow-delay="0.1s">
            <div className="col-lg-6">
              <h1 className="display-5 mb-0">Let&apos;s Work Together</h1>
            </div>
            <div className="col-lg-6 text-lg-end">
              <a className="btn btn-primary py-3 px-5" href="">
                Say Hello
              </a>
            </div>
          </div>
          <div className="row g-5">
            <ContactDetails />
            <Form />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
