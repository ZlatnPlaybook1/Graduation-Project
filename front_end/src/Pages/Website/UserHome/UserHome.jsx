import Courses from "./Components/Courses/Courses";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Landing from "./Landing/LearnLanding";

export default function UserHome() {
  return (
    <div>
      <Header />
      <Landing />
      <Courses />
      <Footer />
    </div>
  );
}
