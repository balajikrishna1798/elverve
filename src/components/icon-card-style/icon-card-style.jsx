import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import './icon-card-style.css'
import {MISSION, VISION, STRATEGY } from '../../assets/images/index'
const IconCardStyle = ({ title, content, image,height}) =>  {

return (
<>
 <div className="icon-card"  style={{ height: height }}>
    <img className="my-3"  src={image} width="65px" height="52px"/>
    <h5 class="item-title">{title}</h5>
    <p className="content_margin item-content main-content">{content}</p>
 </div>
      
</>
);
}
export default IconCardStyle;