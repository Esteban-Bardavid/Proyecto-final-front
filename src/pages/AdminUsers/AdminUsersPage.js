import { Button, Table } from 'react-bootstrap';
import { FaSearch } from "react-icons/fa";
import { useState, useEffect } from 'react';
import axios from 'axios';
import { FaTrashAlt } from "react-icons/fa";
import UseAdminUsers from '../../utils/useAdminUsers';
import ModalUpUsers from '../../components/Modal/modalUpUser';
import { Link } from 'react-router-dom'



function AdminUsers() {

    const { url, consultAndDeleteUser } = UseAdminUsers();


    // Funcion para mostrar Usuarios en tabla:
    const [user, setUser] = useState([]);

    useEffect(() => {
        GetUser()
    }, []);

    async function GetUser() {
        let getUser = await axios.get(`${url}/user`);
        setUser(getUser.data);
        setBuscador(getUser.data);
    }


    // Buscador:
    const [busqueda, setBusqueda] = useState('')
    const [buscador, setBuscador] = useState([])

    const handleChange = e => {
        setBusqueda(e.target.value)
        filtrar(e.target.value)
    }

    const filtrar = (terminoBusqueda) => {
        var response = buscador.filter((elemento) => {
            if (elemento.name.toLowerCase().includes(terminoBusqueda.toLowerCase())
                || elemento.lastname.toLowerCase().includes(terminoBusqueda.toLowerCase())
                || elemento.admin.toLowerCase().includes(terminoBusqueda.toLowerCase())
            ) {
                return elemento;
            }
        });
        setUser(response);
    }


    const mapUser = user.map((item, i) => (
        <tr key={i}>
            <td>{i + 1}</td>
            <td>{item.name}</td>
            <td>{item.lastname}</td>
            <td>{item.age}</td>
            <td>{item.email}</td>
            <td>{item.admin}</td>
            <td>{item.product.length}</td>
            <td className='d-flex'>

                <Button className="btn mx-2" onClick={() => consultAndDeleteUser(item._id)}><FaTrashAlt /></Button>

                {user.map((item, i) => (
                    <ModalUpUsers
                        name={item.name}
                        lastname={item.lastname}
                        age={item.age}
                        email={item.email}
                        admin={item.admin}
                        id={item._id}
                    />
                ))[i]}
            </td>
        </tr>
    ))



    return (
        <div className='container-fluid'>
            <div className=''>
                <div className='ms-4 mt-3'>
                    <Link to="/adminProducts">
                        Ir a Productos
                    </Link>
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
            </div>

            {/* ----------------- Tabla ---------------- */}

            <Table striped bordered hover responsive className=''>
                <thead>
                    <tr>
                        <th>#</th>
                        <th><div>Nombre</div></th>
                        <th>Apellido</th>
                        <th>Edad</th>
                        <th>Email</th>
                        <th>Admin</th>
                        <th>Compras Hechas</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {mapUser}
                </tbody>
            </Table >

        </div >
    )
}

export default AdminUsers;
