import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap';
import Footer from './../../components/footer/Footer'
import Navigation from './../../components/navigation/Navigation'
import Banner from './../../components/banner/banner';
import TechnologyCard from '../../components/technology-card/technology-card';
import { ORACLETHUMB, ORACLE, ORACLEBG } from './../../assets/images/index'

const Oracle = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div>
        <Navigation show={show} onClose={handleClose} onShow={handleShow} />
        <Banner title="Oracle" bg={ORACLEBG} />
        <Container>
          <div>
            <TechnologyCard title="Oracle"
              content1="	
	
              ElZeal and its partners help clients enhance their operational efficiency, customer relations and profits by deploying Oracle suite of products and services."
              content2="Complex business problems require dynamic and agile teams. With wide range of technical consultants and domain experts spread across geographies, we help customers realize the true value of their IT spend."
              image={ORACLETHUMB}
              deliveryimg={ORACLE} />
          </div>
        </Container>
        <Footer />
      </div>
    </>
  )
}

export default Oracle
