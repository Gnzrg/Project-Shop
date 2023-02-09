import React from "react";
import LandingHeader from "../components/LandingHeader";
import LandingSection1 from "../components/LandingSection1";
import LandingSection2 from "../components/LandingSection2";
import LandingSection3 from "../components/LandingSection3";
import LandingSection4 from "../components/LandingSection4";
import Footer from "../components/Footer";
export default function LandingPage() {
  return (
    <div className="container-fluid">
      <LandingHeader />
      <LandingSection1 />
      <LandingSection2 />
      <LandingSection3 />
      <LandingSection4 />
      <Footer />
    </div>
  );
}
