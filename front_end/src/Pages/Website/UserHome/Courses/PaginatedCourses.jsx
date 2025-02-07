import { useState } from "react";

const itemsPerPage = 9;

const PaginatedCourses = ({ filteredCourses }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(filteredCourses.length / itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
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
