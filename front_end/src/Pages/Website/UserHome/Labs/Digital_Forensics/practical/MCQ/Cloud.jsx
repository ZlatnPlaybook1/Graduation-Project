import MCQQuiz from "../../../../Components/MCQ_Form/MCQQuiz";
import MCQData from "../MCQData/Cloud.json";
export default function Cloud() {
  return (
    <>
      <MCQQuiz questionsData={MCQData} />
    </>
  );
}
