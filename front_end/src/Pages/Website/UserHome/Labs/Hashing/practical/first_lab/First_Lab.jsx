import MCQQuiz from "../../../../MCQ_Form/MCQQuiz";
import MCQData from "./MCQData";
export default function FirstLab() {
  return (
    <>
      <MCQQuiz questionsData={MCQData} />
    </>
  );
}
