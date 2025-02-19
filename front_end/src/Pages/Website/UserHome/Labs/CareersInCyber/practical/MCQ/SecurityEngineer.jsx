import MCQQuiz from "../../../../Components/MCQ_Form/MCQQuiz";
import MCQData from "../MCQData/SecurityEngineer.json";
export default function SecurityEngineer() {
  return (
    <>
      <MCQQuiz questionsData={MCQData} />
    </>
  );
}
