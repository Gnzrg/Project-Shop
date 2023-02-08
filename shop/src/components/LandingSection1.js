import React from "react";

export default function LandingSection1() {
  return (
    <div className="container-fluid pt-5">
      <div className="section1 container d-flex flex-column align-items-center pt-5">
        <div className="top w-75 pb-3">
          <h1 className="fw-bold">Discover Furniture With High Quality Wood</h1>
          <p>
            Pellentesque etiam blandit in tincidunt at donec. Eget ipsum
            dignissim placerat nisi, adipiscing mauris non. Purus parturient
            viverra nunc, tortor sit laoreet. Quam tincidunt aliquam adipiscing
            tempor.
          </p>
        </div>
        <div className="mid w-50 d-flex justify-content-center">
          <div className="input-group w-100 d-flex bg-white justify-content-between py-2 px-2 border-white rounded">
            <div>
              <span className="fs-4 text-muted px-2">
                <i class="bi bi-search"></i>
              </span>

              <input
                type="text"
                placeholder="Search..."
                className="border border-white bg-white fs-5"
              />
            </div>

            <button className="sec1btn px-3">Search</button>
          </div>
        </div>
        <div className="bot w-75 pt-5">
          <img
            src={require("../images/Rectangle 2.jpg")}
            alt=""
            className="w-100"
          />
        </div>
      </div>
    </div>
  );
}
