import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import './App.css';

import Navbar from './Components/Navbar/Navbar';
import AllCategories from './Components/All Categories/AllCategories';
import Carts from './Components/All datas & cart/Carts';
import Footer from './Components/Footer/Footer';
import Adva from './Components/Advatages/Adva';
import Singlecart from './Components/All datas & cart/Singlecart';
import Offers from './Components/All datas & cart/Offers';
import AdminHome from './Admin/AdminHome/Admin';

const MainContent = () => {
  return (
    <>
      <div className='app'>
        <AllCategories />
        <Carts />
        <Adva />
      </div>
      <Singlecart />
      <Offers />
<Footer />
    </>
  );
};

const App = () => {
  const location = useLocation();

  return (
    <>
      {location.pathname !== '/AdminDashboard' && <Navbar />}
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/AdminDashboard" element={<AdminHome />} />
      </Routes>
    </>
  );
};

export default App;
