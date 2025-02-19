import MCQQuiz from "../../../../Components/MCQ_Form/MCQQuiz";
import MCQData from "../MCQData/IncidentResponder.json";
export default function IncidentResponder() {
  return (
    <>
      <MCQQuiz questionsData={MCQData} />
    </>
  );
}
