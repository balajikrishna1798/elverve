import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap';
import Footer from './../../components/footer/Footer'
import Navigation from './../../components/navigation/Navigation'
import Banner from './../../components/banner/banner';
import TechnologyCard from '../../components/technology-card/technology-card';
import { OPENSOURCETHUMB, OPENSOURCE, OPENSOURCEBG } from './../../assets/images/index'

const Opensource = (props) => {
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
        <Banner title="Opensource"  bg={OPENSOURCEBG}/>
        <Container>
          <div>
            <TechnologyCard title="Opensource"
              content1="ElZeal and its partners have expertise in developing and delivering any open source based projects such as web and mobile applications"
              content2="Complex business problems require dynamic and agile teams. With wide range of technical consultants and domain experts spread across geographies, we help customers realize the true value of their IT spend."
              image={OPENSOURCETHUMB}
              deliveryimg={OPENSOURCE} />
          </div>
        </Container>
        <Footer />
      </div>
    </>
  )
}

export default Opensource
