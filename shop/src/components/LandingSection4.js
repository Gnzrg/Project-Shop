import React from "react";
export default function LandingSection4() {
  return (
    <div className="container-fluid pt-5">
      <div className="sec4Top container px-5 d-flex justify-content-start">
        <h4>Our Product</h4>
      </div>
      <div className="sec4Mid container px-5 d-md-flex justify-content-between">
        <div className="sec4Right col-md-5">
          <h2>Crafted by talented and high quality material</h2>
          <p>
            Pellentesque etiam blandit in tincidunt at donec. Eget ipsum
            dignissim placerat nisi, adipiscing mauris non purus parturient.
            morbi fermentum, vivamus et accumsan dui tincidunt pulvinar
          </p>
          <button>Learn More</button>
          <img
            src={require("../images/sec4left.jpg")}
            alt=""
            className="pt-4"
          />
        </div>
        <div className="sec4Left col-md-5  d-flex flex-column">
          <div className="d-flex gap-3 justify-content-end">
            <div className="rightTop col-3">
              <h2>20+</h2>
              <p>Years Experience</p>
            </div>
            <div className="col-3">
              <h2>483</h2>
              <p>Happy Client</p>
            </div>
            <div className="col-3">
              <h2>150+</h2>
              <p>Project Finished</p>
            </div>
          </div>
          <div className="rightbot">
            <img src={require("../images/sec4right.jpg")} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
