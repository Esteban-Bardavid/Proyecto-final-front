import "./Navbar.css";
import { Container, Nav, Navbar, Button, NavDropdown, Form, Modal, Offcanvas } from 'react-bootstrap';
import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faStar, faCartShopping, faUser, faCircleInfo, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import 'animate.css';
import logo from "../../img/logorolling.png"
import UseAdminProducts from '../../utils/useAdminProducts';
import axios from "axios";
import Buscador from "../Buscador/Buscador";
import favoritos from "../../pages/Favorites/favorites"
import SubNavbar from "../SubNav/subNav"

function NavBarComponent() {
    const { url } = UseAdminProducts();
    const token = localStorage.getItem('token');
    const [smShow, setSmShow] = useState(false);
    const [lgShow, setLgShow] = useState(false);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    function singOut() {
        localStorage.removeItem('token')
        window.location.href = "/login"
    }

    return (
        <div>
            <div className=" pre-navbar  ">
                <h2>3 <small>CUOTAS SIN INTERES </small><strong>-ENVIOS GRATIS</strong> <small>DESDE $20.000</small></h2>

                {/* MODAL CONTACTO */}

                <div className="contact-navb">
                    <Button className="button-nav" onClick={() => setLgShow(true)}>Contact Us</Button>
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
            <Navbar className="navbar1" id="navContainer" bg="orange" expand="lg">
                <Container className="container-3" fluid p-5>
                    <Navbar.Brand className="logo-navbar" href="#"><img className="logo-img" src={logo} alt="LOGO" srcset="" /></Navbar.Brand>
                    <Navbar.Toggle className="me-3" aria-controls="navbarScroll" />
                    <Navbar.Collapse className="container-search-icons " id="navbarScroll">

                        <Nav
                            className=" icons-hamburguer my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll>
                            <Link className="links-icons m-2 p-1" id="home" to="/"> <FontAwesomeIcon color="black" fontSize={26} icon={faHouse} /> </Link>
                            <Link className="links-icons m-2 p-1" id="favs" to="/favoritos"> <FontAwesomeIcon color="black" fontSize={26} icon={faStar} /> </Link>
                            <Link className="links-icons m-2 p-1" id="carrito" to="/"> <FontAwesomeIcon color="black" fontSize={26} icon={faCartShopping} /> </Link>
                            <Link className="links-icons m-2 p-1" id="info" to="/"> <FontAwesomeIcon color="black" fontSize={26} icon={faUser} onClick={handleShow} />
                                <Modal
                                    show={show}
                                    onHide={handleClose}
                                    backdrop="static"
                                    keyboard={false}>
                                    <Modal.Header closeButton>
                                        <Modal.Title>Modal title</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        I will not close if you click outside me. Don't even try to press
                                        escape key.
                                    </Modal.Body>
                                    <Modal.Footer>
                                        <Button variant="secondary" onClick={handleClose}>
                                            Close
                                        </Button>
                                        <Button variant="primary">Understood</Button>
                                    </Modal.Footer>
                                </Modal>
                            </Link>
                            <Link className="links-icons m-2 p-1" id="favs" to="/InfoPage"> <FontAwesomeIcon color="black" fontSize={26} icon={faCircleInfo} />  </Link>
                        </Nav>

                        {/* BUSCADOR  */}

                        <Buscador />





                    </Navbar.Collapse>
                </Container>

            </Navbar>
            <SubNavbar />
        </div>
    )
}

export default NavBarComponent;



