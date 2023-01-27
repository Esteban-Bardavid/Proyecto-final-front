import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminPage from "./pages/Admin/AdminPage";
import HomePage from "./pages/Home/HomePage";
import LoginPage from "./pages/Login/LoginPage";
<<<<<<< HEAD
import WomanPage from "./pages/Products/WomanPage";
import CartContent from './components/CartContent/CartContent';
import RegisterPage from "./pages/Register/RegisterPage";
import ErrorPage from "./pages/404/404";
import Navbar from "./components/Navbar/Navbar";
=======
import WomanPage from './pages/Products/WomanPage';
import RegisterPage from "./pages/Register/RegisterPage";
import ErrorPage from "./pages/404/404";
import NavBarComponent from './components/Navbar/Navbar';

import Footer from "./components/Footer/Footer";
>>>>>>> 4255f9ce55d7996e776dd52f8f32bebc222d439f
import 'bootstrap/dist/css/bootstrap.min.css';
import FavoritesPage from './pages/Favorites/favorites';
import InfoPage from './pages/Info/info' 
import { Navbar } from 'react-bootstrap';

function App() {
  return (
    <BrowserRouter >
<<<<<<< HEAD

      <Routes>
        <Route path='/' element={
          <div>
            <Navbar />
            <div className='mt-5'>
              <HomePage />
            </div>
          </div>
        }>
        </Route>
        <Route path='/login' element={
          <div>
            <Navbar />
            <div className='mt-5'>
              <LoginPage />
            </div>
          </div>
        }>
        </Route>
      
        <Route path='/register' element={
          <div>
            <Navbar />
            <div className='mt-5'>
              <RegisterPage />
            </div>
          </div>
        }>
        </Route>
        <Route path='/*' element={
          <div>
            <Navbar />
            <div className='mt-5'>
              <ErrorPage />
            </div>
          </div>
        }>
        </Route>
        <Route path='/womanpage' element={
          <div>
            <Navbar />
            <div className='mt-5'>
              <WomanPage />
            </div>
          </div>
        }>
        </Route>
        <Route path="/CartPage" element={
          <div>
            <CartContent />
          </div>
        
        }>

        </Route>

=======
      <NavBarComponent />
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/login' element={<LoginPage />}></Route>
        <Route path='/register' element={<RegisterPage />}></Route>
        <Route path='/*' element={<ErrorPage />}></Route>
        <Route path='/womanpage' element={<WomanPage />}></Route>
>>>>>>> 4255f9ce55d7996e776dd52f8f32bebc222d439f
      </Routes>
    </BrowserRouter>
  );
}
export default App;