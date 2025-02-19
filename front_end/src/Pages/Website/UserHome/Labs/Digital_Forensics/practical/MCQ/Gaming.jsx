import MCQQuiz from "../../../../Components/MCQ_Form/MCQQuiz";
import MCQData from "../MCQData/Gaming.json";
export default function Gaming() {
  return (
    <>
      <MCQQuiz questionsData={MCQData} />
    </>
  );
}
