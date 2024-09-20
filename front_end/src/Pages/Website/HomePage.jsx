import Preload from "./Preload/Preload";
import Header from "./Header/Header";
import OurFeature from "./OurFeature/OurFeature";
import Services from "./Services/Services";
import Platform from "./Platform/Platform";
import Team from "./Team/Team";
import Footer from "./Footer/Footer";
export default function HomePage() {
  return (
    <div>
      <Preload />
      <Header />
      <OurFeature />
      <Services />
      <Platform />
      <Team />
      <Footer />
    </div>
  );
}
