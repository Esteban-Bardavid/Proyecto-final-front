import "./Navbar.css";
import RegisterModal from "../Register/RegisterModal";
import React, { useState } from "react";
import { Container, Navbar, Button} from "react-bootstrap";
import FloatingLabel from "react-bootstrap/FloatingLabel";

function NavBarComponent() {
  const token = localStorage.getItem("token");

  function singOut() {
    localStorage.removeItem("token");
    window.location.href = "/login";
  }
  //useState Navbar
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [form, setForm] = useState([]);

 
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">AdminPage</Navbar.Brand>
          <Button variant="outline-success" onClick={handleShow}>
            Login{" "}
          </Button>
        </Container>
      </Navbar>
      <RegisterModal handleClose ={handleClose} show={show}/> 

    </div>
  );
}

export default NavBarComponent;
