import { Card } from "react-bootstrap";
import ItemCount from "../ItemCount/ItemCount";
import React from "react";
import './item.css'

const Item = ({name, price, image, stock}) => {
  return(
    <div className="cartas ">
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>$:{price}</Card.Text>
        <Card.Text>Cantidad:{stock}</Card.Text>
      </Card.Body>
      <ItemCount stock={stock} initail={1}/>
    </Card>
    </div>
      )
}
export default Item;