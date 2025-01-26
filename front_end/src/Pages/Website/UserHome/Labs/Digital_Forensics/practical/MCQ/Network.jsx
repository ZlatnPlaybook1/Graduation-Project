import MCQQuiz from "../../../../MCQ_Form/MCQQuiz";
import MCQData from "../MCQData/Network.json";
export default function Network() {
  return (
    <>
      <MCQQuiz questionsData={MCQData} />
    </>
  );
}
