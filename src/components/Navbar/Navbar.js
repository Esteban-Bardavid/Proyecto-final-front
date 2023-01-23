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
        <div className='nav-container'>
           <nav className='navbar'>
            <h1 className='navbar-logo'>shop.</h1>
            <h2 className='seeCarrito'>🛒</h2>
            </nav>

        </div>
    )
}

export default NavBarComponent;