import React, { useEffect, useState } from "react";
import Courses from "./Components/Courses/Courses";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Landing from "./Components/LearnLanding/LearnLanding";
import ThemeSwitcher from "./Components/ThemeSwitcher/ThemeSwitcher";
import Preloader from "../Preloader/Preloader";
export default function UserHome() {
  const [loading, setLoading] = useState(true);
    useEffect(() => {
      const timer = setTimeout(() => {
        setLoading(false);
      }, 2000);
      return () => clearTimeout(timer);
    }, []);
  return (
    <div style={{position: "relative"}}>
      <Header />
      <Preloader  loading={loading}/>
      <ThemeSwitcher />
      <Landing />
      <Courses />
      <Footer />
    </div>
  );
}
