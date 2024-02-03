import React, { useEffect, useRef, useState } from 'react'
import { Card, Row, Col, Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Slider from 'react-slick'
const Test = () => {

    let caro = useRef(null)
    const [currentIndex, setCurrentIndex] = useState(0);
useEffect(() => {

    setInterval(() => {

        gotoNext()
        
    }, 7000);
  



    console.log(caro.current)

  return () => {
    
  }
}, [])



const gotoNext = () => {
    caro.current.slickNext();
}

const Image = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 0,
        arrows: false,
        fade: true,
        
    };

 

  return (
    <div>
        <Container>
            <Row>
                <Col  lg={6}>
               
                <div className={currentIndex ===0 ? 'wwactive' : 'noclass'}>
                    <h>1212</h>
                    
                </div>
                <div className={currentIndex===1 ? 'wwactive' : 'noclass'} >
                    <h>1234567890</h>
                    
                </div>

             
                

               
                
                
                
                
                
                </Col>
                <Col lg={6}>
                 <Slider className='slides' ref={caro} {...Image} 
                  beforeChange={(currentSlide, nextSlide) => {
              setCurrentIndex(nextSlide);

              console.log('currentSlide' , currentSlide)
          }}>
                            <div>

                            <img height={300} width={300} src="https://images.unsplash.com/photo-1535303311164-664fc9ec6532?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80" alt="img" />

                            </div>
                           
                            <div>
                                <img height={300} width={300} src="https://images.unsplash.com/photo-1689256197757-dd3db4caf2de?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80" alt="img" />
                            </div>
                            <div>
                                <img height={300} width={300} src="https://images.unsplash.com/photo-1689256197757-dd3db4caf2de?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80" alt="img" />
                            </div>
 




                            </Slider> 
                
                
                </Col>
            </Row>





        </Container>




    </div>
  )
}

export default Test