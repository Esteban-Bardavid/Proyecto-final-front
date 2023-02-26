import { useState, useContext } from "react";
import { CartContext } from "../../components/CartProvider/CartProvider";
import { useCart } from "../../utils/useCart";
import { Modal, Form, Button } from "react-bootstrap";
import axios from "axios";

import './CartPage.css'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {

  faCartShopping,

} from "@fortawesome/free-solid-svg-icons";

export const CartPage = () => {

  const { itemCount } = useContext(CartContext);


  const { cart, deleteItem } = useContext(CartContext);



  const cartTotalSum = cart.reduce((acc, item) => acc + item.precio, 0);
  const cartItemCount = cart.length;
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const token = localStorage.getItem("token");
  const product = JSON.parse(localStorage.getItem("cart")) || [];
  const headers = { "x-auth-token": token }

  async function cartMethod() {
    try {
      for (let index = 0; index < product.length; index++) {
        const response = await axios.put(`http://localhost:4000/api/user/product/${product[index]._id}`, {}, { headers })
        console.log(response)
        window.location.href="/"
        
      }
      
    } catch (error) {
      console.log(error)
     
    }
    
  }


  function guardar() {
    cartMethod()
    handleClose()
}
  return (



    <>
      <div className="container_padre">



        <div className="container_carrito ">
          <div>
            <h1>TU CARRITO</h1>
            <p>TOTAL ({cartItemCount} productos) ${cartTotalSum}</p>
            <p>Los articulos de tu carrito no estan reservados.termnina el proceso de comprar para hacerte con ellos.</p>
          </div>
          <div className="container_promo">

            <p>POR $1099 RECIBI TU PEDIDO AL SIGUIENTE DIA HABIL.</p>
            <p>Aprovecha el envio express y recibi tus compras en 24H.<strong>Aplica para pedidos con pago confirmado hasta las 11:59pm en ciertas localidades de Buenos Aires. *Pedidos con pago confirmado recibidos los viernes, sábados y domingos, serán entregados el siguiente día hábil. **No aplica para productos personalizados</strong></p>
          </div>
          {cartItemCount === 0 ?
            <p className="cartVacio">Tu carrito esta vacio</p> :
            (

              <div className="card_carrito">
                {cart.map((item) => {
                  return (
                    <div key={item._id} class="producto_carrito">
                      <div className="imagen_producto">
                        <img src={item.imgUrl} alt='' />
                      </div>
                      <div className="nombre_producto">
                        <p>{item.producto}</p>
                        <h6>Talle: 38</h6>
                        <h6>Cantidad:

                        </h6>
                        <select>

                          <option>
                            1
                          </option>
                        </select>

                      </div>
                      <div className="precio_producto">
                        <p>${item.precio}</p>
                        <button onClick={() => deleteItem(item._id)}>🗑</button>
                      </div>
                    </div>
                  );
                })}

              </div>

            )}







        </div>

        <div className="container_pedido">
          <div className="container_resumen">
            <h4>RESUMEN DEL PEDIDO:</h4>
            <p>
              {cartItemCount} productos
              <span>
                ${cartTotalSum}
              </span>
            </p>
            <p className="linea">Entrega:
              <span>
                GRATIS
              </span>
            </p>
            <p className="linea">
              Total (IVA incluido)
              <span>
                ${cartTotalSum}
              </span>
            </p>

          </div>
          <div className="container_pagar" >
            <button onClick={handleShow}>Ir a pagar </button>
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />

                  </Form.Group>

                </Form>


              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button variant="primary" onClick={guardar}>
                  Save Changes
                </Button>
              </Modal.Footer>
            </Modal>











          </div>
        </div>
      </div>
    </>
  );
};

export default CartPage;