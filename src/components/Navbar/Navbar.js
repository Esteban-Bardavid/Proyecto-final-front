import "./Navbar.css";
import { Container, Nav, Navbar, Button, NavDropdown, Form, Modal, Offcanvas } from 'react-bootstrap';
import { Link } from "react-router-dom";
import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faStar, faCartShopping, faUser, faCircleInfo, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { LoginPage } from "../../pages/Login/LoginPage"
import axios from "axios"


function NavBarComponent() {
    const token = localStorage.getItem('token');
    const [smShow, setSmShow] = useState(false);
    const [lgShow, setLgShow] = useState(false);
    const [show, setShow] = useState(false);
    const [form, setform] = useState({});

    const ModalClose = () => setform(false);

    const [validate, setvalidate] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    function singOut() {
        localStorage.removeItem('token')
        window.location.href = "/login"
    }

    function onChange(e) {
        const { name, value } = e.target;
        const response = { ...form, [name]: value }
        setform(response)

        //setvalidate(false)
    }

    async function LoginPost() {


        console.log(form)
        try {
            let url = `http://localhost:4000/api/Login`
            const { data } = await axios.post(url, form)

            localStorage.setItem('token', data)

            window.location.href = '/'

            //   alert("esta es el home")

            // const email = document.getElementById("emailLogin").value;
            //const password = document.getElementById("passwordLogin").value;

            // if (email === "EstebanBardavid@gmail.com" && password === "esteban") {
            //
            //      localStorage.setItem('token', data)
            //      window.location.href = '/'
            //      alert("esta es el home de admin")
            //  }

        } catch (error) {
            console.error('error')
            setvalidate(true)
            console.log(validate)

        }
    }

    return (
        <div>
            <div className=" pre-navbar  ">
                <h2 >3 <small >CUOTAS SIN INTERES </small><strong >-ENVIOS GRATIS</strong> <small >DESDE $20.000</small></h2>


                {/* MODAL CONTACTO */}

                <div className="contact-navb">
                    <Button className="button-nav" onClick={() => setLgShow(true)}>Contacto</Button>
                    <Modal
                        size="lg"
                        show={lgShow}
                        onHide={() => setLgShow(false)}
                        aria-labelledby="example-modal-sizes-title-lg">
                        <Modal.Header closeButton>
                            <Modal.Title id="example-modal-sizes-title-lg">
                                Contactate !
                            </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>...</Modal.Body>
                    </Modal>
                </div>

            </div>

            {/* NAVBAR  */}
            <Navbar bg="orange" expand="lg">
                <Container fluid>
                    <Navbar.Brand href="#"><img className="logo-img" src="https://o.remove.bg/downloads/6e3f4129-583d-415f-95d5-93ff14aeca57/ROLLING_SHOES-removebg-preview.png" alt="" srcset="" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse className="container-search-icons " id="navbarScroll">

                        <Nav
                            className=" my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Link className="links-icons m-2 p-1" id="favs" to="/"> <FontAwesomeIcon color="black" fontSize={26} icon={faHouse} /> </Link>
                            <Link className="links-icons m-2 p-1" id="favs" to="/Favorites"> <FontAwesomeIcon color="black" fontSize={26} icon={faStar} /> </Link>
                            <Link className="links-icons m-2 p-1" id="favs" to="/"> <FontAwesomeIcon color="black" fontSize={26} icon={faCartShopping} /> </Link>
                            <Link className="links-icons m-2 p-1" id="favs" to="/"> <FontAwesomeIcon color="black" fontSize={26} icon={faUser} onClick={handleShow} />



                                <Modal
                                    show={show}
                                    onHide={ModalClose}
                                    backdrop="static"
                                    keyboard={false}
                                >
                                    <Modal.Header closeButton onClick={handleClose}>
                                        <Modal.Title className="FirstButton">Iniciar Sesion</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <h2>Bienvenid@s a Rolling Shoes</h2>
                                        <div className="ConteinerInputLogin">
                                            <div className="ConteinerInputLogin">

                                                <Form>
                                                    <Form.Group className="FGroupLoginEmail mb-3 p-2" controlId="formBasicEmail">
                                                        <Form.Label>Ingrese su email</Form.Label>
                                                        <Form.Control
                                                            id="emailLogin"
                                                            classname="border border-danger border-1"
                                                            //    classname = {validate? "border border-danger" : ""}
                                                            name="email"
                                                            type="email"
                                                            placeholder="juan@gmail.com"
                                                            onChange={onChange}
                                                        />
                                                    </Form.Group>

                                                    <Form.Group className="FGroupLoginPassword  mb-3 p-2" controlId="formBasicPassword">
                                                        <Form.Label className="p-2">Ingrese su contraseña</Form.Label>
                                                        <Form.Control
                                                            id="passwordLogin"
                                                            classname={validate ? " border border-danger" : ""}
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
                            </Link>
                            <Link className="links-icons m-2 p-1" id="favs" to="/Info"> <FontAwesomeIcon color="black" fontSize={26} icon={faCircleInfo} />  </Link>

                        </Nav>


                        <Form className="container-search d-flex  ">

                            <input className="input-search" type="text" placeholder="Adidas, pantalon, remeras..." />

                            <button type="submit" className="button-search"><FontAwesomeIcon color="grey" fontSize={28} icon={faMagnifyingGlass} /></button>
                        </Form>


                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavBarComponent;



