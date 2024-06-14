import React from 'react'
import './Nav.css'
import Logo from './logo.png'
import user_img from  './user.png'
import LocalGroceryStoreRoundedIcon from '@mui/icons-material/LocalGroceryStoreRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import CheckroomIcon from '@mui/icons-material/Checkroom';
import TuneIcon from '@mui/icons-material/Tune';
function Navbar() {


  const navSampledata = ['Clothing & Shoes','Entertaiment' , 'Music', 'Sports' , 'Pets', 'Kitchen','Travel','Vintage']
  return (
    <nav>
        <div className="top-nav-con">
           <div className='logo-sell'>

        <div className="logo">
           <img src={Logo} alt="" />
         
            <h2>FlameShop</h2>
          
        </div>
        <div className="nav-sell-action">
            <a href="#">Sell on FlameShop</a>
        </div>
           </div>
        <div className="nav-search">
            <input type="text" placeholder='Search'/>
            <button>

            <SearchRoundedIcon />
            </button>
        </div>
        <div className="nav-right-con">

        <div className="sign-mycard">
           <button className='sign-btn'>Sign in</button>
           <button className='addCart-btn'><LocalGroceryStoreRoundedIcon className='add-icon' /> My cart</button>
        </div>
        <div className="nav-userProfile">
            <img src={user_img} alt="" style={{width:'50px' ,borderRadius:'50px'}}/>
        </div>
        </div>




        </div>
        <div className="next-nav-con">
          <div className="nav-datas">
            
       { navSampledata.map((data)=> 

<div>
            <span><CheckroomIcon className='datas-icon' /></span>
            <p>{data}</p>
            </div>
      )}
      </div>
      <div className="items-path">
        <a href="">Offers Items</a>
        <a href="">New Items Arrived</a>
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