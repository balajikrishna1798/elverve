import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap';
import Footer from './../../components/footer/Footer'
import Navigation from './../../components/navigation/Navigation'
import Banner from './../../components/banner/banner';
import TechnologyCard from '../../components/technology-card/technology-card';
import { SERVICENOWTHUMB, SERVICENOW, SERVICENOWBG } from './../../assets/images/index'

const Servicenow = (props) => {
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
        <Banner title="Service Now" bg={SERVICENOWBG} />
        <Container>
          <div>
            <TechnologyCard title="Service Now"
              content1="	
	
ElZeal through its ServiceNow partner network consults, implements & provides support services for its customers globally."
              content2="	
	
ElZeal capabilities in service now is backed by a strong bench of technical and domain experts spread across geographies. From implementing a IT service platform to a complex business related process, 	
	
ElZeal can help optimize the value of your spend."
              image={SERVICENOWTHUMB}
              deliveryimg={SERVICENOW} />
          </div>
        </Container>
        <Footer />
      </div>
    </>
  )
}

export default Servicenow
