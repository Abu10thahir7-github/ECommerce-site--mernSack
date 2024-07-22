import React from 'react'
import './Nav.css'
import Logo from './logo.png'
import user_img from  './user.png'
import Box from '@mui/joy/Box';
import Chip from '@mui/joy/Chip';
import LocalGroceryStoreRoundedIcon from '@mui/icons-material/LocalGroceryStoreRounded';
import CheckroomIcon from '@mui/icons-material/Checkroom';
import TuneIcon from '@mui/icons-material/Tune';
function Navbar() {


  return (
    <nav>
        <div className="top-nav-con">
           <div className='logo-sell'>

        <div className="logo">
           <img src={Logo} alt="" />
         
            <h2>FlameShop</h2>
          
        </div>
   
           </div>
  
        <div className="nav-right-con">

        <div className="sign-mycard">
    
           <button className='addCart-btn'><LocalGroceryStoreRoundedIcon className='add-icon' /> My cart</button>
        </div>
        <div className="nav-userProfile">
            <img src={user_img} alt="" style={{width:'50px' ,borderRadius:'50px'}}/>
        </div>
        </div>




        </div>
        <div className="next-nav-con">
  
      <div className="items-path">
        <a href="">Offers Items</a>
        <a href="">New Items Arrived</a>
      </div>
      <div className="category">
      <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
    
    
        <Chip slotProps={{ action: { component: 'a', href: '#as-link' } }} >Sports & Kits</Chip>
        <Chip slotProps={{ action: { component: 'a', href: '#as-link' } }}>Clouths </Chip>
        <Chip slotProps={{ action: { component: 'a', href: '#as-link' } }}>Men</Chip>
        <Chip slotProps={{ action: { component: 'a', href: '#as-link' } }}>Womens</Chip>
        <Chip slotProps={{ action: { component: 'a', href: '#as-link' } }}>Kids</Chip>
        <Chip slotProps={{ action: { component: 'a', href: '#as-link' } }}>Smart Phone</Chip>
        <Chip slotProps={{ action: { component: 'a', href: '#as-link' } }}>Pc & Laptops</Chip>
        </Box>
      </div>
        <div className="nav-setting">
      
            <button className='nav-setting-btn'>
         <TuneIcon />

            </button>
        </div>
        </div>
    </nav>

    
  )
}

export default Navbar