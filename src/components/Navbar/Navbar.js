import "./Navbar.css";
import { Container, Nav, Navbar, Button, NavDropdown, Form, Modal } from 'react-bootstrap';
import { Link } from "react-router-dom";
import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faStar, faCartShopping, faUser, faCircleInfo } from '@fortawesome/free-solid-svg-icons'


function NavBarComponent() {
    const token = localStorage.getItem('token');
    const [smShow, setSmShow] = useState(false);
    const [lgShow, setLgShow] = useState(false);

    function singOut() {
        localStorage.removeItem('token')
        window.location.href = "/login"
    }

    return (
        <div>
            <div>
                <div className=" pre-navbar ">
                    <h2>3 <small>CUOTAS SIN INTERES </small><strong>-ENVIOS GRATIS</strong> <small>DESDE $20.000</small></h2>

                    {/* MODAL CONTACTO */}

                    <div className="contact-navb">
                        <Button onClick={() => setLgShow(true)}>Contact Us</Button>
                        <Modal
                            size="lg"
                            show={lgShow}
                            onHide={() => setLgShow(false)}
                            aria-labelledby="example-modal-sizes-title-lg">
                            <Modal.Header closeButton>
                                <Modal.Title id="example-modal-sizes-title-lg">
                                    Large Modal
                                </Modal.Title>
                            </Modal.Header>
                            <Modal.Body>...</Modal.Body>
                        </Modal>
                    </div>
                </div>

            </div>

            {/* NAVBAR  */}
            <div className="navbar-container">
                <Navbar expand="lg">
                    <Container fluid>
                        <Navbar.Brand href="#">ROLLING SHOES</Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Form className="d-flex">
                                <Form.Control
                                    type="search"
                                    placeholder="Search"
                                    className="me-2"
                                    aria-label="Search"
                                />
                                <Button variant="outline-success">Buscar</Button>
                            </Form>
                            <Nav>
                                <div className="icon" style={{ fontSize: "26px", color: 'black' }}>
                                    <FontAwesomeIcon icon={faHouse} /> {" "}
                                    <FontAwesomeIcon icon={faStar} />{" "}
                                    <FontAwesomeIcon icon={faCartShopping} />{" "}
                                    <FontAwesomeIcon icon={faUser} />{" "}
                                    <FontAwesomeIcon icon={faCircleInfo} />

                                </div>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        </div>
    )
}

export default NavBarComponent;



