import { Modal, Form, Button, Table } from 'react-bootstrap';
import UseAdminUsers from '../../utils/useAdminUsers';
import { FaSearch } from "react-icons/fa";
import { useState, useEffect } from 'react';
import axios from 'axios';
import { FaTrashAlt } from "react-icons/fa";
import ModalUpProducts from '../../components/Modal/modalUpProducts';

let styles = {
    fontWeight: "bold",
    color: "#dc3545"
}


function AdminUsers() {

    const {
        handleBlur,
        OnChangeUsers,
        formUser,
        errors,
        handleClose,
        handleShow,
        show,
        url,
        CreateUsers,
        DeleteUsers,
    } = UseAdminUsers();


    /*function Auxiliar() {
        CreateProducts();
        handleClose();
    }*/

    // Funcion para mostrar productos en tabla:
    const [users, setusers] = useState([]);

    useEffect(() => {
        GetUsers()
    }, []);

    async function GetUsers() {
        let getUsers = await axios.get(`${url}/user`);
        setusers(getUsers.data);
        //setBuscador(getProducts.data);
    }

    /*// Buscador:
    const [busqueda, setBusqueda] = useState('')
    const [buscador, setBuscador] = useState([])

    const handleChange = e => {
        setBusqueda(e.target.value)
        filtrar(e.target.value)
    }

    const filtrar = (terminoBusqueda) => {
        var response = buscador.filter((elemento) => {
            if (elemento.producto.toLowerCase().includes(terminoBusqueda.toLowerCase())
                || elemento.marca.toLowerCase().includes(terminoBusqueda.toLowerCase())
                || elemento.sex.toLowerCase().includes(terminoBusqueda.toLowerCase())
            ) {
                return elemento;
            }
        });
        setproducts(response);
        console.log(products);
    }*/



    return (
        <div>
           {/* <div className=''>
                <div className='ms-4 mt-3'>
                    <Button variant="primary" onClick={handleShow}>
                        Ingresar Producto
                    </Button>
                </div>

                <div className='d-flex justify-content-center w-100 ms-2' >
                    <input
                        className='form-control w-75 mb-3 mt-3 me-3'
                        value={busqueda}
                        placeholder='Buscar'
                        onChange={handleChange}
                    />
                    <Button className='btn btn-primary mb-3 mt-3'>
                        <FaSearch />
                    </Button>
                </div>
            </div>*/}

            {/* ---------------------------------------------------------- Tabla --------------------------------------------------------------------------- */}

            <Table striped bordered hover responsive className='w-100'>
                <thead>
                    <tr>
                        <th>#</th>
                        <th><div>Nombre</div></th>
                        <th>Apellido</th>
                        <th>Edad</th>
                        <th>email</th>
                        <th>Admin</th>
                        <th>Productos</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, i) => (
                        <tr key={i}>
                            <td>{i + 1}</td>
                            <td>{user.name}</td>
                           
                            <td>{user.lastname}</td>
                            <td>{user.age}</td>
                            <td>{user.email}</td>
                            <td>{user.admin}</td>
                            
                            <td> 
                            {user.product}
                                
                                </td>
                            <td className='d-flex'>
                                <Button className="btn mx-2" onClick={() => DeleteUsers(user._id)}><FaTrashAlt /></Button>
                                {/*<ModalUpProducts
                                    key={i}
                                    indice={i + 1}
                                    name={user.name}
                                    lastname={user.lastname}
                                    age={user.age}
                                    
                                    password={user.password}
                                    products={user.products}
                                    
                                    id={user._id}
                    />*/}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>

            {/* ---------------------------------------------------------- Modal Ingresar Producto -------------------------------------------------- 

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Crear Producto</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Form>

                        <div className='d-flex'>

                            <Form.Group className="mb-2 px-2 w-50" controlId="formBasicEmail">
                                <Form.Label>Producto</Form.Label>
                                <Form.Control
                                    name='producto'
                                    type='text'
                                    onChange={OnChangeProducts}
                                    onBlur={handleBlur}
                                    value={form.producto}
                                    placeholder="nombre"
                                />
                                {errors.producto && <p style={styles}>{errors.producto}</p>}
                            </Form.Group>

                            <Form.Group className="mb-2 px-2 w-50" controlId="formBasicEmail">
                                <Form.Label>Imagen</Form.Label>
                                <Form.Control
                                    name='imgUrl'
                                    type='text'
                                    onChange={OnChangeProducts}
                                    onBlur={handleBlur}
                                    value={form.imgUrl}
                                    placeholder='path o url' />
                                {errors.imgUrl && <p style={styles}>{errors.imgUrl}</p>}
                            </Form.Group>
                        </div>

                        <div className='d-flex'>
                            <Form.Group className="mb-2 px-2 w-25" controlId="formBasicEmail">
                                <Form.Label>Sexo</Form.Label>
                                <Form.Control
                                    name='sex'
                                    type="text"
                                    onChange={OnChangeProducts}
                                    onBlur={handleBlur}
                                    value={form.sex}
                                    placeholder="M / H" />
                                {errors.sex && <p style={styles}>{errors.sex}</p>}
                            </Form.Group>

                            <Form.Group className="mb-2 px-2 w-25" controlId="formBasicEmail">
                                <Form.Label>Marca</Form.Label>
                                <Form.Control
                                    name='marca'
                                    type="text"
                                    onChange={OnChangeProducts}
                                    onBlur={handleBlur}
                                    value={form.marca}
                                    placeholder="Adidas" />
                                {errors.marca && <p style={styles}>{errors.marca}</p>}
                            </Form.Group>

                            <Form.Group className="mb-2 px-2 w-25" controlId="formBasicEmail">
                                <Form.Label>Color</Form.Label>
                                <Form.Control
                                    name='color'
                                    type="text"
                                    onChange={OnChangeProducts}
                                    onBlur={handleBlur}
                                    value={form.color}
                                    placeholder="Negro" />
                                {errors.color && <p style={styles}>{errors.color}</p>}
                            </Form.Group>

                            <Form.Group className="mb-2 px-2 w-25" controlId="formBasicEmail">
                                <Form.Label>Precio ($)</Form.Label>
                                <Form.Control
                                    name='precio'
                                    type="number"
                                    onChange={OnChangeProducts}
                                    onBlur={handleBlur}
                                    value={form.precio}
                                    placeholder="100.00" />
                                {errors.precio && <p style={styles}>{errors.precio}</p>}
                            </Form.Group>
                        </div>

                        <div className='d-flex'>
                            <Form.Group className="mb-2 px-2 w-25" controlId="formBasicEmail">
                                <Form.Label>T-36</Form.Label>
                                <Form.Control
                                    name='tseis'
                                    type="number"
                                    onChange={OnChangeProducts}
                                    onBlur={handleBlur}
                                    value={form.tseis}
                                    placeholder="Cant." />
                                {errors.tseis && <p style={styles}>{errors.tseis}</p>}
                            </Form.Group>

                            <Form.Group className="mb-2 w-25" controlId="formBasicEmail">
                                <Form.Label>T-37</Form.Label>
                                <Form.Control
                                    name='tsiete'
                                    type="number"
                                    onChange={OnChangeProducts}
                                    onBlur={handleBlur}
                                    value={form.tsiete}
                                    placeholder="Cant." />
                                {errors.tsiete && <p style={styles}>{errors.tsiete}</p>}
                            </Form.Group>

                            <Form.Group className="mb-2 px-2 w-25" controlId="formBasicEmail">
                                <Form.Label>T-38</Form.Label>
                                <Form.Control
                                    name='tocho'
                                    type="number"
                                    onChange={OnChangeProducts}
                                    onBlur={handleBlur}
                                    value={form.tocho}
                                    placeholder="Cant." />
                                {errors.tocho && <p style={styles}>{errors.tocho}</p>}
                            </Form.Group>

                            <Form.Group className="mb-2 w-25" controlId="formBasicEmail">
                                <Form.Label>T-39</Form.Label>
                                <Form.Control
                                    name='tnueve'
                                    type="number"
                                    onChange={OnChangeProducts}
                                    onBlur={handleBlur}
                                    value={form.tnueve}
                                    placeholder="Cant." />
                                {errors.tnueve && <p style={styles}>{errors.tnueve}</p>}
                            </Form.Group>
                        </div>

                        <div className='d-flex'>
                            <Form.Group className="mb-2 px-2 w-25" controlId="formBasicEmail">
                                <Form.Label>T-40</Form.Label>
                                <Form.Control
                                    name='ccero'
                                    type="number"
                                    onChange={OnChangeProducts}
                                    onBlur={handleBlur}
                                    value={form.ccero}
                                    placeholder="Cant." />
                                {errors.ccero && <p style={styles}>{errors.ccero}</p>}
                            </Form.Group>

                            <Form.Group className="mb-2 w-25" controlId="formBasicEmail">
                                <Form.Label>T-41</Form.Label>
                                <Form.Control
                                    name='cuno'
                                    type="number"
                                    onChange={OnChangeProducts}
                                    onBlur={handleBlur}
                                    value={form.cuno}
                                    placeholder="Cant." />
                                {errors.cuno && <p style={styles}>{errors.cuno}</p>}
                            </Form.Group>

                            <Form.Group className="mb-2 px-2 w-25" controlId="formBasicEmail">
                                <Form.Label>T-42</Form.Label>
                                <Form.Control
                                    name='cdos'
                                    type="number"
                                    onChange={OnChangeProducts}
                                    onBlur={handleBlur}
                                    value={form.cdos}
                                    placeholder="Cant." />
                                {errors.cdos && <p style={styles}>{errors.cdos}</p>}
                            </Form.Group>

                            <Form.Group className="mb-2 w-25" controlId="formBasicEmail">
                                <Form.Label>T-43</Form.Label>
                                <Form.Control
                                    name='ctres'
                                    type="number"
                                    onChange={OnChangeProducts}
                                    onBlur={handleBlur}
                                    value={form.ctres}
                                    placeholder="Cant." />
                                {errors.ctres && <p style={styles}>{errors.ctres}</p>}
                            </Form.Group>
                        </div>

                        <div className='d-flex'>
                            <Form.Group className="mb-2 px-2 w-75" controlId="formBasicEmail">
                                <Form.Label>Categoria</Form.Label>
                                <Form.Control
                                    name='categoria'
                                    type="text"
                                    onChange={OnChangeProducts}
                                    onBlur={handleBlur}
                                    value={form.categoria}
                                    placeholder="Trainning - Outdoor - Running" />
                                {errors.categoria && <p style={styles}>{errors.categoria}</p>}
                            </Form.Group>

                            <Form.Group className="mb-2 w-25" controlId="formBasicEmail">
                                <Form.Label>Publicado</Form.Label>
                                <Form.Control
                                    name='publicado'
                                    type="number"
                                    onChange={OnChangeProducts}
                                    onBlur={handleBlur}
                                    value={form.publicado}
                                    placeholder="1 / 0" />
                                {errors.publicado && <p style={styles}>{errors.publicado}</p>}
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
          */}
        </div>
    )
}

export default AdminUsers;
