import React, { useState } from "react";
import LandingHeader from "../components/LandingHeader";
import Header from "../components/header";
import { useContext } from "react";
import { Context } from "../contexts/UserContext";
export default function AboutPage() {
  const { isLogin, setIsLogin } = useContext(Context);
  return (
    <div className="container-fluid">
      {isLogin ? <LandingHeader /> : <Header />}
    </div>
  );
}
