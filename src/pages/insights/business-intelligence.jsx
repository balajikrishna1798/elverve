import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Footer from '../../components/footer/Footer'
import Navigation from '../../components/navigation/Navigation'
import Banner from '../../components/banner/banner';
// import IconCardStyle from '../../components/icon-card-style/icon-card-style';
import { BUSINESS, BUSINESSINTEL } from './../../assets/images/index'
import ListCard from '../../components/list-card/ListCard';
import './insights.css'
const BusinessIntelligence = (props) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const listitems = [
    {title: "Expertise in ETL Architecture, Design, and Development using various ETL tools and PL/SQL."},
    {title: "Proficiency in Data Modeling, Dimensional Modeling, Data warehouse design, Data Analysis, and Reports Design using various Reporting tools."},
    {title: "Possess extensive functional and working knowledge on OBIEE 12c/11g, Oracle BI Apps 11g, Oracle BI Cloud Service, ODI 12c/11g, and Oracle Analytics Cloud."},
    {title: "Skilled in non-Oracle BI solutions using Microsoft Azure stack (datafactory and databricks), Informatica Cloud, and Power BI."},
    {title: "Oracle certified implementation specialist for ODI and OBIEE."},
];
  const cardTitle = [

    {
        subtitle: "For a Flight Catering Company in MENA",
        list:{
            listcontent1: " Data Migration Implementation, five years of legacy data.",
            listcontent2 : " Build industry standard and custom reports using Oracle BICS to replace their current reporting system."

        }
        
    },
    {
        subtitle: "For a Betting and Gaming company in EUROPE",
        list:{
            listcontent1: "Understand business requirements/functionality, focused at module/feature level and preparing the business requirement document and technical mapping document.",
            listcontent2 : "Integrate the data sources spread across different Geographical locations."
        }
    },
    {
      subtitle: "For India’s biggest Non-Life Insurance provider",
      list:{
          listcontent1: "Integrating different sources like E-BAO, MDM, Oracle Finance, and CRM into Data Warehouse.",
          listcontent2 : "Development of packages/interfaces in ODI for Daily data load from the sources into DW."
      }
  },
]
  return (
    <>
      <div>
        <Navigation show={show} onClose={handleClose} onShow={handleShow} />
        <Banner title="Business Intelligence" bg={BUSINESSINTEL} />
        
        <Container className='mt-75 mb-75 business-intelligence'>
        <div className=''>
          <Row>
            <Col lg='11'>
            <h1 className='main-title'>Robust Business Intelligence Analytics and Reporting Tools for Informed Decision making</h1>
            </Col>
          </Row>
          
<div className='m-auto text-center'>
<img  src={BUSINESS} alt="Business Intelligence" width="80%" className=' my-4' />
</div>
          
        </div>
        <div  class="list_card tech_new_card    mt-75 mb-30">
        <div className='list_card_content'>
          <h1 className='main-title'>Technology Competencies</h1>
           <ul>
           {listitems.map((listitem, index) => {
              return (
                <li key={index}>{listitem.title}</li>
                )
                })}
               
           </ul>
          

         </div> 

{/* <ListItemCard  title="Cloud Framework" title={listitems}/> */}
          </div>
          <div className='mt-75 mb-30'>
            <h1 className='main-title'>Our Case Studies</h1>
            <Row>

{
    cardTitle.map((item, i) =>{
        return(
            
<Col   className='new_list_card card_margin' lg='4'>

<ListCard subtitle={item.subtitle} list1={item.list.listcontent1} list2={item.list.listcontent2} />


</Col>

        )
    })
}





</Row>
          </div>
        </Container>
        <Footer />
      </div>
    </>
  )
}

export default BusinessIntelligence
