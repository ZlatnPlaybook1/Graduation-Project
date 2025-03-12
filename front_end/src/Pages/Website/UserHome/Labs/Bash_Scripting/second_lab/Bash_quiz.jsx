import CompleteQuestion from "../../../Components/CompleteQuestion/CompleteQuestion";
import Data from "./second_Data.json";
import "./Bash_quiz.css";

export default function Second_Lab() {
  const arrayExample =
    'To finish off our little project from the previous task. You can build on your script using an if/else statement. Test to see if the age is under 18, if it is then echo out their name with "You are not eligible for work" or something along these lines, if they are over 18 then ask them for their job, you can do this with read';
  return (
    <div
      style={{
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "var(--faq-body-bg)",
        color: "var(--primary-text)",
        height: "100vh",
      }}
    >
      <CompleteQuestion questionsData={Data} />
      <div className="arrayExample">
        <p className="text-center">
          <strong>Array Example:</strong> {arrayExample}
        </p>
      </div>
    </div>
  );
}
