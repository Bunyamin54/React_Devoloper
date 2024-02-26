import React from 'react';
import Footer from '../components/footer/Footer';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Navbar from '../components/navbar/Navbar';
import Home from '../pages/home/Home';
import Login from '../pages/login/Login';
import Register from '../pages/register/Register';
import About from '../pages/about/About';
import Detail from '../pages/detail/Detail';
const AppRouter = () => {
  return (
    <BrowserRouter>
      AppRouter
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/" element={<Home />} />

      </Routes>
      <Footer />

    </BrowserRouter>
  );
};

export default AppRouter;
