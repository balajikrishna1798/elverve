import React, { useEffect } from 'react'
import Navigation from '../../components/navigation/Navigation'
import Banner from '../../components/banner/banner'
import CardStyle1 from '../../components/card-style-1/card-style-1'
import { Col, Container, Row } from 'react-bootstrap'
import './digital.css'
import { DIGITALBG, DIGITALSECIMG } from '../../assets/images'
import { SimpleCard } from '../../components/simple-card/SimpleCard'
import Footer from '../../components/footer/Footer'

const Digital = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    const cardTitle = [

        {
            title: 'Minimum Viable Product'
        },
        {
            title: ' Complete Product Engineering'
        },
        {
            title: 'Technology Migration/Re-engineering'
        },
        {
            title: 'Startup/Product Advisory'
        },
        {
            title: 'Application Transformation Services'
        },
        {
            title: 'Enterprise Technology Integration'
        },
        {
            title: 'Product Engineering Services'
        },
        {
            title: 'Independent Validation Services'
        }
    ]

    const  caseStudies= [
       
        {
            title :'Financial Planning & Analysis',
            content : "Our Digital innovation helps to address most of the key shortcomings in typical headcount budgeting and planning cycles. Our innovative Digital platform helps to aggregate requirements from users, and automatically summarizes monthly/quarterly and yearly plans/forecasts using a workflow-based approval process at ease."
        },
        {
            title :'Portfolio Management',
            content : "Our Digital innovation enables effective management of the overall project and portfolio lifecycle from ideation all the way to post-implementation review through digitization of artifacts, workflow automation, and integration with existing systems to provide a consolidated overview of project portfolios. Our solution is built as a key enabler program governance."
        },
        {
            title: "Case Management",
            content : "Our digital innovation addresses the key challenge with any service-based industry where the users have a suboptimal experience resulting from tickets’ closure when the outcome is not being achieved. Our solution enables a full view of the lifecycle of tickets using new systems design to track the entire process and provides the ability to build automation and intelligence in the future"
        }, 
        {
            title : "Learning Management",

            content : "Our digital product provides a single tracking and workflow system for students, mentors, and content creators. Ensures effective audit and content control processes to adhere to information security compliance."
        }




    ]







  return (
    <>
    <section className=''>
    <Navigation />
    <Banner title='Digital' bg={DIGITALBG} />
    <section className='digital_section'>
        <Container className='mt-75 mb-75'>
            <Row>
                <Col lg= "11">
                <div className='digital_section_title '>
                    <h3>  Robust and Innovative Digital Solutions to expedite Digital Transformation that promotes real-time business excellence</h3>
              

                </div>

                </Col>






            </Row>
            
            <Row>
                    <Col>

                    <div className='digitalsection_imag text-center'>

                        <img className='img-fluid mt-5 my-4' src={DIGITALSECIMG} alt="" />

                    </div>

                    
                    
                    
                    
                    </Col>




                </Row>

                <div className='digital_section_title_subsections'>
                    <h2 className='digital_section_title_subsections_tilte mb-20'>Digital Offerings</h2>

                    <div className='digital_cards_section'>

                        <Row className='mt-4'>
                            {
                                cardTitle.map((item , index) =>{
                                    return(
                                        <Col  key={index} lg='3'> 

                                        <CardStyle1 title={item.title} />
                                        
            
            
                                        </Col>
                                    )
                                })
                            }


                           
                        </Row>

                    </div>
                    







                </div>

                <div className='digital_section_title_subsections'>
                    <h2 className='digital_section_title_subsections_tilte'>Our Case Studies</h2>

                    <div className='digital_cards_section mb-50 '>

                        <Row >
                            {
                                caseStudies.map((item, index)=>{
                                    return(
                                        <Col className='card_margin' key={index} lg='6'>
                                        <SimpleCard title={item.title} content={item.content} />
                                    </Col>

                                    )
                                })
                            }



                           
                        </Row>

                     

                    </div>
                    







                </div>
                





        </Container>





    </section>
    <Footer />


    </section>

  
    
    

    





        
    </>
  )
}

export default Digital