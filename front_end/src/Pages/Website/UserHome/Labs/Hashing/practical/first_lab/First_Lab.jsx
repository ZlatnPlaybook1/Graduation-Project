import React from "react";
import "./First_Lab.css";
import CrackerImage from "../../../../assets/img/Hashing/Cracker.jpg";
import ComparatorImage from "../../../../assets/img/Hashing/Comparator.jpg";
import GeneratorImage from "../../../../assets/img/Hashing/Generator.jpg";
import SaltingImage from "../../../../assets/img/Hashing/Salting.jpg";
import { Card } from "../../../../Card/Card";
import GoBackBtn from "../../../../GoBack_Btn/GoBack_Btn";
import ShowHintBtn from "../../../../ShowHint_Btn/ShowHint_Btn";
import Go2TopBtn from "../../../../Go2Top_Btn/Go2Top_Btn";
const HashingLab = () => {
  const hintMessage = `
    <ul style="text-align: left; font-size: 16px; line-height: 1.8;">
      <li>1.
        
      </li>
    </ul>
  `;
  return (
    <>
      <GoBackBtn />
      <ShowHintBtn hintText={hintMessage} />
      <div className="course">
        <div className="container mt-5">
          <div className="intro-card shadow-lg">
            <div className="card-body">
              <h1 className="card-title my-4 display-5 title-gradient">
                Hashing Lab
              </h1>
              <p>
                Hashing is the process of converting an input (which can be a
                password, a file, or any message) into a fixed-length string of
                bytes. The output, or hash, is unique to the input data, and
                even a small change in the input will produce a completely
                different hash. Hashing is used in various applications, such as
                password storage, digital signatures, and data integrity checks.
              </p>
              <div className="note">
                Below are some hashing tools, including a Hash Generator, Hash
                Comparator, Hash Cracker, and Salting Demo. Explore them to
                learn more about hashing!
              </div>
            </div>
          </div>

          <div className="row">
            <Card
              link={"/Hashing/Hashing_labs/lab1/HashGenerator"}
              image={GeneratorImage}
              title={"Hash Generator"}
              brief={
                "Generate MD5, SHA-1, and SHA-256 hashes for any text input."
              }
              difficulty={"Easy"}
            />
            <Card
              link={"/Hashing/Hashing_labs/lab1/HashComparator"}
              image={ComparatorImage}
              title={"Hash Comparator"}
              brief={
                "Compare two hashes to see if they match. Useful for verifying data integrity."
              }
              difficulty={"Easy"}
            />
            <Card
              link={"/Hashing/Hashing_labs/lab1/HashCracker"}
              image={CrackerImage}
              title={"Hash Cracker"}
              brief={
                "Attempt to crack common password hashes using a dictionary attack (for educational purposes only)."
              }
              difficulty={"Easy"}
            />
            <Card
              link={"/Hashing/Hashing_labs/lab1/SaltingDemo"}
              image={SaltingImage}
              title={"Salting Demo"}
              brief={
                "See how salting adds security to password hashing by adding a random string before hashing."
              }
              difficulty={"Easy"}
            />
          </div>
        </div>
      </div>
      <Go2TopBtn />
    </>
  );
};

export default HashingLab;
