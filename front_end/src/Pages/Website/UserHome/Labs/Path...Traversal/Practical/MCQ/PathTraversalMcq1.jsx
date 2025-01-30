import React from "react";
import MCQQuiz from "../../../../MCQ_Form/MCQQuiz";
import MCQData from "../MCQ_Date/Path_Traversal.json";
export default function PathTraversalMcq1() {
  return (
    <>
      <MCQQuiz questionsData={MCQData} />
    </>
  );
}
