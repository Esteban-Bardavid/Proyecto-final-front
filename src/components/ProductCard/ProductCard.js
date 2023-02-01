
import { Card, ListGroup, Col, Container, Row } from "react-bootstrap";
import { useState } from "react";
import { Modal, Form, Button } from 'react-bootstrap';
import { FaHeart } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa";


import  "./ProductCard.css";
import { Link } from "react-router-dom";
//import products from "../../assets/data/ProductsData";
import ModalProduct from "../Modal/Modal";


function ProductCard({ item }) {
    const [ShowProduct, setShowProd] = useState(false);
    const closeModal = () => setShowProd(false);
    const openModal = () => setShowProd(true);
    const [addFav, setAddFav] = useState(false);
    const favIn = () => setAddFav(true);

    const [Cart, setCart] = useState([]);
    const addToCart = item => {
        setCart([...Cart, item]);
        console.log(Cart)

    }

    // Talles:
    function Talle36() {
        if (item.tseis > 0) {
            document.getElementById("talle").innerHTML = '36'
        } else {
            document.getElementById("talle").innerHTML = ' '
            alert('No tenemos stock en este momento')
        }
    }
    function Talle37() {
        if (item.tsiete > 0) {
            document.getElementById("talle").innerHTML = '37'
        } else {
            document.getElementById("talle").innerHTML = ' '
            alert('No tenemos stock en este momento')
        }
    }
    function Talle38() {
        if (item.tocho > 0) {
            document.getElementById("talle").innerHTML = '38'
        } else {
            document.getElementById("talle").innerHTML = ' '
            alert('No tenemos stock en este momento')
        }
    }
    function Talle39() {
        if (item.tnueve > 0) {
            document.getElementById("talle").innerHTML = '39'
        } else {
            document.getElementById("talle").innerHTML = ' '
            alert('No tenemos stock en este momento')
        }
    }
    function Talle40() {
        if (item.ccero > 0) {
            document.getElementById("talle").innerHTML = '40'
        } else {
            document.getElementById("talle").innerHTML = ' '
            alert('No tenemos stock en este momento')
        }
    }
    function Talle41() {
        if (item.cuno > 0) {
            document.getElementById("talle").innerHTML = '41'
        } else {
            document.getElementById("talle").innerHTML = ' '
            alert('No tenemos stock en este momento')
        }
    }
    function Talle42() {
        if (item.cdos > 0) {
            document.getElementById("talle").innerHTML = '42'
        } else {
            document.getElementById("talle").innerHTML = ' '
            alert('No tenemos stock en este momento')
        }
    }
    function Talle43() {
        if (item.ctres > 0) {
            document.getElementById("talle").innerHTML = '43'
        } else {
            document.getElementById("talle").innerHTML = ' '
            alert('No tenemos stock en este momento')
        }
    }


    return (
        <>
            <Modal show={ShowProduct} onHide={closeModal} >
                <Modal.Body >
                    <Container >
                        <Row>

                            <Col lg='6' md='5' >
                                <Row lg='15' md='5' >
                                    <img
                                        style={{ width: '100%' }}
                                        src={item.imgUrl} />
                                </Row>
                                <h6>Colores disponibles:</h6>
                                <Row lg='15' md='1'>

                                    <Col lg='4' md='1'>
                                        <img
                                            style={{ width: '100%', cursor: 'pointer' }}
                                            src={item.imgUrl} />
                                    </Col>
                                    <Col lg='4' md='1'>
                                        <img
                                            style={{ width: '100%', cursor: 'pointer' }}
                                            src={item.imgUrl} />
                                    </Col>
                                    <Col lg='4' md='1'>
                                        <img
                                            style={{ width: '100%', cursor: 'pointer' }}
                                            src={item.imgUrl} />
                                    </Col>

                                </Row>
                            </Col>
                            <Col lg='6' md='5' >
                                <Modal.Title>{item.producto}</Modal.Title>
                                <Row lg='10' md='15' >
                                    <h4>
                                        ${item.precio} <br></br>
                                        <span style={{ fontSize: '15px' }} font>Hasta 6 cuotas sin interes!<br></br>
                                            {item.color}
                                        </span>
                                    </h4>
                                </Row>
                                <h6>Talles disponibles:</h6>
                                <Row lg='10' md='1'>

                                    {/* <Col lg='3' md='3'>
                                        <label>36:<input style={{ width: '100%' }} label='36' placeholder="0"></input></label>
                                        <label>37:<input style={{ width: '100%' }} label='37' placeholder="0"></input></label>


                                    </Col>
                                    <Col lg='3' md='3'>
                                        <label>38:<input style={{ width: '100%' }} label='38' placeholder="0"></input></label>
                                        <label>39:<input style={{ width: '100%' }} label='39' placeholder="0"></input></label>

                                    </Col>
                                    <Col lg='3' md='3'>
                                        <label>40:<input style={{ width: '100%' }} label='40' placeholder="0"></input></label>
                                        <label>41:<input style={{ width: '100%' }} label='41' placeholder="0"></input></label>
                                    </Col>
                                    <Link href='' style={{ marginTop: '5px', fontSize: '15px', color: '#FF6E31' }}>Ir a la pagina del   producto</Link> */}
                                    
                                    <div className='d-flex'>
                                        <div className='mx-2'>
                                            <div>
                                                <label className='labelTalles'>T-36</label>
                                            </div>
                                            <div>
                                                <button className="botonTalle" onClick={Talle36}>{item.tseis} u.</button>
                                            </div>
                                        </div>
                                        <div className='mx-2'>
                                            <div>
                                                <label className='labelTalles'>T-37</label>
                                            </div>
                                            <div>
                                                <button className="botonTalle" onClick={Talle37}>{item.tsiete} u.</button>
                                            </div>
                                        </div>
                                        <div className='mx-2'>
                                            <div>
                                                <label className='labelTalles'>T-38</label>
                                            </div>
                                            <div>
                                                <button className="botonTalle" onClick={Talle38}>{item.tocho} u.</button>
                                            </div>
                                        </div>
                                        <div className='mx-2'>
                                            <div>
                                                <label className='labelTalles'>T-39</label>
                                            </div>
                                            <div>
                                                <button className="botonTalle" onClick={Talle39}>{item.tnueve} u.</button>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='d-flex'>
                                        <div className='mx-2'>
                                            <div>
                                                <label className='labelTalles'>T-40</label>
                                            </div>
                                            <div>
                                                <button className="botonTalle" onClick={Talle40}>{item.ccero} u.</button>
                                            </div>
                                        </div>
                                        <div className='mx-2'>
                                            <div>
                                                <label className='labelTalles'>T-41</label>
                                            </div>
                                            <div>
                                                <button className="botonTalle" onClick={Talle41}>{item.cuno} u.</button>
                                            </div>
                                        </div>
                                        <div className='mx-2'>
                                            <div>
                                                <label className='labelTalles'>T-42</label>
                                            </div>
                                            <div>
                                                <button className="botonTalle" onClick={Talle42}>{item.cdos} u.</button>
                                            </div>
                                        </div>
                                        <div className='mx-2'>
                                            <div>
                                                <label className='labelTalles'>T-43</label>
                                            </div>
                                            <div>
                                                <button className="botonTalle" onClick={Talle43}>{item.ctres} u.</button>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='d-flex'>
                                        <p className='me-2 mt-4'>Elegiste Talle:</p> <p className="mt-4" id='talle'></p>
                                    </div>

                                </Row>
                            </Col>

                        </Row>

                    </Container>
                </Modal.Body>
                <Modal.Footer>
                    <Button style={{ background: "black" }} onClick={closeModal}>
                        Salir
                    </Button>
                    <Button style={{ background: '#FF6E31' }} onClick={() => addToCart(item)}>
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
                            {item.producto}</h3>
                        <span className="text-center d-inline-block">{item.sex}</span>
                    </Card.Title>
                    <Card.Text className="product__card-bottom d-flex align-items-center justify-content-between">
                        <h2 className="price">${item.precio}</h2>
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