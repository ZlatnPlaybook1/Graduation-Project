import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Courses.css";
import courseData from "./courseData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faPlus, faTimes } from "@fortawesome/free-solid-svg-icons";
import PaginatedCourses from "./PaginatedCourses";
import Go2TopBtn from "../Go2Top_Btn/Go2Top_Btn";

const Courses = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [searchIsOpen, setSearchIsOpen] = useState(false);
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
    "All Courses",
    "Fundamentals",
    "Vulnerabilities",
    "Tools & Techniques",
    "My Courses",
    "Fav Topics",
  ];

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setSearchIsOpen(false);
  };

  const filteredCourses = (courseData || []).filter((course) => {
    const term = searchTerm.toLowerCase();
    const matchesSearchTerm = course.title.toLowerCase().includes(term);
    const matchesCategory =
      selectedCategory === "All Courses" ||
      course.category === selectedCategory;

    return matchesSearchTerm && matchesCategory;
  });

  const toggleSearchBar = () => {
    setSearchIsOpen(!searchIsOpen);
    if (!searchIsOpen) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  };

  const toggleCategoryNav = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setSearchIsOpen(false);
    } else {
      setSearchIsOpen(true);
    }
  };

  return (
    <div className="course">
      <div className="container">
        {/* Category Buttons and Search Bar */}
        <div className="menu-row w-100">
          <div
            className={`category-nav  ${isOpen ? "active" : ""}`}
            id="categoryNav"
          >
            <ul className="category-menu">
              {categories.map((category) => (
                <li key={category}>
                  <button
                    className={`category-btn ${
                      selectedCategory === category ? "active" : ""
                    }`}
                    onClick={() => handleCategorySelect(category)}
                  >
                    {category}
                  </button>
                </li>
              ))}
            </ul>
            <button className="icon" id="toggleBtn" onClick={toggleCategoryNav}>
              {isOpen ? (
                <FontAwesomeIcon icon={faTimes} />
              ) : (
                <FontAwesomeIcon icon={faPlus} />
              )}
            </button>
          </div>

          {/* Search Bar */}
          <div className={`search-container ${searchIsOpen ? "active" : ""}`}>
            <input
              type="text"
              className="search-input"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className="search-btn" onClick={toggleSearchBar}>
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </div>
        </div>

        {/* Display Filtered Courses */}
        <PaginatedCourses filteredCourses={filteredCourses} />
      </div>
      <Go2TopBtn />
    </div>
  );
};

export default Courses;
