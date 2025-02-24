import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Courses.css";
import courseData from "./courseData";
import PaginatedCourses from "./PaginatedCourses";
import Go2TopBtn from "../../Components/Go2Top_Btn/Go2Top_Btn";

const Courses = () => {
  // const [searchIsOpen, setSearchIsOpen] = useState(false);
  const [searchTerm] = useState("");
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
    // setSearchIsOpen(false);
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
        {/* Category Buttons and Search Bar */}
        <div className="menu-row w-100 ">
          <div
            className="category-nav "
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
