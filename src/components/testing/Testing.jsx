import React, { useEffect, useState } from 'react'
import { Row, Col,Container } from 'react-bootstrap';
import   '../../../src/App.css'
import Footer from '../../components/footer/Footer'
import Navigation  from '../../components/navigation/Navigation'
import Banner from '../../components/banner/banner';
import CardStyle1 from '../../components/card-style-1/card-style-1';
import { TESTBG } from '../../assets/images';
import './testing.css'
const Testing = (props) => {
const [show, setShow] = useState(false);
const handleClose = () => setShow(false);
const handleShow = () => setShow(true);
useEffect(() => {
   window.scrollTo(0, 0)
 }, [])
const designProcess = [
{title: "Digital Products Assurance"},
{title: "Testing as a Service (TAAS)"},
{title: "Cloud/Infrastructure Testing"},
{title: "Security Testing"},
{title: "Performance Testing"},
{title: "IoT Testing"},
{title: "DevOps Testing"},
{title: "Package Testing"},
{title: "Mobility Testing"},
{title: "Assuring Automation"},
{title: "Managed Services"},
{title: "Quality Engineering Services"},
{title: "Reliable Testing"},
{title: "Ensuring Compliance"},
{title: "Saving Development Costs"},
{title: "Saving Testing Costs"},
];
return (
<div className='testing_section'>
   <Navigation  show={show} onClose={handleClose}  onShow ={handleShow}/>
   <Banner title="Testing" bg={TESTBG}/>
   <Container className='mt-75 mb-75'>
      <div>

         <Row>
            <Col lg='11'>
            <h1 class="main-title text-start  ">Delivering Agile and Highly automated Quality assurance solutions that spotlight to augment the client value system</h1>
         <p className='my-4'>Our integrated and end-to-end validation services include market-specific testing solutions that promote Digital assurance for enterprises to accelerate solutions and reliable product delivery.</p>
            </Col>
         </Row>

        

         <div className="mt-3">
            <h1 class="main-title title text-start mb-2-5  mt-5">Our portfolio of Validation & Digital Assurance Services</h1>
            <Row className='mt-4'>
               {designProcess.map((designProcess, index) => {
               return (
               <Col xs={12} sm={12} md={6} lg={4} key={index}>
               <CardStyle1 title={designProcess.title} />
               </Col>
               )
               })}
               <p className=' mt-1 text_font'>We enforce end-to-end engineering-led testing methods that promote Operational performance, quicker to market, and least production defects needed to regulate your business with confidence. The quality, speed, and accuracy of testing that we execute ensure our clients deploy Technology applications essential to drive the Digital enterprises. </p>
            </Row>
         </div>
      </div>
   </Container>
   <Footer />
</div>
)
}
export default Testing;