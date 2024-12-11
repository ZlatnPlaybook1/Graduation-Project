import React from "react";
import "./Courses.css";
import imagecourse from "../assets/img/course_image_home.png";
import Sql_InjectionImg from "../assets/img/SQL_Injection/landing3.png";
import Cross_Site_ScriptingImg from "../assets/img/Cross_Site_Scripting/xss.jpeg.jpg";
import imagecourse2 from "../assets/img/Lab2.jpg";
import bash from "../assets/img/bash/bash_course_logo.png";
import linux_logo from "../assets/img/linux/linux_logo.png";
import Cookies_logo from "../assets/img/cookies/Cookies_transparent.png";
import Obfuscation from "../assets/img/Obfuscation/card_image.png";
import unrestrictedFile from "../assets/img/Unrestricted File Upload/card_image.png";
import acvulnimg from "../assets/img/ACV/landing.jpeg";
import CSRFImg from "../assets/img/CSRF/landing.jpg";
import blvImg from "../assets/img/BLV/landing.avif";
import regexImg from "../assets/img/Regex/landing.jpeg";
import infoDiscImg from "../assets/img/InfoDisc/landing.jpg";
import AudForImg from "../assets/img/AudFor/landing.png";
import IDOR from "../assets/img/IDOR/Insecure_Direct_Object_Reference.png";
const Courses = () => {
  return (
    <div className="course">
      <div className="container">
        <h2>Learning Paths</h2>
        <p className="section-p">
          Work your way through a structured learning path
        </p>
        <div className="row-center">
          <div className="row-course">
            <a href="/sql_Injection" className="course-card">
              <div className="course-image">
                <img src={Sql_InjectionImg} alt="Course" />
              </div>
              {/* topic1 */}
              <div className="course-text">
                <h3>SQL Injection</h3>
                <p>
                  Learn how attackers exploit vulnerabilities in web
                  applications using SQL injection and understand the techniques
                  to detect and prevent them.
                </p>
                <ul className="circled-order">
                  <li>Retrieving hidden data</li>
                  <li>SQL injection UNION attacks</li>
                  <li> Finding columns with a useful data type</li>
                  <li>
                    Using a SQL injection UNION attack to retrieve interesting
                    data
                  </li>
                </ul>
              </div>
            </a>
          </div>
          <div className="row-course">
            <a href="/xss" className="course-card">
              <div className="course-image">
                <img src={Cross_Site_ScriptingImg} alt="Course" />
              </div>
              {/* topic2 */}
              <div className="course-text">
                <h3>Cross-Site Scripting</h3>
                <p>
                  Learn the core skills required to start a career in cyber
                  security
                </p>
                <ul className="circled-order">
                  <li>Learn about different careers in cyber</li>
                  <li>Hack your first application</li>
                  <li>Defend against a live cyber attack</li>
                  <li>Explore security topics in the industry</li>
                </ul>
              </div>
              <div className="easy">
                <i className="fa-solid fa-signal"></i>
                <p>Easy</p>
              </div>
            </a>
          </div>
          <div className="row-course">
            <a href="/cookies" className="course-card">
              <div className="course-image">
                <img src={Cookies_logo} alt="Course" />
              </div>
              {/* topic3 */}
              <div className="course-text">
                <h3>Cookies</h3>
                <p>
                  Understand the role of cookies in web security, how they are
                  used, and the potential privacy concerns they introduce.
                </p>
                <ul className="circled-order">
                  <li> What Are Cookies?</li>
                  <li>What are Cookies Used For?</li>
                  <li>Where are Cookies Stored?</li>
                  <li>Cookies Manipulation</li>
                </ul>
              </div>
              <div className="easy">
                <i className="fa-solid fa-signal"></i>
                <p>Easy</p>
              </div>
            </a>
          </div>
          <div className="row-course">
            <a href="/CSRF" className="course-card">
              <div className="course-image">
                <img src={CSRFImg} alt="Course" />
              </div>
              {/* topic4 */}
              <div className="course-text">
                <h3>Cross Site Request Forgery (CSRF)</h3>
                <p>
                  Before hacking something, you first need to understand the
                  basics
                </p>
                <ul className="circled-order">
                  <li>Cyber Security Basics</li>
                  <li>Networking Basics and Weaknesses</li>
                  <li>The Web And Common Attacks</li>
                  <li>Learn to Use The Linux OS</li>
                </ul>
              </div>
            </a>
          </div>
          <div className="row-course">
            <a href="/UnrestrictedFileUpload" className="course-card">
              <div className="course-image">
                <img src={unrestrictedFile} alt="Course" />
              </div>
              {/* topic5 */}
              <div className="course-text">
                <h3>Unrestricted File Upload</h3>
                <p>
                  Learn the core skills required to start a career in cyber
                  security
                </p>
                <ul className="circled-order">
                  <li>Learn about different careers in cyber</li>
                  <li>Hack your first application</li>
                  <li>Defend against a live cyber attack</li>
                  <li>Explore security topics in the industry</li>
                </ul>
              </div>
              <div className="easy">
                <i className="fa-solid fa-signal"></i>
                <p>Easy</p>
              </div>
            </a>
          </div>
          <div className="row-course">
            <a href="/linux" className="course-card">
              <div className="course-image">
                <img src={linux_logo} alt="Course" />
              </div>
              {/* topic6 */}
              <div className="course-text">
                <h3>Linux Fundamentals</h3>
                <p>
                  Build a solid foundation in Linux, the operating system at the
                  core of many cybersecurity tools and infrastructures.
                </p>
                <ul className="circled-order">
                  <li>Running Your First few Commands</li>
                  <li>Interacting With the Filesystem!</li>
                  <li>Searching for Files</li>
                  <li>An Introduction to Shell Operators</li>
                </ul>
              </div>
              <div className="easy">
                <i className="fa-solid fa-signal"></i>
                <p>Easy</p>
              </div>
            </a>
          </div>
          <div className="row-course">
            <a href="/Regex" className="course-card">
              <div className="course-image">
                <img src={regexImg} alt="Course" />
              </div>
              {/* topic 7 */}
              <div className="course-text">
                <h3>Regular expressions</h3>
                <p>
                  Before hacking something, you first need to understand the
                  basics
                </p>
                <ul className="circled-order">
                  <li>Cyber Security Basics</li>
                  <li>Networking Basics and Weaknesses</li>
                  <li>The Web And Common Attacks</li>
                  <li>Learn to Use The Linux OS</li>
                </ul>
              </div>
            </a>
          </div>
          <div className="row-course">
            <a href="/broken-auth" className="course-card">
              <div className="course-image">
                <img src={imagecourse2} alt="Course" />
              </div>
              {/* topic 8 */}
              <div className="course-text">
                <h3>Broken Authentication</h3>
                <p>
                  Learn the core skills required to start a career in cyber
                  security
                </p>
                <ul className="circled-order">
                  <li>Learn about different careers in cyber</li>
                  <li>Hack your first application</li>
                  <li>Defend against a live cyber attack</li>
                  <li>Explore security topics in the industry</li>
                </ul>
              </div>
              <div className="easy">
                <i className="fa-solid fa-signal"></i>
                <p>Easy</p>
              </div>
            </a>
          </div>
          <div className="row-course">
            <a href="/bash-scripting" className="course-card">
              <div className="course-image">
                <img src={bash} alt="Course" />
              </div>
              {/* topic 9 */}
              <div className="course-text">
                <h3>Bash Scripting</h3>
                <p>
                  Master the basics of Bash scripting, a powerful tool for
                  automating tasks and managing systems in cybersecurity
                  environments.
                </p>
                <ul className="circled-order">
                  <li>simple bash scripts</li>
                  <li>Variables</li>
                  <li>Parameters</li>
                  <li> Arrays</li>
                </ul>
              </div>
              <div className="easy">
                <i className="fa-solid fa-signal"></i>
                <p>Easy</p>
              </div>
            </a>
          </div>
          <div className="row-course">
            <a href="/AC_Vuln" className="course-card">
              <div className="course-image">
                <img src={acvulnimg} alt="Course" />
              </div>
              {/* topic 10 */}
              <div className="course-text">
                <h3>Access control vulnerabilities</h3>
                <p>
                  Before hacking something, you first need to understand the
                  basics
                </p>
                <ul className="circled-order">
                  <li>Cyber Security Basics</li>
                  <li>Networking Basics and Weaknesses</li>
                  <li>The Web And Common Attacks</li>
                  <li>Learn to Use The Linux OS</li>
                </ul>
              </div>
            </a>
          </div>
          <div className="row-course">
            <a
              href="/Insecure_Direct_Object_Reference(IDOR)"
              className="course-card"
            >
              <div className="course-image">
                <img src={IDOR} alt="Course" />
              </div>
              {/* topic 11 */}
              <div className="course-text">
                <h3>Insecure Direct Object Reference(IDOR)</h3>
                <p>
                  Learn the core skills required to start a career in cyber
                  security
                </p>
                <ul className="circled-order">
                  <li>Learn about different careers in cyber</li>
                  <li>Hack your first application</li>
                  <li>Defend against a live cyber attack</li>
                  <li>Explore security topics in the industry</li>
                </ul>
              </div>
              <div className="easy">
                <i className="fa-solid fa-signal"></i>
                <p>Easy</p>
              </div>
            </a>
          </div>
          <div className="row-course">
            <a href="/obfuscation" className="course-card">
              <div className="course-image">
                <img src={Obfuscation} alt="Course" />
              </div>
              {/* topic 12 */}
              <div className="course-text">
                <h3>Obfuscation</h3>
                <p>
                  Master the basics of obfuscation, a powerful technique for
                  securing code and protecting intellectual property in
                  cybersecurity environments
                </p>
                <ul className="circled-order">
                  <li>What are Obfuscation & Deobfuscation?</li>
                  <li>Why do we use Obfuscation?</li>
                  <li>Javascript Obfuscation</li>
                  <li>JS Deobfuscation Tools</li>
                </ul>
              </div>
              <div className="easy">
                <i className="fa-solid fa-signal"></i>
                <p>Easy</p>
              </div>
            </a>
          </div>
          <div className="row-course">
            <a href="/BL_Vuln" className="course-card">
              <div className="course-image">
                <img src={blvImg} alt="Course" />
              </div>
              {/* topic 13 */}
              <div className="course-text">
                <h3>Business logic vulnerabilities</h3>
                <p>
                  Before hacking something, you first need to understand the
                  basics
                </p>
                <ul className="circled-order">
                  <li>Cyber Security Basics</li>
                  <li>Networking Basics and Weaknesses</li>
                  <li>The Web And Common Attacks</li>
                  <li>Learn to Use The Linux OS</li>
                </ul>
              </div>
            </a>
          </div>
          <div className="row-course">
            <a href="/lab2" className="course-card">
              <div className="course-image">
                <img src={imagecourse2} alt="Course" />
              </div>
              {/* topic 14 */}
              <div className="course-text">
                <h3>XML External Entity Attack (XXE)</h3>
                <p>
                  Learn the core skills required to start a career in cyber
                  security
                </p>
                <ul className="circled-order">
                  <li>Learn about different careers in cyber</li>
                  <li>Hack your first application</li>
                  <li>Defend against a live cyber attack</li>
                  <li>Explore security topics in the industry</li>
                </ul>
              </div>
              <div className="easy">
                <i className="fa-solid fa-signal"></i>
                <p>Easy</p>
              </div>
            </a>
          </div>
          <div className="row-course">
            <a href="/lab3" className="course-card">
              <div className="course-image">
                <img src={imagecourse2} alt="Course" />
              </div>
              {/* topic 15 */}
              <div className="course-text">
                <h3>Insecure Direct Object Reference (IDOR)</h3>
                <p>
                  Learn the core skills required to start a career in cyber
                  security
                </p>
                <ul className="circled-order">
                  <li>Learn about different careers in cyber</li>
                  <li>Hack your first application</li>
                  <li>Defend against a live cyber attack</li>
                  <li>Explore security topics in the industry</li>
                </ul>
              </div>
              <div className="easy">
                <i className="fa-solid fa-signal"></i>
                <p>Easy</p>
              </div>
            </a>
          </div>
          <div className="row-course">
            <a href="/infoDisc" className="course-card">
              <div className="course-image">
                <img src={infoDiscImg} alt="Course" />
              </div>
              {/* topic 16 */}
              <div className="course-text">
                <h3>Information Disclosure</h3>
                <p>
                  Before hacking something, you first need to understand the
                  basics
                </p>
                <ul className="circled-order">
                  <li>Cyber Security Basics</li>
                  <li>Networking Basics and Weaknesses</li>
                  <li>The Web And Common Attacks</li>
                  <li>Learn to Use The Linux OS</li>
                </ul>
              </div>
            </a>
          </div>
          <div className="row-course">
            <a href="/lab2" className="course-card">
              <div className="course-image">
                <img src={imagecourse2} alt="Course" />
              </div>
              {/* topic 17 */}
              <div className="course-text">
                <h3>Burp Suite </h3>
                <p>
                  Learn the core skills required to start a career in cyber
                  security
                </p>
                <ul className="circled-order">
                  <li>Learn about different careers in cyber</li>
                  <li>Hack your first application</li>
                  <li>Defend against a live cyber attack</li>
                  <li>Explore security topics in the industry</li>
                </ul>
              </div>
              <div className="easy">
                <i className="fa-solid fa-signal"></i>
                <p>Easy</p>
              </div>
            </a>
          </div>
          <div className="row-course">
            <a href="/lab3" className="course-card">
              <div className="course-image">
                <img src={imagecourse2} alt="Course" />
              </div>
              {/* topic 18 */}
              <div className="course-text">
                <h3>wireshark</h3>
                <p>
                  Learn the core skills required to start a career in cyber
                  security
                </p>
                <ul className="circled-order">
                  <li>Learn about different careers in cyber</li>
                  <li>Hack your first application</li>
                  <li>Defend against a live cyber attack</li>
                  <li>Explore security topics in the industry</li>
                </ul>
              </div>
              <div className="easy">
                <i className="fa-solid fa-signal"></i>
                <p>Easy</p>
              </div>
            </a>
          </div>
          <div className="row-course">
            <a href="/AudFor" className="course-card">
              <div className="course-image">
                <img src={AudForImg} alt="Course" />
              </div>
              {/* topic 19 */}
              <div className="course-text">
                <h3>Audio Forensics</h3>
                <p>
                  Before hacking something, you first need to understand the
                  basics
                </p>
                <ul className="circled-order">
                  <li>Cyber Security Basics</li>
                  <li>Networking Basics and Weaknesses</li>
                  <li>The Web And Common Attacks</li>
                  <li>Learn to Use The Linux OS</li>
                </ul>
              </div>
            </a>
          </div>
          <div className="row-course">
            <a href="/lab2" className="course-card">
              <div className="course-image">
                <img src={imagecourse2} alt="Course" />
              </div>
              {/* topic 20 */}
              <div className="course-text">
                <h3>Command Injection</h3>
                <p>
                  Learn the core skills required to start a career in cyber
                  security
                </p>
                <ul className="circled-order">
                  <li>Learn about different careers in cyber</li>
                  <li>Hack your first application</li>
                  <li>Defend against a live cyber attack</li>
                  <li>Explore security topics in the industry</li>
                </ul>
              </div>
              <div className="easy">
                <i className="fa-solid fa-signal"></i>
                <p>Easy</p>
              </div>
            </a>
          </div>
          <div className="row-course">
            <a href="/lab3" className="course-card">
              <div className="course-image">
                <img src={imagecourse2} alt="Course" />
              </div>
              {/* topic 21 */}
              <div className="course-text">
                <h3>File Inclusion</h3>
                <p>
                  Learn the core skills required to start a career in cyber
                  security
                </p>
                <ul className="circled-order">
                  <li>Learn about different careers in cyber</li>
                  <li>Hack your first application</li>
                  <li>Defend against a live cyber attack</li>
                  <li>Explore security topics in the industry</li>
                </ul>
              </div>
              <div className="easy">
                <i className="fa-solid fa-signal"></i>
                <p>Easy</p>
              </div>
            </a>
          </div>
          <div className="row-course">
            <a href="/lab1" className="course-card">
              <div className="course-image">
                <img src={imagecourse} alt="Course" />
              </div>
              {/* topic 22 */}
              <div className="course-text">
                <h3>Unrestricted File Upload</h3>
                <p>
                  Before hacking something, you first need to understand the
                  basics
                </p>
                <ul className="circled-order">
                  <li>Cyber Security Basics</li>
                  <li>Networking Basics and Weaknesses</li>
                  <li>The Web And Common Attacks</li>
                  <li>Learn to Use The Linux OS</li>
                </ul>
              </div>
              <div className="easy">
                <i className="fa-solid fa-signal"></i>
                <p>Easy</p>
              </div>
            </a>
          </div>
          <div className="row-course">
            <a href="/lab2" className="course-card">
              <div className="course-image">
                <img src={imagecourse2} alt="Course" />
              </div>
              {/* topic 23 */}
              <div className="course-text">
                <h3>Insecure Deserialization</h3>
                <p>
                  Learn the core skills required to start a career in cyber
                  security
                </p>
                <ul className="circled-order">
                  <li>Learn about different careers in cyber</li>
                  <li>Hack your first application</li>
                  <li>Defend against a live cyber attack</li>
                  <li>Explore security topics in the industry</li>
                </ul>
              </div>
              <div className="easy">
                <i className="fa-solid fa-signal"></i>
                <p>Easy</p>
              </div>
            </a>
          </div>
          <div className="row-course">
            <a href="/lab3" className="course-card">
              <div className="course-image">
                <img src={imagecourse2} alt="Course" />
              </div>
              {/* topic 24 */}
              <div className="course-text">
                <h3>Server Side Template Injection (SSTI)</h3>
                <p>
                  Learn the core skills required to start a career in cyber
                  security
                </p>
                <ul className="circled-order">
                  <li>Learn about different careers in cyber</li>
                  <li>Hack your first application</li>
                  <li>Defend against a live cyber attack</li>
                  <li>Explore security topics in the industry</li>
                </ul>
              </div>
              <div className="easy">
                <i className="fa-solid fa-signal"></i>
                <p>Easy</p>
              </div>
            </a>
          </div>
          <div className="row-course">
            <a href="/lab1" className="course-card">
              <div className="course-image">
                <img src={imagecourse} alt="Course" />
              </div>
              {/* topic 25 */}
              <div className="course-text">
                <h3>API Hacking</h3>
                <p>
                  Before hacking something, you first need to understand the
                  basics
                </p>
                <ul className="circled-order">
                  <li>Cyber Security Basics</li>
                  <li>Networking Basics and Weaknesses</li>
                  <li>The Web And Common Attacks</li>
                  <li>Learn to Use The Linux OS</li>
                </ul>
              </div>
              <div className="easy">
                <i className="fa-solid fa-signal"></i>
                <p>Easy</p>
              </div>
            </a>
          </div>
          <div className="row-course">
            <a href="/lab2" className="course-card">
              <div className="course-image">
                <img src={imagecourse2} alt="Course" />
              </div>
              {/* topic 26 */}
              <div className="course-text">
                <h3>Path Traversal</h3>
                <p>
                  Learn the core skills required to start a career in cyber
                  security
                </p>
                <ul className="circled-order">
                  <li>Learn about different careers in cyber</li>
                  <li>Hack your first application</li>
                  <li>Defend against a live cyber attack</li>
                  <li>Explore security topics in the industry</li>
                </ul>
              </div>
              <div className="easy">
                <i className="fa-solid fa-signal"></i>
                <p>Easy</p>
              </div>
            </a>
          </div>
          <div className="row-course">
            <a href="/lab3" className="course-card">
              <div className="course-image">
                <img src={imagecourse2} alt="Course" />
              </div>
              {/* topic 27 */}
              <div className="course-text">
                <h3>Captcha Bypass</h3>
                <p>
                  Learn the core skills required to start a career in cyber
                  security
                </p>
                <ul className="circled-order">
                  <li>Learn about different careers in cyber</li>
                  <li>Hack your first application</li>
                  <li>Defend against a live cyber attack</li>
                  <li>Explore security topics in the industry</li>
                </ul>
              </div>
              <div className="easy">
                <i className="fa-solid fa-signal"></i>
                <p>Easy</p>
              </div>
            </a>
          </div>
          <div className="row-course">
            <a href="/lab1" className="course-card">
              <div className="course-image">
                <img src={imagecourse} alt="Course" />
              </div>
              {/* topic 28 */}
              <div className="course-text">
                <h3>28. </h3>
                <p>
                  Before hacking something, you first need to understand the
                  basics
                </p>
                <ul className="circled-order">
                  <li>Cyber Security Basics</li>
                  <li>Networking Basics and Weaknesses</li>
                  <li>The Web And Common Attacks</li>
                  <li>Learn to Use The Linux OS</li>
                </ul>
              </div>
              <div className="easy">
                <i className="fa-solid fa-signal"></i>
                <p>Easy</p>
              </div>
            </a>
          </div>
          <div className="row-course">
            <a href="/lab2" className="course-card">
              <div className="course-image">
                <img src={imagecourse2} alt="Course" />
              </div>
              {/* topic 29 */}
              <div className="course-text">
                <h3>29. </h3>
                <p>
                  Learn the core skills required to start a career in cyber
                  security
                </p>
                <ul className="circled-order">
                  <li>Learn about different careers in cyber</li>
                  <li>Hack your first application</li>
                  <li>Defend against a live cyber attack</li>
                  <li>Explore security topics in the industry</li>
                </ul>
              </div>
              <div className="easy">
                <i className="fa-solid fa-signal"></i>
                <p>Easy</p>
              </div>
            </a>
          </div>
          <div className="row-course">
            <a href="/Test" className="course-card">
              <div className="course-image">
                <img src={imagecourse2} alt="Course" />
              </div>
              {/* topic 30 */}
              <div className="course-text">
                <h3>30. </h3>
                <p>
                  Learn the core skills required to start a career in cyber
                  security
                </p>
                <ul className="circled-order">
                  <li>Learn about different careers in cyber</li>
                  <li>Hack your first application</li>
                  <li>Defend against a live cyber attack</li>
                  <li>Explore security topics in the industry</li>
                </ul>
              </div>
              <div className="easy">
                <i className="fa-solid fa-signal"></i>
                <p>Easy</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
