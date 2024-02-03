import React from 'react'
import {  Row, Col, } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import './footer.css'
import {CiLinkedin, CiTwitter, CiFacebook} from 'react-icons/ci'
import { AiOutlineInstagram } from 'react-icons/ai'
import {SlLocationPin} from 'react-icons/sl'
import {PiEnvelopeSimpleOpen, PiPhoneThin} from 'react-icons/pi'
import Logo from '../logo/Logo';
import { EMAIL, PHONE } from '../../assets/images';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div id='contact'>
    <Container>

      <div className='footer_container'>
         <Row>
         <Col sm='6' md="6" lg={3} className='new_padding w-21' >
                <div className='footer_techno_icons'>
                   <Link to="/">
                   <Logo />
                   </Link>
                   <div className='d-flex footer_social'>
                   <h4>
                         <a target='_blank'   rel="noreferrer"   href="https://www.facebook.com/">
                            <CiFacebook />
                         </a>
                      </h4>
                      <h4>
                         <a target='_blank'   rel="noreferrer"   href="https://twitter.com/">
                            <CiTwitter />
                         </a>
                      </h4>
                      <h4>
                         <a target='_blank'   rel="noreferrer"  href="https://www.linkedin.com/">
                            <CiLinkedin />
                         </a>
                      </h4>
                   
             
                      <h4>
                         <a target='_blank'   rel="noreferrer"   href="https://www.instagram.com/">
                            <AiOutlineInstagram />
                         </a>
                      </h4>
                   </div>
                </div>
         </Col>
         <Col sm='6' md="6" lg={2}  className='new_padding border_gray_right' >
                <div className='footer_conatct'>
                   <h5>Quick Links</h5>
                   </div>
                   <div className='links'>
                     <p>
                        <Link to='/digital'>Digital</Link>
                     </p>
                     <p>
                        <Link to='/expertise'>Expertise</Link>
                     </p>
                     <p>
                        <Link to='/about'>About</Link>
                     </p>
                     <p>
                        <Link to='/careers'>Careers</Link>
                     </p>
                
                    



                   </div>
             
         </Col>
         <Col sm='6' md="6" lg={3} className=' new_padding_2 border_gray_right w-29'  >
                <div className='footer_conatct'>
                   <h5>Get in touch</h5>
                   {/* <div className='d-flex footer_phonenumber'>
                      <div>
                        <h5>
                        <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23" fill="none">
<path d="M14.9802 13.8966C15.1013 13.816 15.2407 13.7668 15.3857 13.7537C15.5306 13.7405 15.6766 13.7637 15.8103 13.8211L20.9684 16.1322C21.1423 16.2065 21.2874 16.3351 21.382 16.4988C21.4766 16.6624 21.5157 16.8523 21.4934 17.04C21.3235 18.3099 20.6982 19.4749 19.7337 20.3183C18.7692 21.1616 17.5312 21.626 16.25 21.625C12.3049 21.625 8.52139 20.0579 5.73179 17.2682C2.94219 14.4786 1.375 10.6951 1.375 6.75004C1.37402 5.46882 1.8384 4.23086 2.68177 3.26637C3.52514 2.30188 4.69011 1.67653 5.96 1.5066C6.14773 1.4843 6.33762 1.52339 6.50127 1.61803C6.66492 1.71267 6.79352 1.85777 6.86781 2.0316L9.17891 7.1941C9.23569 7.32669 9.25881 7.47127 9.24622 7.61496C9.23363 7.75865 9.18571 7.897 9.10672 8.01769L6.76938 10.7969C6.68647 10.922 6.63744 11.0665 6.62709 11.2162C6.61673 11.366 6.64541 11.5158 6.71031 11.6511C7.61485 13.5028 9.52891 15.3939 11.3861 16.2897C11.5221 16.3543 11.6727 16.3824 11.8229 16.3711C11.973 16.3597 12.1177 16.3095 12.2425 16.2252L14.9802 13.8966Z" stroke="#333333" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
                        </h5>
                        
                      </div>
                      <div className='footer_conatct_number'>
                         <h3> <a target='_blank'  rel="noreferrer"   href="tel:+9196262 65444">+91 - 96262 65444</a></h3>
                         <h3><a target='_blank'  rel="noreferrer"   href="tel: +9196262 67775"> +91 - 96262 67775</a></h3>
                      </div>
                   </div> */}
                   <div className='d-flex footer_email'>
                      <div>
                         <h5>
                         <svg xmlns="http://www.w3.org/2000/svg" width="28" height="29" viewBox="0 0 28 29" fill="none">
