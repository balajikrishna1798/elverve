import React, { useEffect, useState } from 'react'
import { Row, Col,Container } from 'react-bootstrap';
import   '../../src/App.css'
import Footer from '../components/footer/Footer'
import Navigation  from '../components/navigation/Navigation'
import Banner from '../components/banner/banner';
import CardStyle1 from '../components/card-style-1/card-style-1';
import { EXPERTISEBG } from '../assets/images';
const Expertise = (props) => {
   useEffect(() => {
      window.scrollTo(0, 0)
    }, [])
const [show, setShow] = useState(false);
const handleClose = () => setShow(false);
const handleShow = () => setShow(true);
const designProcess = [
   {title: "Financial and Planning Analysis"},
   {title: "Portfolio Management"},
   {title: "Case Management"},
   {title: "E-Commerce Solution"},
   {title: "Secured Messaging System"},
   {title: "Process Tracking System"},
   {title: "Customs Management System"},
   {title: "Event Management System"},
   {title: "Healthcare Communication System"},
   {title: "Restaurant Management System"},
   {title: "Vehicle Tracking Application"},
   {title: "Enterprise Application"},
   {title: "Fitness Tracker Application"},
   {title: "Service Teller System"},
   {title: "Crypto Wallet App"},
   {title: "Student Learning App"},
   {title: "Tracking Solutions"},
   {title: "Parking Solutions"},
   {title: "Create as Object"}

   
   
   
   
   
   
];
return (
<div className='expertise_section'>
   <Navigation  show={show} onClose={handleClose}  onShow ={handleShow}/>
   <Banner title="Expertise" bg={EXPERTISEBG} />
   <Container className='mt-75 mb-75'>
      <div>
         <h1 class="main-title text-left  mt-5">A streamlined and consultative approach to provide secure and efficient IT-enabled Solutions</h1>
         <Row className='mt-5'>
            {designProcess.map((designProcess, index) => {
            return (
            <Col xs={12} sm={6} md={6} lg={6} xl={4} key={index}>
            <CardStyle1 title={designProcess.title} />
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
export default Expertise