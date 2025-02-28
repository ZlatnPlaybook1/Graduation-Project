import Preload from "./Preload/Preload";
import Header from "./Header/HeaderHome";
import CountsSection  from "./CountsSection/CountsSection";
import Services from "./Services/Services";
import Platform from "./Platform/Platform";
import PopularCoursesSection from "./PopularCoursesSection/PopularCoursesSection";
import Team from "./Team/TeamSection";
import Footer from "./Footer/FooterHome";
import HomeLanding from "./HomeLanding/HomeLanding";
import TestimonialsSection from "./TestimonialsSection/TestimonialsSection";
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
      <CountsSection />
      <PopularCoursesSection />
      <TestimonialsSection />
      <Footer />
    </div>
  );
}
