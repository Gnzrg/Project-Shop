import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
export default function LandingSection5() {
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8090/api/user")
      .then((res) => setUserData(res.data.result));
  }, []);
  return (
    <div className="container-fluid pt-5">
      <div className="sec5Top container text-center d-flex flex-column justify-content-center align-items-center">
        <h6>Testimonials</h6>
        <h2>What our customer say</h2>
        <p className="w-50">
          Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim
          placerat nisi, adipiscing mauris non purus parturient.
        </p>
      </div>
      <div className="sec5Bot container-fluid d-flex gap-5 overflow-auto">
        {userData.map((e) => {
          return (
            <div className="col-md-3">
              <h3 className="text-info">
                <i class="bi bi-chat-square-dots"></i>
              </h3>

              <p>
                Pellentesque etiam blandit in tincidunt at donec. Eget ipsum
                dignissim placerat nisi, adipiscing mauris non.
              </p>
              <div className="d-flex justify-content-between">
                <h4>{e.firstName}</h4>
                <div className="d-flex">
                  <p className="text-warning">
                    <i class="bi bi-star-fill"></i>
                  </p>
                  <span>4.5</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
