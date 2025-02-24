import Preload from "./Preload/Preload";
import Header from "./Header/Header";
import Services from "./Services/Services";
import Platform from "./Platform/Platform";
import Team from "./Team/Team";
import Footer from "./Footer/FooterHome";
import Landing from "./Landing/Landing";
export default function HomePage() {
  return (
    <div
      className="bg-round"
      style={{ overflowX: "hidden", backgroundColor: "#262c36" }}
    >
      <Preload />
      <Header />
      <Landing />
      <Services />
      <Platform />
      <Team />
      <Footer />
    </div>
  );
}
