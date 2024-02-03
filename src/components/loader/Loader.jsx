import React from 'react'
import './loader.css'
import { Spinner } from 'react-bootstrap'

const Loader = (props) => {

  return (
    <div  className='loader_backdrop'>
       <Spinner variant='light' animation="border" role="status">
      
    </Spinner>
        
    </div>
  )
}

export default Loader