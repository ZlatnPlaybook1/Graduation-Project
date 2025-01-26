import MCQQuiz from "../../../../MCQ_Form/MCQQuiz";
import MCQData from "../MCQData/Drone.json";
export default function Drone() {
  return (
    <>
      <MCQQuiz questionsData={MCQData} />
    </>
  );
}
