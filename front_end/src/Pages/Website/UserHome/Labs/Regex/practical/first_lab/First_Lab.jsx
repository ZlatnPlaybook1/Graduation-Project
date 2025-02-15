import MCQQuiz from "../../../../MCQ_Form/MCQQuiz";
import MCQData from "./MCQData.json";
import GoBackBtn from "../../../../GoBack_Btn/GoBack_Btn";
import ShowHintBtn from "../../../../ShowHint_Btn/ShowHint_Btn";
import Go2TopBtn from "../../../../Go2Top_Btn/Go2Top_Btn";
export default function FirstLab() {
  const hintMessage = `
    <ul style="text-align: left; font-size: 16px; line-height: 1.8;">
      <li>1.
        
      </li>      
    </ul>
  `;
  return (
    <>
      <GoBackBtn />
      <ShowHintBtn hintText={hintMessage} />
      <div className="container">
        <h2 className="lab-header">Lab1</h2>
        <MCQQuiz questionsData={MCQData} />
        <Go2TopBtn />
      </div>
    </>
  );
}
