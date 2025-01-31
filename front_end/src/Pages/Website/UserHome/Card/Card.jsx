import { Link } from "react-router-dom";
import "./Card.css";
export const Card = ({
  link,
  image,
  alt="Example",
  title,
  brief,
  difficulty,
  descriptionList,
}) => {
  return (
    <Link to={link} className="course-card">
      <div className="course-image">
        <img src={image} alt={alt} />
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
  );
};
