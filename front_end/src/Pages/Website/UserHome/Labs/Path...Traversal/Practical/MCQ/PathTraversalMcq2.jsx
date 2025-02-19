import MCQQuiz from "../../../../Components/MCQ_Form/MCQQuiz";
import MCQData from "../MCQ_Date/Path_Traversal[2].json";
export default function PathTraversalMcq2() {
  return (
    <>
      <MCQQuiz questionsData={MCQData} />
    </>
  );
}
