import React from 'react';

function FormSection() {
  return (
    <div id="myProjectForm" className="section3">
      <div style={{}} className="container-fluid d-flex justify-content-center align-items-center">
        <div className="row">
          <div className="col-md-6">
            <img
              src="image/ei_1687685743860-removebg-preview.png"
              alt="mo3az"
              className="image-section3 lign-items-center justify-content-center scrollScale"
              width="700px"
              height="300px"
            ></img>
          </div>
          <div className="col-md-6 ">
            <div className="form-group">
              <input type="text" className="form-control" id="inp" placeholder="First-Name"></input>
              <input type="text" className="form-control" id="inp" placeholder="Last_Name"></input>
            </div>
            <div className="form-group">
              <input type="text" className="form-control" id="inp" placeholder="Email_Adress"></input>
              <input type="text" className="form-control" id="inp" placeholder="Phone_number"></input>
            </div>
            <div className="form-group">
              <textarea className="form-control" id="comment" placeholder="message"></textarea>
            </div>
            <button
              type="button"
              className="btn btn-outline-light text-dark"
              style={{ width: '150px', height: '50px', marginLeft: '20px', fontSize: '25px' }}
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FormSection;
