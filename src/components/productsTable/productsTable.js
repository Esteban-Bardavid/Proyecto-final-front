import './productsTable.css';
import { Table, Button, Modal, Form, NavItem } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import UseAdminProducts from '../../utils/useAdminProducts';

function ProductsTable() {
    const { mapProducts, showUp, handleCloseUp, OnChangeUpdate, PutProducts, mapProductsUp } = UseAdminProducts();

    return (
        <div>
            <Table striped bordered hover responsive>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Codigo</th>
                        <th>Producto</th>
                        <th>Imagen</th>
                        <th>Precio</th>
                        <th>Talle</th>
                        <th>Marca</th>
                        <th>Categoria</th>
                        <th>Sexo</th>
                        <th>Publicado</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {mapProducts}
                </tbody>
            </Table>

            {/* <Modal show={showUp} onHide={handleCloseUp}>
                <Modal.Header closeButton>
                    <Modal.Title>Actualizar Producto</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Form>
                        <div className='d-flex'>
                            <Form.Group className="mb-3 px-2 w-50" controlId="formBasicEmail">
                                <Form.Label>Codigo</Form.Label>
                                <Form.Control
                                    name='codigo'
                                    type='text'
                                    onChange={OnChangeUpdate}
                                    placeholder= '' />
                            </Form.Group>

                            <Form.Group className="mb-3 w-50" controlId="formBasicEmail">
                                <Form.Label>Producto</Form.Label>
                                <Form.Control
                                    name='producto'
                                    type='text'
                                    onChange={OnChangeUpdate}
                                    placeholder="nombre" />
                            </Form.Group>
                        </div>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Imagen</Form.Label>
                            <Form.Control
                                name='imagen'
                                type='text'
                                onChange={OnChangeUpdate}
                                placeholder='path o url' />
                        </Form.Group>

                        <div className='d-flex'>
                            <Form.Group className="mb-3 px-2 w-25" controlId="formBasicEmail">
                                <Form.Label>Precio ($)</Form.Label>
                                <Form.Control
                                    name='precio'
                                    type="number"
                                    onChange={OnChangeUpdate}
                                    placeholder="100.00" />
                            </Form.Group>

                            <Form.Group className="mb-3 px-3 w-25" controlId="formBasicEmail">
                                <Form.Label>Talle</Form.Label>
                                <Form.Control
                                    name='talle'
                                    type="number"
                                    onChange={OnChangeUpdate}
                                    placeholder="40" />
                            </Form.Group>

                            <Form.Group className="mb-3 w-25" controlId="formBasicEmail">
                                <Form.Label>Marca</Form.Label>
                                <Form.Control
                                    name='marca'
                                    type="text"
                                    onChange={OnChangeUpdate}
                                    placeholder="Adidas" />
                            </Form.Group>
                        </div>

                        <div className='d-flex'>
                            <Form.Group className="mb-3 px-2 w-50" controlId="formBasicEmail">
                                <Form.Label>Categoria</Form.Label>
                                <Form.Control
                                    name='categoria'
                                    type="text"
                                    onChange={OnChangeUpdate}
                                    placeholder="Trainning - Outdoor - Running" />
                            </Form.Group>

                            <Form.Group className="mb-3 w-50" controlId="formBasicEmail">
                                <Form.Label>Sexo</Form.Label>
                                <Form.Control
                                    name='sex'
                                    type="text"
                                    onChange={OnChangeUpdate}
                                    placeholder="Mujer/Hombre" />
                            </Form.Group>
                        </div>


                    </Form>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="primary w-100" onClick={()=> PutProducts ()}>
                        Actualizar Producto
                    </Button>
                </Modal.Footer>

            </Modal> */}
        </div>
    )
}

export default ProductsTable;