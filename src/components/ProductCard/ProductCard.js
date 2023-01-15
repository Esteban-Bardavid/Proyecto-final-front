import { Card,ListGroup,Col } from "react-bootstrap";
import { useState } from "react";
import { Modal, Form, Button } from 'react-bootstrap';


function ProductCard() {

    return (
        <>
            <Col lg="3" md="4" className="product_card">         
                <Card.Img variant="top" src="https://www.dexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw8595eb41/products/NI_CD4165-001/NI_CD4165-001-1.JPG" />
                <Card.Title style={{ fontSize: '15px' }} >Nike Aire MAX Excee</Card.Title>
                <Card.Text style={{ fontSize: '18px' }} > Mujer</Card.Text>
                <Card.Text style={{ fontSize: '18px' }} >$41.599 <span>Hasta 3 cuotas sin interes.</span></Card.Text>
                
                    <Card.Link href="#">Comprar</Card.Link>
                    <Card.Link href="#">Wishlist</Card.Link>
                
            </Col>
           



        </>
    );
}
export default ProductCard;