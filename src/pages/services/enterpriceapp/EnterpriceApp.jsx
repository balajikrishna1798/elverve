import React, { useEffect } from 'react'
import Banner from '../../../components/banner/banner'
import Navigation from '../../../components/navigation/Navigation'
import Footer from '../../../components/footer/Footer'
import { Col, Container, Row } from 'react-bootstrap'
import './enterprice.css'
import { ENTERPRICEAPP, ENTERPRICEBG } from '../../../assets/images'
import ListCard from '../../../components/list-card/ListCard'



const EnterpriceApp = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    const cardTitle = [

        {
            title: 'Agile Transformation Services',
            subtitle: "Drive digital disruption",
            list:{
                listcontent1: "Drive the complexities of business agility and unravel your ingenious power to persuade a competitive edge over the day to day operations being agile.",
                listcontent2 : "Agile Transformation expertise to help you accomplish performance enhancements, including product and service innovation, together with the best principles and practices."

            }
            
        },
        {
            title: 'DevOps',
            subtitle: "Cloud-based application development environment ",
            list:{
                listcontent1: "Automated processes to streamline Information Technology by bringing business, Development teams, and Operations Teams together.",
                listcontent2 : "Continuously evolve with DevOps Transformation and gain the technology advancements supporting continuous and rapid delivery of IT-based solutions."

            }
            
        },
        {
            title: 'Application Modernization',
            subtitle: "Cloud transformation driving business agility  ",
            list:{
                listcontent1: "Secure and automated applications to transform your traditional applications to become more robust in nature.",
                listcontent2 : "Reshape your applications by the swift of digital transformation and rapidly respond to your business’s changing needs."

            }
            
        },
     
        {
            title: 'Architecture',
            subtitle: "Technology architecture augmenting scalability and performance",
            list:{
                listcontent1: "Our Enterprise Architecture services help you build a technology architecture with foundational capabilities to deliver cutting-edge innovative solutions to clients.",
                listcontent2 : "Technology architecture capabilities helping your organization transform and be agile and fast."

            }
            
        },
        {
            title: 'Software Engineering',
            subtitle: "Custom software development solutions",
            list:{
                listcontent1: "Our full-stack Product development expertise custom solutions that best suits in today’s disruptive digital landscape.",
                listcontent2 : "Revolutionize your ideas into innovative products with our custom-made software products leverage technology advancements."

            }
            
        },
        {
            title: 'Quality Engineering',
            subtitle: "Differentiated user experience",
            list:{
                listcontent1: "Our Quality Engineering services adapt AI-powered and analytics-driven approach for reimagining user experience with software testing.",
                listcontent2 : "Our expertise in Quality engineering skills across Automation, QA, DevOps, and Agile services helps you deliver the differentiated user experience."

            }
            
        },
        
        

       
          
        
    ]



    
  return (
    <>
    <section>
        <Navigation />
    <Banner title='Enterprise Application Development'  bg={ENTERPRICEBG} />

    <section>
        <Container className='mt-75 mb-75'>
            <Row>
                <Col lg="11">
                <div className='entertprice_section_title '>
                    <h3>
                    The complete end-to-end life cycle of Application development through Innovation and maintenance support post-implementation
                    </h3>
                    </div>
                    </Col>
                    
                     </Row>

                     <div>
                     <Row>
                    <Col>

                    <div className='entertprice_section_img text-center'>

                        <img className='img-fluid' src={ENTERPRICEAPP} alt="img" />

                    </div>

                    
                    
                    
                    
                    </Col>




                </Row>
                        
                     </div>

                     <div className='entertprice_section_cards'>
                        <Row>

                            {
                                cardTitle.map((item, i) =>{
                                    return(
                                        
                            <Col className='new_card_enter' lg='4'>

                            <ListCard title={item.title} subtitle={item.subtitle} list1={item.list.listcontent1} list2={item.list.listcontent2} />
                            
                            
                            </Col>

                                    )
                                })
                            }





                        </Row>
                     </div>

                     




        </Container>



    </section>





    <Footer />


    </section>
        
    </>
  )
}

export default EnterpriceApp