import React from 'react'
import './listcard.css'
import { Card } from 'react-bootstrap'

const ListCard = ({title,subtitle, list1, list2 }) => {
  return (
    <>
        <Card className='list_card'>
         
         <Card.Title className='list_card_content_title'>{title}</Card.Title>
         <h3 className='list_card_content_subtitle'>{subtitle}</h3>

         <div className='list_card_content'>

            <ul>
                <li>{list1}</li>
                <li>{list2}</li>
            </ul>
           

         </div>


         




    </Card>


        

    </>
  )
}

export default ListCard