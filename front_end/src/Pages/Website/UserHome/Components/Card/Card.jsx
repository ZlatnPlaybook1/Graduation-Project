// Updated Card component
import { Link } from "react-router-dom";
export const Card = ({ link, image, alt = "Example", title, brief, difficulty }) => {
  return (
    <div className="course-card-container col-lg-4 col-md-6 col-sm-12 mb-4">
      <Link to={link} className="course-card">
        <div className="card-image-container">
          <img src={image} alt={alt} className="card-image" />
        </div>
        
        <div className="card-content-wrapper">
          <div className="card-content">
            <h3 className="card-title">{title}</h3>
            <p className="card-description">{brief}</p>
          </div>
          
          <div className={`difficulty-badge ${difficulty.toLowerCase()}`}>
            <i className="fa-solid fa-signal badge-icon"></i>
            <span>{difficulty}</span>
          </div>
        </div>
      </Link>
    </div>
  );
};