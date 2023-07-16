import React, {useState} from 'react';
import './document.css';
import {
	MDBBtn,
	MDBContainer,
	MDBRow,
	MDBCol,
	MDBCard,
	MDBCardBody,
	MDBInput,
	MDBSelect,
	MDBRadio
} 
from 'mdb-react-ui-kit';

const Contact = () => {

	const [formData, setFormData] = useState({
		officialmailid: '',
		Profession: '',
		
	});
	
	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({
		  ...prevData,
		  [name]: value
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

	const handleProfessionChange = (e) => {
	const { value } = e.target;
	setFormData((prevData) => ({
	  ...prevData,
	  profession: value,
	}));
};


	return (
	<>	
	<MDBContainer fluid>
		<MDBRow >
			<MDBCard>
				<MDBCardBody className='px-0'>
				    {/* <div>
		            <h3 style={{color:"black"}}>Contact Details</h3>
		            </div> */}

					<MDBRow>
						<MDBCol md='6'>
							<MDBInput wrapperClass='mb-4' label='Official Mail ID' size='lg' id='form1' type='text' name='officialmailid' value={formData.officialmailid} onChange={handleInputChange} onClick={handlePersonalWebsiteClick}/>
							 {/* <small 
							   className='text-primary'
                               style={{ cursor: 'pointer' }}
                               onClick={handlePersonalWebsiteClick}
                            >
								Click to Visit
							</small>  */}
						</MDBCol>

						<MDBCol md='6' className='mb-4'>
							<h6 className="fw-bold" style={{color:'black'}}>Profession: {' '}</h6>
							<MDBRadio name='Profession' id='inlineRadio1' value='Professor' label='Professor'  onChange={handleInputChange} checked={formData.Profession === 'Professor' } className="custom-radio"/>
							<MDBRadio name='Profession' id='inlineRadio2' value='Student' label='Student'  onChange={handleInputChange} checked={formData.Profession === 'Student'} className="custom-radio"/>
						</MDBCol>

						{/* <MDBCol md='6'>
							<MDBInput wrapperClass='mb-4' label='Last Name' size='lg' id='form2' type='text'/>
						</MDBCol> */}
					</MDBRow>
                {formData.Profession === 'Professor' && (
				 <>
					<MDBRow>
					    <MDBCol md='6'>
							<MDBInput wrapperClass='mb-4' label='Employee ID' size='lg' id='form2' type='text'/>
						</MDBCol>

						{/* <MDBCol md='6' className='mb-4'>
							<h6 className="fw-bold" style={{color:'black'}}>Profession: {' '}</h6>
							<MDBRadio name='Profession' id='inlineRadio1' value='option1' label='Professor' inline onChange={handleInputChange} checked={formData.Profession === 'Professor'}/>
							<MDBRadio name='Profession' id='inlineRadio2' value='option2' label='Student' inline onChange={handleInputChange} checked={formData.Profession === 'Student'}/>
						</MDBCol> */}

                        <MDBCol md='6'>
							<MDBInput wrapperClass='mb-4' label='Designation' size='lg' id='form3' type='text'/>
						</MDBCol>


					</MDBRow>

					<MDBRow>
					    
						<MDBCol md='6'>
							<MDBInput wrapperClass='mb-4' label='Department' size='lg' id='form4' type='text'/>
						</MDBCol>
						<MDBCol md='6'>
							<MDBInput wrapperClass='mb-4' label='Your Personal Website' size='lg' id='form5' type='email' />
						</MDBCol>
						
					</MDBRow>
				 </>
				)} 

                {formData.Profession === 'Student' && (
				 <>
					<MDBRow>

					    <MDBCol md='6'>
							<MDBInput wrapperClass='mb-4' label='Student Roll no.' size='lg' id='form6' type='rel'/>
						</MDBCol>

					    <MDBCol md='6'>
							<MDBInput wrapperClass='mb-4' label='Your Department' size='lg' id='form7' type='text'/>
					    </MDBCol>

					</MDBRow>

					<MDBRow>

					    <MDBCol md='6'>
							<MDBInput wrapperClass='mb-4' label='Your Portfolio Website' size='lg' id='form8' type='email'/>
						</MDBCol>

					    <MDBCol md='6'>
							<MDBInput wrapperClass='mb-4' label='Resume Link' size='lg' id='form9' type='email'/>
					    </MDBCol>

					</MDBRow>

					<MDBRow>
						{/* <MDBCol md='6'>
							<MDBInput wrapperClass='mb-4' label='Research paper' size='lg' id='form6' type='rel'/>
						</MDBCol> */}

                        <MDBCol md='6'>
							<MDBInput wrapperClass='mb-4' label='Github link' size='lg' id='form10' type='email'/>
						</MDBCol>

						<MDBCol md='6'>
							<MDBInput wrapperClass='mb-4' label='LinkedIN Profile URL' size='lg' id='form11' type='email'/>
						</MDBCol>
					</MDBRow>
				 </>
				)}

					<MDBBtn className='mb-4' onClick={handleSubmit}>Submit</MDBBtn>
				</MDBCardBody>
			</MDBCard>
		</MDBRow>
	</MDBContainer>
    <style>
	{
	`.custom-radio input[type='radio'] {
		position: absolute;
		opacity: 0;
		visibility: hidden;
		pointer-events: none;
	  }

	  .custom-radio input[type='radio'] + .custom-radio::before {
		content: '';
		display: inline-block;
		width: 20px;
		height: 20px;
		margin-right: 8px;
		border-radius: 50%;
		border: 2px solid #4f93ce;
		background-color: #fff;
		vertical-align: middle;
		cursor: pointer;
	  }

	  .custom-radio input[type='radio']:checked + .custom-radio::after {
		content: '';
		display: inline-block;
		width: 10px;
		height: 10px;
		margin: 5px;
		border-radius: 50%;
		background-color: #4f93ce;
	  }`
	}
	</style>
    </>
	);
};

export default Contact;
//,position:'-moz-initial' 