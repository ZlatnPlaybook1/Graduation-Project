import MCQQuiz from "../../../../MCQ_Form/MCQQuiz";
import MCQData from "../MCQData/Computer.json";
export default function Computer() {
  return (
    <>
      <MCQQuiz questionsData={MCQData} />
    </>
  );
}
