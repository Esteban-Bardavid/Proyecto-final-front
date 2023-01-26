import React, { useState } from 'react';
import { Modal, Form, Button, Container, Col, Row } from 'react-bootstrap';


function ModalProduct({item}) {

    const [ShowProduct, setShowProd] = useState(false);

    const closeModal = () => setShowProd(false);
    
    //Hook

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
        </>
        
    );
    return{
        
        setShowProd
    };
}
export default ModalProduct;
