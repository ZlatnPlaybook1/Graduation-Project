import CompleteQuestion from "../../../../Components/CompleteQuestion/CompleteQuestion";
import Data from "./second_Data.json";
import GoBackBtn from "../../../../Components/GoBack_Btn/GoBack_Btn";

export default function Second_Lab() {
  return (
    <div >
        <GoBackBtn />
      <CompleteQuestion questionsData={Data} />
    </div>
  );
}
