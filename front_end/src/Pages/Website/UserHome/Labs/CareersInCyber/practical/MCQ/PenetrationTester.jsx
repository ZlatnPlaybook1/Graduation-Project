import MCQQuiz from "../../../../MCQ_Form/MCQQuiz";
import MCQData from "../MCQData/PenetrationTester.json";
export default function PenetrationTester() {
  return (
    <>
      <MCQQuiz questionsData={MCQData} />
    </>
  );
}
