import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap';
import Footer from './../../components/footer/Footer'
import Navigation from './../../components/navigation/Navigation'
import Banner from './../../components/banner/banner';
import TechnologyCard from '../../components/technology-card/technology-card';
import { NETSUITETHUMB, NETSUITE, NETSUITEBG } from './../../assets/images/index'

const Netsuite = (props) => {
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
        <Banner title="Netsuite" bg={NETSUITEBG} />
        <Container>
          <div>
            <TechnologyCard title="Netsuite"
              content1="	
	
ElZeal and its partners help improve visibility and control over every aspect of your business, across industries and geographies using NetSuite."
              content2="	
	
ElZeal capabilities in NetSuite is backed by a strong bench of technical and domain experts spread across geographies. From implementing an accounting module to an end-to-end ERP application in NetSuite, 	
	
ElZeal can help optimize the value of your spend."
              image={NETSUITETHUMB}
              deliveryimg={NETSUITE} />
          </div>
        </Container>
        <Footer />
      </div>
    </>
  )
}

export default Netsuite
