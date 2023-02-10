import { Modal, Form, Button } from 'react-bootstrap';
import UseAdminProducts from '../../utils/useAdminProducts';
import { FaRegEdit } from "react-icons/fa";


function ModalUpProducts({producto, imagen, precio,  marca, categoria, sex, id, publicado, color, tseis, tsiete, tocho, tnueve, ccero, cuno, cdos, ctres }) {

    const { showUp, handleCloseUp, handleShowUp, OnChangeUpdate, PutProducts } = UseAdminProducts();

    return (
        <div>

            <Button variant="primary" onClick={handleShowUp}><FaRegEdit /></Button>

            <Modal show={showUp} onHide={handleCloseUp}>
                <Modal.Header closeButton>
                    <Modal.Title>Actualizar Producto</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Form>

                        <div className='d-flex'>
                            <Form.Group className="mb-2 px-2 w-50" controlId="formBasicEmail">
                                <Form.Label>Producto</Form.Label>
                                <Form.Control
                                    name='producto'
                                    type='text'
                                    onChange={OnChangeUpdate}
                                    placeholder={producto} />
                            </Form.Group>

                            <Form.Group className="mb-2 px-2 w-50" controlId="formBasicEmail">
                                <Form.Label>Imagen</Form.Label>
                                <Form.Control
                                    name='imgUrl'
                                    type='text'
                                    onChange={OnChangeUpdate}
                                    placeholder={imagen} />
                            </Form.Group>
                        </div>

                        <div className='d-flex'>
                            <Form.Group className="mb-2 px-2 w-25" controlId="formBasicEmail">
                                <Form.Label>Sexo</Form.Label>
                                <Form.Control
                                    name='sex'
                                    type="text"
                                    onChange={OnChangeUpdate}
                                    placeholder={sex} />
                            </Form.Group>

                            <Form.Group className="mb-2 px-2 w-25" controlId="formBasicEmail">
                                <Form.Label>Marca</Form.Label>
                                <Form.Control
                                    name='marca'
                                    type="text"
                                    onChange={OnChangeUpdate}
                                    placeholder={marca} />
                            </Form.Group>

                            <Form.Group className="mb-2 px-2 w-25" controlId="formBasicEmail">
                                <Form.Label>Color</Form.Label>
                                <Form.Control
                                    name='color'
                                    type="text"
                                    onChange={OnChangeUpdate}
                                    placeholder={color} />
                            </Form.Group>

                            <Form.Group className="mb-2 px-2 w-25" controlId="formBasicEmail">
                                <Form.Label>Precio ($)</Form.Label>
                                <Form.Control
                                    name='precio'
                                    type="number"
                                    onChange={OnChangeUpdate}
                                    placeholder={precio} />
                            </Form.Group>
                        </div>

                        <div className='d-flex'>
                            <Form.Group className="mb-2 px-2 w-25" controlId="formBasicEmail">
                                <Form.Label>T-36</Form.Label>
                                <Form.Control
                                    name='tseis'
                                    type="number"
                                    onChange={OnChangeUpdate}
                                    placeholder={tseis} />
                            </Form.Group>

                            <Form.Group className="mb-2 px-2 w-25" controlId="formBasicEmail">
                                <Form.Label>T-37</Form.Label>
                                <Form.Control
                                    name='tsiete'
                                    type="number"
                                    onChange={OnChangeUpdate}
                                    placeholder={tsiete} />
                            </Form.Group>

                            <Form.Group className="mb-2 px-2 w-25" controlId="formBasicEmail">
                                <Form.Label>T-38</Form.Label>
                                <Form.Control
                                    name='tocho'
                                    type="number"
                                    onChange={OnChangeUpdate}
                                    placeholder={tocho} />
                            </Form.Group>

                            <Form.Group className="mb-2 px-2 w-25" controlId="formBasicEmail">
                                <Form.Label>T-39</Form.Label>
                                <Form.Control
                                    name='tnueve'
                                    type="number"
                                    onChange={OnChangeUpdate}
                                    placeholder={tnueve} />
                            </Form.Group>
                        </div>

                        <div className='d-flex'>
                            <Form.Group className="mb-2 px-2 w-25" controlId="formBasicEmail">
                                <Form.Label>T-40</Form.Label>
                                <Form.Control
                                    name='ccero'
                                    type="number"
                                    onChange={OnChangeUpdate}
                                    placeholder={ccero} />
                            </Form.Group>

                            <Form.Group className="mb-2 px-2 w-25" controlId="formBasicEmail">
                                <Form.Label>T-41</Form.Label>
                                <Form.Control
                                    name='cuno'
                                    type="number"
                                    onChange={OnChangeUpdate}
                                    placeholder={cuno} />
                            </Form.Group>

                            <Form.Group className="mb-2 px-2 w-25" controlId="formBasicEmail">
                                <Form.Label>T-42</Form.Label>
                                <Form.Control
                                    name='cdos'
                                    type="number"
                                    onChange={OnChangeUpdate}
                                    placeholder={cdos} />
                            </Form.Group>

                            <Form.Group className="mb-2 px-2 w-25" controlId="formBasicEmail">
                                <Form.Label>T-43</Form.Label>
                                <Form.Control
                                    name='ctres'
                                    type="number"
                                    onChange={OnChangeUpdate}
                                    placeholder={ctres} />
                            </Form.Group>
                        </div>

                        <div className='d-flex'>
                            <Form.Group className="mb-2 px-2 w-50" controlId="formBasicEmail">
                                <Form.Label>Categoria</Form.Label>
                                <Form.Control
                                    name='categoria'
                                    type="text"
                                    onChange={OnChangeUpdate}
                                    placeholder={categoria} />
                            </Form.Group>

                            <Form.Group className="mb-2 px-2 w-50" controlId="formBasicEmail">
                                <Form.Label>Publicado</Form.Label>
                                <Form.Control
                                    name='publicado'
                                    type="number"
                                    onChange={OnChangeUpdate}
                                    placeholder={publicado} />
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

        </div >
    )
};

export default ModalUpProducts;