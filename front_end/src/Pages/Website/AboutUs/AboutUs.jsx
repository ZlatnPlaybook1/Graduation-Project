import React, { useEffect, useState } from "react";
import Header from "../Header/HeaderHome";
import Team from "../Team/TeamSection";
import Footer from "../Footer/FooterHome";
import HomeLanding from "../HomeLanding/HomeLanding";
import TestimonialsSection from "../TestimonialsSection/TestimonialsSection";
import Go2TopBtn from "../UserHome/Components/Go2Top_Btn/Go2Top_Btn";
import Preloader from "../Preloader/Preloader";
export default function HomePage() {
  const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const timer = setTimeout(() => {
        setLoading(false);
      }, 300);
      return () => clearTimeout(timer);
    }, []);
  return (
    <div className=" home__page--bg" style={{ overflowX: "hidden" }}>
      <Go2TopBtn />
      <Preloader  loading={loading}/>
      <Header />
      <HomeLanding />
      <Team />
      <TestimonialsSection />
      <Footer />
    </div>
  );
}
