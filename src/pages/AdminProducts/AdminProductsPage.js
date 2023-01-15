import { Modal, Form, Button } from 'react-bootstrap';
import React, { useState } from 'react';
import UseAdminProducts from '../../utils/useAdminProducts';
import ProductsTable from '../../components/productsTable/productsTable';

function AdminProducts() {

    // Hook:
    const { OnChangeProducts, CreateProducts, handleClose, handleShow, show, handleShowUp, mapProductsUp } = UseAdminProducts();

    function Auxiliar() {
        CreateProducts();
        handleClose();
    }

    return (
        <div>
            <Button variant="primary" onClick={handleShow}>
                Ingresar Producto
            </Button>

            <ProductsTable />


            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Crear Producto</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Form>
                        <div className='d-flex'>
                            <Form.Group className="mb-3 px-2 w-50" controlId="formBasicEmail">
                                <Form.Label>Codigo</Form.Label>
                                <Form.Control
                                    name='codigo'
                                    type='text'
                                    onChange={OnChangeProducts}
                                    placeholder="woman/menAdidas01" />
                            </Form.Group>

                            <Form.Group className="mb-3 w-50" controlId="formBasicEmail">
                                <Form.Label>Producto</Form.Label>
                                <Form.Control
                                    name='producto'
                                    type='text'
                                    onChange={OnChangeProducts}
                                    placeholder="nombre" />
                            </Form.Group>
                        </div>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Imagen</Form.Label>
                            <Form.Control
                                name='imagen'
                                type='text'
                                onChange={OnChangeProducts}
                                placeholder='path o url' />
                        </Form.Group>

                        <div className='d-flex'>
                            <Form.Group className="mb-3 px-2 w-25" controlId="formBasicEmail">
                                <Form.Label>Precio ($)</Form.Label>
                                <Form.Control
                                    name='precio'
                                    type="number"
                                    onChange={OnChangeProducts}
                                    placeholder="100.00" />
                            </Form.Group>

                            <Form.Group className="mb-3 px-3 w-25" controlId="formBasicEmail">
                                <Form.Label>Talle</Form.Label>
                                <Form.Control
                                    name='talle'
                                    type="number"
                                    onChange={OnChangeProducts}
                                    placeholder="40" />
                            </Form.Group>

                            <Form.Group className="mb-3 w-25" controlId="formBasicEmail">
                                <Form.Label>Marca</Form.Label>
                                <Form.Control
                                    name='marca'
                                    type="text"
                                    onChange={OnChangeProducts}
                                    placeholder="Adidas" />
                            </Form.Group>
                        </div>

                        <div className='d-flex'>
                            <Form.Group className="mb-3 px-2 w-50" controlId="formBasicEmail">
                                <Form.Label>Categoria</Form.Label>
                                <Form.Control
                                    name='categoria'
                                    type="text"
                                    onChange={OnChangeProducts}
                                    placeholder="Trainning - Outdoor - Running" />
                            </Form.Group>

                            <Form.Group className="mb-3 w-50" controlId="formBasicEmail">
                                <Form.Label>Sexo</Form.Label>
                                <Form.Control
                                    name='sex'
                                    type="text"
                                    onChange={OnChangeProducts}
                                    placeholder="Mujer/Hombre" />
                            </Form.Group>
                        </div>


                    </Form>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="primary w-100" onClick={Auxiliar}>
                        Crear Producto
                    </Button>
                </Modal.Footer>

            </Modal>






        </div>
    )
}

export default AdminProducts;
