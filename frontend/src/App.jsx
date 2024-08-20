import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import MinCart from './Components/MInAddCart/MinAddCart';
import Carts from './Components/All datas & cart/Carts';
import Footer from './Components/Footer/Footer';
import Signup from './Components/SignUp&Login/Signup';
import Login from './Components/SignUp&Login/Login';
import Adva from './Components/Advatages/Adva';
import Singlecart from './Components/All datas & cart/Singlecart';
import AddCart from './Components/AddCart/AddCart';

const MainContent = () => {
  return (
    <>
      <div className='app'>
        <MinCart />
        <Carts />
        <Adva />
      </div>
      <Singlecart />
      <Footer />
    </>
  );
};

const App = () => {
  const location = useLocation(); // Get the current location

  return (
    <>
      {/* Conditionally render Navbar based on the current route */}
      {location.pathname !== '/AdminDashboard' && location.pathname !== '/signup' && location.pathname !== '/login' && location.pathname !== '/' && <Navbar />}
      <Routes>
        <Route path="/home" element={<MainContent />} />
        <Route path='/' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/Cart' element={<AddCart />} />

      </Routes>
    </>
  );
};

export default App;
