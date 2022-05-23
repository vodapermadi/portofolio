import React from "react";
import "../../template/stylingNavbar.css"

const About = () => {
  return (
    <>
    <div className="bg2 py-5" id="about" >
      <div className="container py-5" style={{ fontFamily : "Nunito, sans-serif" }} >
        <div className="row">
          <div className="col-md-12 text-center py-5">
            <h1>About Me</h1>
          </div>
          <div className="col-md-6 text-center shadow mb-4">
            <p style={{ fontSize: "22px" }}>
              Hello! My name is Philipus Voda Permadi, <br /> i enjoy my hobbies as a
              web developer and a machine learning
            </p>
          </div>
          <div className="col-md-6 text-center shadow mb-4">
            <p style={{ fontSize: "22px" }}>
              Starting from curiosity, until now I have explored the IT world
              and now I am studying various front end programming languages
              ​​and several front end frameworks.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default About;
