import MCQQuiz from "../../../../MCQ_Form/MCQQuiz";
import MCQData from "../MCQData/Vehicle.json";
export default function Vehicle() {
  return (
    <>
      <MCQQuiz questionsData={MCQData} />
    </>
  );
}
