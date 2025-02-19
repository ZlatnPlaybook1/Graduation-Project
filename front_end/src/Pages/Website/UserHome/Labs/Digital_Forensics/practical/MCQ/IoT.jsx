import MCQQuiz from "../../../../Components/MCQ_Form/MCQQuiz";
import MCQData from "../MCQData/IoT.json";
export default function Iot() {
  return (
    <>
      <MCQQuiz questionsData={MCQData} />
    </>
  );
}
