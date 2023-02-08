import React from "react";

export default function LandingSection2() {
  return (
    <div className="container-fluid pt-5 ">
      <div className="container px-5">
        <div className="sec2Top w-100 d-flex justify-content-start">
          <h4>Benefits</h4>
        </div>
        <div className="sec2Mid d-md-flex justify-content-between">
          <div className="left col-md-4">
            <h2>Benefits when using our services</h2>
          </div>
          <div className="right col-md-4">
            <h5>
              Pellentesque etiam blandit in tincidunt at donec. Eget ipsum
              dignissim placerat nisi, adipiscing mauris non purus parturient.
            </h5>
          </div>
        </div>
        <div className="sec2Bot d-md-flex gap-2">
          <div className="col-md-4 d-flex px-3 bg-white border-white rounded flex-column">
            <div className="pt-4">
              <img src={require("../images/Group 4.png")} alt="" />
            </div>
            <div className="pt-4 px-2">
              <h4>Many Choices</h4>
              <h6>
                Pellentesque etiam blandit in tincidunt at donec. Eget ipsum
                dignissim placerat nisi, adipiscing mauris non.{" "}
              </h6>
            </div>
          </div>
          <div className="col-md-4 d-flex px-3 bg-white border-white rounded flex-column">
            <div className="pt-4">
              <img src={require("../images/Group 5.png")} alt="" />
            </div>
            <div className="pt-4  px-2">
              <h4>Fast and On Time</h4>
              <h6>
                Pellentesque etiam blandit in tincidunt at donec. Eget ipsum
                dignissim placerat nisi, adipiscing mauris non.{" "}
              </h6>
            </div>
          </div>
          <div className="col-md-4 d-flex px-3 bg-white border-white rounded flex-column">
            <div className="pt-4">
              <img src={require("../images/Group 4 (1).png")} alt="" />
            </div>
            <div className="pt-4 px-2">
              <h4>Affordable Price</h4>
              <h6>
                Pellentesque etiam blandit in tincidunt at donec. Eget ipsum
                dignissim placerat nisi, adipiscing mauris non.{" "}
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
