import MCQQuiz from "../../../../MCQ_Form/MCQQuiz";
import MCQData from "./MCQData.json";
import GoBack_Btn from "../../../../GoBack_Btn/GoBack_Btn";
import ShowHint_Btn from "../../../../ShowHint_Btn/ShowHint_Btn";
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
      <GoBack_Btn />
      <ShowHint_Btn hintText={hintMessage} />
      <div className="container">
        <h2 className="lab-header">Lab1</h2>
        <MCQQuiz questionsData={MCQData} />
        <Go2TopBtn />
      </div>
    </>
  );
}
