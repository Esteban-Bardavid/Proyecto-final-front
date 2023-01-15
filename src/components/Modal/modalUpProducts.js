import { Modal, Form, Button } from 'react-bootstrap';
import UseAdminProducts from '../../utils/useAdminProducts';


function ModalUpProducts({ codigo, producto, imagen, precio, talle, marca, categoria, sex, id }) {

    const { showUp, handleCloseUp, handleShowUp, OnChangeUpdate, PutProducts } = UseAdminProducts();

    return (
        <div>

            <Button variant="primary" onClick={handleShowUp}>Actualizar Producto</Button>

            <Modal show={showUp} onHide={handleCloseUp}>
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
                                    placeholder={codigo} />
                            </Form.Group>

                            <Form.Group className="mb-3 w-50" controlId="formBasicEmail">
                                <Form.Label>Producto</Form.Label>
                                <Form.Control
                                    name='producto'
                                    type='text'
                                    onChange={OnChangeUpdate}
                                    placeholder={producto} />
                            </Form.Group>
                        </div>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Imagen</Form.Label>
                            <Form.Control
                                name='imagen'
                                type='text'
                                onChange={OnChangeUpdate}
                                placeholder={imagen} />
                        </Form.Group>

                        <div className='d-flex'>
                            <Form.Group className="mb-3 px-2 w-25" controlId="formBasicEmail">
                                <Form.Label>Precio ($)</Form.Label>
                                <Form.Control
                                    name='precio'
                                    type="number"
                                    onChange={OnChangeUpdate}
                                    placeholder={precio} />
                            </Form.Group>

                            <Form.Group className="mb-3 px-3 w-25" controlId="formBasicEmail">
                                <Form.Label>Talle</Form.Label>
                                <Form.Control
                                    name='talle'
                                    type="number"
                                    onChange={OnChangeUpdate}
                                    placeholder={talle} />
                            </Form.Group>

                            <Form.Group className="mb-3 w-25" controlId="formBasicEmail">
                                <Form.Label>Marca</Form.Label>
                                <Form.Control
                                    name='marca'
                                    type="text"
                                    onChange={OnChangeUpdate}
                                    placeholder={marca} />
                            </Form.Group>
                        </div>

                        <div className='d-flex'>
                            <Form.Group className="mb-3 px-2 w-50" controlId="formBasicEmail">
                                <Form.Label>Categoria</Form.Label>
                                <Form.Control
                                    name='categoria'
                                    type="text"
                                    onChange={OnChangeUpdate}
                                    placeholder={categoria} />
                            </Form.Group>

                            <Form.Group className="mb-3 w-50" controlId="formBasicEmail">
                                <Form.Label>Sexo</Form.Label>
                                <Form.Control
                                    name='sex'
                                    type="text"
                                    onChange={OnChangeUpdate}
                                    placeholder={sex} />
                            </Form.Group>
                        </div>


                    </Form>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="primary w-100" onClick={() => PutProducts(id)}>
                        Actualizar Producto
                    </Button>
                </Modal.Footer>

            </Modal>
        </div>
    )
};

export default ModalUpProducts;