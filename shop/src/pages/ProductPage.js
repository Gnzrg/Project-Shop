import React from "react";
import LandingHeader from "../components/LandingHeader";
import ProductSection1 from "../components/ProductSection1";
import ProductSection2 from "../components/ProductSection2";
import Header from "../components/header";
import Footer from "../components/Footer";
import { useContext } from "react";
import { Context } from "../contexts/UserContext";
export default function ProductPage() {
  const { isLogin, setIsLogin } = useContext(Context);
  return (
    <div className="bg-light container-fluid">
      {localStorage.getItem("currentUserId") ? <LandingHeader /> : <Header />}
      <ProductSection1 />
      <ProductSection2 />
      <Footer />
    </div>
  );
}
