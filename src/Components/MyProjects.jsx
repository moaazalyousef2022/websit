import React, { useState, useEffect } from 'react';
import images from '../Data/images';
import Image from './image';
import { Link as LinkTo } from 'react-scroll';

function MyProjects() {
  const [thirdSection, setThirdSection] = useState(false);
  useEffect(() => {
    setThirdSection(thirdSection);
  }, [thirdSection]);

  const makeTrue = () => {
    setThirdSection(true);
  };

  const makeFalse = () => {
    setThirdSection(false);
  };

  const colorWhite = {
    color: 'white',
    paddingTop: '20px',
  };

  const buttonStyle = {
    width: '200px',
    height: '50px',
    borderRadius: '10px',
    fontSize: '25px',
    marginBottom: '10px',
  };
  return (
    <>
      <div className="container-fluid MyProjectsDad">
        <h2 id="myProject" style={colorWhite}>
          My Project
        </h2>
        {!thirdSection ? (
          <p style={{ color: 'white', paddingTop: '10px', fontSize: '18px' }}>
            My name is mo3az_alyousef,i live in Aleppo,this is the proj in react
          </p>
        ) : null}

        <div className="container d-flex justify-content-center">
          <div className="row no-gutters">
            <div className="col-lg-4">
              <button onClick={makeFalse} type="button" className="btn custom" style={buttonStyle}>
                1st Section
              </button>
            </div>
            <div className="col-lg-4">
              <LinkTo
                style={{ color: 'white', textDecoration: 'none' }}
                activeClass="active"
                to="myProjectForm"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <button type="button" className="btn custom" style={buttonStyle}>
                  2nt Section
                </button>
              </LinkTo>
            </div>
            <div className="col-lg-4">
              <button onClick={makeTrue} type="button" className="btn custom" style={buttonStyle}>
                3rd Section
              </button>
            </div>
          </div>
        </div>
        <div style={{ marginTop: '10PX' }} className="container d-flex justify-content-center">
          {!thirdSection ? (
            <div className="row d-flex justify-content-center">
              {images.map((item, index) => (
                <div
                  style={{ borderRadius: '15px' }}
                  className="col-lg-4 col-md-6 d-flex justify-content-center"
                  key={index}
                >
                  <Image path={item.path}></Image>
                </div>
              ))}
            </div>
          ) : (
            <p style={{ color: 'white', paddingTop: '10px', fontSize: '18px' }}>
              My name is mo3az_alyousef,i live in Aleppo,this is the proj in react
            </p>
          )}
        </div>
      </div>
    </>
  );
}

export default MyProjects;
