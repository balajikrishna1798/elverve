import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Footer from '../../components/footer/Footer'
import Navigation from '../../components/navigation/Navigation'
import Banner from '../../components/banner/banner';
import IconCardStyle from '../../components/icon-card-style/icon-card-style';
import { COGNITIVE, CONGITIVEBG } from './../../assets/images/index'
import './insights.css'

const Cognitive = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const analytics = [

    {
      title: 'Live Feed Analytics',
      vertical: "IoT",
      problem: "The client had various IoT devices in different sites, gathering real time data. These real time data were pooled and stored in various servers. They had a problem of managing the large volume of data, visualization &amp; analyzing the data.",
      solution: "We developed a Hadoop based platform for data handling. We architected an application on Kubernetes, for real time data"
    
    },
    {
      title: 'Customer Analytics',
      vertical: "Retail/Consumer",
      problem: "Identify happy and unhappy customers in real-time and take corrective measures to hold back the customer.",
      solution: "We developed a real-time data gathering and predictive text analytics engine to assess the happiness factor of the customer. We used our custom algorithm implementation to parse real-time text and rating information to create customer happiness sentiment"
    
    }



  ]
  return (
    <>
      <div>
        <Navigation show={show} onClose={handleClose} onShow={handleShow} />
        <Banner title="Cognitive Computing (AI/ML)" bg={CONGITIVEBG} />
        
        <Container className='cognitive mt-75 mb-75'>
        <div className=''>
          <Row>
            <Col lg='11'>
            <h1 className='main-title'>Behind every successful project, we have a strong team of Mathematicians, ML & AL Engineers, Software Engineers, System Architects, and Quality Analysts</h1>
            </Col>

          </Row>

         

<div className=' m-auto text-center'>
<img className='my-3' src={COGNITIVE} alt="Cognitive" width="80%" />
</div>
     
        </div>
          <div className='mt-30 mb-30'>
            <h1 className='main-title'>Our Case Studies</h1>
            <Row className='mt-30'>
              {
                analytics.map((analytic, index) => {
                  return (
                    <Col key={index} lg='6' sm='6' xs='12' md='6'>
                    <div className='analytics-card card'>
<h1 className='main-title main_title_analytic'>{analytic.title}</h1>
<div>
  <p><span><b>Vertical:</b></span> {analytic.vertical}</p>
  <p><span><b>Problem:</b></span>{analytic.problem}</p>
  <p><span><b>Solution:</b></span>{analytic.solution}</p>

                    </div>
                    </div>
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

export default Cognitive
