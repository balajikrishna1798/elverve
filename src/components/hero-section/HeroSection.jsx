import {useState } from 'react'
import './herosection.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {VIDEO} from '../../assets/images/index'
import {BsChevronRight} from 'react-icons/bs'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Form } from 'react-bootstrap';
import ContactForm from '../contactus-popup/ContactForm';

const HeroSection = () => {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  
 
  return (
    <div className='relative' id='home'>
   
    <div  className='hero_section'>
      <div className='video_section'>
      <video  playsinline autoPlay muted loop >
<source src={VIDEO} type="video/mp4" />
</video> 

      </div>





       <div className="hero_section_inner_section">
          <Container>
             <Row>
                <Col lg={7} >
                <div className='hero_section_inner_section_details'> 
                   <div className='position-relative'>
                      <h1>Empowering businesses to thrive in the digital era</h1>
                      
                   </div>
                   </div>
                </Col>
             </Row>
             <Row>
             <Col lg={6} >
             <div className='position-relative'>
                      <p className='hero_section_inner_section_details_sub'>Propelling brands towards growth with a decade of technological expertise, exceptional experience, and groundbreaking innovation.</p>
                      
             </div>
             <div className='position-relative'>
                      <div className='hero_section_btn' onClick={handleShow}>

                        <a href="javascript:void(0)" >Get your free quote</a>
                        <span className='cursor-pointer'>  <BsChevronRight /></span>
                      

                        
                      </div>
                     
            </div>


             </Col>


             </Row>
          </Container>
       </div>

    </div>
    <div className="lines_1">
       <div className="line_1"></div>
    </div>

  <ContactForm  show={show} onClose={handleClose}  onShow ={handleShow} />
 </div>
  )
}

export default HeroSection