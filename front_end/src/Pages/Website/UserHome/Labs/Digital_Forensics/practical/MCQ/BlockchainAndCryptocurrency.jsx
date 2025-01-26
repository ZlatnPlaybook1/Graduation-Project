import MCQQuiz from "../../../../MCQ_Form/MCQQuiz";
import MCQData from "../MCQData/BlockchainAndCryptocurrency.json";
export default function BlockchainAndCryptocurrency() {
  return (
    <>
      <MCQQuiz questionsData={MCQData} />
    </>
  );
}
