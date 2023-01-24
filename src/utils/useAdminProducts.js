import axios from 'axios';
import { useState, useEffect } from 'react';


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
        console.log(form);
    }

    // Funcion para crear Producto en la Base de Datos:
    async function CreateProducts() {
        // try {
            const response = await axios.post(`${url}/adminProducts`, form)
            console.log(response);
            alert('El producto fue ingresado exitosamente');
        // } catch (error) {
        //     console.error(error);
        // }
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
    
    
    // Funcion para Eliminar productos en tabla:
    async function DeleteProducts(id) {
        let deleteProducts = await axios.delete(`${url}/adminProducts/${id}`)
        console.log(id)
        console.log(deleteProducts.data)
        GetProducts();
    }

    // Funcion para Actualizar productos en tabla:
    const [update, setupdate] = useState({})

    function OnChangeUpdate(e) {
        const { name, value } = e.target;
        const response = { ...update, [name]: value };
        setupdate(response);
        console.log(response);
        GetProducts()
    }

    async function PutProducts(id) {
        try {
            const { data } = await axios.put(`${url}/adminProducts/${id}`, update)
            console.log(data);
            setShowUp(false);
            GetProducts();
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
        OnChangeUpdate,
        PutProducts,
        products,
        url
    })
}

export default UseAdminProducts;