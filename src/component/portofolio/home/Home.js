import React from "react";
import NavbarComponent from "../../template/NavbarComponent";
import Spline from "@splinetool/react-spline";
import "../../template/stylingNavbar.css";
import About from "../about/About";
import Skill from "../skill/Skill";

const Home = () => {
  return (
    <>
      <NavbarComponent />
      <div className="bg1" style={{ fontFamily: "Nunito , sans-serif" }}>
        <div className="hero container py-5 px-3">
          <div className="row">
            <div className="col-md-7 ms-auto">
              <Spline
                style={{ borderRadius: "20px" }}
                scene="https://prod.spline.design/TsdntGKKjh4DTyRn/scene.splinecode"
              />
            </div>
            <div
              className="col-md-5 mt-2 ms-auto"
              style={{ borderRadius: "20px", boxShadow: "2px 2px 10px black" }}
            >
              <h2 className="text-center mx-auto text-white py-5 px-2">
                Hellooo..!! <br /> My name is Philipus Voda Permadi, <br /> but
                they call me Voda..
              </h2>
            </div>
          </div>
        </div>
      </div>

      {/* svg for home */}

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#b200b2"
          fillOpacity="1"
          d="M0,64L30,74.7C60,85,120,107,180,106.7C240,107,300,85,360,96C420,107,480,149,540,181.3C600,213,660,235,720,218.7C780,203,840,149,900,122.7C960,96,1020,96,1080,117.3C1140,139,1200,181,1260,197.3C1320,213,1380,203,1410,197.3L1440,192L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"
        ></path>
      </svg>
      <About />

      {/* svg for about */}

      

      <Skill />
    </>
  );
};

export default Home;
