import Preload from "../Preload/Preload";
import Header from "../Header/HeaderHome";
import Team from "../Team/TeamSection";
import Footer from "../Footer/FooterHome";
import HomeLanding from "../HomeLanding/HomeLanding";
import TestimonialsSection from "../TestimonialsSection/TestimonialsSection";
import Go2TopBtn from "../UserHome/Components/Go2Top_Btn/Go2Top_Btn";
export default function HomePage() {
  return (
    <div className=" home__page--bg" style={{ overflowX: "hidden" }}>
      <Go2TopBtn />
      <Preload />
      <Header />
      <HomeLanding />
      <Team />
      <TestimonialsSection />
      <Footer />
    </div>
  );
}
