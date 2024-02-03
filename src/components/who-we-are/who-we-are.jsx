import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import './who-we-are.css'
import {MISSION, VISION, STRATEGY } from '../../assets/images/index'
const WhoWeAre = () =>  {
const items = [
{title: "Our Mission",image: MISSION , content:'To emerge as an exemplary global enabler of businesses to improve productivity with digital economy Workforce management and stay ahead at competitive'},
{title: "Our Vision",image: VISION, content:'Bring you robust, ingenious, and scalable digital capabilities and solutions to navigate you to futuristic Digital transformation in a simplified approach.'},
{title: "Our Strategy",image: STRATEGY, content:'To trailblaze Digital Transformation through innovative products and solutions that deliver enriching customer experience, maximize revenue, and promote real-time business excellence.'},
];
return (
<>
<Container>
   <div className="text-left mt-4 mb-5">
      <h1 class="main-title  justify text-start">Who We Are? </h1>
      <p class="mt-3 mb-4 description">We devise Intelligent <b>Digital Enterprise solutions</b> to enhance your business competencies and transform into a <b>Digital Enterprise swiftly.</b></p>
      <Row>
         {items.map((items, index) => {
         return (
         <Col xs={12} sm={12} md={12} lg={4} key={index}>
         <div className="mt-1">
            <img src={items.image} width="80px" height="80px"/>
            <h5>{items.title}</h5>
            <p className="mt-4">{items.content}</p>
         </div>
         </Col>
         )
         })}
      </Row>
   </div>
</Container>
</>
);
}
export default WhoWeAre;