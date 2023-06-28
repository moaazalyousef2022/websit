import React from 'react';

function image({ path }) {
  return (
    <>
      <div className="featured-img  ">
        <div className="overlay-img">
          <img
            src={path}
            alt="mo3az"
            className="img-thumbnail featured-photo"
            style={{ borderRadius: '15px', height: '220px', width: '360px' }}
          ></img>
          <div className="featured-icon">
            <h3 className="featured-icon-adr adr-CATEGORY">Business startup</h3>
            <p className="featured-icon-par par-lorem">Desgin & Development</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default image;
