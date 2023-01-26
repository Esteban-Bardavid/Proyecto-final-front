
import { Card, ListGroup, Col, Container, Row } from "react-bootstrap";
import { useState } from "react";
import { Modal, Form, Button } from 'react-bootstrap';
import { FaHeart } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa";
import { motion } from "framer-motion";

import "./ProductCard.css";
import { Link } from "react-router-dom";
import products from "../../assets/data/ProductsData";
import ModalProduct from "../Modal/Modal";


function ProductCard({ item }) {
    const [ShowProduct, setShowProd] = useState(false);
    const closeModal = () => setShowProd(false);
    const openModal = () => setShowProd(true);
    const [addFav, setAddFav] = useState(false);
    const favIn = () => setAddFav(true);
    


    return (
        <>
            <Modal show={ShowProduct} onHide={closeModal} >
                <Modal.Header closeButton>
                    <Modal.Title>{item.productName}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Container>
                        <Col lg='5' md='3' >
                            <Row lg='5' md='5'>
                                <img
                                    style={{width:'250px'}}
                                    src={item.imgUrl} />

                            </Row>

                        </Col>
                        <Col lg='2' md='2'>

                        </Col>
                    </Container>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={closeModal}>
                        Salir
                    </Button>
                    <Button variant="primary" onClick={closeModal}>
                        Agregar al carrito
                    </Button>
                </Modal.Footer>
            </Modal>
            <Col lg='3' md='4' mb-2 >
                <Card style={{ width: "14rem", border: 'none' }} className="product__item">
                    <Card.Img
                        className="product__img"
                        src={item.imgUrl} />
                    <Card.Title className=" product__info">
                        <h3 className="product__name">
                            {item.productName}</h3>
                        <span className="text-center d-inline-block">{item.genero}</span>
                    </Card.Title>
                    <Card.Text className="product__card-bottom d-flex align-items-center justify-content-between">
                        <h2 className="price">${item.price}</h2>
                        <div className="product__icons">
                            <i className="add__cart" onClick={openModal} ><FaCartPlus /></i>

                            <i className="add__fav" onClick={favIn} ><FaHeart /></i>
                        </div>
                    </Card.Text>
                </Card>
            </Col>

        </>
    );
   
}
export default ProductCard;