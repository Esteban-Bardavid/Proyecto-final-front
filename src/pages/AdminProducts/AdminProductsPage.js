import { Modal, Form, Button, Table } from 'react-bootstrap';
import UseAdminProducts from '../../utils/useAdminProducts';
import { FaSearch } from "react-icons/fa";
import { useState, useEffect } from 'react';
import axios from 'axios';
import { FaTrashAlt } from "react-icons/fa";
import ModalUpProducts from '../../components/Modal/modalUpProducts';


function AdminProducts() {

    // Hook:

    const { OnChangeProducts, CreateProducts, handleClose, handleShow, show, url, DeleteProducts } = UseAdminProducts();

    function Auxiliar() {
        CreateProducts();
        handleClose();
    }


       // Funcion para mostrar productos en tabla:
       const [products, setproducts] = useState([]);
    
       useEffect(() => {
           GetProducts()
       }, []);
       
       async function GetProducts() {
           let getProducts = await axios.get(`${url}/adminProducts`);
           setproducts(getProducts.data);
           setBuscador(getProducts.data);
       }
       
       // Buscador:
       const [busqueda, setBusqueda] = useState ('')
       const [buscador, setBuscador] = useState ([])


       
       const handleChange = e => {
           setBusqueda (e.target.value)
           filtrar(e.target.value)
       }
       
       const filtrar = (terminoBusqueda) => {
           var response = buscador.filter((elemento)=>{
               if(elemento.producto.includes(terminoBusqueda)
               ||elemento.marca.includes(terminoBusqueda)
               ||elemento.sex.includes(terminoBusqueda)
               ){
                   return elemento;
               }
           });
           setproducts(response);
           console.log (products);
       }

    return (
        <div>
            <div className='mb-2 ms-5 d-flex justify-content-start'>
                <Button variant="primary" onClick={handleShow}>
                    Ingresar Producto
                </Button>
            </div>

            <div className='d-flex justify-content-center'>
                <input
                className='form-control w-50 mb-4'
                value={busqueda}
                placeholder='Buscar'
                onChange={handleChange}
                />
                <Button className='btn btn-primary me-3 ms-2 mb-4'>
                    <FaSearch/>
                </Button>
            </div>

{/* ---------------------------------------------------------- Tabla --------------------------------------------------------------------------- */}

            <Table striped bordered hover responsive className='w-100'>
                <thead>
                    <tr>
                        <th>#</th>
                        {/* <th>Codigo</th> */}
                        <th><div>Producto</div></th>
                        <th>Sex</th>
                        <th>Marca</th>
                        <th>Color</th>
                        <th>Precio</th>
                        <th>Categ.</th>
                        <th>Pub.</th>
                        <th>T36</th>
                        <th>T37</th>
                        <th>T38</th>
                        <th>T39</th>
                        <th>T40</th>
                        <th>T41</th>
                        <th>T42</th>
                        <th>T43</th>
                        <th>Acciones</th>
                        {/* <th><div>Imagen</div></th> */}
                    </tr>
                </thead>
                <tbody>
                    {products.map((item, i) => (
                        <tr key={i}>
                            <td>{i + 1}</td>
                            {/* <td>{item.codigo}</td> */}
                            <td>{item.producto}</td>
                            <td>{item.sex}</td>
                            <td>{item.marca}</td>
                            <td>{item.color}</td>
                            <td>{item.precio}</td>
                            <td>{item.categoria}</td>
                            <td>{item.publicado}</td>
                            <td>{item.tseis}</td>
                            <td>{item.tsiete}</td>
                            <td>{item.tocho}</td>
                            <td>{item.tnueve}</td>
                            <td>{item.ccero}</td>
                            <td>{item.cuno}</td>
                            <td>{item.cdos}</td>
                            <td>{item.ctres}</td>
                            <td className='d-flex'>
                                <Button className="btn mx-2" onClick={() => DeleteProducts(item._id)}><FaTrashAlt /></Button>

                                <ModalUpProducts
                                    key={i}
                                    indice={i + 1}
                                    // codigo={item.codigo}
                                    producto={item.producto}
                                    imagen={item.imgUrl}
                                    sex={item.sex}
                                    marca={item.marca}
                                    color={item.color}
                                    precio={item.precio}
                                    tseis={item.tseis}
                                    tsiete={item.tsiete}
                                    tocho={item.tocho}
                                    tnueve={item.tnueve}
                                    ccero={item.ccero}
                                    cuno={item.cuno}
                                    cdos={item.cdos}
                                    ctres={item.ctres}
                                    categoria={item.categoria}
                                    publicado={item.publicado}
                                    id={item._id}
                                />
                            </td>
                            {/* <td>{item.imagen}</td> */}
                        </tr>
                    ))}
                </tbody>
            </Table>

{/* ---------------------------------------------------------- Modal Ingresar Producto -------------------------------------------------- */}

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Crear Producto</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Form>

                        <div className='d-flex'>
                            {/* <Form.Group className="mb-3 px-2 w-50" controlId="formBasicEmail">
                                <Form.Label>Codigo</Form.Label>
                                <Form.Control
                                    name='codigo'
                                    type='text'
                                    onChange={OnChangeProducts}
                                    placeholder="woman/menAdidas01" />
                            </Form.Group> */}

                            <Form.Group className="mb-2 px-2 w-50" controlId="formBasicEmail">
                                <Form.Label>Producto</Form.Label>
                                <Form.Control
                                    name='producto'
                                    type='text'
                                    onChange={OnChangeProducts}
                                    placeholder="nombre" />
                            </Form.Group>

                            <Form.Group className="mb-2 px-2 w-50" controlId="formBasicEmail">
                                <Form.Label>Imagen</Form.Label>
                                <Form.Control
                                    name='imgUrl'
                                    type='text'
                                    onChange={OnChangeProducts}
                                    placeholder='path o url' />
                            </Form.Group>
                        </div>

                        <div className='d-flex'>
                            <Form.Group className="mb-2 px-2 w-25" controlId="formBasicEmail">
                                <Form.Label>Sexo</Form.Label>
                                <Form.Control
                                    name='sex'
                                    type="text"
                                    onChange={OnChangeProducts}
                                    placeholder="M / H" />
                            </Form.Group>

                            <Form.Group className="mb-2 px-2 w-25" controlId="formBasicEmail">
                                <Form.Label>Marca</Form.Label>
                                <Form.Control
                                    name='marca'
                                    type="text"
                                    onChange={OnChangeProducts}
                                    placeholder="Adidas" />
                            </Form.Group>

                            <Form.Group className="mb-2 px-2 w-25" controlId="formBasicEmail">
                                <Form.Label>Color</Form.Label>
                                <Form.Control
                                    name='color'
                                    type="text"
                                    onChange={OnChangeProducts}
                                    placeholder="Negro" />
                            </Form.Group>

                            <Form.Group className="mb-2 px-2 w-25" controlId="formBasicEmail">
                                <Form.Label>Precio ($)</Form.Label>
                                <Form.Control
                                    name='precio'
                                    type="number"
                                    onChange={OnChangeProducts}
                                    placeholder="100.00" />
                            </Form.Group>
                        </div>

                        {/* <div className='d-flex'>
                            <Form.Group className="mb-3 px-2 w-25" controlId="formBasicEmail">
                                <Form.Label>Talle</Form.Label>
                                <Form.Control
                                    name='talle'
                                    type="number"
                                    onChange={OnChangeProducts}
                                    placeholder="40" />
                            </Form.Group>

                            <Form.Group className="mb-3 px-2 w-25" controlId="formBasicEmail">
                                <Form.Label>Cantidad</Form.Label>
                                <Form.Control
                                    name='stock'
                                    type="number"
                                    onChange={OnChangeProducts}
                                    placeholder="10" />
                            </Form.Group>
                        </div> */}


                        <div className='d-flex'>
                            <Form.Group className="mb-2 px-2 w-25" controlId="formBasicEmail">
                                <Form.Label>T-36</Form.Label>
                                <Form.Control
                                    name='tseis'
                                    type="number"
                                    onChange={OnChangeProducts}
                                    placeholder="Cant."/>
                            </Form.Group>

                            <Form.Group className="mb-2 w-25" controlId="formBasicEmail">
                                <Form.Label>T-37</Form.Label>
                                <Form.Control
                                    name='tsiete'
                                    type="number"
                                    onChange={OnChangeProducts}
                                    placeholder="Cant." />
                            </Form.Group>

                            <Form.Group className="mb-2 px-2 w-25" controlId="formBasicEmail">
                                <Form.Label>T-38</Form.Label>
                                <Form.Control
                                    name='tocho'
                                    type="number"
                                    onChange={OnChangeProducts}
                                    placeholder="Cant."/>
                            </Form.Group>

                            <Form.Group className="mb-2 w-25" controlId="formBasicEmail">
                                <Form.Label>T-39</Form.Label>
                                <Form.Control
                                    name='tnueve'
                                    type="number"
                                    onChange={OnChangeProducts}
                                    placeholder="Cant." />
                            </Form.Group>
                        </div>

                        <div className='d-flex'>
                            <Form.Group className="mb-2 px-2 w-25" controlId="formBasicEmail">
                                <Form.Label>T-40</Form.Label>
                                <Form.Control
                                    name='ccero'
                                    type="number"
                                    onChange={OnChangeProducts}
                                    placeholder="Cant."/>
                            </Form.Group>

                            <Form.Group className="mb-2 w-25" controlId="formBasicEmail">
                                <Form.Label>T-41</Form.Label>
                                <Form.Control
                                    name='cuno'
                                    type="number"
                                    onChange={OnChangeProducts}
                                    placeholder="Cant." />
                            </Form.Group>

                            <Form.Group className="mb-2 px-2 w-25" controlId="formBasicEmail">
                                <Form.Label>T-42</Form.Label>
                                <Form.Control
                                    name='cdos'
                                    type="number"
                                    onChange={OnChangeProducts}
                                    placeholder="Cant."/>
                            </Form.Group>

                            <Form.Group className="mb-2 w-25" controlId="formBasicEmail">
                                <Form.Label>T-43</Form.Label>
                                <Form.Control
                                    name='ctres'
                                    type="number"
                                    onChange={OnChangeProducts}
                                    placeholder="Cant." />
                            </Form.Group>
                        </div>

                        <div className='d-flex'>
                            <Form.Group className="mb-2 px-2 w-75" controlId="formBasicEmail">
                                <Form.Label>Categoria</Form.Label>
                                <Form.Control
                                    name='categoria'
                                    type="text"
                                    onChange={OnChangeProducts}
                                    placeholder="Trainning - Outdoor - Running" />
                            </Form.Group>

                            <Form.Group className="mb-2 w-25" controlId="formBasicEmail">
                                <Form.Label>Publicado</Form.Label>
                                <Form.Control
                                    name='publicado'
                                    type="number"
                                    onChange={OnChangeProducts}
                                    placeholder="1 / 0" />
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
