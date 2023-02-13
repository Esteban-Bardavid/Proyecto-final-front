import "./Navbar.css";
import {
    Container,
    Nav,
    Navbar,
    Button,
    NavDropdown,
    Form,
    Modal,
    Offcanvas,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import React, { useContext, useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faHouse,
    faStar,
    faCartShopping,
    faUser,
    faCircleInfo,
    faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { CartContext } from "../CartProvider/CartProvider";
import { CartModal } from "../CartModal/CartModal";
import { useCart } from "../../utils/useCart";
import SubNavbar from "../SubNav/subNav"
import Buscador from "../Buscador/Buscador"
import favoritos from "../../pages/Favorites/favorites"
import logo from "../../img/rollinglogo.png"
import UseAdminProducts from '../../utils/useAdminProducts';
import "../CartModal/CartModal.css"
import cartpage from "../../pages/CartPage/CartPage"





function NavBarComponent() {





    const { cart, deleteItem } = useContext(CartContext);



    const cartTotalSum = cart.reduce((acc, item) => acc + item.precio, 0);
    const cartItemCount = cart.length;




    const { url } = UseAdminProducts();
    const token = localStorage.getItem("token");
    const [smShow, setSmShow] = useState(false);
    const [lgShow, setLgShow] = useState(false);
    const [show, setShow] = useState(false);

    const { CartOpen, setCartOpen } = useCart();
    const { itemCount } = useContext(CartContext);
    const [active, setActive] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    function singOut() {
        localStorage.removeItem("token");
        window.location.href = "/login";
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
                            <Link className="links-icons m-2 p-1" id="carrito" >
                                {" "}
                                <span className="itemcount">{itemCount}</span>

                                <FontAwesomeIcon color="black" fontSize={26} icon={faCartShopping} onClick={() => setCartOpen(!CartOpen
                                )}
                                    onMouseLeave={() => setCartOpen(CartOpen
                                    )} />

                                {CartOpen && (
                                    <div className="cart">

                                        <h5>Mi carrito [{cartItemCount}]</h5>
                                        {cartItemCount === 0 ?
                                            <p className="cartVacio">Tu carrito esta vacio</p> :
                                            (

                                                <div className="cart__container">
                                                    {cart.map((item) => {
                                                        return (
                                                            <div key={item._id} class="cart__producto">
                                                                <img src={item.imgUrl} alt='' />
                                                                <div className="col-1">
                                                                    <p>{item.producto}</p>


                                                                </div>
                                                                <div className="col-2">
                                                                    <p>${item.precio}</p>
                                                                    <button onClick={() => deleteItem(item._id)}>Borrar</button>

                                                                </div>
                                                            </div>
                                                        );
                                                    })}
                                                    <h5 className="total">Subtotal: ${cartTotalSum}</h5>
                                                    <Link className="comprar" to="/cartpage">Comprar</Link>
                                                </div>

                                            )}







                                    </div>)}




                            </Link>
                            {/* <CartModal/> */}
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