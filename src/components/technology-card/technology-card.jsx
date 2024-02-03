import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import UniqueApproach from "../unique-approach/unique-approach";
import './technology-card.css'
const TechnologyCard = (data) => {
  return (
    <>
    <Container>
    <Row className="technology mt-75">
        <Col xs={12} sm={12} md={6} lg={6}>
           <img src={data?.image} width="90%"/>
        </Col>
        <Col xs={12} sm={12} md={6} lg={6}>
           <h1 class="main-title mt-30">{data?.title}</h1>
           <p className="main-content mt-30">{data?.content1}</p>
           <p className="main-content">{data?.content2}</p>
        </Col>
      </Row>
      <div class="mt-75">
        <UniqueApproach /> 
      </div>
      <div className="mt-75 mb-75">
      <h1 class="main-title">Delivery</h1>
      <div className="m-auto text-center">
      <img src={data?.deliveryimg} width="80%" className="mt-30"/>
      </div>
     
      </div>
    </Container>
     
    </>
  );
};
export default TechnologyCard;
