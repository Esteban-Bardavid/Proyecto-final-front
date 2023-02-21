import axios from 'axios';
import { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import swal from 'sweetalert';

const initialUserForm = {
    name: "",
    lastname: "",
    age: "",
    email: "",
    admin: "",
    password:"",
    product: {},
}


function UseAdminUsers() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [showUp, setShowUp] = useState(false);
    const handleCloseUp = () => setShowUp(false);
    const handleShowUp = () => setShowUp(true);

    const [formUser, setformUser] = useState(initialUserForm);
    const [errors, setErrors] = useState({});


    var url = 'http://localhost:4000/api'


    // Capturamos los inputs del formulario:
    function OnChangeUsers(e) {
        const { name, value } = e.target;
        const response = { ...formUser, [name]: value };
        setformUser(response);
        console.log(formUser);
    }


    // Validaciones de Inputs:
    const validationsForm = (formUser) => {
        let errors = {};
        let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
        let regexComments = /^.{1,20}$/;

        if (!formUser.name.trim()) {
            errors.name = "'Nombre' es requerido"
        } else if (!regexComments.test(formUser.name.trim())) {
            errors.name = "'Nombre' solo debe tener hasta 20 caracteres"
            setformUser(initialUserForm)
        }

        else if (!formUser.age.trim()) {
            errors.age = "'Edad' es requerido"
        }

        else if (!formUser.lastname.trim()) {
            errors.lastname = "'Apellido' es requerido"
        } else if (!regexComments.test(formUser.lastname.trim())) {
            errors.lastname = "'Apellido' solo debe tener hasta 20 caracteres"
            setformUser(initialUserForm)
        }

        else if (!formUser.email.trim()) {
            errors.email = "'email' es requerido"
        } else if (!regexComments.test(formUser.email.trim())) {
            errors.email = "'email' solo debe tener hasta 30 caracteres"
            setformUser(initialUserForm)
        }
        else if (!formUser.password.trim()) {
            errors.password
             = "'contraseña' es requerido"
        } else if (!regexComments.test(formUser.password.trim())) {
            errors.password = "'contraseña' solo debe tener hasta 20 caracteres"
            setformUser(initialUserForm)
        }


        return errors;
    }

    const handleBlur = (e) => {
        OnChangeUsers(e);
        setErrors(validationsForm(formUser));
    };

    
    // Funcion para mostrar usuarios en tabla:
    const [users, setusers] = useState([]);

    useEffect(() => {
        GetUsers()
    }, []);

    async function GetUsers() {
        let getUsers = await axios.get(`${url}/user`);
        setusers(getUsers.data);
    }


    // Funcion para Eliminar usuarios en tabla:
    async function DeleteUsers(id) {
        let deleteUsers = await axios.delete(`${url}/user/${id}`)
        console.log(id)
        console.log(deleteUsers.data)
        window.location.reload();
    }

    // Funcion para Actualizar usuarios en tabla:
    const [update, setupdate] = useState({})

    function OnChangeUpdate(e) {
        const { name, value } = e.target;
        const response = { ...update, [name]: value };
        setupdate(response);
        console.log(response);
    }

    async function PutUsers(id) {
        try {
            const { data } = await axios.put(`${url}/user/${id}`, update)
            console.log(data);
            setShowUp(false);
        } catch (error) {
            alert('No se pudo.');
            console.error(error);
        }
        window.location.reload();
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
        OnChangeUsers,
        GetUsers,
        DeleteUsers,
        OnChangeUpdate,
        PutUsers,
        users,
        url,
        handleBlur,
        formUser,
        errors
    })
}

export default UseAdminUsers;