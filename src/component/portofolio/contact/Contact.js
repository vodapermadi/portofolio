import React from "react";

const Contact = () => {
  return (
    <>
      <div className="bg5" style={{ fontFamily : "Nunito,sans-serif" }}>
        <div className="container py-5">
          <div className="row justify-content-center py-5">
            <div className="col-md-12 text-center text-white pt-5 pb-2">
              <h1>Contact</h1>
            </div>
            <div className="col-md-6">
                <div className="mb-4">
                    <input type="text" className="form-control" placeholder="Email" />
                </div>
                <div className="mb-4">
                    <textarea className="form-control" placeholder="Message"></textarea>
                </div>
                <div className="mb-4">
                    <button className="btn btn-outline-light fw-bold">Submit</button>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
