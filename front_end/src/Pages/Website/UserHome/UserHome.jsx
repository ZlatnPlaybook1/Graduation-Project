import Courses from "./Components/Courses/Courses";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Landing from "./Components/LearnLanding/LearnLanding";
import ThemeSwitcher from "./Components/ThemeSwitcher/ThemeSwitcher";

export default function UserHome() {
  return (
    <div style={{position: "relative"}}>
      <Header />
      <ThemeSwitcher />
      <Landing />
      <Courses />
      <Footer />
    </div>
  );
}
