import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminPage from "./pages/Admin/AdminPage";
import HomePage from "./pages/Home/HomePage";
import LoginPage from "./pages/Login/LoginPage";
import WomanPage from './pages/Products/WomanPage';
import RegisterPage from "./pages/Register/RegisterPage";
import ErrorPage from "./pages/404/404";
import NavBarComponent from './components/Navbar/Navbar';
import Footer from "./components/Footer/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import FavoritesPage from './pages/Favorites/favorites';
import InfoPage from './pages/Info/info' 
import { Navbar } from 'react-bootstrap';

function App() {
  return (
    <BrowserRouter >
      <NavBarComponent />
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/login' element={<LoginPage />}></Route>
        <Route path='/register' element={<RegisterPage />}></Route>
        <Route path='/*' element={<ErrorPage />}></Route>
        <Route path='/womanpage' element={<WomanPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;