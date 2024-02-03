import React, { useEffect, useState } from 'react'
import { Row, Col,Container } from 'react-bootstrap';
import   '../../../src/App.css'
import Footer from '../../components/footer/Footer'
import Navigation  from '../../components/navigation/Navigation'
import Banner from '../../components/banner/banner';
import { SimpleCard } from '../../components/simple-card/SimpleCard'
import { AI, AIBG } from '../../assets/images'
const Datascience = (props) => {
   useEffect(() => {
      window.scrollTo(0, 0)
    }, [])

const [show, setShow] = useState(false);
const handleClose = () => setShow(false);
const handleShow = () => setShow(true);
const  ourProcess= [
{
title :'Modelling Datasets ',
content : "Deep Learning, Machine Learning, Neural Networks"
},
{
title :'Hardwares Setup & Support',
content : "GPUS, Spark Parallel Processing tool, Cloud Data Storage, Cloud Compute"
},
{
title: "Software Development Support",
content : "Python, Ruby, Java, C, Tensorflow"
}, 
{
title : "AI & ML Offers",
content : "Image Recognition, Speech Recognition, Chatbots, Natural Language Generation, Sentiment Analysis & Automation"
}
]
return (
<div>
   <Navigation  show={show} onClose={handleClose}  onShow ={handleShow}/>
   <Banner title="AI & Data Science" bg={AIBG}/>
   <Container className='mt-75'>
      <div className='text-center'>
         
         <Row>
            <Col lg={11}>
            <h1 class="main-title text-start">AI-powered Data Science accelerators transforming the way you work with its smarter Enterprise Applications and Analytics software build on cognitive computing functionality accelerating business value</h1>
            </Col>
         </Row>

        

         <img className='datascience_image my-4' style={{ width:'50%' }} src={AI} alt="ai & data-science" />
      </div>
      <div className='mt-3 mb-5'>
         <Row >
            {
            ourProcess.map((item, index)=>{
            return(
            <Col key={index} md='6' className="datacard_height_set">
            <SimpleCard  title={item.title} content={item.content} />
            </Col>
            )
            })
            }
         </Row>
      </div>
   </Container>
   <Footer />
</div>
)
}
export default Datascience;