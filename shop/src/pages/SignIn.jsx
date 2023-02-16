import React, { useEffect, useState } from "react";
import Header from "../components/header";
import LandingHeader from "../components/LandingHeader";
import Footer from "../components/Footer";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../contexts/UserContext";
import { UserLogContext } from "../contexts/LogUserContext";
export default function SignIn() {
  const navigate = useNavigate();
  const { isLogin, setIsLogin } = useContext(Context);
  const { user, setUser } = useContext(UserLogContext);
  const [data, setData] = useState([]);
  const [id, setId] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // const [id , setId ] = useState("")
  useEffect(() => {
    axios
      .get("http://localhost:8090/api/user")
      .then((res) => setData(res.data.result));
  }, []);

  const Check = () => {
    data.map((e) => {
      if (e.username == username && e.password == password) {
        setIsLogin(true);
        localStorage.setItem(
          "currentUserName",
          JSON.stringify({ name: e.username })
        );
        localStorage.setItem("currentUserId", JSON.stringify({ id: e.userId }));
        setUser(e.userId);
        setId(e.userId);
      }
    });
    if (JSON.parse(localStorage.getItem("currentUserName"))?.name == username) {
      alert(`hello ${username}`);
    } else {
      alert("username password buruu bn");
    }
  };
  useEffect(() => {
    if (localStorage.getItem("currentUserName")) {
      navigate("/");
      setIsLogin(true);
      setUser(localStorage.getItem("currentUserId"));
    }
  }, []);
  // console.log(user);
  return (
    <div className="container-fluid ">
      {localStorage.getItem("currentUser") ? <LandingHeader /> : <Header />}
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
