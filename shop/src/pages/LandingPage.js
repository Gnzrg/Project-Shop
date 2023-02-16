import React from "react";
import LandingHeader from "../components/LandingHeader";
import LandingSection1 from "../components/LandingSection1";
import LandingSection2 from "../components/LandingSection2";
import LandingSection3 from "../components/LandingSection3";
import LandingSection4 from "../components/LandingSection4";
import LandingSection5 from "../components/LandingSection5";
import LandingSection6 from "../components/LandingSection6";
import Header from "../components/header";
import Footer from "../components/Footer";
import { useContext } from "react";
import { Context } from "../contexts/UserContext";
export default function LandingPage() {
  const { isLogin, setIsLogin } = useContext(Context);
  return (
    <div className="container-fluid">
      {localStorage.getItem("currentUserId") ? (
        <LandingHeader />
      ) : (
        <Header setIsLogin={setIsLogin} />
      )}

      <LandingSection1 />
      <LandingSection2 />
      <LandingSection3 />
      <LandingSection4 />
      <LandingSection5 />
      <LandingSection6 />
      <Footer />
    </div>
  );
}