<g clip-path="url(#clip0_388_242)">
<path d="M3.5 10.5269V21.9019C3.5 22.1339 3.59219 22.3565 3.75628 22.5206C3.92038 22.6847 4.14294 22.7769 4.375 22.7769H23.625C23.8571 22.7769 24.0796 22.6847 24.2437 22.5206C24.4078 22.3565 24.5 22.1339 24.5 21.9019V10.5269L14 3.52686L3.5 10.5269Z" stroke="#333333" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M24.5 10.5269L15.9097 16.6519H12.0914L3.5 10.5269" stroke="#333333" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_388_242">
<rect width="28" height="28" fill="white" transform="translate(0 0.0268555)"/>
</clipPath>
</defs>
</svg>
                         </h5>
                      </div>
                      <div className='footer_email_info'>
                         <h3> <a target='_blank'  rel="noreferrer"   href="mailto:+9196262 65444">	
reachus@ElZeal.com</a> </h3>
                      </div>
                   </div>
                </div>
         </Col>
         <Col sm='6' md="6" lg={4} className='new_padding_3 ' >
            

               

                <div className='footer_conatct'>
                <h5>Locations</h5>
                   <div className='d-flex footer_phonenumber'>
                      <div>
                         <h5>
                            <SlLocationPin />
                         </h5>
                      </div>
                      <div className='footer_conatct_number location'>
                         <h3> 	
