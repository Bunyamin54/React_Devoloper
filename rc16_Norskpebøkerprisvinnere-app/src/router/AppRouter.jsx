import React from 'react';
import Footer from '../components/footer/Footer';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Navbar from '../components/navbar/Navbar';
import Home from '../pages/home/Home';
import Login from '../pages/login/Login';
import Register from '../pages/register/Register';
import About from '../pages/about/About';
import Detail from '../pages/detail/Detail';
import PrivateRouter from './PrivateRouter';
const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* <Route path="/about" element={<PrivateRouter />}>
     
        <Route path="/about" element={<About />} />


        </Route>
     
        <Route path="/detail/:id" element={<PrivateRouter/>}>

        <Route path="/detail/:id" element={<Detail />} />

        </Route> */}

        <Route element={<PrivateRouter />}>

          <Route path="/about" element={<About />} />
          <Route path="/deatil/:id" element={<Detail />} />

        </Route>

      </Routes>
      <Footer />

    </BrowserRouter>
  );
};

export default AppRouter;
