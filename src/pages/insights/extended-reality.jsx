import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Footer from '../../components/footer/Footer'
import Navigation from '../../components/navigation/Navigation'
import Banner from '../../components/banner/banner';
import { SimpleCard } from '../../components/simple-card/SimpleCard';
import { BLOCKCHAIN,SMART,FRAMEWORK,WALLET,CRYPTO,PRIVATE,ICO, ARVRBG } from './../../assets/images/index'

const ExtendedReality = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const  capabilities= [
       
    {
        title :'Augmented Reality (AR)',
        content : "We specialize in customizing Augmented Reality mobile apps helping organizations augment the latest modernization. Our expertise solutions include developing AR content, construction AR apps, and installation of AR."
    },
    {
        title :'Virtual Reality (VA)',
        content : "We expertise in developing multi-sensory Virtual Reality experiences and applications to clients as 3D Technology solutions, enabling users to experience the hyper-realistic 3D virtual world that is impossible in the real world through real interaction. Our wide range of VR applications includes Architectural visualizations, virtual walkthroughs, virtual training, trade shows, promotions, exhibitions, play in real-world environments, film-set interactions, and many more."
    },
    {
        title: "Mixed Reality (MR)",
        content : "Our Mixed Reality services help you to enhance your business and rethink the customer experience across all corners. We utilize an advanced blend of interaction design and cutting-edge technology behind mixed reality digital experience to create a next-generation digital-led magical experience of ingenious virtual objects, enabling users to interact with these objects within their real-world horizon."
    } 
   




]
  return (
    <>
      <div>
        <Navigation show={show} onClose={handleClose} onShow={handleShow} />
        <Banner title="Extended Reality (AR/VR)" bg={ARVRBG} />
        <Container className='mt-75 mb-75'>
        <div >
          <Row>
            <Col lg='11'>
            <h1 className='main-title'>Virtual Tour to Imagine & Experience the real-time Environment</h1>
        <p class="main-content mt-4">Immersive Extended Reality Technology solutions to create new Business opportunities with augmented Customer experience.</p>
        <p class="main-content">We leverage Extended Reality (ER) services for Branding, Industrial production, Retail, Real estate, Medical, Automotive, Education, and many other sectors enabling users to experience beyond reality. Our expert team creates immersive and interactive AR, VR, and Mixed Reality experiences transforming the business to maximize revenue.</p>
        <p class="main-content f18" >
              <b>
              Our capabilities include HTC Vive, Oculus Rift, Google cardboard, Microsoft Hololens
              </b>
            </p>
            </Col>
          </Row>
        
        
        </div>
     
          <div className='mt-30'>
           
          <Row >
               {
                                capabilities.map((capability, index)=>{
                                    return(
                                        <Col className='card_margin' key={index} lg='4' sm='12' xs='12' md='6'>
                                    <SimpleCard title={capability.title} content={capability.content} height="420px"/>
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

export default ExtendedReality
