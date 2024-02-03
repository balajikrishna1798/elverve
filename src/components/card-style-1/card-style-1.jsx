import React from "react";
import { Card } from "react-bootstrap";
import './card-style-1.css'
const CardStyle1 = ({ title}) => {
  return (
    <>
      <Card className="card-style-1">
        <Card.Body className="item-body text-center">
            <Card.Title className="item-name">{title}</Card.Title>
        </Card.Body>
      </Card>
    </>
  );
};
export default CardStyle1;