New Jersey, Bangalore, Coimbatore, Madurai.  </h3>
                      </div>
                   </div>
                </div>
                {/* <div className='footer_conatct'>
                   <div className='d-flex footer_phonenumber location'>
                      <div>
                         <h5>
                            <SlLocationPin />
                         </h5>
                      </div>
                      <div className='footer_conatct_number'>
                         <h3>
                            50/5, 3rd Floor, MMS Complex, Near to Vinayakar Temple, Vasantha Nagar, Madurai - 625003
                         </h3>
                      </div>
                   </div>
                </div> */}
                </Col>

         </Row>

      </div>






       {/* <div className='footer_container'>
          <Row>
             <Col lg={5} md={6}  className=' adjust_width_50 border_gray_right' >
             <Row>
                <Col lg={6} className='new_padding' >
                <div className='footer_techno_icons'>
                   <a href="#home">
                   <Logo />
                   </a>
                   <div className='d-flex footer_social'>
                      <h4>
                         <a target='_blank'   rel="noreferrer"  href="https://www.linkedin.com/company/technogenesismadurai/">
                            <CiLinkedin />
                         </a>
                      </h4>
                      <h4>
                         <a target='_blank'   rel="noreferrer"   href="https://twitter.com/i/flow/login?redirect_after_login=%2FTechnoGenesis16">
                            <CiTwitter />
                         </a>
                      </h4>
                      <h4>
                         <a target='_blank'   rel="noreferrer"   href="https://www.facebook.com/technogenesis/">
                            <CiFacebook />
                         </a>
                      </h4>
                   </div>
                </div>
                </Col>
                <Col lg={6}  className='new_padding ' >
                <div className='footer_conatct'>
                   <h5>Quick Links</h5>
                   </div>
                   <div className='links'>
                     <p>
                        <Link to='digital'>Digital</Link>
                     </p>
                     <p>
                        <Link to='expertise'>Expertise</Link>
                     </p>
                     <p>
                        <Link to='about'>About</Link>
                     </p>
                     <p>
                        <Link to='careers'>Careers</Link>
                     </p>
                    



                   </div>
             
                </Col>
             </Row>
             </Col>
             <Col lg={7} md={6}  className=' adjust_width_50 '>
             <Row className='h-100'>
                
                <Col lg={6} className='border_gray_right new_padding_2 '  >
                <div className='footer_conatct'>
                   <h5>Get in touch</h5>
                   <div className='d-flex footer_phonenumber'>
                      <div>
                        <h5>
                        <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23" fill="none">
<path d="M14.9802 13.8966C15.1013 13.816 15.2407 13.7668 15.3857 13.7537C15.5306 13.7405 15.6766 13.7637 15.8103 13.8211L20.9684 16.1322C21.1423 16.2065 21.2874 16.3351 21.382 16.4988C21.4766 16.6624 21.5157 16.8523 21.4934 17.04C21.3235 18.3099 20.6982 19.4749 19.7337 20.3183C18.7692 21.1616 17.5312 21.626 16.25 21.625C12.3049 21.625 8.52139 20.0579 5.73179 17.2682C2.94219 14.4786 1.375 10.6951 1.375 6.75004C1.37402 5.46882 1.8384 4.23086 2.68177 3.26637C3.52514 2.30188 4.69011 1.67653 5.96 1.5066C6.14773 1.4843 6.33762 1.52339 6.50127 1.61803C6.66492 1.71267 6.79352 1.85777 6.86781 2.0316L9.17891 7.1941C9.23569 7.32669 9.25881 7.47127 9.24622 7.61496C9.23363 7.75865 9.18571 7.897 9.10672 8.01769L6.76938 10.7969C6.68647 10.922 6.63744 11.0665 6.62709 11.2162C6.61673 11.366 6.64541 11.5158 6.71031 11.6511C7.61485 13.5028 9.52891 15.3939 11.3861 16.2897C11.5221 16.3543 11.6727 16.3824 11.8229 16.3711C11.973 16.3597 12.1177 16.3095 12.2425 16.2252L14.9802 13.8966Z" stroke="#333333" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
                        </h5>
                        
                      </div>
                      <div className='footer_conatct_number'>
                         <h3> <a target='_blank'  rel="noreferrer"   href="tel:+9196262 65444">+91 - 96262 65444</a></h3>
                         <h3><a target='_blank'  rel="noreferrer"   href="tel: +9196262 67775"> +91 - 96262 67775</a></h3>
                      </div>
                   </div>
                   <div className='d-flex footer_email'>
                      <div>
                         <h5>
                         <svg xmlns="http://www.w3.org/2000/svg" width="28" height="29" viewBox="0 0 28 29" fill="none">
<g clip-path="url(#clip0_388_242)">
<path d="M3.5 10.5269V21.9019C3.5 22.1339 3.59219 22.3565 3.75628 22.5206C3.92038 22.6847 4.14294 22.7769 4.375 22.7769H23.625C23.8571 22.7769 24.0796 22.6847 24.2437 22.5206C24.4078 22.3565 24.5 22.1339 24.5 21.9019V10.5269L14 3.52686L3.5 10.5269Z" stroke="#333333" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M24.5 10.5269L15.9097 16.6519H12.0914L3.5 10.5269" stroke="#333333" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_388_242">
<rect width="28" height="28" fill="white" transform="translate(0 0.0268555)"/>
</clipPath>
</defs>
</svg>
                         </h5>
                      </div>
                      <div className='footer_email_info'>
                         <h3> <a target='_blank'  rel="noreferrer"   href="mailto:+9196262 65444">info@technogenesis.in</a> </h3>
                      </div>
                   </div>
                </div>
                </Col>
                <Col lg={6} className='new_padding_3' >
                <h5>Locations</h5>
                <div className='footer_conatct'>
                   <div className='d-flex footer_phonenumber'>
                      <div>
                         <h5>
                            <SlLocationPin />
                         </h5>
                      </div>
                      <div className='footer_conatct_number location'>
                         <h3> 	
Chennai, Bangalore, Singapore.  </h3>
                      </div>
                   </div>
                </div>
                <div className='footer_conatct'>
                   <div className='d-flex footer_phonenumber location'>
                      <div>
                         <h5>
                            <SlLocationPin />
                         </h5>
                      </div>
                      <div className='footer_conatct_number'>
                         <h3>
                            50/5, 3rd Floor, MMS Complex, Near to Vinayakar Temple, Vasantha Nagar, Madurai - 625003
                         </h3>
                      </div>
                   </div>
                </div>
                </Col>
             </Row>
             </Col>
          </Row>
       </div> */}
       <div className='copy_rights'>
          <p>© Copyright ElZeal 2023. All Rights Reserved.</p>
       </div>
    </Container>
 </div>
  )
}

export default Footer