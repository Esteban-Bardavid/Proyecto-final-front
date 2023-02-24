import { Modal, Form, Button } from 'react-bootstrap';
import { FaRegEdit } from "react-icons/fa";
import { useState } from "react";
import axios from 'axios';
import UseAdminUsers from '../../utils/useAdminUsers';

let styles = {
    fontWeight: "bold",
    color: "#dc3545"
}


function ModalUpUsers({ name, lastname, age, email, admin, id }) {

    const { showUp, handleCloseUp, handleShowUp, url, setShowUp } = UseAdminUsers();


    const [errorsUp, setErrorsUp] = useState({});


    const initialFormUp = {
        name: `${name}`,
        lastname: `${lastname}`,
        age: `${age}`,
        email: `${email}`,
        admin: `${admin}`,
    }


    // Funcion para Actualizar Usuarios en tabla:
    const [update, setupdate] = useState(initialFormUp)


    function OnChangeUpdate(e) {
        const { name, value } = e.target;
        const response = { ...update, [name]: value };
        setupdate(response);
        console.log(response);
    }
    console.log(update)


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


    // Validaciones de Inputs (Formulario para Actualizar Usuario):
    const validationsFormUp = (update) => {
        let errorsUp = {};
        let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
        let regexComments = /^.{1,20}$/;
        let regexComments1 = /^.{1,10}$/;
        let regexComments2 = /^.{1,6}$/;
        let regexComments3 = /^.{1,3}$/;
        let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;


        if (!update.name.trim()) {
            //errorsUp.producto = "'Producto' es requerido"
            setupdate(initialFormUp)
        } else if (!regexComments.test(update.name.trim())) {
            errorsUp.name = "'Nombre' solo debe tener hasta 20 caracteres"
            setupdate(initialFormUp)
        }

        else if (!update.lastname.trim()) {
            //errorsUp.imgUrl = "'Imagen' es requerido"
            setupdate(initialFormUp)
        } else if (!regexComments.test(update.lastname.trim())) {
            errorsUp.lastname = "'Apellido' solo debe tener hasta 20 caracteres"
            setupdate(initialFormUp)
        }

        else if (!update.age.trim()) {
            //errorsUp.sex = "'Sexo' es requerido"
            setupdate(initialFormUp)
        }

        else if (!update.email.trim()) {
            errorsUp.email = "'Email' es requerido"
        } else if (!regexEmail.test(update.email.trim())) {
            errorsUp.email = "Tu 'Email' no es valido."
            setupdate(initialFormUp)
        }

        else if (update.admin != "true" && update.admin != "false") {
            errorsUp.admin = "Solo 'true' o 'false'"
            setupdate(initialFormUp)
        }



        return errorsUp;
    }

    const handleBlurUp = (e) => {
        OnChangeUpdate(e);
        setErrorsUp(validationsFormUp(update));
    };

    console.log(errorsUp)


    return (
        <div>

            <Button variant="primary" onClick={handleShowUp}><FaRegEdit /></Button>

            <Modal show={showUp} onHide={handleCloseUp}>
                <Modal.Header closeButton>
                    <Modal.Title>Actualizar Usuario</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Form>

                        <div className='d-flex'>
                            <Form.Group className="mb-2 px-2 w-50" controlId="formBasicEmail">
                                <Form.Label>Nombre</Form.Label>
                                <Form.Control
                                    name='name'
                                    type='text'
                                    onChange={OnChangeUpdate}
                                    onBlur={handleBlurUp}
                                    value={update.name}
                                    placeholder={name} />
                                {errorsUp.name && <p style={styles}>{errorsUp.name}</p>}
                            </Form.Group>

                            <Form.Group className="mb-2 px-2 w-50" controlId="formBasicEmail">
                                <Form.Label>Apellido</Form.Label>
                                <Form.Control
                                    name='lastname'
                                    type='text'
                                    onChange={OnChangeUpdate}
                                    onBlur={handleBlurUp}
                                    value={update.lastname}
                                    placeholder={lastname} />
                                {errorsUp.lastname && <p style={styles}>{errorsUp.lastname}</p>}
                            </Form.Group>
                        </div>

                        <div className='d-flex'>
                            <Form.Group className="mb-2 px-2 w-25" controlId="formBasicEmail">
                                <Form.Label>Edad</Form.Label>
                                <Form.Control
                                    name='age'
                                    type="number"
                                    onChange={OnChangeUpdate}
                                    onBlur={handleBlurUp}
                                    value={update.age}
                                    placeholder={age} />
                                {errorsUp.age && <p style={styles}>{errorsUp.age}</p>}
                            </Form.Group>

                            <Form.Group className="mb-2 px-2 w-25" controlId="formBasicEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    name='email'
                                    type="email"
                                    onChange={OnChangeUpdate}
                                    onBlur={handleBlurUp}
                                    value={update.email}
                                    placeholder={email} />
                                {errorsUp.email && <p style={styles}>{errorsUp.email}</p>}
                            </Form.Group>

                            <Form.Group className="mb-2 px-2 w-25" controlId="formBasicEmail">
                                <Form.Label>Admin</Form.Label>
                                <Form.Control
                                    name='admin'
                                    type="text"
                                    onChange={OnChangeUpdate}
                                    onBlur={handleBlurUp}
                                    value={update.admin}
                                    placeholder={admin} />
                                {errorsUp.admin && <p style={styles}>{errorsUp.admin}</p>}
                            </Form.Group>

                        </div>

                    </Form>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="primary w-100" onClick={() => PutUsers(id)}>
                        Actualizar
                    </Button>
                </Modal.Footer>

            </Modal>

        </div >
    )
};

export default ModalUpUsers;