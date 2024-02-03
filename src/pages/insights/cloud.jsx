import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap';
import Footer from '../../components/footer/Footer'
import Navigation from '../../components/navigation/Navigation'
import Banner from '../../components/banner/banner';
import CardStyle1 from '../../components/card-style-1/card-style-1';
import { CLOUD, CLOUDBG } from './../../assets/images/index'
import ListItemCard from '../../components/list-item/list-item';
import './insights.css'

const Cloud = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const clouds = [
    {title: "Scalable Hybrid Cloud"},
    {title: "Managed Private Cloud"},
    {title: "Managed Public Cloud"},
    {title: "Cloud Automation"},
    {title: "Cloud Management"},
    {title: "Application Micration"},
    {title: "Cloud Native Applications"},
    {title: "Devops Enhancement"},
    {title: "Aws"},
  ];
  const listitems = [
    {title: "Source Code Deployment in popular cloud computing services"},
    {title: "Application Monitoring and scaling options based on the cloud service provider"},
    {title: "Easy migration between different cloud service providers including moving application between public and private cloud"},
    {title: "Support for using a different service provider for different cloud features.Cloud Automation"},
    {title: "Seamlessly manage all your IT Applications, including Virtual Platforms, Docker Containers, AI, APIs, SAP, and many more, to accelerate your Digital Transformation."},
];
 
  return (
    <>
      <div>
        <Navigation show={show} onClose={handleClose} onShow={handleShow} />
        <Banner title="Cloud" bg={CLOUDBG} />
        
        <Container className='mt-75 mb-75'>
        <div >
          <Row>
            <Col lg='11'>
            <h1 className='main-title'>Cloud-enabled Virtual Platforms and Services to enhance your Business Strategies and maximize your Business potential</h1>
            </Col>
          </Row>
        
<div className='m-auto text-center' >
<img  src={CLOUD} alt="Cloud" width="80%" className='my-4' />
</div>
         
        </div>
          <div className='mt-30 mb-30'>
          <Row className='mt-5'>
            {clouds.map((cloud, index) => {
            return (
            <Col xs={12} sm={6} md={6} lg={4} xl={4} key={index}>
            <CardStyle1 title={cloud.title} />
            </Col>
            )
            })}
         </Row>
         <div className='my-4'>
         <p className='main-content '>
A strategic move to Align and Enable your business and application transformation with a strong emphasis on cloud and mobility solutions.</p>
         <p className='main-content'>The Intelligent Cloud Platform with empowering Analytics for Business Agility.</p>
         </div>

          </div>
         <div className='list_card tech_new_card'>
         <div  class="listitem-card">
        <div className='list_card_content'>
          <h1 className='main-title'>Cloud Framework</h1>
           <ul>
           {listitems.map((listitem, index) => {
              return (
                <li key={index}>{listitem.title}</li>
                )
                })}
               
           </ul>
          

         </div> 

{/* <ListItemCard  title="Cloud Framework" title={listitems}/> */}
          </div>
         </div>
          
        </Container>
        <Footer />
      </div>
    </>
  )
}

export default Cloud
