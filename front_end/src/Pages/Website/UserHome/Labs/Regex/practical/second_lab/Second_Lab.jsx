import CompleteQuestion from "./CompleteQuestion";
import Data from "./Data.json";

export default function Second_Lab() {
  return (
    <div style={{ padding: "20px" }}>
      <CompleteQuestion questionsData={Data} />
    </div>
  );
}
