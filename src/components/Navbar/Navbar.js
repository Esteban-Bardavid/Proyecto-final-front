import "./Navbar.css";
import { Container, Nav, Navbar, Button, NavDropdown, Form } from 'react-bootstrap';
import { Link } from "react-router-dom";




function NavBarComponent() {
    const token = localStorage.getItem('token');

    function singOut() {
        localStorage.removeItem('token')
        window.location.href = "/login"
    }

    return (
        <div>
            <div className=" d-flex justify-content-center mb-0">
                <h2>3 <small>CUOTAS SIN INTERES </small><strong>-ENVIOS GRATIS</strong> <small>DESDE $20.000</small></h2>
            </div>

            <div className="navbar-container">
                <Navbar  expand="lg">
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
                                <Nav.Link href="#action1">HomeIcons</Nav.Link>
                                <Nav.Link href="#action2">Destacados</Nav.Link>
                                <Nav.Link href="#action3">CarritoIcons</Nav.Link>
                                <Nav.Link href="#action4">Contacto</Nav.Link>
                                <Nav.Link href="#action5">Perfil</Nav.Link>
                                <Nav.Link href="#action6">Ayuda</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        </div>
    )
}

export default NavBarComponent;



