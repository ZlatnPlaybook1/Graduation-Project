import { FileDownloader } from "../../../../Components/FileDwnLodrLab/FileDownloader";
import ThemeSwitcher from "../../../../Components/ThemeSwitcher/ThemeSwitcher";
export default function Power() {
  const hint =
    "Need to find specific text in files? Use grep in Linux! 🔍 Example: grep 'keyword' file.txt to search for 'keyword' inside file.txt.";

  return (
    <>
      <ThemeSwitcher />
      <FileDownloader
        answerText={"FLAG{Grep_Are_Very_Useful}"}
        hint={hint}
        fileName={"power_of_comand.rar"}
        subject={"Linux"}
        title={"Power of Command"}
      />
    </>
  );
}
