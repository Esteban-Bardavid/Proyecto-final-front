import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import LoginPage from "./pages/Login/LoginPage";
import ProfilePage from "./pages/Profile/ProfilePage";
import RegisterPage from "./pages/Register/RegisterPage";
import ErrorPage from "./pages/404/404";
import AdminProducts from './pages/AdminProducts/AdminProductsPage';
import ProductsMen from './pages/Products/productsMenPage';
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
        <Route path='/profile' element={
          <div>
            <Navbar />
            <div className='mt-5'>
              <ProfilePage />
            </div>
          </div>
        }>
        </Route>
        <Route path='/adminProducts' element={
          <div>
            <Navbar />
            <div className='mt-5'>
              <AdminProducts />
            </div>
          </div>
        }>
        </Route>
        <Route path='/productsMen' element={
          <div>
            {/* <Navbar /> */}
            <div>
              <ProductsMen />
            </div>
          </div>
        }>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
