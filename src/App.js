import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomePage from "./pages/Home/HomePage";
import LoginPage from "./pages/Login/LoginPage";
import WomanPage from "./pages/Products/WomanPage";
import RegisterPage from "./pages/Register/RegisterPage";
import ErrorPage from "./pages/404/404";

import Footer from "./components/Footer/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter >
     
      <Routes>
        <Route path='/' element={
          <div>
            
            <div className='mt-5'>
              <HomePage />
            </div>
          </div>
        }>
        </Route>
        <Route path='/login' element={
          <div>
            
            <div className='mt-5'>
              <LoginPage />
            </div>
          </div>
        }>
        </Route>
        <Route path='/register' element={
          <div>
            
            <div className='mt-5'>
              <RegisterPage />
            </div>
          </div>
        }>
        </Route>
        <Route path='/*' element={
          <div>
          
            <div className='mt-5'>
              <ErrorPage />
            </div>
          </div>
        }>
        </Route>
        <Route path='/womanpage' element={
          <div>
            
            <div className='mt-5'>
              <WomanPage />
            </div>
          </div>
        }>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;