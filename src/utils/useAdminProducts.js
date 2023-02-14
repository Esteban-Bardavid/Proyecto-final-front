import axios from 'axios';
import { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import swal from 'sweetalert';

const initialForm = {
    producto: "",
    imgUrl: "",
    sex: "",
    marca: "",
    color: "",
    precio: "",
    tseis: "",
    tsiete: "",
    tocho: "",
    tnueve: "",
    ccero: "",
    cuno: "",
    cdos: "",
    ctres: "",
    categoria: "",
    publicado: ""
}


function UseAdminProducts() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [showUp, setShowUp] = useState(false);
    const handleCloseUp = () => setShowUp(false);
    const handleShowUp = () => setShowUp(true);

    const [form, setform] = useState(initialForm);
    const [errors, setErrors] = useState({});


    var url = 'http://localhost:4000/api'


    // Capturamos los inputs del formulario:
    function OnChangeProducts(e) {
        const { name, value } = e.target;
        const response = { ...form, [name]: value };
        setform(response);
        console.log(form);
    }


    // Validaciones de Inputs:
    const validationsForm = (form) => {
        let errors = {};
        let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
        let regexComments = /^.{1,20}$/;

        if (!form.producto.trim()) {
            errors.producto = "'Producto' es requerido"
        } else if (!regexComments.test(form.producto.trim())) {
            errors.producto = "'Producto' solo debe tener hasta 20 caracteres"
            setform(initialForm)
        }

        else if (!form.imgUrl.trim()) {
            errors.imgUrl = "'Imagen' es requerido"
        }

        else if (!form.sex.trim()) {
            errors.sex = "'Sexo' es requerido"
        } else if (form.sex != "Mujer" && form.sex != "Hombre") {
            errors.sex = "Solo 'Mujer' u 'Hombre'"
            setform(initialForm)
        }

        else if (!form.marca.trim()) {
            errors.marca = "'Marca' es requerido"
        } else if (form.marca != "Adidas" && form.marca != "Nike" && form.marca != "Fila" && form.marca != "Reebok") {
            errors.marca = "Solo Adidas, Nike, Fila o Reebok"
            setform(initialForm)
        }

        else if (!form.color.trim()) {
            errors.color = "'Color' es requerido"
        }

        else if (!form.precio.trim()) {
            errors.precio = "'Precio' es requerido"
        }

        else if (!form.tseis.trim()) {
            errors.tseis = "Campo requerido"
        }

        else if (!form.tsiete.trim()) {
            errors.tsiete = "Campo requerido"
        }

        else if (!form.tocho.trim()) {
            errors.tocho = "Campo requerido"
        }

        else if (!form.tnueve.trim()) {
            errors.tnueve = "Campo requerido"
        }

        else if (!form.ccero.trim()) {
            errors.ccero = "Campo requerido"
        }

        else if (!form.cuno.trim()) {
            errors.cuno = "Campo requerido"
        }

        else if (!form.cdos.trim()) {
            errors.cdos = "Campo requerido"
        }

        else if (!form.ctres.trim()) {
            errors.ctres = "Campo requerido"
        }

        else if (!form.categoria.trim()) {
            errors.categoria = "'Categoria' es requerido"
        } else if (form.categoria != "Trainning" && form.categoria != "Running" && form.categoria != "Outdoor") {
            errors.categoria = "Solo Trainning, Running u Outdoor"
            setform(initialForm)
        }

        else if (!form.publicado.trim()) {
            errors.publicado = "'Publicado' es requerido"
        } else if (form.publicado != 1 && form.publicado != 0) {
            errors.publicado = "Solo '1' o '0'"
            setform(initialForm)
        }

        return errors;
    }

    const handleBlur = (e) => {
        OnChangeProducts(e);
        setErrors(validationsForm(form));
    };

    // Funcion para crear Producto en la Base de Datos:
    async function CreateProducts() {
        try {
            const existentProduct = products.find((product) => product.producto === form.producto && product.sex === form.sex && product && product.marca === form.marca && product.color === form.color && product.categoria === form.categoria)

            if (form === initialForm) {

                Swal
                    .fire({
                        title: "Importante !!",
                        text: "Debes completar todos los campos requeridos",
                        icon: 'warning',
                        //showCancelButton: true,
                        confirmButtonText: "Aceptar",
                        //cancelButtonText: "Cancelar",
                    })

            } else if (!existentProduct) {

                const response = await axios.post(`${url}/adminProducts`, form)
                console.log(response);

                Swal
                    .fire({
                        title: "Listo !!",
                        text: "El producto fue ingresado correctamente",
                        icon: 'warning',
                        //showCancelButton: true,
                        confirmButtonText: "Aceptar",
                        //cancelButtonText: "Cancelar",
                    })
                    .then(resultado => {
                        if (resultado.value) {
                            // Hicieron click en "Sí"
                            window.location.reload();
                        } else {
                            // Dijeron que no
                        }
                    });

            } else {

                Swal
                    .fire({
                        title: "Importante !!",
                        text: "El producto ya existe solo debes actualizarlo.",
                        icon: 'warning',
                        //showCancelButton: true,
                        confirmButtonText: "Aceptar",
                        //cancelButtonText: "Cancelar",
                    })
                    .then(resultado => {
                        if (resultado.value) {
                            // Hicieron click en "Sí"
                            window.location.reload();
                        } else {
                            // Dijeron que no
                        }
                    });
            }
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


    // Funcion para Eliminar productos en tabla:
    async function DeleteProducts(id) {
        let deleteProducts = await axios.delete(`${url}/adminProducts/${id}`)
        console.log(id)
        console.log(deleteProducts.data)
        window.location.reload();
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
        window.location.reload();
    }

    const productsWoman = products.filter((item, i) => (item.publicado > 0 && item.sex == 'Mujer'))


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
        url,
        productsWoman,
        handleBlur,
        form,
        errors
    })
}

export default UseAdminProducts;