import MCQQuiz from "../../../../MCQ_Form/MCQQuiz";
import MCQData from "./data.json";
export default function Drone() {
  return (
    <>
      <MCQQuiz questionsData={MCQData} />
    </>
  );
}
