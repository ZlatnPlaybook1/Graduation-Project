import MCQQuiz from "../../../../MCQ_Form/MCQQuiz";
import MCQData from "../MCQData/DataRecovery.json";
export default function DataRecovery() {
  return (
    <>
      <MCQQuiz questionsData={MCQData} />
    </>
  );
}
