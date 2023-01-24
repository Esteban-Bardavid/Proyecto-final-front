import "./Navbar.css";
import { Container, Nav, Navbar, Button, NavDropdown, Form, Modal, Offcanvas } from 'react-bootstrap';
import { Link } from "react-router-dom";
import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faStar, faCartShopping, faUser, faCircleInfo,faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'


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



