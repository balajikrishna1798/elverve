import React from 'react'
import './banner.css'
import { Col, Container, Row } from 'react-bootstrap'
import { MOBILEBG } from '../../assets/images'



const Banner = (data) => {
return (
<div className='banner-section' style={{background : `url(${data?.bg || MOBILEBG })`}}>
  <Container>
    <Row>
      <Col lg='8'><h1 className='page-title'>{data?.title}</h1></Col>
    </Row>
  </Container>

</div>
)
}

export default Banner