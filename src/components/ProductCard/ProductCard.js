import { Card,ListGroup,Col } from "react-bootstrap";
import { useState } from "react";
import { Modal, Form, Button } from 'react-bootstrap';

import "./ProductCard.css";
import { Link } from "react-router-dom";
import products from "../../assets/data/ProductsData";



function ProductCard ({item}) {

    return (
        <Col lg='3' md='4' mb-2>
            <Card style={{width:'18rem', border:'none'}} className="product__item">
                <Card.Img className="product__img" src={item.imgUrl}/>
                <div className="p-2 product__info">
                    <h3 className="product__name">
                    <Link to='/products/id'>{item.productName}</Link></h3>
                    <span className="text-center d-inline-block">{item.genero}</span>
                </div>
                <div className="product__card-bottom d-flex align-items-center justify-content-between p-2">
                    <span className="price">${item.price}</span>
                    <span>
                        <i class="ri-add-line"></i>
                    </span>
                </div>
            </Card>
        </Col>
    );
}
export default ProductCard;