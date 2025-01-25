import MCQQuiz from "../../../../MCQ_Form/MCQQuiz";
import MCQData from "./MCQData.json";
export default function FirstLab() {
  return (
    <>
      <MCQQuiz questionsData={MCQData} />
    </>
  );
}
