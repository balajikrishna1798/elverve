import React, { useState } from 'react'
import { Card, Row, Col, Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import { SPECTRUM_1,  SPECTRUM_11, SPECTRUM_13, SPECTRUM_12, SPECTRUM_2, SPECTRUM_3, SPECTRUM_9, SPECTRUM_7, SPECTRUM_4, SPECTRUM_5, SPECTRUM_6, SPECTRUM_8, SPECTRUM_batch, SPECTRUM_star, Vector, } from '../../assets/images/index';
import './full_spectrum.css'
import ContactForm from '../contactus-popup/ContactForm';

const FullSpectrum = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const cardInfo = [
        {
            image: SPECTRUM_3,
            title: "Custom Software",
            title2: "Development",
            description: "Tailored software for unique needs with frontend and backend expertise.",
        },
        {
            image: SPECTRUM_12,
            title: "Product Development",
            title2: "as a Services",
            description: "Outsource product development with our expert services",
        },
        {
            image: SPECTRUM_2,
            title: "Product Design &",
            title2: "Strategies",
            description: "Craft stunning, user-friendly designs that captivate and delight users.",
        },
        {
            image: SPECTRUM_13,
            title: "Cloud Development &",
            title2: "Infrastructure",
            description: "Agile cloud development and scalable solutions driving business success.",
        },
        {
            image: SPECTRUM_1,
            title: "Mobile App",
            title2: "Development",
            description: "Develop high-performance, scalable, secure mobile apps for iOS and Android.",
        },
        {
            image: SPECTRUM_6,
            title: "Independent ",
            title2: "Validation Services",
            description: "Impartial validation services ensuring quality and compliance with standards.",
        },


        {
            image: SPECTRUM_9,
            title: "Digital",
            title2: "Transformation",
            description: "Digital transformation propelling businesses towards growth.",
        },
        {
            image: SPECTRUM_7,
            title: "Software",
            title2: "Consulting Services",
            description: "Strategic software consulting for effective implementation and solutions.",
        },
        {
            image: SPECTRUM_8,
            title: "On-Demand",
            title2: "Services",
            description: "Instant service delivery when and where you need it.",
        },
    ];
    return (
        <div className='bg-section' id='services'>
        <Container>
           <h1 className='spectrum-title'>Full-spectrum capability:</h1>
           <p className='spectrum-sub-title'>Concept to project delivery</p>
           <Card style={{ width: '100%' }} className='spectrum-card'>
           <img src={Vector} alt="vector" className='vector-img'/>
           <div className='batch-icon'>
              <img src={SPECTRUM_batch} alt="" className='batch-img' />
              <img src={SPECTRUM_star} alt="star-img" className="star-img"/>
           </div>
           <Row>
              {cardInfo.map((cardInfo, index) => {
              return (
              <Col sm={6} md={6} lg={4} key={index}>
              <Card style={{ border: 'none' }}>
              <Card.Img src={cardInfo.image} className='spect-img' />
              <Card.Body className='card-item'>
                 <Card.Title>{cardInfo.title} </Card.Title>
                 <Card.Title>{cardInfo.title2} </Card.Title>
                 <Card.Text>
                    {cardInfo.description}
                 </Card.Text>
              </Card.Body>
              </Card>
              </Col>
              )
              })}
           </Row>
           </Card>
           <div className='text-center mt-5'>
              <div className=" btn_shadow">
                 <div className='shadow_1'>
                 </div>
                 <div className='polygon_btn_cont'>
                    <Button className='polygon_btn' variant="outline-primary" onClick={handleShow}> Get Your Free Quote</Button>
                    <div className='polygon_shadow'></div>
                 </div>
              </div>
           </div>
        </Container>
        <ContactForm  show={show} onClose={handleClose}  onShow ={handleShow} />
     </div>
    )
}

export default FullSpectrum