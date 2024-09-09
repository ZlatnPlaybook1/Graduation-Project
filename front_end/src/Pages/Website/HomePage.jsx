import "./homepage.css";
import Preload from "./Preload/Preload";
import Header from "./Header/Header";
import OurFeature from "./OurFeature/OurFeature";
export default function HomePage() {
  return (
    <div>
      <Preload />
      <Header />
      <OurFeature />
    </div>
  );
}
