import React, { useEffect, useRef, useState, useLayoutEffect } from 'react'
import './products.css'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import { ProductImg, Shadow } from '../../assets/images'
import Slider from 'react-slick'
import {ECOM, SECURED, PARKING, FOOD, TICKET, PROCESS, TRACK, CUSTOM, HELATH, STUDENT, VECHILE } from '../../assets/images/index'
import ContactForm from '../contactus-popup/ContactForm'

const Products = () => {

    const caro = useRef(null)
    const [currentIndex, setCurrentIndex] = useState(0);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useLayoutEffect(() => {
        setInterval(() => {
            gotoNext()
        }, 7200);
    //   console.log(caro.current)
      return () => {}
    }, [])

const gotoNext = () => {
caro.current?.slickNext();
}
const Image = {
        dots: false,
        infinite: true,
      //   speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 0,
        arrows: false,
        fade: true,
        draggable:false
    };

    const products =[
      {
         image: ECOM
      },
       {
         image: SECURED
      },
       {
         image: PARKING
      },
       {
         image: FOOD
      },
       {
         image: TICKET
      },
        {
         image: PROCESS
      },
        {
         image: TRACK
      },
         {
         image: CUSTOM
      },
         {
         image: HELATH
      },
        {
         image: STUDENT
      },
      {
         image: VECHILE
      },
    ]
return (
     <div id='products'>
     <Container>
      <Card className='product-card'>
         <div className='text-center'>
            <h1 className='product-title'>Products & Solutions</h1>
            <p className='product-subtitle'>Seize the digital edge with our scalable software and innovative technology solutions</p>
         </div>
         <Row className='pt-5'>
            <Col sm={12} md={12} lg={6}>
            <div className='product-list'>
               <ul className="product-list">
                  <li  className={currentIndex ===0 ? 'panel active' : 'panel'} onClick={()=>{caro.current?.slickGoTo(0)}} >E-Commerce Solutions</li>
                  <li  className={currentIndex ===1 ? 'panel active' : 'panel'} onClick={()=>{caro.current?.slickGoTo(1)}}  >Secured Messaging System</li>
                  <li className={currentIndex ===2 ? 'panel active' : 'panel'} onClick={()=>{caro.current?.slickGoTo(2)}} >Parking Solutions</li>
                  <li className={currentIndex ===3 ? 'panel active' : 'panel'} onClick={()=>{caro.current?.slickGoTo(3)}} >Food Ordering App</li>
                  <li className={currentIndex ===4 ? 'panel active' : 'panel'} onClick={()=>{caro.current?.slickGoTo(4)}} >Ticketing Solution</li>
                  <li className={currentIndex ===5 ? 'panel active' : 'panel'} onClick={()=>{caro.current?.slickGoTo(5)}} >Process Tracking System</li>
                  <li className={currentIndex ===6 ? 'panel active' : 'panel'} onClick={()=>{caro.current?.slickGoTo(6)}} >Tracking Solutions</li>
                  <li className={currentIndex ===7 ? 'panel active' : 'panel'} onClick={()=>{caro.current?.slickGoTo(7)}} >Customs Management System</li>
                  <li className={currentIndex ===8 ? 'panel active' : 'panel'} onClick={()=>{caro.current?.slickGoTo(8)}} >Healthcare Communication System</li>
                  <li className={currentIndex ===9 ? 'panel active' : 'panel'} onClick={()=>{caro.current?.slickGoTo(9)}} >Student Education App</li>
                  <li className={currentIndex ===10 ? 'panel active' : 'panel'} onClick={()=>{caro.current?.slickGoTo(10)}} >Vehicle Tracking App</li>
               </ul>
            </div>
            </Col>
            <Col sm={6} md={12} lg={6} className='text-center sm-d-none'>
            <div   >
               <Slider    ref={caro} {...Image} 
               beforeChange={(currentSlide, nextSlide) => {
               setCurrentIndex(nextSlide);
               console.log("currentSlide", currentSlide)
               }}>
                  {
                     products.map((item, index)=>{
                        return(
                           <div key={index} className='imag_box'>
                           <img className='imag_height' src={item.image} alt="img" />
                        </div>

                        )
                     })

                  }

              
              
               </Slider> 
            </div>
            </Col>
         </Row>
      </Card>
      <div className='text-center pb-4 bg-card'>
         <h1 className='foot-title'>Want to accelerate software <br /> development at your company?</h1>
         <div className='polygon_btn_cont mt-5'>
            <Button className='polygon_btn bg-change' variant="outline-primary" onClick={handleShow}>Schedule a Call</Button>
            <div className='polygon_shadow'></div>
         </div>
      </div>
      <div className='text-center mb-5 md-d-none'>
         <img src={Shadow} alt="shadow" />
      </div>
   </Container>
   <ContactForm  show={show} onClose={handleClose}  onShow ={handleShow} />
</div>
    )
}

export default Products