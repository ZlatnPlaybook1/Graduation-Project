import CompleteQuestion from "../../../Regex/practical/second_lab/CompleteQuestion";
import Data from "./Ob_Data.json";
import "./Ob_quiz.css";

export default function Ob_Second_Lab() {
  return (
    <div
      style={{
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <CompleteQuestion questionsData={Data} />
    </div>
  );
}
