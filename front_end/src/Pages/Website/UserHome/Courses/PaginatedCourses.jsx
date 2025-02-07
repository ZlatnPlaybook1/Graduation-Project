import { useState } from "react";
import Swal from "sweetalert2";

const itemsPerPage = 9;

const PaginatedCourses = ({ filteredCourses }) => {
  const [currentPage, setCurrentPage] = useState(1);
  // Local state for favorite statuses keyed by course id.
  const [favorites, setFavorites] = useState({});

  const totalPages = Math.ceil(filteredCourses.length / itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Toggle favorite status for a course and update in DB.
  const toggleFavorite = async (courseId) => {
    // Optimistically update UI.
    const currentStatus = favorites[courseId];
    setFavorites((prevFavorites) => ({
      ...prevFavorites,
      [courseId]: !currentStatus,
    }));

    try {
      const response = await fetch("/api/favorite", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ courseId, favorite: !currentStatus }),
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || "Failed to update favorite");
      }
      // Optionally handle success response here.
    } catch (error) {
      console.error("Error updating favorite:", error);
      // Revert optimistic update on error.
      setFavorites((prevFavorites) => ({
        ...prevFavorites,
        [courseId]: currentStatus,
      }));
      Swal.fire("Error", "Could not update favorite status.", "error");
    }
  };

  // Display course details using SweetAlert.
  const handleInfoClick = (course, e) => {
    // Prevent navigation since the whole card is an anchor.
    e.preventDefault();
    e.stopPropagation();
    Swal.fire({
      title: course.title,
      html: `<p>${course.description}</p>
             <ul>
               ${course.topics.map((topic) => `<li>${topic}</li>`).join("")}
             </ul>`,
      icon: "info",
    });
  };

  // Handle registration and update in DB.
  const handleRegister = async (course, e) => {
    e.preventDefault();
    e.stopPropagation();
    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ courseId: course.id }),
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || "Registration failed");
      }
      Swal.fire(
        "Success",
        "You have successfully registered for the course!",
        "success"
      );
    } catch (error) {
      console.error("Error registering course:", error);
      Swal.fire("Error", error.message, "error");
    }
  };

  const displayedCourses = filteredCourses.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <>
      <div className="row">
        {displayedCourses.map((course, index) => (
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
            <a
              href={course.link}
              className="course-card"
              style={{ position: "relative" }}
            >
              {/* Top right icons */}
              <div
                className="course-icons"
                style={{
                  position: "absolute",
                  top: "10px",
                  right: "10px",
                  display: "flex",
                  gap: "5px",
                  zIndex: 1,
                  flexDirection: "column",
                  fontSize: "1.5rem",
                }}
              >
                {/* Favorite Icon */}
                <span
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    toggleFavorite(course.id);
                  }}
                  style={{ cursor: "pointer" }}
                >
                  <i
                    className={
                      favorites[course.id]
                        ? "fa-solid fa-heart text-danger"
                        : "fa-regular fa-heart"
                    }
                  ></i>
                </span>
                {/* Info Icon */}
                <span
                  onClick={(e) => handleInfoClick(course, e)}
                  style={{ cursor: "pointer" }}
                >
                  <i className="fa-solid fa-info-circle"></i>
                </span>
              </div>

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
              </div>

              {/* Register Button */}
              <div className="register-container" style={{ margin: "10px" }}>
                <button
                  className="btn btn-primary"
                  onClick={(e) => handleRegister(course, e)}
                >
                  Register
                </button>
              </div>

              <div className="easy">
                <i className="fa-solid fa-signal"></i>
                <p>{course.difficulty}</p>
              </div>
            </a>
          </div>
        ))}
      </div>

      <div className="pagination d-flex justify-content-center align-items-center gap-2 my-4">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            className={`pagination-button btn ${
              currentPage === index + 1 ? "active" : ""
            }`}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </>
  );
};

export default PaginatedCourses;
