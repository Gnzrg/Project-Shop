import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
export default function LandingSection6() {
  const [data, setData] = useState([]);
  useEffect((e) => {
    axios
      .get("http://localhost:8090/api/products")
      .then((res) => setData(res.data.result));
  });
  return (
    <div className="container-fluid pt-5">
      <div className="sec6Top d-flex container justify-content-start">
        <h5>Articles</h5>
      </div>
      <div className="container d-flex gap-3">
        <div className="sec6Left col-md-6">
          <h2 className="w-75 fw-bold">
            The best furniture comes from Lalasia
          </h2>
          <p>Pellentesque etiam blandit in tincidunt at donec. </p>
          <div className="">
            <img src={data[12].thumbImg} alt="" className="w-100" />
          </div>
        </div>
        <div className="sec6Right col-md-6 d-flex flex-column gap-4">
          <div className="col-3 d-flex">
            <div className="col-6" style={{ width: "100%", height: "100%" }}>
              <img
                src={data[0].thumbImg}
                alt=""
                style={{ width: "100%", height: "100%" }}
              />
            </div>
            <div className="sec6Card col-6 w-100 d-flex flex-column">
              <p>{data[0].categoryName}</p>
              <h2>{data[0].productName}</h2>
              <p className="text-truncate">{data[0].description}</p>
              <div className="d-flex justify-content-between align-items-center">
                <h5>{data[0].price}</h5>
                <p>{data[0].date}</p>
              </div>
            </div>
          </div>
          <div className="col-3 d-flex">
            <div className="col-6" style={{ width: "100%", height: "100%" }}>
              <img
                src={data[0].thumbImg}
                alt=""
                style={{ width: "100%", height: "100%" }}
              />
            </div>
            <div className="sec6Card col-6 w-100 d-flex flex-column">
              <p>{data[0].categoryName}</p>
              <h2>{data[0].productName}</h2>
              <p className="text-truncate">{data[0].description}</p>
              <div className="d-flex justify-content-between align-items-center">
                <h5>{data[0].price}</h5>
                <p>{data[0].date}</p>
              </div>
            </div>
          </div>
          <div className="col-3 d-flex">
            <div className="col-6" style={{ width: "100%", height: "100%" }}>
              <img
                src={data[0].thumbImg}
                alt=""
                style={{ width: "100%", height: "100%" }}
              />
            </div>
            <div className="sec6Card col-6 w-100 d-flex flex-column">
              <p>{data[0].categoryName}</p>
              <h2>{data[0].productName}</h2>
              <p className="text-truncate">{data[0].description}</p>
              <div className="d-flex justify-content-between align-items-center">
                <h5>{data[0].price}</h5>
                <p>{data[0].date}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sec6Bot container d-flex pt-5 justify-content-between">
        <h2>Join with me to get special discount</h2>
        <button className="px-4 text-white">
          Learn More <i class="bi bi-arrow-right"></i>
        </button>
      </div>
    </div>
  );
}
