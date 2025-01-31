import React from "react";
import "./First_Lab.css";
import { Link } from "react-router-dom";
import CrackerImage from "../../../../assets/img/Hashing/Cracker.jpg";
import ComparatorImage from "../../../../assets/img/Hashing/Comparator.jpg";
import GeneratorImage from "../../../../assets/img/Hashing/Generator.jpg";
import SaltingImage from "../../../../assets/img/Hashing/Salting.jpg";

const HashingLab = () => {
  return (
    <div className="course">
      <div className="container mt-5">
        <div className="card shadow-lg">
          <div className="card-body">
            <h1 className="card-title my-4 display-5 title-gradient">
              Hashing Lab
            </h1>
            <p>
              Hashing is the process of converting an input (which can be a
              password, a file, or any message) into a fixed-length string of
              bytes. The output, or hash, is unique to the input data, and even
              a small change in the input will produce a completely different
              hash. Hashing is used in various applications, such as password
              storage, digital signatures, and data integrity checks.
            </p>
            <div className="d-flex my-3" style={{ height: "auto" }}>
              <div
                className="vr py-3"
                style={{ width: "20px", height: "auto" }}
              ></div>
              <h4 className="bg-gray p-3 mt-2">
                <code>
                  Below are some hashing tools, including a Hash Generator, Hash
                  Comparator, Hash Cracker, and Salting Demo. Explore them to
                  learn more about hashing!
                </code>
              </h4>
            </div>
          </div>
        </div>

        <div className="row">
          <Link
            to="/Hashing/Hashing_labs/lab1/HashGenerator"
            className="course-card"
          >
            <div className="course-image">
              <img src={GeneratorImage} alt="" />
            </div>
            <div className="course-text">
              <h3>Hash Generator</h3>
              <p>Generate MD5, SHA-1, and SHA-256 hashes for any text input.</p>
            </div>
          </Link>
          <Link
            to="/Hashing/Hashing_labs/lab1/HashComparator"
            className="course-card"
          >
            <div className="course-image">
              <img src={ComparatorImage} alt="" />
            </div>
            <div className="course-text">
              <h3>Hash Comparator</h3>
              <p>
                Compare two hashes to see if they match. Useful for verifying
                data integrity.
              </p>
            </div>
          </Link>
          <Link
            to="/Hashing/Hashing_labs/lab1/HashCracker"
            className="course-card"
          >
            <div className="course-image">
              <img src={CrackerImage} alt="" />
            </div>
            <div className="course-text">
              <h3>Hash Cracker</h3>
              <p>
                Attempt to crack common password hashes using a dictionary
                attack (for educational purposes only).
              </p>
            </div>
          </Link>
          <Link
            to="/Hashing/Hashing_labs/lab1/SaltingDemo"
            className="course-card"
          >
            <div className="course-image">
              <img src={SaltingImage} alt="" />
            </div>
            <div className="course-text">
              <h3>Salting Demo</h3>
              <p>
                See how salting adds security to password hashing by adding a
                random string before hashing.
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HashingLab;
