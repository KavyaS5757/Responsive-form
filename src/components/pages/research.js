import React, { useState } from 'react';

import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBRadio,
} from 'mdb-react-ui-kit';

const Research = () => {
  const [formData, setFormData] = useState({
    personalWebsite: '',
    profession: '',
    researchPaper: '',
    previousWorks: '',
  });

  const handleInputChange = (e) => {
	const { name, value } = e.target;
	setFormData((prevData) => ({
	  ...prevData,
	  [name]: value,
	}));
  };
  
  const handleFileInputChange = (e) => {
	const { name } = e.target;
	const file = e.target.files[0];
	setFormData((prevData) => ({
	  ...prevData,
	  [name]: file,
	}));
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform validation and submit form data
    console.log(formData);
  };

  const handlePersonalWebsiteClick = () => {
    if (formData.personalWebsite) {
      window.open(formData.personalWebsite, '_blank');
    }
  };

   const handleProfessionChange = (value) => {
     setFormData((prevData) => ({
       ...prevData,
       profession: value,
     }));
   };

  return (
    <div>
      <MDBContainer fluid>
        <MDBRow>
          <MDBCard>
            <MDBCardBody className="px-0">
              <MDBRow>
                {/* <MDBCol md="6">
                  <MDBInput
                    wrapperClass="mb-4"
                    label="Official Mail ID"
                    size="lg"
                    id="form1"
                    type="text"
                    name="personalWebsite"
                    value={formData.personalWebsite}
                    onChange={handleInputChange}
                    onClick={handlePersonalWebsiteClick}
                  />
                </MDBCol> */}
				&nbsp;
				&nbsp;

                <MDBCol md='6' className='mb-4'>
					&nbsp;
					&nbsp;
                  <h6 className="fw-bold" style={{ color: 'black' }}>
                    Profession:{' '}
                  </h6>
                  <MDBRadio
                    name="profession"
                    id="inlineRadio1"
                    value="Professor"
                    label="Professor"
                    
                    checked={formData.profession === 'Professor'}
                    onChange={handleInputChange} onClick={handlePersonalWebsiteClick}
                    radioClassName="custom-radio"
                  />
                  <MDBRadio
                    name="profession"
                    id="inlineRadio2"
                    value="Student"
                    label="Student"
                 
                    checked={formData.profession === 'Student'}
                    onChange={handleInputChange} onClick={handlePersonalWebsiteClick}
                    radioClassName="custom-radio"
					
                  />
                </MDBCol>
              </MDBRow>

              {formData.profession === 'Professor' && (
                <>
                  <MDBRow>
					&nbsp;
					&nbsp;
                    <MDBCol md="5">
                      <MDBInput
                        wrapperClass="mb-4"
                        label="Your Research Areas"
                        size="lg"
                        id="form3"
                        type="text"
                      />
                    </MDBCol>

					<MDBCol md="6">
                      <MDBInput
                        wrapperClass="mb-4"
                        label="Research paper URL"
                        size="lg"
                        id="form4"
                        type="email"
                      />
                    </MDBCol>

                  </MDBRow>
                  <MDBRow>
					&nbsp;
					&nbsp;
					&nbsp;
				    <MDBCol md="6">
                      <div className="mb-4">
                        <label htmlFor="form7" className="form-label" style={{ cursor: 'pointer'}}>
                          <u>Upload Research Paper</u>
                        </label>
                        <input
                          className="form-control"
                          type="file"
                          id="form7"
                          name="researchPaperFile"
                          onChange={handleFileInputChange}
                        />
                      </div>
                    </MDBCol>
                    
                  </MDBRow>
                  <MDBRow>
					&nbsp;
					&nbsp;
                    <MDBCol md="10" >
                      <MDBInput style={{position:'center'}}
                        wrapperClass='mb-4' textarea id='form4Example3' rows={5} columns label='Write about your Research' className="custom-textarea" wrap='soft'
                      />
                    </MDBCol>
                    
                  </MDBRow>
                </>
              )}

              {formData.profession === 'Student' && (
                <>
                  <MDBRow>
					&nbsp;
					&nbsp;
                    <MDBCol md="5">
                      <MDBInput
                        wrapperClass="mb-4"
                        label="Department"
                        size="lg"
                        id="form8"
                        type="rel"
                      />
                    </MDBCol>

					<MDBCol md="6">
                      <MDBInput
                        wrapperClass="mb-4"
                        label="Work Samples"
                        size="lg"
                        id="form9"
                        type="text"
                      />
                    </MDBCol>
                  </MDBRow>
                  
                  <MDBRow>
					&nbsp;
					&nbsp;
                    <MDBCol md="5">
                      <MDBInput
                        wrapperClass="mb-4"
                        label="Projects"
                        size="lg"
                        id="form11"
                        type="textarea"
                        name="previousWorks"
                        value={formData.previousWorks}
                        onChange={handleInputChange}
                      />
                    </MDBCol>

					<MDBCol md="6">
                      <div className="mb-4">
                        <label htmlFor="form7" className="form-label" style={{ cursor: 'pointer'}}>
                          <u>Upload Your Resume</u>
                        </label>
                        <input
                          className="form-control"
                          type="file"
                          id="form7"
                          name="researchPaperFile"
                          onChange={handleFileInputChange}
                        />
                      </div>
                    </MDBCol>
                  </MDBRow>
                </>
              )}
			  &nbsp;
			  &nbsp;

              <MDBBtn className="mb-4" onClick={handleSubmit}>
                Submit
              </MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBRow>
      </MDBContainer>
      <style>{`
        .custom-radio input[type='radio'] {
          position: absolute;
          opacity: 0;
          visibility: hidden;
          pointer-events: none;
        }

        .custom-radio .custom-control-input:checked ~ .custom-control-label::before {
          background-color: #4f93ce !important;
        }

        .custom-radio .custom-control-input:checked ~ .custom-control-label::after {
          content: '';
          position: absolute;
          display: inline-block;
          width: 10px;
          height: 10px;
          margin-left: 6px;
          border-radius: 50%;
          background-color: #fff;
        }

        .custom-radio .custom-control-input:checked ~ .custom-control-label::before,
        .custom-radio .custom-control-input:checked ~ .custom-control-label::after {
          border: 2px solid #4f93ce;
        }
      `}</style>
    </div>
  );
};

export default Research;
