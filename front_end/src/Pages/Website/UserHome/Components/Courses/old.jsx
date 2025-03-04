import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Courses.css";
import courseData from "./courseData";
import PaginatedCourses from "./PaginatedCourses";
import Go2TopBtn from "../Go2Top_Btn/Go2Top_Btn";
import {
  FaBook,
  FaBug,
  FaTools,
  FaUserGraduate,
  FaHeart,
  FaLayerGroup,
} from "react-icons/fa";
const Courses = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Courses");

  useEffect(() => {
    AOS.init({
      duration: 500,
      once: false,
      mirror: true,
    });
  }, []);

  const categories = [
    { name: "All Courses", icon: <FaLayerGroup /> },
    { name: "Fundamentals", icon: <FaBook /> },
    { name: "Vulnerabilities", icon: <FaBug /> },
    { name: "Tools & Techniques", icon: <FaTools /> },
    { name: "My Courses", icon: <FaUserGraduate /> },
    { name: "Fav Topics", icon: <FaHeart /> },
  ];

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const filteredCourses = (courseData || []).filter((course) => {
    const term = searchTerm.toLowerCase();
    const matchesSearchTerm = course.title.toLowerCase().includes(term);
    const matchesCategory =
      selectedCategory === "All Courses" ||
      course.category === selectedCategory;

    return matchesSearchTerm && matchesCategory;
  });

  return (
    <div className="course">
      <div className="container">
        {/* Category Buttons and (optionally) a Search Bar */}
        <div className="menu-row">
          <ul className="category-menu w-100">
            {categories.map((category) => (
              <li key={category.name}>
                <button
                  className={`category-btn ${
                    selectedCategory === category.name ? "active" : ""
                  }`}
                  onClick={() => handleCategorySelect(category.name)}
                >
                  <span className="category-icon">{category.icon}</span>
                  <span className="category-text">{category.name}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
        {/* Courses Grid using Bootstrap’s row */}
        <div className="row row-center">
          <PaginatedCourses filteredCourses={filteredCourses} />
        </div>
      </div>
      <Go2TopBtn />
    </div>
  );
};

export default Courses;
