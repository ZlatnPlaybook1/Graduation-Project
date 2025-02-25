import Courses from "./Components/Courses/Courses";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Landing from "./Components/LearnLanding/LearnLanding";
import ThemeCustomizer from "../UserHome/Components/ThemeCustomizer/ThemeCustomizer";

export default function UserHome() {
  return (
    <div style={{position: "relative"}}>
      <Header />
      <ThemeCustomizer />
      <Landing />
      <Courses />
      <Footer />
    </div>
  );
}
