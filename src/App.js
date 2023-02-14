import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
/*import AdminPage from "./pages/Admin/AdminPage";*/
import HomePage from "./pages/Home/HomePage";
import LoginPage from "./pages/Login/LoginPage";
import WomanPage from './pages/Products/WomanPage';
import ManPage from './pages/Products/ManPage';
import RegisterPage from "./pages/Register/RegisterPage";
import ErrorPage from "./pages/404/404";
import NavBarComponent from './components/Navbar/Navbar';
import CartPage from "./pages/CartPage/CartPage";
import Footer from "./components/Footer/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import ResetPassword from './pages/ResetPassword/ResetPassword';
import InfoPage from './pages/Info/infoPage' 
import AdminProducts from './pages/AdminProducts/AdminProductsPage';
import CartProvider from "./components/CartProvider/CartProvider";


function App() {


  
  return (
    <CartProvider> 
     <BrowserRouter >
      <NavBarComponent />
      <Routes>
        <Route path='/ResetPassword' element={<ResetPassword />}></Route>
        <Route path='/profile' element={<ProfilePage />}></Route>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/login' element={<LoginPage />}></Route>
        <Route path='/register' element={<RegisterPage />}></Route>
        <Route path='/*' element={<ErrorPage />}></Route>
        <Route path='/womanpage' element={<WomanPage />}></Route>
        <Route path='/manpage' element={<ManPage />}></Route>
        <Route path='/adminProducts' element={<AdminProducts />}></Route>
        <Route path='/infopage' element={<InfoPage />}></Route>
        <Route path='/cartpage' element={<CartPage />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
    </CartProvider>
  );
}
export default App;
