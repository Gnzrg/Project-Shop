import React from "react";
import LandingHeader from "../components/LandingHeader";
import ProductSection1 from "../components/ProductSection1";
import ProductSection2 from "../components/ProductSection2";
import Footer from "../components/Footer";
export default function ProductPage() {
  return (
    <div className="bg-light container-fluid">
      <LandingHeader />
      <ProductSection1 />
      <ProductSection2 />
      <Footer />
    </div>
  );
}
