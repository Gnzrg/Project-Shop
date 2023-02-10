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
    <div className="container-fluid">
      <div className="sec5Top container text-center d-flex flex-column justify-content-center align-items-center">
        <h6>Testimonials</h6>
        <h2>What our customer say</h2>
        <p className="w-50">
          Pellentesque etiam blandit in tincidunt at donec. Eget ipsum dignissim
          placerat nisi, adipiscing mauris non purus parturient.
        </p>
      </div>
      <div className="sec5Bot container-fluid d-flex gap-3">
        {userData.map((e) => {
          return (
            <div className="col-md-3">
              <h3 className="">
                <i class="bi bi-chat-square-dots"></i>
              </h3>
              <div className="d-flex gap-2">
                <h4>{e.firstName}</h4>
                <h4>{e.lastName}</h4>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
