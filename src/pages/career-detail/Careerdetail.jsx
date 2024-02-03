import React, { useEffect, useState } from 'react'
import { Row, Col,Container } from 'react-bootstrap';
import   '../../../src/App.css'
import './careerdetail.css'
import Footer from '../../components/footer/Footer'
import Navigation  from '../../components/navigation/Navigation'
import Banner from '../../components/banner/banner';
import {  BiSolidShoppingBags }  from 'react-icons/bi'
import {  IoIosArrowRoundBack }  from 'react-icons/io'
import  { BiTimeFive }  from 'react-icons/bi'
import  { ImLocation }  from 'react-icons/im'
import Button from 'react-bootstrap/Button';
import { CAREERBG, UIUX } from '../../assets/images';
import JobApply from '../../components/job-apply-model/JobApply';
import { Link } from 'react-router-dom';
const CareerDetail = (props) => {

const [show, setShow] = useState(false);
const handleClose = () => setShow(false);
const handleShow = () => setShow(true);

useEffect(() => {
   window.scrollTo(0, 0)
 }, [])


const designation = [
{
date: 'JULY 21, 2020',
title:'UX/UI Designer',
year:'3 years ago',
location:'Chennai',
work:'Full Time'
},
]
const employeeInfo = [
{
title:'Job Title',
detail:'UX/UI Designer'
},
{
title:'Resource Required',
detail:'2'
},
{
title:'Experience Needed',
detail:'3+ Years'
},
]
const responsibilities = [
{
content:'1. Investigating user experience design requirements for our suite of digital assets.',
},
{
content:'2. Developing and conceptualizing a comprehensive UI/UX design strategy for the brand.',
},
{
content:'3. Producing high quality UX design solutions through wireframes, visual and graphic designs, flow diagrams, storyboards, site maps, and prototypes.',
},
{
content:'4. Create user-friendly applications.',
},
{
content:'5. Designing UI elements and tools such as navigation menus, search boxes, tabs, and widgets for our digital assets.',
},
{
content:'6. Testing UI elements such as CTAs, banners, page layouts, page designs, page flows, and target links for landing pages.',
},
{
content:'7. Collaborating with the marketing team, and internal and external designers to ensure the creation and delivery of tailored experiences for the digital user.',
},
{
content:'8. Providing advice and guidance on the implementation of UX research methodologies and testing activities in order to analyze and predict user behavior.',
},
{
content:'9. Adhering to style standards on typography and graphic design.',
},
]
const skillsRequired = [
{
content:'1. A Bachelor’s degree and a minimum of 3 years’ UI/UX design experience for digital products or services.',
},
{
content:'2. A portfolio of professional UI/UX design work for both web and mobile platforms',
},
{
content:'3. Working knowledge of the following technologies and software: Sketch, InVision, Visio, HTML5, CSS (SCSS), iOS,UXPin (or Similar), Android, Design Systems and Adobe Creative Suite.',
},
{
content:'4. A team player but can work independently too.',
},
{
content:'5. Excellent written and verbal communication skills.',
},
{
content:'6. Multi-tasking and time-management skills, with the ability to prioritize tasks.',
},
,
]
return (
<div>
   <Navigation />
   <Banner title="Career Details"  bg={CAREERBG}/>
   <Container className='mt-75 mb-75'>
      <Row>
         <div className=''>
            {designation.map((designation, index) => {
            return(
            <div className='text-left career_title'>
               <label className='color_blue'>{designation.date}
               </label>
               <h1 class="main-title  mt-2">{designation.title}</h1>
               <div className='d-flex wrap mt-3 mb-4 align-items-center details'>
                  <h2 className='d-flex align-items-center'>
                     <BiTimeFive/>
                     <span>{designation.year}</span>
                  </h2>
                  <h2 className='d-flex align-items-center'>
                     <ImLocation/>
                     <span>{designation.location}</span>
                  </h2>
                  <h2 className='d-flex align-items-center'>
                     <BiSolidShoppingBags/>
                     <span>{designation.work}</span>
                  </h2>
               </div>
            </div>
            );
            })}
         </div>
         <div className=''>
            {employeeInfo.map((employeeInfo, index) => {
            return(
            <div className=' mt-2 align-items-center details'>
               <h3>{employeeInfo.title}:<span className='emp_details'> {employeeInfo.detail}  </span></h3>
            </div>
            );
            })}
         </div>
         <div className='details  mt-4 '>
            <h3 className='emp_responsibilities'>Responsibilities: </h3>
            {responsibilities.map((responsibilities, index) => {
            return(
            <div className=' mt-3 responsible_section align-items-center details'>
               <h3>{responsibilities.content}</h3>
            </div>
            );
            })}
            <h3 className='mt-5 emp_responsibilities'>Skills Required: </h3>
            {skillsRequired.map((skillsRequired, index) => {
            return(
            <div className=' mt-3 responsible_section align-items-center details'>
               <h3>{skillsRequired.content}</h3>
            </div>
            );
            })}
            <Button className='apply_now'  onClick={handleShow} variant="">Apply Now</Button>
            <a className='d-flex mt-3 align-items-center color-black'>
               <IoIosArrowRoundBack/>
               <Link to='/careers' className='view_link_previous'><span className='ms-2'>Previous Post</span></Link>
               
            </a>
         </div>
      </Row>
   </Container>
   <Footer />

   <JobApply   show={show} onClose={handleClose}  onShow ={handleShow} />
</div>
)
}
export default CareerDetail;