import './productsCard.css';
import { Card, Button, Modal, Form, Image, Label } from "react-bootstrap";
import { useState } from 'react';
import UseAdminProducts from "../../utils/useAdminProducts";


function ProductsCard({ producto, imagen, precio, color, categoria, tseis, tsiete, tocho, tnueve, ccero, cuno, cdos, ctres }) {

    const [showCard, setShowCard] = useState(false);
    const handleCloseCard = () => setShowCard(false);
    const handleShowCard = () => setShowCard(true);

    const imagenes = require.context('./../../a-Imagenes', true);
    console.log(imagen)

    return (
        <div className="d-flex justify-content-center">

            {/* -------------------------------------------- CARD PRODUCTO ----------------------------------------------- */}

            <Card style={{ width: '12rem' }}>
                <button variant="primary" onClick={handleShowCard}>
                    <Card.Img variant="top" src={imagenes(`./${imagen}`)} />
                    <Card.Text>
                        <b>{precio}</b>
                    </Card.Text>
                </button>
            </Card>

            {/* ------------------------------------- MODAL PRODUCTO - AGREGAR CARRITO ----------------------------------- */}

            <Modal show={showCard} onHide={handleCloseCard} className='modal-lg'>
                <Modal.Header closeButton>
                    <Modal.Title>{producto} - Hombre</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <div className='row'>
                        <div className='col-6 d-flex justify-content-center'>
                            <div className='container-Imag'>
                                <Image variant="top" src={imagenes(`./${imagen}`)} className='Imag' />
                            </div>
                        </div>
                        <div className='col-6'>
                            <h5>Precio: ${precio}</h5>
                            <h5>Color: {color}</h5>
                            <h5>Categoria: {categoria}</h5>

                            <div className='d-flex'>
                                <div className='mx-2'>
                                    <div>
                                        <label>T-36</label>
                                    </div>
                                    <div>
                                        <button className="botonTalle"><div>{tseis} u.</div></button>
                                    </div>
                                </div>
                                <div className='mx-2'>
                                    <div>
                                        <label>T-37</label>
                                    </div>
                                    <div>
                                        <button className="botonTalle">{tsiete} u.</button>
                                    </div>
                                </div>
                                <div className='mx-2'>
                                    <div>
                                        <label>T-38</label>
                                    </div>
                                    <div>
                                        <button className="botonTalle">{tocho} u.</button>
                                    </div>
                                </div>
                                <div className='mx-2'>
                                    <div>
                                        <label>T-39</label>
                                    </div>
                                    <div>
                                        <button className="botonTalle">{tnueve} u.</button>
                                    </div>
                                </div>
                            </div>

                            <div className='d-flex'>
                                <div className='mx-2'>
                                    <div>
                                        <label>T-40</label>
                                    </div>
                                    <div>
                                        <button className="botonTalle">{ccero} u.</button>
                                    </div>
                                </div>
                                <div className='mx-2'>
                                    <div>
                                        <label>T-41</label>
                                    </div>
                                    <div>
                                        <button className="botonTalle">{cuno} u.</button>
                                    </div>
                                </div>
                                <div className='mx-2'>
                                    <div>
                                        <label>T-42</label>
                                    </div>
                                    <div>
                                        <button className="botonTalle">{cdos} u.</button>
                                    </div>
                                </div>
                                <div className='mx-2'>
                                    <div>
                                        <label>T-43</label>
                                    </div>
                                    <div>
                                        <button className="botonTalle">{ctres} u.</button>
                                    </div>
                                </div>
                            </div>

                            <Button variant="primary w-75 mt-3">
                                Agregar al Carrito
                            </Button>
                        </div>
                    </div>
                </Modal.Body>

                <Modal.Footer>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default ProductsCard;