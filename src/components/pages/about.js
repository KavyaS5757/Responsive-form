import React from "react";
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

const About = () => {
	return (
		
			<MDBContainer fluid>
				<MDBRow >
					<MDBCard>
						<MDBCardBody className='px-0'>

							<MDBRow>
								<MDBCol md='6'>
									<MDBInput wrapperClass='mb-4' label='First Name' size='lg' id='form1' type='text'/>
								</MDBCol>

								<MDBCol md='6'>
									<MDBInput wrapperClass='mb-4' label='Last Name' size='lg' id='form2' type='text'/>
								</MDBCol>
							</MDBRow>

							<MDBRow>
								<MDBCol md='6'>
									<MDBInput wrapperClass='mb-4' label='Birthday' size='lg' id='form3' type='text'/>
								</MDBCol>

								<MDBCol md='6' className='mb-4'>
									<h6 className="fw-bold" style={{color:'black'}}>Gender: </h6>
									<MDBRadio name='inlineRadio' id='inlineRadio1' value='option1' label='Female' inline/>
									<MDBRadio name='inlineRadio' id='inlineRadio2' value='option2' label='Male' inline/>
									<MDBRadio name='inlineRadio' id='inlineRadio3' value='option3' label='Others' inline/>
								</MDBCol>
							</MDBRow>

							<MDBRow>
								<MDBCol md='6'>
									<MDBInput wrapperClass='mb-4' label='Personal Email ID' size='lg' id='form4' type='email'/>
								</MDBCol>

								<MDBCol md='6'>
									<MDBInput wrapperClass='mb-4' label='College Email ID' size='lg' id='form5' type='email'/>
								</MDBCol>
							</MDBRow>

							<MDBRow>
								<MDBCol md='6'>
									<MDBInput wrapperClass='mb-4' label='Mobile Number' size='lg' id='form6' type='rel'/>
								</MDBCol>

								<MDBCol md='6'>
									<MDBInput wrapperClass='mb-4' label='Alternate Number' size='lg' id='form7' type='rel'/>
								</MDBCol>
							</MDBRow>

							<MDBRow>
								<MDBCol md='6'>
									<MDBInput wrapperClass='mb-4' label='Employee ID' size='lg' id='form8' type='text'/>
								</MDBCol>

								<MDBCol md='6'>
									<MDBInput wrapperClass='mb-4' label='Designation' size='lg' id='form9' type='text'/>
								</MDBCol>
							</MDBRow>

							

								<MDBBtn className='mb-4' >Submit</MDBBtn>
						</MDBCardBody>
					</MDBCard>
				</MDBRow>
			</MDBContainer>
		
	);
};

export default About;
