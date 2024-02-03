import React from 'react'
import './unified.css'
import {STAR} from '../../assets/images/index'
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CountUp from 'react-countup';

import {
   HEDIMER,
   ARC,
   PUPPY,
   ACCUPAYD,
   ALWAQT,
   MUSK,
   RAONE,
   PRINTAPP,
   PETAL,
   NRI,
   WIPRO,
   MURUGAPPA,
   IMPIGER,
   ECHO,
   SILVI

 } from '../../assets/images/index'


const UnifiedTeam = () => {

const tech =[
{
title : "Angular Js"
},
{
title : "React JS"
},
{
title : "Vue Js"
},
{
title : "HTML "
},
{
title : "Css "
},
{
 title : "JavaScript "
},
{
 title : "Jquery "
},    
{
title : "Java"
},
{
title : "Python"
},
{
title : "Node JS"
},
{
title : "Laravel"
},  
{
title : "Codeingniter"
},
{
title : "JSP"
},
{
title : "Severlts"
},
{
title : "Spring"
},
{
title : "MySQL"
},
{
title : "Mongo DB"
},
{
title : "Maria DB"
},
{
title : "Oracle"
},
{
title : "Firebase"
},
{
title : "PostgreSQL"
},
{
title : "AWS"
 },
{
title : "Google Cloud "
},
{
 title : "Azure "
},
{
title : "Digital Ocean "
},
{
title : "Swift "
},
{
title : "Ionic "
},
{
title : "Flutter "
},
{
title : "PWA "
},
{
title : "React Native "
},
{
title : "Selenium "
},
{
title : "Jmeter "
},
{
title : "Protractor "
},
{
title : "Appium "
},
{
title : "Karma "
},
{
title : "Jasmine "
},
{
title : "Adobe Photoshop "
},
{
title : "Adobe Illustrator "
},
{
title : "Adobe After Effects "
},
{
 title : "Adobe XD "
},
{
title : "Sketch "
},
{
title : "Figma "
}
]
const clients =[

{
image : HEDIMER
},
{
image : ARC
},
{
image : PUPPY
},
{
image : ACCUPAYD
},
{
image : ALWAQT
},
{
image : MUSK
},
{
image : RAONE
},
{
image : PRINTAPP
},
{
image : PETAL
},
{
image : NRI
},


]

const tiedUp =[
   {
      image: WIPRO,

   },
   {
      image: MURUGAPPA,

   },
   {
      image: IMPIGER,

   },
   {
      image: ECHO,

   },
   {
      image: SILVI,

   },
]

const countDetail = [
   {
      count : "7",
      titile: 'Successful Years'

   },
   {
      count : "100",
      titile: 'Completed projects'

   },
   {
      count : "15",
      titile: 'Partner Networks'

   },
   {
      count : "100",
      titile: 'Clients'

   },
   {
      count : "20",
      titile: 'Active Projects'

   },
   {
      count : "50",
      titile: 'Employees'

   },
]



return (
   <div className='unified_team' id='company'>
   {/* <div className="unified_team_carousal">
      <div className='unified_cont'>
         <div className='d-flex casrolas'>
            {
            tech.map( (usedtech, i) =>{
            return(
            <div key={i} className='unified_team_carousal_title'>
               <p className='parsa'>{usedtech.title} </p>
               <Image className='star ' src={STAR}  />
            </div>
            )
            } )
            }
         </div>
      </div>
   </div> */}
   <div className='unified_team_main_content'>
      <Container>

         <Row>
            <Col lg={6}>
            <div className='unified_header'>
                  <h2 >Unified Team, </h2>
                  <h4>bounded by innovative passion</h4>
               </div>


            </Col>

         </Row>
         <div className='count_section'>
            {
               countDetail.map((detail, index)=>{
                  return(
                  <div key={index} >
               <div className='unified_counter' >
                  <div>
                  <h2 data-aos="fade-up">
                     <CountUp start={0} end={detail.count} duration={7} enableScrollSpy={true} scrollSpyOnce={true}/>
                     +
                  </h2>
                  <h4>{detail.titile}</h4>
                  </div>
               
               </div>
            </div>
                  )
               })
            }


            
         </div>
        



         {/* <Row>
            <Col lg={6}>
            <div className="unified_content" >
               <div className='unified_header'>
                  <h2 >Unified Team, </h2>
                  <h4>bounded by innovative passion</h4>
               </div>
               <div className='unified_counter' >
                  <h2 data-aos="fade-up">
                     <CountUp start={0} end={10} duration={7} enableScrollSpy={true} scrollSpyOnce={true}/>
                     +
                  </h2>
                  <h4>Years of success delivering impactful IT solutions</h4>
               </div>
               <div className='unified_counter'>
                  <h2>
                     <CountUp start={0} end={200} duration={7} enableScrollSpy={true} scrollSpyOnce={true} />
                     +
                  </h2>
                  <h4>Serving clients worldwide with global reach</h4>
               </div>
            </div>
            </Col>
            <Col lg={6}>
            <div className='unified_clients_card'>
               <div className="unified_clients_card_conetnt">
                  <div className='flex_items'>
                     {
                     clients.map((client , index ) => {
                     return(
                     <Image key={index}  className='' src={client.image}  />
                     )
                     })
                     }
                  </div>
               </div>
            </div>
            </Col>
         </Row> */}
      </Container>
     


   </div>

   <Container className='p-0' fluid>
   <div className='clients_section'>
      
      <Row className='h-100 w-100'>
         <Col lg={3}>

            <div className='clients_box_header'>

              <h2 >CLIENTS</h2>

            </div>

           

         </Col>
         <Col lg={9} className='mobile_paddleft'>
            <div className='cl_card'>
            <div className='no_of_clinets'>
               <div className='no_of_clinets_row'>
                  {
                     clients.map((item, index)=>{

                        return(
                           <div className='clients_card'>
                              <img src={item.image} alt="" />

                           </div>

                        )

                     })
                  }

                  

                  <div>

                  </div>


               </div>
            </div>
            <div className='no_of_clinets'>
             <p className='clients_tieup'>Clients from our network</p>
               <div className='no_of_clinets_row'>
                 

                  {
                     tiedUp.map((item, index)=>{

                        return(
                           <div className='clients_card'>
                              <img src={item.image} alt="" />

                           </div>

                        )

                     })
                  }

                  

                  <div>

                  </div>


               </div>
            </div>


            </div>
           
         
         </Col>
      </Row>

</div>
   </Container>

  
   

</div>

)
}
export default UnifiedTeam