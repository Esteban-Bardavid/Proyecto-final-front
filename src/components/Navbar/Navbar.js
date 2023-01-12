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
            <div className=" d-flex justify-content-center">
                <h2>3 <small>CUOTAS SIN INTERES </small><strong>-ENVIOS GRATIS</strong> <small>DESDE $20.000</small></h2>
            </div>
            <Navbar className="navContainer" expand="lg">
                <Container fluid>
                    <Navbar.Brand href="#">ROLLING SHOES</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">

                        <Form className="d-flex ">
                            <Form.Control
                                type="search"
                                placeholder="Adidas, Nike"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-success">Buscar</Button>
                        </Form>

                        <Nav
                        >
                            <Nav.Link href="#action1">Home</Nav.Link>
                            <Nav.Link href="#action2">carrito</Nav.Link>
                            <Nav.Link href="#action2">perfil</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavBarComponent;