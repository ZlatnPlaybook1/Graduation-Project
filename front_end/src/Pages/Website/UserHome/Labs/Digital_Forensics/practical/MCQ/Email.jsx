import MCQQuiz from "../../../../Components/MCQ_Form/MCQQuiz";
import MCQData from "../MCQData/Email.json";
export default function Email() {
  return (
    <>
      <MCQQuiz questionsData={MCQData} />
    </>
  );
}
