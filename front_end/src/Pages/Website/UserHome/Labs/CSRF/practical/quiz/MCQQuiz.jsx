import MCQQuiz from "./Second_Lab";
import MCQData from "./data.json";
export default function Drone() {
  return (
    <>
      <MCQQuiz questionsData={MCQData} />
    </>
  );
}
