import React from "react";
import "./team.css";
import team1 from "../assets/img/team-img/member1.png";
import { Link } from "react-router-dom";

export default function Team() {
  const teamMembers = [
    {
      name: "Ebrahiem Gamal",
      position: "FrontEnd Develpoer",
      image: team1,
    },
    { name: "Ebrahim Nassar", position: "Cyber Security", image: team1 },
    {
      name: "Ahmed Sherif",
      position: "FrontEnd Develpoer",
      image: team1,
    },
    {
      name: "Ahmed Radwn",
      position: "Cyber Security",
      image: team1,
    },
    {
      name: "M'omen Mustafa",
      position: "Backend Develpoer",
      image: team1,
    },
    {
      name: "Mohamed Emad",
      position: "Cyber Security",
      image: team1,
    },
  ];

  return (
    <div className="team section">
      <div className="container">
        <div className="section-row">
          <div className="text">
            <h2 className="first-header section-header">Our Creative Team</h2>
            <p>
            Meet the passionate team behind our educational platform,
            composed of dedicated university students who are committed to making learning accessible and engaging for everyone.
            </p>
          </div>
        </div>
        <div className="team-card-section">
          {teamMembers.map((member, index) => (
            <TeamCard key={index} {...member} />
          ))}
        </div>
      </div>
    </div>
  );
}

function TeamCard({ name, position, image }) {
  return (
    <div className="team-card">
      <div className="team-img">
        <img src={image} alt={`${name} - ${position}`} />
        <ul className="social-links">
          <li>
            <Link to="#">
              <i className="fab fa-facebook-f"></i>
            </Link>
          </li>
          <li>
            <Link to="#">
              <i className="fab fa-twitter"></i>
            </Link>
          </li>
          <li>
            <Link to="#">
              <i className="fab fa-linkedin-in"></i>
            </Link>
          </li>
        </ul>
      </div>
      <div className="team-info">
        <h3 className="team-name">{name}</h3>
        <p className="team-position">{position}</p>
      </div>
    </div>
  );
}
