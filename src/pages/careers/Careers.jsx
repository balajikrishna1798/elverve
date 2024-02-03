
import { Button } from 'react-bootstrap';
import React, { useEffect } from 'react'
import Navigation from '../../components/navigation/Navigation'
import Banner from '../../components/banner/banner'
import { CAREERBG, ENTERPRICEBG } from '../../assets/images'
import { Col, Container, Row } from 'react-bootstrap'
import Form from 'react-bootstrap/Form';
import { JobCard } from '../../components/job-card/job-card'
import "./careers.css"
import Footer from '../../components/footer/Footer';
const Careers = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const jobs = [
    { title: "UX/UI Designer", description: "Job Title: UX/UI Designer Resource Required: 2 Experience Needed: 3+ Years Responsibilities: Investigating user experience design requirements for our suite of digital assets. Developing and conceptualizing a comprehensive UI/UX design strategy for the brand. Producing high quality UX design solutions through wireframes, visual and graphic designs, flow diagrams, storyboards, site maps, and prototypes. Create user-friendly…", exp: "3 Years ago", location: "Chennai", type: "Full time" , },
    { title: "Frontend Web Developer", description: "Job Title: Frontend Web Developer Resource Required: 2 Experience Needed: 2+ Years Responsibilities: Develop new user-facing features Build reusable code and libraries for future use Ensure the technical feasibility of UI/UX designs Optimize application for maximum speed and scalability Assure that all user input is validated before submitting to back-end Collaborate with other team members…", exp: "3 Years ago", location: "Chennai", type: "Full time" },
    { title: "AngularJS Developer", description: "Job Title: AngularJs Developer Resource Required: 2 Experience Needed: 2+ Years Responsibilities: Developing new user-facing features using Angular.js Building reusable components and front-end libraries for future use Translating designs and wireframes into high-quality code Optimizing components for maximum performance across a vast array of web-capable devices and browsers Skills Required: Strong proficiency in JavaScript and…", exp: "3 Years ago", location: "Chennai", type: "Full time" },
    { title: "Android Mobileapp Developer", description: "Job Title: Java Springboot Developer Resource Required: 3 Experience Needed: 2+ Years Responsibilities: Develop Rest Based API Services on Springboot to interact with Web & Mobile Based Applications Understand the customer requirements and build the core services as required Building reusable components and back-end libraries for future use Optimizing components for maximum performance across a…", exp: "3 Years ago", location: "Chennai", type: "Full time" },

  ]
  return (
    <>
      <Navigation />
      <Banner title='Careers' bg={CAREERBG} />
<section className='careers_section'>
        <Container className='mt-75 mb-75'>
          <div className='card'>
          <Form >
            <Row>
              <Col lg="3" md="3" sm="4" xs="6">
              <Form.Select aria-label="Default select example" className='select_field'>
                <option>Select Category</option>
                <option value="1">UI/UX Development</option>
                <option value="2">Angular Development</option>
              </Form.Select>
              </Col>
              <Col lg="3" md="3" sm="4" xs="6">
              <Form.Select aria-label="Default select example" className='select_field'>
                <option>Select Location</option>
                <option value="1">Madurai</option>
                <option value="2">Chennai</option>
              </Form.Select>
              </Col>
              <Col lg="3" md="3" sm="4" xs="6">
              <Form.Select aria-label="Default select example" className='select_field'>
                <option>Select Job Type</option>
                <option value="1">Full time</option>
                <option value="2">Half time</option>
              </Form.Select>
              </Col>
              <Col lg="3" md="3" sm="4" xs="12">
              <div className='button_section'>
            <Button className='reset_btn' variant="">Reset</Button>
            <Button className='submit_btn' variant="">Submit</Button>
            </div>
              </Col>
            </Row>
            <div className='d-flex'>
            
              
              
            </div>
           
            
           
        </Form>
          </div>
         
          {jobs.map((job, index) => {
            return (
              <JobCard key={index} jobtitle={job.title} description={job.description} experience={job.exp} location={job.location} type={job.type} url={job.url} />
            )
          })}
</Container>
</section>
<Footer />
 </>
  )
}

export default Careers