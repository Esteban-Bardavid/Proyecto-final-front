import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
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
import FavoritesPage from './pages/Favorites/favorites';
import InfoPage from './pages/Info/infoPage' 
import { Navbar } from 'react-bootstrap';
import AdminProducts from './pages/AdminProducts/AdminProductsPage';
import CartProvider from "./components/CartProvider/CartProvider";
import AdminUsers from './pages/AdminUsers/AdminUsersPage';

function App() {


  
  return (
    <CartProvider> 
     <BrowserRouter >
      
      <Routes>
    
        <Route path='/' element={<div><NavBarComponent /> <HomePage /></div>}></Route>
        <Route path='/login' element={<div><LoginPage /></div>}></Route>
        <Route path='/register' element={<div><NavBarComponent /><RegisterPage /></div>}></Route>
        <Route path='/*' element={<div><NavBarComponent /><ErrorPage /></div>}></Route>
        <Route path='/womanpage' element={<div><NavBarComponent /><WomanPage /></div>}></Route>
        <Route path='/manpage' element={<div><NavBarComponent /><ManPage /></div>}></Route>
        <Route path='/adminProducts' element={<div><NavBarComponent /><AdminProducts /></div>}></Route>
        <Route path='/adminUsers' element={<div><NavBarComponent /><AdminUsers /></div>}></Route>
        <Route path='/infopage' element={<div><NavBarComponent /><InfoPage /></div>}></Route>
        <Route path='/cartpage' element={<div><NavBarComponent /><CartPage /></div>}></Route>

      </Routes>
      <Footer />
    </BrowserRouter>
    </CartProvider>
  );
}
export default App;
