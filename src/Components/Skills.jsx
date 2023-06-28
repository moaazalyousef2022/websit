import Carousel from './Carousel';
import React from 'react';
import circleData from '../Data/circleData';

function Skills() {
  return (
    <div id="skills" className="section1">
      <div className="container">
        <div className="containerr">
          <h1 className="adress-session1">skills</h1>
          <p className="adress-session1 para">You Can See My Skills Here Yasts</p>
          <div className="row">
            <Carousel circleData={circleData}></Carousel>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
