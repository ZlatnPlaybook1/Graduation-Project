import MCQQuiz from "../../../../MCQ_Form/MCQQuiz";
import MCQData from "../MCQData/Multimedia.json";
export default function Multimedia() {
  return (
    <>
      <MCQQuiz questionsData={MCQData} />
    </>
  );
}
