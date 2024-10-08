import React, { useState, useRef } from "react";
import "./First_lab.css";
import Header from "../../../Header/Header";
import image_1 from "../../../assets/img/practical_lab2/image_1.png";
import image_2 from "../../../assets/img/practical_lab2/image_2.png";
import image_3 from "../../../assets/img/practical_lab2/image_3.png";
import image_4 from "../../../assets/img/practical_lab2/image_4.png";
import image_5 from "../../../assets/img/practical_lab2/image_5.png";
import Footer from "../../../Footer/Footer";

export default function First_lab() {
  const [searchTerm, setSearchTerm] = useState("");
  const [lastSearchedTerm, setLastSearchedTerm] = useState("");
  const cardRefs = useRef([]);

  const handleSearch = (e) => {
    e.preventDefault();
    const searchQuery = searchTerm.toLowerCase();
    setLastSearchedTerm(searchTerm);

    // Find the first card that contains the search term
    const matchingIndex = cardRefs.current.findIndex((card) =>
      card.innerText.toLowerCase().includes(searchQuery)
    );

    // Scroll to the matching card if found
    if (matchingIndex >= 0) {
      cardRefs.current[matchingIndex].scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };

  return (
    <>
      <Header />
      {/* Start Courses */}
      <div className="course-First_lab">
        <div className="container-First_lab">
          <form className="search" onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Search for a practice"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button type="submit">
              <i className="fa-solid fa-search"></i>
            </button>
          </form>

          {/* Display the searched word below the form */}
          {lastSearchedTerm && (
            <p className="search-result">
              You searched for: <strong>{lastSearchedTerm}</strong>
            </p>
          )}

          <div className="row-practice">
            <div
              className="card-First_lab"
              ref={(el) => (cardRefs.current[0] = el)}
            >
              <img src={image_1} alt="" />
              <div className="card-text-First_lab">
                <h2>Robots in Our Lives</h2>
                <p>
                  The development of robots has significantly transformed our
                  daily lives, industries, and the global economy. Over the past
                  century, robots have evolved from simple mechanical devices
                  into highly sophisticated machines capable of performing
                  complex tasks with precision and speed. The concept of robots
                  dates back to ancient civilizations, with myths and stories
                  about automated beings. However, modern robotics began in the
                  20th century, notably in the 1950s when George Devol invented
                  the first programmable robot called "Unimate." This marked the
                  beginning of robots being used in manufacturing, especially in
                  the automotive industry.
                </p>
              </div>
            </div>
            <div
              className="card-First_lab"
              ref={(el) => (cardRefs.current[1] = el)}
            >
              <img src={image_2} alt="" />
              <div className="card-text-First_lab">
                <h2>The Danger of Data Breaches and Stealing</h2>
                <p>
                  In today's digital age, data has become one of the most
                  valuable assets for both individuals and organizations.
                  However, as our reliance on technology grows, so does the risk
                  of data breaches and theft. A data breach occurs when
                  sensitive, confidential, or protected information is accessed
                  without authorization, potentially leading to devastating
                  consequences for businesses and individuals alike.
                </p>
                <p>
                  One of the main dangers of data breaches is the exposure of
                  personal information. Hackers can steal sensitive data such as
                  names, addresses, Social Security numbers, credit card
                  details, and even medical records. With this information,
                  cybercriminals can commit identity theft, which can result in
                  financial loss, damaged reputations, and long-lasting
                  emotional distress for victims.
                </p>
              </div>
            </div>
            <div
              className="card-First_lab"
              ref={(el) => (cardRefs.current[2] = el)}
            >
              <img src={image_3} alt="" />
              <div className="card-text-First_lab">
                <h2>The Power of Python Across Industries</h2>
                <p>
                  Python has become one of the most widely used programming
                  languages in the world due to its simplicity, versatility, and
                  extensive range of applications. Since its creation by Guido
                  van Rossum in 1991, Python’s use has expanded across various
                  industries and fields, from web development to artificial
                  intelligence, making it a favorite among developers and
                  organizations alike. One of Python’s greatest strengths is its
                  simplicity and readability. Python’s syntax is clean and easy
                  to understand, making it accessible to beginners who are just
                  starting their programming journey. The language’s design
                  philosophy emphasizes code readability, allowing developers to
                  write logical, easy-to-maintain code with fewer lines compared
                  to other programming languages like Java or C++. This makes
                  Python a great tool for rapid development, enabling teams to
                  build and scale projects quickly.
                </p>
              </div>
            </div>
            <div
              className="card-First_lab"
              ref={(el) => (cardRefs.current[3] = el)}
            >
              <img src={image_4} alt="" />
              <div className="card-text-First_lab">
                <h2>Robots in Our Lives</h2>
                <p>
                  The development of robots has significantly transformed our
                  daily lives, industries, and the global economy. Over the past
                  century, robots have evolved from simple mechanical devices
                  into highly sophisticated machines capable of performing
                  complex tasks with precision and speed. The concept of robots
                  dates back to ancient civilizations, with myths and stories
                  about automated beings. However, modern robotics began in the
                  20th century, notably in the 1950s when George Devol invented
                  the first programmable robot called "Unimate." This marked the
                  beginning of robots being used in manufacturing, especially in
                  the automotive industry.
                </p>
              </div>
            </div>
            <div
              className="card-First_lab"
              ref={(el) => (cardRefs.current[4] = el)}
            >
              <img src={image_5} alt="" />
              <div className="card-text-First_lab">
                <h2>5G and the Future of Mobile Networks</h2>
                <p>
                  The rollout of 5G technology marks a significant leap in the
                  evolution of mobile networks. As the fifth generation of
                  wireless technology, 5G promises faster speeds, lower latency,
                  and greater capacity, revolutionizing how people connect and
                  interact with technology. This development is set to transform
                  industries, enable new applications, and change the way we
                  live and work. 5G is the latest generation of mobile networks,
                  succeeding 4G LTE. While 4G brought faster internet speeds and
                  improved mobile connectivity, 5G is designed to be much
                  faster, with speeds potentially reaching up to 100 times those
                  of 4G. This improvement is largely due to the use of higher
                  frequency bands, known as millimeter waves, which allow more
                  data to be transferred at once.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Course Content */}
      <Footer />
    </>
  );
}
