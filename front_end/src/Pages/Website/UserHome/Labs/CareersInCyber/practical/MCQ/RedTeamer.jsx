import MCQQuiz from "../../../../MCQ_Form/MCQQuiz";
import MCQData from "../MCQData/RedTeamer.json";
export default function RedTeamer() {
  return (
    <>
      <MCQQuiz questionsData={MCQData} />
    </>
  );
}
