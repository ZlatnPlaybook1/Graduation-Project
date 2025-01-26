import React from "react";
import { useEffect, useRef } from "react";
import $ from "jquery";
import "../Page_Styles/Content.css";
import Header from "../../Header/Header";
// import background from "../../assets/img/background.png";
import image from "../../assets/img/Obfuscation/course_image.png";
import { Link } from "react-router-dom";
import Footer from "../../Footer/Footer";
import exampleImage1 from "../../assets/img/Cryptography/1.png";
import exampleImage2 from "../../assets/img/Cryptography/2.png";




export default function CryptoGraphy() {
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
      <div className="landing">
        <div className="banner">
          {/* <img src={background} alt="bacground" /> */}
        </div>
        <div className="container">
          <div className="breadcrumb">
            <ul>
              <li>
                <Link to="">Home</Link>
              </li>
              <li>
                <Link to="">Obfuscation</Link>
              </li>
              {/* <li>
                <span className="active-breadcrumb">
                  Intro To Offensive Security
                </span>
              </li> */}
            </ul>
          </div>
          <div className="course-info">
            <img src={image} alt="logo" />
            <div className="course-text">
              <h1>Obfuscation</h1>
              <p>
              Master the basics of obfuscation, a powerful technique for securing code and protecting intellectual property in cybersecurity environments.
              </p>
              <div className="course-icons">
                <div className="diff">
                  <div className="easy">
                    <i className="fa-solid fa-signal"></i>
                    <p>Easy</p>
                  </div>
                </div>
                <div className="duration">
                  <i className="fa-solid fa-clock"></i>
                  <p className="time">50 min</p>
                </div>
              </div>
            </div>
          </div>
          <div className="options">
            <button>
              <i className="far fa-bookmark"></i>
              <p>Save Room</p>
            </button>
            <div className="like">
              <button>
                <i className="fas fa-thumbs-up"></i>
                <p></p>
              </button>
              <button>
                <i className="fas fa-thumbs-down"></i>
                <p></p>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* End Landing  */}
      {/* Start Course Content  */}
      <div className="course">
        <div className="container" ref={faqSectionRef}>
          <div className="row">
            <div className="faq-section">
              <dl className="section-text">
                {/* Single FAQ Area  */}
                <dt className="wave fadeInUp faq-header">
                  <span>step 1</span> Introduction to Cryptography</dt>
                <dd className="fadeInUp faq-body">
                  <h1>Welcome to  Introduction to Cryptography</h1>
                  <br></br>
                  <h2>What will you learn?</h2>
                  <ol>
                    <li>What is Cryptography?</li>
                    <li>The Role of Cryptography in Information Security </li>
                    <li> What is Steganography?</li>
                    <li>How does Steganography differ from Cryptography?</li>
                    <li>Steganography Techniques</li>
                    <li>Best Tools to Perform Steganography</li>
                  </ol>
                </dd>



                <dt className="wave fadeInUp faq-header">
                  <span> step 2</span> What is Cryptography?</dt>
                  <dd className="fadeInUp faq-body">
                <p><br></br></p>
                <h1>What is Cryptography?</h1>
                <h4>Cryptography? </h4>
                <p>Cryptography refers almost exclusively to encryption, the process of converting ordinary information (plaintext) into ciphertext. Decryption is the reverse, moving from unintelligible ciphertext to plaintext.</p>
                <br></br>
                <img src={exampleImage1} alt="Example" />
                <br></br>
                <h4>The Role of Cryptography in Information Security</h4>
                <p>Cryptography can be used to achieve several goals of information security, including confidentiality, integrity, and authentication. Integrity:</p>
                <p>Cryptography can also be used to ensure the integrity (or accuracy) of information through the use of hashing algorithms and message digests.</p>
                <p>Confidentiality : only targeted people would be able to receive data </p>
                <p>Integrity : we should keep data safe without modification (storage or transmission)</p>
                <p>Authentication : we able to decide who is the current user.</p>
                <br></br>   
            </dd> 




            <dt className="wave fadeInUp faq-header">
                  <span> step 3</span> What is Steganography? </dt>
                  <dd className="fadeInUp faq-body">
                <br></br>
                <h1>What is Steganography?</h1>
                <p>Steganography is the art and science of embedding secret messages in a cover message in such a way that, no one apart from the sender and intended recipient, suspects the existence of the message.</p>
                <p>The diagram below represents a basic steganographic model. </p>
                <br></br>
                <img src={exampleImage2} alt="Example" />
                <br></br>
                <h4>How does Steganography differ from Cryptography?</h4>
                <p>Both of them have almost the same aim which is to protect a third-party message or information. They do, however, use a completely different mechanism to protect the information.</p>
                <p>Cryptography changes the ciphertext information which can not be understood without a decryption key. And if someone intercepted this encrypted message they could easily see that some sort of encryption had been applied. </p>
                <p>Steganography, on the other hand, does not alter the information format, so it conceals the message's existence.</p>
                <br></br>
                <h4>Steganography Techniques</h4>
                <ol>
                    <li>Image Steganography</li>
                    <li>Audio Steganography</li>
                </ol>
                <br></br>
                <h4>Image Steganography</h4>
                <p>Hiding the data is known as image steganography, by taking the cover object as the background.</p>
                <br></br>
                <p>In digital steganography, images are widely used as cover sources, because the digital representation of an image contains a huge number of bits. There are several ways of hiding the data within an image. </p>
                <br></br>
                <h4>Popular approaches involve:</h4>
                <ol>
                    <li>Least Significant Bit Insertion</li>
                    <li>Masking and Filtering</li>
                    <li>Redundant Pattern Encoding</li>
                    <li>Encrypt and Scatter</li>
                </ol>
                <br></br>
                <h3>Audio Steganography</h3>
                <p>In audio steganography, the secret message is embedded into an audio signal which alters the binary sequence of the corresponding audio file. </p>
                <p>Hiding secret messages in digital sound is a much more difficult process when compared to others, such as Image Steganography. </p>
                <br></br>
                <h4>Different methods of audio steganography include:</h4>
                <ol>
                    <li>Least Significant Bit Encoding</li>
                    <li>Parity Encoding</li>
                    <li>Phase Coding</li>
                    <li>Spread Spectrum</li>
                </ol>
                <br></br>
                <h4>Best Tools to Perform Steganography</h4>
                <p>There are many software available that offer steganography.  Some offer normal steganography, but a few offer encryption before hiding the data. </p>
                <br></br>
                <h4>These are the steganography tools that are available for free:</h4>
                <p>Stegsolve : Interactively transforms images, and views color schemes separately</p>
                <p>SonicVisualiser Visualizing audio files in a waveform, display spectrograms</p>
                <p>DeepSound Audio stego tool that was used in Mr. Robot series. Windows tool but could be run in wine.</p>
                <p>Steghide tool to encrypt and hide data.</p>
                <br></br>
                </dd> 

              
                {/* 
            # main slider

            <dt className="wave fadeInUp faq-header">
                  <span> step 2</span> What are Obfuscation & Deobfuscation ?</dt>
                  <dd className="fadeInUp faq-body">
                <p><br></br></p>


            </dd> 
            
            */}
              </dl>
            </div>
            <div className="go-to-section">
              <Link to="/obfuscation/obfuscation_lab" className="go-to">
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
