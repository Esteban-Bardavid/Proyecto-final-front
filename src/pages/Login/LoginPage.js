import "./LoginPage.css";
import { Form, Button, Modal, Alert } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import FooterComponent from "../../../src/components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";

function LoginPage() {
    // const { } = useLogin();
    const [form, setform] = useState({});

    const handleClose = () => setform(false);
    const handleShow = () => setform(true);

    function onChange(e) {
        const { name, value } = e.target;
        const response = { ...form, [name]: value }
        setform(response)
        console.log(form)
    }


    async function LoginPost() {
        console.log("todo bien pana")
        try {
            let url = `http://localhost:3000`

            const responseLogin = await axios.post(url, form)
            console.log(responseLogin)
            alert("todo bien pana")
            //   localStorage.setItem('token', data)
            //  window.location.href = '/'
        } catch (error) {
            console.error('error')

        }
    }
    return (
        <div className="Return">
            <Button id="FirstButton" onClick={handleShow}>
                Iniciar Sesion
            </Button>

            <Modal
                show={form}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}>
                <Modal.Header closeButton>
                    <Modal.Title className="FirstButton">Iniciar Sesion</Modal.Title>
                </Modal.Header>


                <Modal.Body>
                    <h2>Bienvenid@s a ... </h2>
                    <div className="ConteinerInputLogin">
                        <div className="ConteinerInputLogin">

                            <Form>
                                <Form.Group className="FGroupLoginEmail mb-3 p-2" controlId="formBasicEmail">
                                    <Form.Label>Ingrese su email</Form.Label>
                                    <Form.Control
                                        name="email"
                                        type="email"
                                        placeholder="juan@gmail.com"
                                        onChange={onChange}
                                    />
                                </Form.Group>

                                <Form.Group className="FGroupLoginPassword  mb-3 p-2" controlId="formBasicPassword">
                                    <Form.Label className="p-2">Ingrese su contraseña</Form.Label>
                                    <Form.Control
                                        name="password"
                                        type="password"
                                        placeholder="************"
                                        onChange={onChange}
                                    />
                                </Form.Group>
                            </Form>




                            <div id="ConteinerForgottenPassword">
                                <p className="me-2">¿Olvidaste tu contraseña?</p>
                                <a href="http://">Recuperar contraseña</a>
                            </div>
                        </div>


                    </div>

                </Modal.Body>


                <Modal.Footer>
                    <Button id="CloseLoginButton" onClick={handleClose}>
                        Cerrar
                    </Button>
                    <Button id="ReadyLoginButton" onClick={LoginPost}>Listo!
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}


export default LoginPage;