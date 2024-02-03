import React from 'react'
import './simple.css'
import Card from 'react-bootstrap/Card';
export const SimpleCard = ({ title, content, height}) => {


  return (

    <Card className='simple_card' style={{ height: height }}>
         
         <Card.Title className='simple_card_content_title'>{title}</Card.Title>

         <div className='simple_card_content'>
            <p>
                {content}
          
            </p>

         </div>


         




    </Card>
    






    
  )
}
