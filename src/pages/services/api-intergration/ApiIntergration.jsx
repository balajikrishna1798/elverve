import React, { useEffect } from 'react'
import './apiinter.css'
import { Col, Container, Row } from 'react-bootstrap'
import Navigation from '../../../components/navigation/Navigation'
import Banner from '../../../components/banner/banner'
import { APISERVICE } from '../../../assets/images'
import MultiListCard from '../../../components/multi-list-card/MultiListCard'
import Footer from '../../../components/footer/Footer';
import { APIINTEGRATION } from '../../../assets/images'



const ApiIntergration = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])



  return (
    <>
    <Navigation />
    <Banner title="API Integration" bg={APIINTEGRATION} />

    <section className='api_intergration_section'>
        
        <Container className='mt-75 mb-75'>
            <div>
            <Row>
                <Col lg={11}>
                <div className='api_intergration_section_title'>

                    <h3>
                    Get to streamline your business process, integrating standard and custom API applications linking to your business for improved performance
                    </h3>

                </div>
                
                
                </Col>

            </Row>

            </div>
            <div className='api_intergration_section_img'>
                <Row>
                    <Col>
                    <div className='text-center'>
                    <img className='img-fluid' src={APISERVICE} alt="imae" />
                    </div>

                  
                    
                    
                    </Col>
                </Row>




            </div>

            <div className='api_intergration_cards'>
                
                   
                    <MultiListCard  />
                    
                  
            

                         
               

              



            </div>
          

            





        </Container>







    </section>

    <Footer />



        
    </>
  )
}

export default ApiIntergration