import Preload from "./Preload/Preload";
import Header from "./Header/Header";
import Services from "./Services/Services";
import Platform from "./Platform/Platform";
import Team from "./Team/Team";
import Footer from "./UserHome/Footer/Footer";
export default function HomePage() {
  return (
    <div
      className="bg-round"
      style={{ overflowX: "hidden", backgroundColor: "#262c36" }}
    >
      <Preload />
      <Header />
      <Services />
      <Platform />
      <Team />
      <Footer />
    </div>
  );
}
