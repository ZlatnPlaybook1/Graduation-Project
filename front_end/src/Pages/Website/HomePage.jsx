import Preload from "./Preload/Preload";
import Header from "./Header/HeaderHome";
import Services from "./Services/Services";
import Platform from "./Platform/Platform";
import Team from "./Team/Team";
import Footer from "./Footer/FooterHome";
import HomeLanding from "./HomeLanding/HomeLanding";
import Go2TopBtn from "./UserHome/Components/Go2Top_Btn/Go2Top_Btn";
export default function HomePage() {
  return (
    <div
      className=" home__page--bg"
      style={{ overflowX: "hidden", }}
    >
      <Go2TopBtn />
      <Preload />
      <Header />
      <HomeLanding />
      <Services />
      <Platform />
      <Team />
      <Footer />
    </div>
  );
}
