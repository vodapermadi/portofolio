import React from "react";

const Project = () => {
  return (
    <>
      <div
        className="bg4 py-5"
        id="project"
        style={{ fontFamily: "Nunito,sans-serif" }}
      >
        <div className="container py-5">
          <div className="row justify-content-center">
            <div className="col-md-12 text-center py-5">
              <h1>Project</h1>
            </div>
            <div className="col-md-4 text-center">
              <div>
                <h5 className="shadow py-5">
                  <a
                    className="text-dark"
                    href="https://vodapermadi.github.io/weather-app/"
                  >
                    Weather App
                  </a>
                </h5>
              </div>
            </div>
            <div className="col-md-4 text-center">
              <div>
                <h5 className="shadow py-5">
                  <a
                    className="text-dark"
                    href="https://vodapermadi.github.io/abnormal"
                  >
                    Web Tim
                  </a>
                </h5>
              </div>
            </div>
            <div className="col-md-4 text-center">
              <div>
                <h5 className="shadow py-5">
                  <a
                    className="text-dark"
                    href="https://github.com/vodapermadi/Machine-Learning/tree/master/regresi-linier-sederhana"
                  >
                    Regresion Linier
                  </a>
                </h5>
              </div>
            </div>
            <div className="col-md-4 text-center">
              <div>
                <h5 className="shadow py-5">
                  <a
                    className="text-dark"
                    href="https://github.com/vodapermadi/Machine-Learning/tree/master/regresi-linier-ganda"
                  >
                    Multiple Regresion Linier
                  </a>
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
