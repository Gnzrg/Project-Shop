import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

export default function LandingSection3() {
  const [proData, setProData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8090/api/products")
      .then((res) => setProData(res.data.result));
  }, []);
  console.log(proData);
  return (
    <div className="container-fluid pt-5">
      <div className="sec3Title container text-center w-50">
        <h5>Product</h5>
        <h3>Our popular product</h3>
        <p className="w-75 ps-5 text-center">
          Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim
          placerat nisi, adipiscing mauris non purus parturient.
        </p>
      </div>
      <div className="container-fluid d-flex gap-3 overflow-auto">
        {proData.map((e) => {
          return (
            <div className="card col-md-2 " style={{ height: "420px" }}>
              <div className="card-head" style={{ height: "50%" }}>
                <img
                  src={e.thumbImg}
                  alt=""
                  className="img-thumbnail img-fluid"
                  style={{ height: "100%", width: "100%" }}
                />
              </div>
              <div className="card-body pt-3">
                <h6 className="text-secondary">{e.categoryName}</h6>
                <h3>{e.productName}</h3>
                <h6 className="text-truncate">{e.description}</h6>
                <div className="d-flex justify-content-between align-items-center">
                  <h4>{e.price}</h4>
                  {e.isTrending ? (
                    <h6 className="text-success">Trending</h6>
                  ) : (
                    <h6 className="text-danger">Not Trending</h6>
                  )}
                </div>
                <div className="d-flex justify-content-between ">
                  <button className="btn btn-warning">Save</button>
                  <button className="btn btn-success">Buy</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
