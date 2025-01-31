import { Link } from "react-router-dom";
import "./Card.css";
export const Card = ({
  link,
  image,
  title,
  brief,
  difficulty,
  descriptionList,
}) => {
  return (
    <Link to={link} className="course-card">
      <div className="course-image">
        <img src={image} alt="Example" />
      </div>
      <div className="course-text">
        <h3>{title}</h3>
        <p>{brief}</p>
        <ul className="circled-order-cookies">
          <li>Cyber Security Basics</li>
          <li>Networking Basics and Weaknesses</li>
          <li>The Web And Common Attacks</li>
          <li>Learn to Use The Linux OS</li>
        </ul>
      </div>
      <div className="easy">
        <i className="fa-solid fa-signal lab"></i>
        <p>{difficulty}</p>
      </div>
    </Link>
  );
};
