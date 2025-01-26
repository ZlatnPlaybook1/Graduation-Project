import MCQQuiz from "../../../../MCQ_Form/MCQQuiz";
import MCQData from "../MCQData/Mobile.json";
export default function Mobile() {
  return (
    <>
      <MCQQuiz questionsData={MCQData} />
    </>
  );
}
