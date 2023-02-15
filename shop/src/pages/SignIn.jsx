import React, { useEffect, useState } from "react";
import Header from "../components/header";
import LandingHeader from "../components/LandingHeader";
import Footer from "../components/Footer";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../contexts/UserContext";

export default function SignIn() {
  const { isLogin, setIsLogin } = useContext(Context);
  const [data, setData] = useState([]);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  useEffect(() => {
    axios
      .get("http://localhost:8090/api/user")
      .then((res) => setData(res.data.result));
  }, []);
  const Check = () => {
    data.map((e) => {
      if (e.username == username && e.password == password) {
        setIsLogin(true);
        localStorage.setItem("currentUser", JSON.stringify({ name: username }));
      }
    });
    if (JSON.parse(localStorage.getItem("currentUser"))?.name == username) {
      alert(`hello ${username}`);
    } else {
      alert("username password buruu bn");
    }
  };

  return (
    <div className="container-fluid ">
      {isLogin ? <LandingHeader /> : <Header />}
      <div className="container py-5 my-5 d-flex flex-column align-items-center gap-3">
        <h1 className="text-center">Sign In</h1>
        <input
          className="form-control w-50"
          type="text"
          placeholder="Username..."
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          className="form-control w-50"
          type="password"
          placeholder="Password..."
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="btn btn-primary" onClick={Check}>
          <NavLink to="/" className="text-white text-decoration-none">
            Sign In
          </NavLink>
        </button>
      </div>
      <Footer />
    </div>
  );
}
