import "./Navbar.css";
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";

function NavBarComponent() {
    const token = localStorage.getItem('token');

    function singOut() {
        localStorage.removeItem('token')
        window.location.href = "/login"
    }

    return (
        <div>
           hola soy el navbar
        </div>
    )
}

export default NavBarComponent;