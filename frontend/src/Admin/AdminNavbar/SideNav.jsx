// src/Sidebar.js
import React, { useState } from 'react';
import GridViewRoundedIcon from '@mui/icons-material/GridViewRounded';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import PeopleRoundedIcon from '@mui/icons-material/PeopleRounded';
import PaymentRoundedIcon from '@mui/icons-material/PaymentRounded';
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';
import './sidenav.css';
import ad_img from'./user.png'
const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`sidebar ${isOpen ? ' ' : 'open'}`}>
      
      <nav>
        <ul>
          <li><GridViewRoundedIcon /><span>Dashboard</span></li>
          <li><ShoppingCartRoundedIcon /><span>Product</span></li>
          <li><PeopleRoundedIcon /><span>Customer</span></li>
          <li><PaymentRoundedIcon /><span>Transition</span></li>
        </ul>
      </nav>
      <div className="admin-profile">
        <img src={ad_img} alt="" />
        <h4>Abu thahir</h4>
      </div>
    </div>
  );
};

export default Sidebar;
