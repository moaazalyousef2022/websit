import React from 'react';

function Section4() {
  return (
    <>
      <div className="section4 d-flex justify-content-center">
        <div className="section4-content" style={{ position: 'absolute' }}>
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <p className="span-section4">see my projects at once && leave here your E-mail address</p>
              </div>
              <div className="col-lg-6  d-flex justify-content-center align-items-center">
                <div className="input-container">
                  <input type="email" placeholder="Email address moo3lim" className="my-input" maxlength="15"></input>
                  <button className="my-button">Submit</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Section4;
