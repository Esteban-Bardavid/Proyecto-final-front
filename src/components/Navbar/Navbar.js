import "./Navbar.css";
import { Container, Nav, Navbar, Button, NavDropdown, Form, Modal, Offcanvas } from 'react-bootstrap';
import { Link } from "react-router-dom";
import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faStar, faCartShopping, faUser, faCircleInfo, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'


function NavBarComponent() {
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
            <Navbar bg="orange" expand="lg">
                <Container fluid>
                    <Navbar.Brand href="#">LOGO</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse className="container-search-icons " id="navbarScroll">

                        <Nav
                            className=" my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link href="#action1"> <FontAwesomeIcon color="black" fontSize={26} icon={faHouse} /> </Nav.Link>
                            <Nav.Link href="#action1"> <FontAwesomeIcon color="black" fontSize={26} icon={faStar} /> </Nav.Link>
                            <Nav.Link href="#action1"> <FontAwesomeIcon color="black" fontSize={26} icon={faCartShopping} /> </Nav.Link>
                            <Nav.Link href="#action1"> <FontAwesomeIcon color="black" fontSize={26} icon={faUser} onClick={handleShow} />
                                <Modal
                                    show={show}
                                    onHide={handleClose}
                                    backdrop="static"
                                    keyboard={false}
                                >
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
                            </Nav.Link>


                            <Nav.Link href="#action1"> <FontAwesomeIcon color="black" fontSize={26} icon={faCircleInfo} />  </Nav.Link>

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



