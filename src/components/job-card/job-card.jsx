import React from 'react'
import './job-card.css'
import {JOBTYPE,EXP,MAP } from '../../assets/images/index'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
export const JobCard = ({ jobtitle, description, experience, location, type, url }) => {
   return (
     <Card className='job-card'>
      <Card.Title className='job-title mb-2'>{jobtitle}</Card.Title>
            <div className='job-d-flex align-items-center'>
                <p class='d-flex align-items-center'><img src={EXP} width="25px" height="28px"  /><span class="ms-1">{experience}</span></p>
                <p class="ml-30 d-flex align-items-center"><img src={MAP} width="28px" height="28px" /><span class="ms-1">{location}</span></p>
                <p class="ml-30 d-flex align-items-center"><img src={JOBTYPE} width="28px" height="28px" /><span class="ms-1">{type}</span></p>
            </div>
            <p className='description'>{description}</p>

            <Link to='/career-detail' className='view_link'>View Details</Link>

            
      </Card>
    )
 }
