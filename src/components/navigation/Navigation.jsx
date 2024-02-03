import React, { useState , useRef, useLayoutEffect } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import './navigation.css'
import Button from 'react-bootstrap/Button';
import Logo from '../logo/Logo';
import BlackLogo from '../black-logo/BlackLogo';
import ContactForm from '../contactus-popup/ContactForm';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Dropdown from 'react-bootstrap/Dropdown';
import { Col, Row } from 'react-bootstrap';
import {HiChevronDown} from 'react-icons/hi'



const Navigation = () => {

  

   const [show, setShow] = useState(false);
   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);
   const [toggle, setToggle] = useState(false)
   const [dropdown, setDropdown] = useState(false)



useLayoutEffect(() => {

   window.addEventListener('scroll' , chanagebg )

  return () => {

   window.removeEventListener('scroll' , chanagebg)
    
  };
}, [])


const chanagebg =() =>{
if(window.scrollY > 90){
        setToggle(true)
      //   console.log('true')
    }
    else if (window.scrollY < 90){
      setToggle(false)

    }

}

const [showed, setShowed] = useState(false);
const showDropdown = (e)=>{
   setShowed(!show);
}
const hideDropdown = e => {
   setShowed(false);
}


return (
   <div className='navbar_section'>
   <Navbar expand="lg" className={toggle === true ? 'newNavebar bg-transparent navbar_section_navbar' : 'bg-transparent navbar_section_navbar'} >
   <Container fluid className='nav_padding'>
      <a href="/">
         {
         toggle === true  ?  
         <Logo />
         : 
         <BlackLogo />
         }
      </a>
      <Link to='/'>
      </Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
         <Nav className="me-auto">
            <p  className='nav_items' >
               <Link to='/digital'>
               Digital</Link>
            </p>
            <div className='d-flex align-items-center svg_icon'>
               <NavDropdown className='desktop_menu' title="Services" id="basic-nav-dropdown" show={showed}
                  onMouseEnter={showDropdown} 
                  onMouseLeave={hideDropdown}>
                  <div className='desktop_megamenu'>
                     <Row>
                        <Col>
                        <div className='mega_menu_items'>
                           <h2 className='mega_menu_header'>Services</h2>
                           <div className='mega_menu_list_items'>
                              <p>
                                 <Link to='/services/enterprice-application'>
                                 Enterprise Application Development</Link>
                              </p>
                              <p>
                                 <Link to='/services/ux-ui-design'>
                                 UX/UI Design</Link>
                              </p>
                              <p>
                                 <Link to='/services/mobile-web-development'>
                                 Mobile / Web App Development</Link>
                              </p>
                              <p>
                                 <Link to='/services/api-intergration'>
                                 API Integration</Link>
                              </p>
                              <p>
                                 <Link to='/data-science'>
                                 AI & Data Science</Link>
                              </p>
                              <p>
                                 <Link to='/testing'>
                                 Testing</Link>
                              </p>
                           </div>
                        </div>
                        </Col>
                        <Col>
                        <div className='mega_menu_items'>
                           <h2 className='mega_menu_header'>Insights</h2>
                           <div className='mega_menu_list_items'>
                              <p>
                                 <Link to='/insights/cognitive'>
                                 Cognitive Computing (AI/ML)</Link>
                              </p>
                              <p>
                                 <Link to='/insights/business-intelligence'>
                                 Business Intelligence</Link>
                              </p>
                              <p>
                                 <Link to='/insights/extended-reality'>
                                 Extended Reality (AR/VR)</Link>
                              </p>
                              <p>
                                 <Link to='/insights/cloud'>
                                 Cloud</Link>
                              </p>
                           </div>
                        </div>
                        </Col>
                        <Col>
                        <div className='mega_menu_items'>
                           <h2 className='mega_menu_header'>Technology</h2>
                           <div className='mega_menu_list_items'>
                              <p>
                                 <Link to='/technology/blockchain'>
                                 Blockchain</Link>
                              </p>
                              <p>
                                 <Link to='/technology/sharepoint'>
                                 Sharepoint</Link>
                              </p>
                              <p>
                                 <Link to='/technology/salesforce'>
                                 Salesforce</Link>
                              </p>
                              <p>
                                 <Link to='/technology/service-now'>
                                 Service Now</Link>
                              </p>
                              <p>
                                 <Link to='/technology/netsuite'>
                                 Net Suite</Link>
                              </p>
                              <p>
                                 <Link to='/technology/oracle'>
                                 Oracle</Link>
                              </p>
                              <p>
                                 <Link to='/technology/open-source'>
                                 Open Source</Link>
                              </p>
                           </div>
                        </div>
                        </Col>
                     </Row>
                  </div>
               </NavDropdown>
               <HiChevronDown  />
            </div>
            <div className='mobile_menu'>

               <div className='  mob_svg_icon ' >
               <NavDropdown title="Services" id="basic-nav-dropdown">
                  <p>
                     <Link to='/services/enterprice-application'>
                     Enterprise Application Development</Link>
                  </p>
                  <p>
                     <Link to='/services/ux-ui-design'>
                     UX/UI Design</Link>
                  </p>
                  <p>
                     <Link to='/services/mobile-web-development'>
                     Mobile / Web App Development</Link>
                  </p>
                  <p>
                     <Link to='/services/api-intergration'>
                     API Integration</Link>
                  </p>
                  <p>
                     <Link to='/data-science'>
                     AI & Data Science</Link>
                  </p>
                  <p>
                     <Link to='/testing'>
                     Testing</Link>
                  </p>
               </NavDropdown>

               <HiChevronDown  />
               </div>

               <div className=' mob_svg_icon'>
               <NavDropdown title="Insights" id="basic-nav-dropdown">
                  <p>
                     <Link to='/insights/cognitive'>
                     Cognitive Computing (AI/ML)</Link>
                  </p>
                  <p>
                     <Link to='/insights/business-intelligence'>
                     Business Intelligence</Link>
                  </p>
                  <p>
                     <Link to='/insights/extended-reality'>
                     Extended Reality (AR/VR)</Link>
                  </p>
                  <p>
                     <Link to='/insights/cloud'>
                     Cloud</Link>
                  </p>
               </NavDropdown>
               <HiChevronDown  />
               </div>
               <div className='  mob_svg_icon'>

               <NavDropdown title="Technology" id="basic-nav-dropdown">
                  <p>
                     <Link to='/technology/blockchain'>
                     Blockchain</Link>
                  </p>
                  <p>
                     <Link to='/technology/sharepoint'>
                     Sharepoint</Link>
                  </p>
                  <p>
                     <Link to='/technology/salesforce'>
                     Salesforce</Link>
                  </p>
                  <p>
                     <Link to='/technology/service-now'>
                     Service Now</Link>
                  </p>
                  <p>
                     <Link to='/technology/netsuite'>
                     Net Suite</Link>
                  </p>
                  <p>
                     <Link to='/technology/oracle'>
                     Oracle</Link>
                  </p>
                  <p>
                     <Link to='/technology/open-source'>
                     Open Source</Link>
                  </p>
               </NavDropdown>
               <HiChevronDown  />
               </div>
            

              


             

            </div>
            <p  className='nav_items' >
               <Link to='/expertise'>
               Expertise</Link>
            </p>
            <p  className='nav_items' >
               <Link to='/about'>
               About</Link>
            </p>
            <p  className='nav_items' >
               <Link to='/careers'>
               Careers
               </Link>

             </p>
             {/* <p className='nav_items' >
                <a href="#products">Products & Solutions</a>
             </p> */}
             {/* <p className='nav_items' > 
                <a href="#company">Company</a>
             </p> */}
             <div>
                <Button className='nav_bar_btn' variant="outline-primary" onClick={handleShow}>
                {/* <a href="#contact"> Contact Us </a> */}
                Contact
                </Button>
             </div>
          </Nav>
       </Navbar.Collapse>
    </Container>
    </Navbar>
    <ContactForm  show={show} onClose={handleClose}  onShow ={handleShow} />
 </div>

  
  )
}

export default Navigation