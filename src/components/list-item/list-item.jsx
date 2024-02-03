import React from 'react'
import './list-item.css'
import { Card } from 'react-bootstrap'

const ListItemCard = ({title}) => {
  return (
    <>
        <Card className='list_card'>
         
      
          <div className='list_card_content'>
            <ul>
                <li>{title}</li>
            </ul>
           

          </div> 


         




    </Card>


        

    </>
  )
}

export default ListItemCard