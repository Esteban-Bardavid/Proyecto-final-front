import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminPage from "./pages/Admin/AdminPage";
import HomePage from "./pages/Home/HomePage";
import LoginPage from "./pages/Login/LoginPage";
import WomanPage from "./pages/Products/WomanPage";
import CartContent from './components/CartContent/CartContent';
import RegisterPage from "./pages/Register/RegisterPage";
import ErrorPage from "./pages/404/404";
import Navbar from "./components/Navbar/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter >

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

      </Routes>
    </BrowserRouter>
  );
}
export default App;