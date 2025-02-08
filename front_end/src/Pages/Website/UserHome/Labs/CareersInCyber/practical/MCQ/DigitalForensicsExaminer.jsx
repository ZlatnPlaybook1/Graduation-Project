import MCQQuiz from "../../../../MCQ_Form/MCQQuiz";
import MCQData from "../MCQData/DigitalForensicsExaminer.json";
export default function DigitalForensicsExaminer() {
  return (
    <>
      <MCQQuiz questionsData={MCQData} />
    </>
  );
}
