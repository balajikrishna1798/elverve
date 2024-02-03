import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap';
import Footer from './../../components/footer/Footer'
import Navigation from './../../components/navigation/Navigation'
import Banner from './../../components/banner/banner';
import TechnologyCard from '../../components/technology-card/technology-card';
import { SALESFORCE, SALESDELIVERY, SALESFORCEBG } from './../../assets/images/index'

const Salesforce = (props) => {
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
        <Banner title="Salesforce" bg={SALESFORCEBG} />
        <Container>
          <div>
            <TechnologyCard title="Salesforce"
              content1="	
	
ElZeal and its partners bring deep expertise in end-to-end Salesforce products and solutions."
              content2="Complex business problems require dynamic and agile teams. With strong bench of technical consultants and domain experts spread across geographies, 	
	
ElZeal can help optimize your spend to achieve business goals"
              image={SALESFORCE}
              deliveryimg={SALESDELIVERY} />
          </div>
        </Container>
        <Footer />
      </div>
    </>
  )
}

export default Salesforce
