import React, { useState } from "react";
import "./Courses.css";
import courseData from "./courseData"; // Assuming you move course data to a separate file
import ChatWidget from "../../AiChatWidget/ChatWidget";
import Go2TopBtn from "../Go2Top_Btn/Go2Top_Btn";
const Courses = () => {
  const [selectedCategory, setSelectedCategory] = useState("All Courses");
  const [searchTerm, setSearchTerm] = useState("");

  const categories = [
    "All Courses",
    "Web Vulnerabilities",
    "Server-Side Exploits",
    "Fundamentals",
    "Specialized Topics",
  ];

  // Filter courses by category and search term
  const filteredCourses = courseData.filter((course) => {
    const term = searchTerm.toLowerCase();
    const matchesSearchTerm =
      course.title.toLowerCase().includes(term) ||
      course.description.toLowerCase().includes(term) ||
      course.topics.some((topic) => topic.toLowerCase().includes(term));
    const matchesCategory =
      selectedCategory === "All Courses" ||
      course.category === selectedCategory;

    return matchesSearchTerm && matchesCategory;
  });
  return (
    <>
      <div className="course">
        <div className="container">
          {/* Category Buttons and Search Bar */}
          <div className="category-search-bar">
            <div className="categories-menu">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`category-btn ${
                    selectedCategory === category ? "active" : ""
                  }`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
            <div className="search-container">
              <input
                type="text"
                placeholder="Search here"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button className="search-btn">
                <i className="fa-solid fa-search"></i>
              </button>
            </div>
          </div>
          {/* <AchievementAlert /> */}
          {/* Courses */}
          <div className="row-center">
            {filteredCourses.map((course) => (
              <div className="row-course" key={course.id}>
                <a href={course.link} className="course-card">
                  <div className="course-image">
                    <img src={course.image} alt={course.title} />
                    {/* Ribbon Badge with Rotated Text */}
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
          </div>
        </div>
      </div>
      <ChatWidget />
      <Go2TopBtn />
    </>
  );
};

export default Courses;
