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
import Swal from 'sweetalert2'
import axios from 'axios'





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


  const [form, setform] = useState();

  function onChange(e) {
    const { name, value } = e.target;
    const response = { ...form, [name]: value }
    setform(response)

    //setvalidate(false)
  }

  const [user, setUser] = useState([])

  useEffect(() => {
    GetUsers()
  }, []);


  async function GetUsers() {

    const response = await axios.get(`http://localhost:4000/api/user`)
    
    setUser(response.data)
  }



  async function LoginPost() {

    console.log(form.email)
    try {
      let url = `http://localhost:4000/api/auth`
      const { data } = await axios.post(url, form)
      console.log(data);

      localStorage.setItem('token', data)


      function goAdminProducts() {
        GetUsers()
        console.log(user)
        let response = user.find(item => item.email == form.email)
        console.log(response)
        console.log(response.admin)
        if (response.admin == "true") {
          window.location.href = '/adminProducts'
        } else if (response.admin == "false") {
          window.location.href = '/'
        }
      }

      Swal.fire({
        title: "Inicio de sesion exitoso",
        icon: "success",
        button: "Ir a la Homepage",
      }).then(resultado => {
        if (resultado.value) {
          goAdminProducts();
        } else {
          //nada
        }
      })
    } catch (error) {
      console.error('error')
      Swal.fire({
        title: "Inicio de sesion defectuoso",
        icon: "error",
        text: "chequea que ambos campos esten correctos y completos",
        button: "Aceptar",
      }).then(resultado => {
        if (resultado.value) {
          window.location.reload();
        } else {
          //nada
        }
      })
      //setvalidate(true)
      //npm console.log(validate)

    }
  }


  // //Register:
  const [showReg, setShowReg] = useState(false);

  const handleCloseReg = () => setShowReg(false);
  const handleShowReg = () => setShowReg(true);

  //const [form, setform] = useState({});

  let url1 = 'http://localhost:4000/api'

  function OnChange(e) {
    const { name, value } = e.target;
    const response = { ...form, [name]: value, admin: false };
    setform(response);
  }

  async function Registrar() {
    try {
      const response = await axios.post(`${url1}/user`, form);
      console.log(response);
      Swal.fire({
        title: "Se registro con exito !!!",
        icon: "success",
        button: "Ir a la Homepage",
      }).then(resultado => {
        if (resultado.value) { 
          window.location.href = '/';
        } else {
          //nada
        }
      })
    } catch (error) {
      console.error(error);
    }
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
          <Navbar.Brand className="logo-navbar" href="/"><img className="logo-img" src={logo} alt="LOGO" srcset="" /></Navbar.Brand>
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
              
              <Link className="links-icons m-2 p-1" id="info" to="/"> <FontAwesomeIcon color="black" fontSize={26} icon={faUser} onClick={handleShow} />

                {/* Modal SINGOUT */}
                <Modal
                  show={show}
                  onHide={handleClose}
                  backdrop="static"
                  keyboard={false}
                >
                  <Modal.Header closeButton onClick={handleClose}>
                    <Modal.Title className="FirstButton">Cerrar sesion</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <h2>Estas seguro de que deseas cerrar sesion?</h2>
                    
                  </Modal.Body>
                  <Modal.Footer>
                    <Button id="CloseLoginButton" onClick={handleClose}>
                      Cancelar
                    </Button>
                    <Button id="ReadyLoginButton" onClick={singOut}>Cerrar sesion
                    </Button>
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


      {/* MODAL REGISTER */}
      <div className="d-flex justify-content-end me-5">
        <Button variant="dark" onClick={handleShowReg}>
          Registrate Aqui !!!
        </Button>
      </div>

      <Modal show={showReg} onHide={handleCloseReg}>
        <Modal.Header closeButton>
          <Modal.Title>Register:</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="w-100 d-flex justify-content-center">
            <div className="w-100 px-2">
              <Form>

                <Form.Group className="mb-1">
                  <Form.Label>Nombre</Form.Label>
                  <Form.Control
                    name='name'
                    type='text'
                    onChange={OnChange}
                    placeholder= "Juan"
                  />
                </Form.Group>

                <Form.Group className="mb-1">
                  <Form.Label>Apellido</Form.Label>
                  <Form.Control
                    name='lastname'
                    type='text'
                    onChange={OnChange}
                    placeholder= "Perez"
                  />
                </Form.Group>

                <Form.Group className="mb-1">
                  <Form.Label>Edad</Form.Label>
                  <Form.Control
                    name='age'
                    type='number'
                    onChange={OnChange}
                    placeholder= "25"
                  />
                </Form.Group>

                <Form.Group className="mb-1">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    name='email'
                    type='email'
                    onChange={OnChange}
                    placeholder= "juan@gmail.com"
                  />
                </Form.Group>

                <Form.Group className="mb-1">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    name='password'
                    type='password'
                    onChange={OnChange}
                    placeholder= "*************"
                  />
                </Form.Group>

              </Form>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={Registrar} className="w-100">
            Registrar
          </Button>
        </Modal.Footer>
      </Modal>





    </div>
  )
}

export default NavBarComponent;