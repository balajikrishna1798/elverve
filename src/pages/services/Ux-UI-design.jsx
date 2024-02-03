import React, { useEffect, useState } from 'react'
import { Row, Col,Container } from 'react-bootstrap';
import   '../../assets/styles/home.css'
import Footer from '../../components/footer/Footer'
import Navigation  from '../../components/navigation/Navigation'
import Banner from '../../components/banner/banner';
import CardStyle1 from '../../components/card-style-1/card-style-1'
import { UIUX } from '../../assets/images';

const UXUIDesign = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const designProcess = [
    {title: "Concept Ideation and Visualization"},
    {title: "Human Factors Deliberation"},
    {title: "Information Architecture Design"},
    {title: "Instructional Design and Illustrations"},
    {title: "Concept Ideation and Visualization"},
    {title: "Enticing Front-end Design"},
    {title: "Intuitive User Navigations"},
    {title: "User Research and Modeling"},
    {title: "Customer Expedition Mapping"},
  ];
  const expertise = [
    {title: "Visual Design"},
    {title: "Complete Task CX"},
    {title: "AR & VR Solutions"},
    {title: "UX Designs of Digital Interfaces and Products"}
  ];
  const principles = [
    {title: "Human-Centered Designs"},
    {title: "Standout Unique Designs"},
    {title: "Data-Driven Decision-Making"},
    {title: "Industry-Specific Design Solutions"}
  ];
  const keyDeliverables = [
    {title: "User Stories"},
    {title: "Wireframes"},
    {title: "Prototypes"},
    {title: "Mockups"}
  ];
  return (
    <div> 
    
      <Navigation  show={show} onClose={handleClose}  onShow ={handleShow}/>
      <Banner title="UX/UI Design" bg={UIUX}/> 
      <Container>
        <div class="mt-75">
        <h1 class="main-title">Our UX Strategy</h1>
          <p class="main-content m-16 pr-content">Our User experience (UX) design-thinking strategy incorporates innovation, technology and empowerment to deliver astute and cutting-edge digital User Experiences.</p>
        </div>
      <div class="mt-75">
      <h1 class="main-title">Our Design Process</h1>
      <p class="main-content m-16 pr-content">We recognize the importance of designing user-centric technology solutions and follow a comprehensive user-centered design process exemplifies an impressive customer experience.</p>
      <Row className='mt-50'>
              {designProcess.map((designProcess, index) => {
              return (
              <Col xs={12} sm={6} md={3} lg={3} key={index}>
              <CardStyle1 title={designProcess.title} />
              </Col>
              )
              })}
           </Row>
      </div>
      <div class="mt-75">
      <h1 class="main-title">Our Expertise</h1>
      <Row className='mt-50'>
              {expertise.map((expertise, index) => {
              return (
              <Col xs={12} sm={6} md={3} lg={3} key={index}>
              <CardStyle1 title={expertise.title} />
              </Col>
              )
              })}
           </Row>
      </div>
      <div class="mt-75">
      <h1 class="main-title">Our Design Principles</h1>
      <Row className='mt-50'>
              {principles.map((principles, index) => {
              return (
              <Col xs={12} sm={6} md={3} lg={3} key={index}>
              <CardStyle1 title={principles.title} />
              </Col>
              )
              })}
           </Row>
      </div>
      <div class="mt-75 mb-75">
      <h1 class="main-title">Our Key Deliverables</h1>
      <Row className='mt-50'>
              {keyDeliverables.map((keyDeliverables, index) => {
              return (
              <Col xs={12} sm={6} md={3} lg={3} key={index}>
              <CardStyle1 title={keyDeliverables.title} />
              </Col>
              )
              })}
           </Row>
      </div>
      </Container>

      
     
      
      <Footer />
     
      
      </div>
    
  )
}

export default UXUIDesign