import React from "react";

import { useEffect, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { Context } from "../contexts/UserContext";
export default function Header({ setIsLogin }) {
  const [menuData, setMenuData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8090/api/menu")
      .then((res) => setMenuData(res.data.result));
  }, []);
  let styleObj = {
    color: "paleturquoise",
    textDecoration: "underline",
  };
  let styleObj1 = {
    color: "black",
    textDecoration: "none",
  };
  return (
    <div className="container-fluid border-bottom py-2">
      <div className="row ">
        <div className="logo col-md-6">
          <img src={require("../images/Frame 1.png")} alt="" />
        </div>
        <div className="col-md-6 d-flex justify-content-between">
          {" "}
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
          <div className="icons col-md-4 d-flex justify-content-around align-items-center">
            <button className="btn btn-success text-white">
              <NavLink
                to="/signup"
                className="text-decoration-none text-white col-md-6"
              >
                Sign Up
              </NavLink>
            </button>
            <button className="btn btn-info text-whte">
              <NavLink
                to="/signin"
                className="text-decoration-none text-white col-md-6"
              >
                Sign In
              </NavLink>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
