import React from 'react';
import Typewriter from './Typewriter';
function Space() {
  return (
    <>
      <div className="background-container">
        <div className="background-image">
          <div style={{ paddingTop: '200px' }} className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="speech-container">
                  <button type="button" className="btn btn-purple">
                    Welcome All In My Portfolio
                  </button>

                  <div style={{ marginTop: '2rem', fontSize: '45px', color: 'white' }} className="speech-content">
                    Hi! I'm Mo3az
                    <br />
                    Mohammed
                    <br /> AL Yousef ,
                    <Typewriter words={['Front-End ', 'Back-End ', 'Full Stack ', 'Web Development ']} delay={200} />
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="moving-image"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Space;
