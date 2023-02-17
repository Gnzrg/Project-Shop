import React from "react";

import { useEffect, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../contexts/UserContext";
export default function LandingHeader() {
  const [menuData, setMenuData] = useState([]);
  const { isLogin, setIsLogin } = useContext(Context);
  const [data, setData] = useState({});
  const [user, setUser] = useState("");
  useEffect(() => {
    getData();
  }, []);
  const getData = () => {
    axios
      .get("http://localhost:8090/api/menu")
      .then((res) => setMenuData(res.data.result));
    setUser(localStorage.getItem("currentUserId"));
  };

  const getData1 = () => {
    console.log(user.id);
    axios
      .get(`http://localhost:8090/api/user/${user?.id}`)
      .then((res) => setData(res.data.result));
  };
  let styleObj = {
    color: "paleturquoise",
    textDecoration: "underline",
  };
  let styleObj1 = {
    color: "black",
    textDecoration: "none",
  };
  const Exit = () => {
    localStorage.removeItem("currentUserId");
    localStorage.removeItem("currentUserName");

    setIsLogin(!isLogin);
    getData();
  };

  return (
    <div className="container-fluid border-bottom py-2">
      <div className="row">
        <div className="logo col-md-6">
          <img src={require("../images/Frame 1.png")} alt="" />
        </div>
        <div className="col-md-6 d-flex justify-content-between">
          <div className="nav col-md-6">
            <ul className="list-unstyled d-flex gap-5 align-items-center pt-2">
              {menuData.map((e) => {
                return (
                  <li>
                    <NavLink
                      to={e.link}
                      style={({ isActive }) =>
                        isActive ? styleObj : styleObj1
                      }
                    >
                      {e.menuName}
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="icons col-md-4 ">
            <div>
              <button className="border border-light bg-light fs-3">
                <i class="bi bi-bag"></i>
              </button>

              <button
                className="border border-light bg-light fs-3 ms-3"
                data-bs-target="#collapseExample"
                data-bs-toggle="collapse"
                onClick={getData1}
              >
                <i class="bi bi-person"></i>
              </button>
              <button
                className="border border-light bg-light fs-3 ms-3"
                onClick={Exit}
              >
                <i class="bi bi-box-arrow-in-right"></i>
              </button>
            </div>
            <div class="collapse " id="collapseExample">
              <div class="card card-body">
                <ul></ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
