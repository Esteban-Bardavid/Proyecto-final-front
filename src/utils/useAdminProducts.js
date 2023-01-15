import axios from 'axios';
import { useState, useEffect } from 'react';
import { FaTrashAlt, FaRegEdit } from "react-icons/fa";
import { Button, Modal, Form } from 'react-bootstrap';
import ModalUpProducts from '../components/Modal/modalUpProducts';

function UseAdminProducts() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [showUp, setShowUp] = useState(false);
    const handleCloseUp = () => setShowUp(false);
    const handleShowUp = () => setShowUp(true);

    const [form, setform] = useState({})

    var url = 'http://localhost:4000/api'

    // Capturamos los inputs del formulario:
    function OnChangeProducts(e) {
        const { name, value } = e.target;
        const response = { ...form, [name]: value };
        setform(response);
        //console.log(form);
    }

    // Funcion para crear Producto en la Base de Datos:
    async function CreateProducts() {
        try {

            const response = await axios.post(`${url}/adminProducts`, form)
            console.log(response);
            alert('El producto fue ingresado exitosamente');

        } catch (error) {

            console.error(error);

        }
    }

    // Funcion para mostrar productos en tabla:
    const [products, setproducts] = useState([]);

    useEffect(() => {
        GetProducts()
    }, []);

    async function GetProducts() {
        let getProducts = await axios.get(`${url}/adminProducts`);
        setproducts(getProducts.data);
    }


    const mapProducts = products.map((item, i) => (
        <tr key={i}>
            <td>{i + 1}</td>
            <td>{item.codigo}</td>
            <td>{item.producto}</td>
            <td>{item.imagen}</td>
            <td>{item.precio}</td>
            <td>{item.talle}</td>
            <td>{item.marca}</td>
            <td>{item.categoria}</td>
            <td>{item.sex}</td>
            <td><input type="checkbox"></input></td>
            <td>
                <Button className="btn mx-2" onClick={() => DeleteProducts(item._id)}><FaTrashAlt /></Button>
            </td>
            <td>
                <ModalUpProducts
                    key={i}
                    indice={i + 1}
                    codigo={item.codigo}
                    producto={item.producto}
                    imagen={item.imagen}
                    precio={item.precio}
                    talle={item.talle}
                    marca={item.marca}
                    categoria={item.categoria}
                    sex={item.sex}
                    id= {item._id}
                />
            </td>
        </tr>
    ));


    // const mapProductsUp = products.map((item, i) => (
    //    ));






    // Funcion para Eliminar productos en tabla:
    async function DeleteProducts(id) {
        let deleteProducts = await axios.delete(`${url}/adminProducts/${id}`)
        console.log(id)
        console.log(deleteProducts.data)
    }

    // Funcion para Actualizar productos en tabla:
    const [update, setupdate] = useState({})

    function OnChangeUpdate(e) {
        const { name, value } = e.target;
        const response = { ...update, [name]: value };
        setupdate(response);
        console.log(response);
    }

    async function PutProducts(id) {
        try {
            const { data } = await axios.put(`${url}/adminProducts/${id}`, update)
            console.log(data);
            setShowUp(false);
        } catch (error) {
            alert('No se pudo.');
            console.error(error);
        }
    }





    return ({
        show,
        setShow,
        handleClose,
        handleShow,
        showUp,
        setShowUp,
        handleCloseUp,
        handleShowUp,
        OnChangeProducts,
        CreateProducts,
        GetProducts,
        DeleteProducts,
        mapProducts,
        OnChangeUpdate,
        PutProducts,
       // mapProductsUp
    })
}

export default UseAdminProducts;