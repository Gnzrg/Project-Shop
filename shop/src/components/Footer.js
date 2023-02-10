import React from "react";

import { useEffect, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
export default function Footer() {
  const [data, setData] = useState([]);
  const [brandData, setBrandData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8090/api/category")
      .then((res) => setData(res.data.result));
  }, []);
  useEffect(() => {
    axios
      .get("http://localhost:8090/api/brand")
      .then((res) => setBrandData(res.data.result));
  }, []);
  console.log(data);
  return (
    <div className="container-fluid py-5">
      <div className="container border-top d-md-flex align-items-center pt-5 justify-content-between">
        <div className="footerRight col-md-4">
          <img src={require("../images/Frame 1.png")} alt="" />
          <p className="pt-4">
            Lalasia is digital agency that help you make better experience
            iaculis cras in.
          </p>
        </div>
        <div className="col-md-5 d-flex">
          <div className="col-md-4">
            <ul className="list-unstyled">
              <li className="fw-bold pb-2 ">Products</li>
              {data.map((e) => {
                return <li className="pt-2">{e.categoryName}</li>;
              })}
            </ul>
          </div>
          <div className="col-md-4">
            <ul className="list-unstyled">
              <li className="fw-bold pb-2">Brands</li>
              {brandData.map((e) => {
                return (
                  <li className="pt-2">
                    <NavLink className="text-decoration-none text-dark">
                      {e.brandName}
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="col-md-4">
            <ul className="list-unstyled">
              <li className="fw-bold">Follow Us</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
