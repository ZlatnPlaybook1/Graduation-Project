import MCQQuiz from "../../../../MCQ_Form/MCQQuiz";
import MCQData from "../MCQData/SecurityAnalyst.json";
export default function SecurityAnalyst() {
  return (
    <>
      <MCQQuiz questionsData={MCQData} />
    </>
  );
}
