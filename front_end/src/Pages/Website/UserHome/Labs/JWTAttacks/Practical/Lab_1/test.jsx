import MCQQuizV2 from "../../../../MCQ_FormV2/MCQQuiz";
import data from "./data.json";
export default function test() {
  return (
    <>
      <MCQQuizV2 questions={data.questions}/>
    </>
  );
}
