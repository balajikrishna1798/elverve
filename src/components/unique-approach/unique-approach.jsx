import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import './unique-approach.css'
import {DESIGNTHINKING, RIGHTECH, TRUSTEDPARTNER, ACCOUNTABLE } from '../../assets/images/index'
const UniqueApproach = () =>  {
  const items = [
        {title: "Design Thinking",image: DESIGNTHINKING},
        {title: "Right Technology",image: RIGHTECH},
        {title: "Trusted Partners",image: TRUSTEDPARTNER},
        {title: "Transparent & Accountable",image: ACCOUNTABLE}
      ];
      const expertise = [
        {title: "Visual Design"},
        {title: "Complete Task CX"},
        {title: "AR & VR Solutions"},
        {title: "UX Designs of Digital Interfaces and Products"}
      ];
      return (
        <>
        <Container>
            <h1 class="main-title">Unique Approach</h1>
            <p className="main-content mt-30">	
	
ElZeal Design Thinking based approach to deliver solutions throughout the delivery cycle helps you use technology to solve your business problem. 	
	
ElZeal delivers these solutions by taking ownership of delivery and leveraging its certified partner network.</p>
            <Row className="mt-30">
              {items.map((items, index) => {
              return (
              <Col xs={12} sm={6} md={6} lg={3} key={index} className="approach-items">
                <img src={items.image} width="80px" height="80px"/>
                <h5 className="unique-title">{items.title}</h5>
              </Col>
              )
              })}
           </Row>
        </Container>
         
        </>
      );
}


export default UniqueApproach;
