import Preload from "./Preload/Preload";
import Header from "./Header/HeaderHome";
import Services from "./Services/Services";
import Platform from "./Platform/Platform";
import Team from "./Team/Team";
import Footer from "./Footer/FooterHome";
import Landing from "./Landing/Landing";
export default function HomePage() {
  return (
    <div
      className="bg-round home__page--bg"
      style={{ overflowX: "hidden" }}
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
