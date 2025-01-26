import MCQQuiz from "../../../../MCQ_Form/MCQQuiz";
import MCQData from "../MCQData/Database.json";
export default function Database() {
  return (
    <>
      <MCQQuiz questionsData={MCQData} />
    </>
  );
}
