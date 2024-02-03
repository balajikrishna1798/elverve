import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Footer from '../../components/footer/Footer'
import Navigation from '../../components/navigation/Navigation'
import Banner from '../../components/banner/banner';
import { SimpleCard } from '../../components/simple-card/SimpleCard';
import { SHAREPOINTBG } from '../../assets/images';

const Sharepoint = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const  sharepoints= [
       
    {
        title :'Business Process Automation',
        content : "Deploy solutions tailored to your business processes."
    },
    {
        title :'Collaboration & Content Management',
        content : "Easily manage documents and help ensure integrity of content and provide sophisticated controls for securing company resources."
    },
    {
        title: "Application Development & Electronic Forms",
        content : "Provide a cost-effective foundation for building Web-based applications."
    }, 
    {
        title : "Enterprise Search",
        content : "Take file sharing to a new level with robust storage and search capabilities."
    },
    {
      title : "Customization",
      content : "Customization by combining SharePoint designer, WF, and Visual Studio."
  }




]
  return (
    <>
      <div>
        <Navigation show={show} onClose={handleClose} onShow={handleShow} />
        <Banner title="Sharepoint" bg={SHAREPOINTBG} />
        <Container className='mb-75 mt-75'>
          <div className='sharepoint'>
          <Row >
               {
                                sharepoints.map((sharepoint, index)=>{
                                    return(
                                        <Col className='card_margin' key={index} md='6'>
                                        <SimpleCard title={sharepoint.title} content={sharepoint.content} height="150px"/>
                                    </Col>

                                    )
                                })
                            }
</Row>
          </div>
        </Container>
        <Footer />
      </div>
    </>
  )
}

export default Sharepoint
