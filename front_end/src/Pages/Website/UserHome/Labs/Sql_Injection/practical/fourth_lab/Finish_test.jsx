import "./Finish_test.css";
import GoBackBtn from "../../../../GoBack_Btn/GoBack_Btn";
export default function Finish_test() {
  return (
    <>
      <GoBackBtn />
      {/* Start Courses  */}
      <div className="course-Finish_test ">
        <div className="container-Finish_test ">
          <h1 style={{ textAlign: "center", marginBlock: "15px" }}>
            Congratulations
          </h1>
          <div className="row-practice">
            <div className="card-Finish_test ">
              <h4>Robot Home Security Buddy</h4>
              <p>$92.70</p>
            </div>
            <div className="card-Finish_test ">
              <h4>All-in-one Typewriter</h4>
              <p>$33.61</p>
            </div>
            <div className="card-Finish_test ">
              <h4>Photobomb Backdrops</h4>
              <p>$46.21</p>
            </div>
            <div className="card-Finish_test ">
              <h4>Grow Your Own Spy Kit</h4>
              <p>$19.26</p>
            </div>
          </div>
        </div>
      </div>
      {/* End Course Content  */}
    </>
  );
}
