import React from "react";
import "../../template/stylingNavbar.css";
import react from "./Brands/react.png";
import laravel from "./Brands/laravel.png";
import js from "./Brands/js.png";
import "../../template/stylingNavbar.css";

const Skill = () => {
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#b200b2"
          fillOpacity="1"
          d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
      <div className="bg2 py-5" style={{ fontFamily: "Nunito, sans-serif" }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-12 text-center text-white">
              <h1>Skill</h1>
            </div>
            <div
              className="col-md-3 text-center py-4 mx-2 my-2"
              style={{ boxShadow: "2px 2px 5px black", borderRadius: "20px" }}
            >
              <p>
                <img src={react} style={{ width: "140px" }} />
                <h5 className="mt-3 text-white text1 py-2 shadow" style={{  borderRadius : "30px" }} >
                    ReactJs
                </h5>
              </p>
            </div>
            <div
              className="col-md-3 text-center py-4 mx-2 my-2"
              style={{ boxShadow: "2px 2px 5px black", borderRadius: "20px" }}
            >
              <p>
                <img src={laravel} style={{ width: "140px" }} />
                <h5 className="mt-3 text-white text1 py-2 shadow" style={{  borderRadius : "30px" }} >
                    Laravel
                </h5>
              </p>
            </div>
            <div
              className="col-md-3 text-center py-4 mx-2 my-2"
              style={{ boxShadow: "2px 2px 5px black", borderRadius: "20px" }}
            >
              <p>
                <img src={js} style={{ width: "140px" }} />
                <h5 className="mt-3 text-white text1 py-2 shadow" style={{  borderRadius : "30px" }} >
                    Javascript
                </h5>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skill;
