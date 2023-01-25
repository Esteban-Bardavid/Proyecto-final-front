import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import LoginPage from "./pages/Login/LoginPage";
import RegisterPage from "./pages/Register/RegisterPage";
import ErrorPage from "./pages/404/404";
import Navbar from "./components/Navbar/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import FavoritesPage from './pages/Favorites/favorites';
import InfoPage from './pages/Info/info' 

function App() {
  return (
    <BrowserRouter >
    <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/login' element={<LoginPage />}></Route>
        <Route path='/register' element={<RegisterPage />}></Route>
        <Route path='/favorites' element={<FavoritesPage />}> </Route>
        <Route path='/*' element={<ErrorPage />}> </Route>
        <Route path='/Info' element={<InfoPage />}> </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;