import React from "react";
import GoBackBtn from "../../../../Components/GoBack_Btn/GoBack_Btn";
import ShowHintBtn from "../../../../Components/ShowHint_Btn/ShowHint_Btn";
const UserPage = ({ hint }) => {
  const spanCount = 400;
  const hintMessage = hint;
  return (
    <>
      <div
        style={{
          backgroundColor: "#000",
          position: "relative",
          width: "100vw",
          height: "100vh",
        }}
      >
        <GoBackBtn />
        <ShowHintBtn hintText={hintMessage} />
        <main className="hacker-login">
          {Array.from({ length: spanCount }).map((_, index) => (
            <span key={index} className="hackerLogin-gridSpan"></span>
          ))}
          <div className="hackerLogin-signin" style={{ width: "max-content" }}>
            <div
              className="hacker-login-content text-center"
              style={{ width: "max-content" }}
            >
              <h2>Welcome To User Page</h2>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default UserPage;
