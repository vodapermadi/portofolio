import React from "react";
import "../../template/stylingNavbar.css";
import react from "./Brands/react.png";
import laravel from "./Brands/laravel.png";
import js from "./Brands/js.png";
import python from "./Brands/python.png";
import php from "./Brands/php.png";
import "../../template/stylingNavbar.css";

const Skill = () => {
  return (
    <>
      <div className="bg3 py-5" style={{ fontFamily: "Nunito, sans-serif" }} id="skill" >
        <div className="container py-5">
          <div className="row justify-content-center">
            <div className="col-md-12 text-center text-white">
              <h1>Skill</h1>
            </div>
            <div
              className="col-md-3 text-center py-4 mx-4 my-4"
              style={{ boxShadow: "2px 2px 5px gray", borderRadius: "20px" }}
            >
              <p>
                <img src={react} style={{ width: "140px" }} />
                <h5
                  className="mt-3 text-white  py-2 shadow"
                  style={{ borderRadius: "30px" }}
                >
                  ReactJs
                </h5>
              </p>
            </div>
            <div
              className="col-md-3 text-center py-4 mx-4 my-4"
              style={{ boxShadow: "2px 2px 5px gray", borderRadius: "20px" }}
            >
              <p>
                <img
                  src={laravel}
                  style={{ width: "140px", borderRadius: "30px" }}
                />
                <h5
                  className="mt-3 text-white py-2 shadow"
                  style={{ borderRadius: "30px" }}
                >
                  Laravel
                </h5>
              </p>
            </div>
            <div
              className="col-md-3 text-center py-4 mx-4 my-4"
              style={{ boxShadow: "2px 2px 5px gray", borderRadius: "20px" }}
            >
              <p>
                <img
                  src={js}
                  style={{ width: "140px", borderRadius: "30px" }}
                />
                <h5
                  className="mt-3 text-white py-2 shadow"
                  style={{ borderRadius: "30px" }}
                >
                  Javascript
                </h5>
              </p>
            </div>
            <div
              className="col-md-3 text-center py-4 mx-4 my-4"
              style={{ boxShadow: "2px 2px 5px gray", borderRadius: "20px" }}
            >
              <p>
                <img
                  src={python}
                  style={{ width: "140px", borderRadius: "30px" }}
                />
                <h5
                  className="mt-3 text-white py-2 shadow"
                  style={{ borderRadius: "30px" }}
                >
                  Python
                </h5>
              </p>
            </div>
            <div
              className="col-md-3 text-center py-4 mx-4 my-4"
              style={{ boxShadow: "2px 2px 5px gray", borderRadius: "20px" }}
            >
              <p>
                <img
                  src={php}
                  style={{ width: "140px", borderRadius: "30px" }}
                />
                <h5
                  className="mt-3 text-white py-2 shadow"
                  style={{ borderRadius: "30px" }}
                >
                  PHP
                </h5>
              </p>
            </div>
          </div>
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#222831"
          fill-opacity="1"
          d="M0,64L48,106.7C96,149,192,235,288,224C384,213,480,107,576,85.3C672,64,768,128,864,176C960,224,1056,256,1152,245.3C1248,235,1344,181,1392,154.7L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        ></path>
      </svg>
    </>
  );
};

export default Skill;
