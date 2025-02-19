import MCQQuiz from "../../../../Components/MCQ_Form/MCQQuiz";
import MCQData from "../MCQData/Drone.json";
export default function Drone() {
  return (
    <>
      <MCQQuiz questionsData={MCQData} />
    </>
  );
}
