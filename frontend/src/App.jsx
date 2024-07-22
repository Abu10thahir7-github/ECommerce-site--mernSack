import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import './App.css';

import Navbar from './Components/Navbar/Navbar';
import AllCategories from './Components/MInAddCart/MinAddCart';
import Carts from './Components/All datas & cart/Carts';
import Footer from './Components/Footer/Footer';
import Adva from './Components/Advatages/Adva';
import Singlecart from './Components/All datas & cart/Singlecart';



const MainContent = () => {
  return (
    <>
      <div className='app'>
        <AllCategories />
        <Carts />
        <Adva />
      </div>
      <Singlecart />

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
     
      </Routes>
    </>
  );
};

export default App;
