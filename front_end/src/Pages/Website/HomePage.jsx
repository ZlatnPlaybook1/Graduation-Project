import Preload from "./Preload/Preload";
import Header from "./Header/Header";
import Services from "./Services/Services";
import Platform from "./Platform/Platform";
import Team from "./Team/Team";
import Footer from "./UserHome/Footer/Footer";
import "./HomePage.css";
export default function HomePage() {
  return (
    <div className="bg-round">
      <Preload />
      <Header />
      <Services />
      <Platform />
      <Team />
      <Footer />
    </div>
  );
}
