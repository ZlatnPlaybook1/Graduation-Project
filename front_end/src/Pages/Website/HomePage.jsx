import Preload from "./Preload/Preload";
import Header from "./Header/Header";
import Services from "./Services/Services";
import Platform from "./Platform/Platform";
import Team from "./Team/Team";
import Footer from "./Footer/Footer";
export default function HomePage() {
  return (
    <div>
      <Preload />
      <Header />
      <Services />
      <Platform />
      <Team />
      <Footer />
    </div>
  );
}
