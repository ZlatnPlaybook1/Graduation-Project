import MCQQuiz from "../../../../MCQ_Form/MCQQuiz";
import MCQData from "../MCQData/SocialMedia.json";
export default function SocialMedia() {
  return (
    <>
      <MCQQuiz questionsData={MCQData} />
    </>
  );
}
