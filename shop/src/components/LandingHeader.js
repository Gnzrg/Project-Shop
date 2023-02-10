import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

export default function LandingHeader() {
  const [menuData, setMenuData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8090/api/menu")
      .then((res) => setMenuData(res.data.result));
  }, []);

  return (
    <div className="container-fluid border-bottom py-2">
      <div className="row ">
        <div className="logo col-md-4">
          <img src={require("../images/Frame 1.png")} alt="" />
        </div>
        <div className="nav col-md-4">
          <ul className="list-unstyled d-flex gap-5 align-items-center pt-2">
            {menuData.map((e) => {
              return (
                <li>
                  <NavLink
                    to={e.link}
                    className="text-decoration-none text-dark"
                  >
                    {e.menuName}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="icons col-md-4 ">
          <button className="border border-light bg-light fs-3 me-3">
            <i class="bi bi-bag"></i>
          </button>
          <button className="border border-light bg-light fs-3 ms-3">
            <i class="bi bi-person"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
