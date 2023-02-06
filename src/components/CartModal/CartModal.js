import { useContext } from "react";
import { CartContext } from "../CartProvider/CartProvider";

const CartModal = () => {
  const { cart, deleteItem } = useContext(CartContext);

  const cartTotalSum = cart.reduce((acc, item) => acc + item.precio, 0);
  const cartItemCount = cart.length;

  return (
    <>
      <p>Total Precio: {cartTotalSum}</p>
      <p>Total Items: {cartItemCount}</p>
      <hr />
      {cart.map((item) => {
        return (
          <div key={item._id}>
            <p>{item.producto}</p>
            <p>{item.precio}</p>
            <p onClick={() => deleteItem(item._id)}>Borrar</p>
            <hr />
          </div>
        );
      })}
    </>
  );
};

export default CartModal;