import React, { useEffect, useState } from 'react'
import { Row, Col,Container } from 'react-bootstrap';
import WhoWeAre from '../components/who-we-are/who-we-are';
import   '../../src/App.css'
import Footer from '../components/footer/Footer'
import Navigation  from '../components/navigation/Navigation'
import Banner from '../components/banner/banner';
import { SimpleCard } from '../components/simple-card/SimpleCard'
import { ABOUTBG } from '../assets/images';
const About = (props) => {
   useEffect(() => {
      window.scrollTo(0, 0)
    }, [])
const [show, setShow] = useState(false);
const handleClose = () => setShow(false);
const handleShow = () => setShow(true);
const  ourProcess= [
{
title :'Good Rapport',
content : "We strive to develop a good relationship with our clients as we believe that our solutions built on the bedrock of this relationship."
},
{
title :'Agile Method',
content : "Our expert team undertakes a methodical design thinking strategy to leverage the latest technology and work with clients to create robust customer-centric solutions in the shortest possible time."
},
{
title: "Get the Eye on Revenue",
content : "We understand that our solutions as products that inevitably should be easy to adapt and create value to clients by delivering the best ROI"
}, 
{
title : "Adequate Support",
content : "Our dedicated support to our clients doesn’t stop with the journey of product creation and delivery but continues with post-implementation."
}
]
return (
<div>
   <Navigation  show={show} onClose={handleClose}  onShow ={handleShow}/>
   <Banner title="About" bg={ABOUTBG}/>
   <Container className='mt-75 mb-10'>
      <Row>
         <div>
            <h1 class="main-title text-left ">Overview</h1>
            <p className='mt-3 about_content text-left'>	
	
            ElZeal with the brightest minds in the IT industry, strides as a pioneer in Digital Transformation, delivering innovative value-added solutions. Our digital integration capability of incorporating cutting-edge tools and quality designs empowers you to achieve a cohesive digital experience and responsive solutions that amend high performance across all the devices.</p>
         </div>
         <div className='mt-60'>
            <h1 class="main-title text-left mt-4">Our Process</h1>
            <Row >
               {
               ourProcess.map((item, index)=>{
               return(
               <Col key={index} md='6' className="card_height_set">
               <SimpleCard  title={item.title} content={item.content} />
               </Col>
               )
               })
               }
            </Row>
         </div>
         <div className='mt-60'>
            <WhoWeAre/>
         </div>
      </Row>
   </Container>
   <Footer />
</div>
)
}
export default About;