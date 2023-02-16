import React from "react";
import LandingHeader from "../components/LandingHeader";
import Header from "../components/header";
import { useContext } from "react";
import { Context } from "../contexts/UserContext";
export default function ServicePage() {
  const { isLogin, setIsLogin } = useContext(Context);
  return (
    <div className="container-fluid">
      {localStorage.getItem("currentUser") ? <LandingHeader /> : <Header />}
    </div>
  );
}
