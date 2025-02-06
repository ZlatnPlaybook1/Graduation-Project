import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Courses.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTimes, faBars } from "@fortawesome/free-solid-svg-icons";
import PaginatedCourses from "./PaginatedCourses";
import courseData from "./courseData";
import ChatWidget from "../../AiChatWidget/ChatWidget";
import Go2TopBtn from "../Go2Top_Btn/Go2Top_Btn";
const Courses = () => {
  // const [searchTerm, setSearchTerm] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All Courses");

  useEffect(() => {
    AOS.init({
      duration: 500,
      once: false,
      mirror: true,
    });
  }, []);
  const categories = [
    "All Courses",
    "Web Vulnerabilities",
    "Server-Side Exploits",
    "Fundamentals",
    "Other Topics1",
    "Other Topics2",
  ];

  // Filter courses by category and search term
  // const filteredCourses = courseData.filter((course) => {
  //   const term = searchTerm.toLowerCase();
  //   const matchesSearchTerm =
  //     course.title.toLowerCase().includes(term) ||
  //     course.description.toLowerCase().includes(term) ||
  //     course.topics.some((topic) => topic.toLowerCase().includes(term));
  //   const matchesCategory =
  //     selectedCategory === "All Courses" ||
  //     course.category === selectedCategory;

  //   return matchesSearchTerm && matchesCategory;
  // });
  return (
    <>
      <div className="course">
        <div className="container">
          {/* Category Buttons and Search Bar */}
          <div
            className={`category-nav ${isOpen ? "active" : ""}`}
            id="categoryNav"
          >
            <ul className="category-menu">
              {categories.map((category) => (
                <li key={category}>
                  <button
                    className={`category-btn ${
                      selectedCategory === category ? "active" : ""
                    }`}
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </button>
                </li>
              ))}
            </ul>
            <button
              className="icon"
              id="toggleBtn"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <FontAwesomeIcon icon={faTimes} />
              ) : (
                <FontAwesomeIcon icon={faPlus} />
              )}
            </button>
          </div>

          {/* <AchievementAlert /> */}
          {/* Courses */}
          {/* <div className="row">
            {filteredCourses.map((course, index) => (
              <div
                className="row-course"
                key={course.id}
                data-aos={
                  index % 3 === 0
                    ? "fade-right"
                    : index % 3 === 1
                    ? "fade-up"
                    : "fade-left"
                }
              >
                <a href={course.link} className="course-card">
                  <div className="course-image">
                    <img src={course.image} alt={course.title} />
                    {course.state === "not-published" ? (
                      <div className="ribbon coming-soon">
                        <span>Coming Soon</span>
                      </div>
                    ) : course.state === "published" ? (
                      <div className="ribbon published">
                        <span>Published</span>
                      </div>
                    ) : course.state === "semi-published" ? (
                      <div className="ribbon semi-published">
                        <span>Semi Published</span>
                      </div>
                    ) : (
                      <div className="ribbon pending">
                        <span>Pending</span>
                      </div>
                    )}
                  </div>
                  <div className="course-text">
                    <h3>{course.title}</h3>
                    <p>{course.description}</p>
                    <ul className="circled-order">
                      {course.topics.map((topic, index) => (
                        <li key={index}>{topic}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="easy">
                    <i className="fa-solid fa-signal"></i>
                    <p>{course.difficulty}</p>
                  </div>
                </a>
              </div>
            ))}
          </div> */}
          <PaginatedCourses filteredCourses={courseData} />
        </div>
      </div>
      <ChatWidget />
      <Go2TopBtn />
    </>
  );
};

export default Courses;
