import { Link } from "react-router-dom";

export const Card = ({ link, image, alt = "Example", title, brief, difficulty }) => {
  return (
    <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
      <Link to={link} className="course-card">
        <div className="course-image">
          <img src={image} alt={alt} className="img-fluid" />
        </div>
        <div className="course-text">
          <h3>{title}</h3>
          <p>{brief}</p>
        </div>
        <div className="easy">
          <i className="fa-solid fa-signal lab"></i>
          <p>{difficulty}</p>
        </div>
      </Link>
    </div>
  );
};
