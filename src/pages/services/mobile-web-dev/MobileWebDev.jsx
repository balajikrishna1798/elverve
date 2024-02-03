import React, { useEffect } from 'react'
import './mobileweb.css'
import Banner from '../../../components/banner/banner'
import Navigation from '../../../components/navigation/Navigation'
import { Col, Container, Row } from 'react-bootstrap'
import { SimpleCard } from '../../../components/simple-card/SimpleCard'
import Footer from '../../../components/footer/Footer'
import { MOBILEBG } from '../../../assets/images'



const MobileWebDev = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    const mobiledev = [
        {
            title:"Android",
            content : "The multi-device universe or Android apps calls for more intensive quality assurance testing and an experienced Android team. Technology - Android & Kotlin"
        },
        {
            title:"IOS",
            content : "Apple’s iOS is at the forefront of innovation and disruption in the mobile space. Technology - Swift & Objective C"
        },
        {
            title:"Responsive Web App",
            content : "You may be attracted to develop a web and mobile app by the shorter development cycles. Technology - Angular, React, Flutter & Ionic"
        },
        {
            title:"Hybrid App Development",
            content : "Combining the characteristics of native and web-based applications. Technology - Flutter, React Native & Ionic"
        },
    ]
    const webdev = [
        {
            title:"Custom Web Application Development",
            content : "We provide responsive web app and make it highly scalable using CDN technology. Technology - AngularJS, ReactJs, VueJS, NodeJS"
        },
        {
            title:"Ecommerce Website Development",
            content : "Apple’s iOS is at the forefront of innovation and disruption in the mobile space. Technology - Swift & Objective C"
        },
        {
            title:"Open Source Customization",
            content : "We offers the unmatched customization for the widest variety of open source tools, development frameworks and softwares."
        },
        {
            title:"Custom Saas Product Development",
            content : "Having a strong product development experience, we provides a wide range of SaaS development services for our global clients from various industries."
        },
    ]




  return (
    <>
    <section className='mobile_web_section'>
    <Navigation />
    <Banner title='Mobile / Web App Development' bg={MOBILEBG} />
    <div className=''>
        <Container>
            <div className='mobile_web_sections'>
                <h2 className='mobile_web_sections_title'>Mobile Development</h2>

                <Row>
                    {
                        mobiledev.map((item, index)=>{
                            return(
                                <Col className='card_margin' key={index} lg='6'>

                                <SimpleCard title={item.title} content={item.content} />
            
            
                                </Col>

                            )
                        })
                    }


                   


                </Row>





            </div>
            <div className='mobile_web_sections'>
                <h2 className='mobile_web_sections_title'>Web Development</h2>

                <Row>
                    {
                        webdev.map((item, index)=>{
                            return(
                                <Col className='card_margin' key={index} lg='6'>

                                <SimpleCard title={item.title} content={item.content} />
            
            
                                </Col>

                            )
                        })
                    }


                   


                </Row>





            </div>






        </Container>





    </div>




    </section>

    <Footer />


        
    </>
  )
}

export default MobileWebDev