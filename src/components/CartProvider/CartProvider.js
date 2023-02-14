import { createContext } from "react";
import { useLocalStorage } from "../../utils/useLocalStorage";
import axios from 'axios';

export const CartContext = createContext();

const CartProvider = ({ children }) => {

  var url = 'http://localhost:4000/api'
  const [cart, setCart] = useLocalStorage("cart", []);
 
  async function AddProductCart() {
    try {
      const addItem = (newItem) => {
        setCart((prev) => {
          return [...prev, newItem];
        });
      };
        const response = await axios.post(`${url}/cart`, cart)
        console.log(response);
        alert('El producto fue ingresado exitosamente');
    } catch (error) {
        console.error(error);
    }
    window.location.reload();
}

  

  const deleteItem = (id) => {
    const newCart = cart.filter((item) => item._id !== id);
    setCart(newCart);
  };

  const cartTotalSum = cart.reduce((acc, item) => acc + item.precio, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        AddProductCart,
        deleteItem,
        itemCount: cart.length,
        cartTotalSum,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;