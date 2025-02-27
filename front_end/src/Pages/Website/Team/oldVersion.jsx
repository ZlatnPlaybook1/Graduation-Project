import React from "react";
import "./team.css";
import team1 from "../assets/img/team-img/member1.png";
import { Link } from "react-router-dom";

export default function Team() {
  const teamMembers = [
    {
      name: "Ahmed Hussien",
      position: "FullStack Developer",
      image: team1,
      color: "#4e54c8",
      fb: "https://www.facebook.com/",
    },
    {
      name: "M'omen Mustafa",
      position: "Backend Develpoer",
      image: team1,
      color: "#6f42c1",
    },
    {
      name: "Ahmed Sherif",
      position: "FrontEnd Develpoer",
      image: team1,
      color: "#dc3545",
    },
    {
      name: "Ebrahiem Gamal",
      position: "FrontEnd Develpoer",
      image: team1,
      color: "#007BFF",
    },
    {
      name: "Ahmed Radwn",
      position: "Cyber Security",
      image: team1,
      color: "#17a2b8",
    },
    {
      name: "Ebrahim Nassar",
      position: "Cyber Security",
      image: team1,
      color: "#28a745",
    },
    {
      name: "Mohamed Emad",
      position: "Cyber Security",
      image: team1,
      color: "#ff7034",
    },
  ];
  if (teamMembers.map.color !== undefined) {
    console.log("color is defined");
    return (
      <style>{`.team-card#${teamMembers.map.id}::before {background-color: ${teamMembers.map.color};}`}</style>
    );
    // <style>
    //   {`
    //   .team-card#${teamMembers.map.id}::before {
    //     background-color: ${teamMembers.map.color};
    //   }
    // `}
    // </style>;
  }

  return (
    <div id="about" className="team section">
      <div className="container">
        <div className="section-row">
          <div className="text">
            <h2 className="first-header section-header">Our Creative Team</h2>
            <p>
              Meet the passionate team behind our educational platform, composed
              of dedicated university students who are committed to making
              learning accessible and engaging for everyone.
            </p>
          </div>
        </div>
        <style>
          {teamMembers
            .map((member, index) =>
              member.color
                ? `.team-card#team-${index}::before { background-color: ${member.color}; }`
                : ""
            )
            .join(" ")}
        </style>

        <div className="team-card-section">
          {teamMembers.map((member, index) => (
            <TeamCard key={index} {...member} id={`team-${index}`} />
          ))}
        </div>
      </div>
    </div>
  );
}

function TeamCard({ name, position, image, id,fb,github,linkedin }) {
  return (
    <div className="team-card" id={id}>
      <i class="fa-solid fa-circle-info fa-2x icon-info"></i>
      <ul className="social-links">
        <li>
          <Link to={fb}>
            <i className="fab fa-facebook-f"></i>
          </Link>
        </li>
        <li>
          <Link to={github}>
            <i className="fab fa-github"></i>
          </Link>
        </li>
        <li>
          <Link to={linkedin}>
            <i className="fab fa-linkedin-in"></i>
          </Link>
        </li>
      </ul>
      <div className="team-img">
        <img src={image} alt={`${name} - ${position}`} />
      </div>
      <div className="team-info">
        <h3 className="team-name">{name}</h3>
        <p className="team-position">{position}</p>
      </div>
    </div>
  );
}
