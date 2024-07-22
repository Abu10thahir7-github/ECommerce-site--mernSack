import React from 'react'
import  './cate.css'
import img from './img.jpg'
import FilterListRoundedIcon from '@mui/icons-material/FilterListRounded';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
function AllCategories() {
  return (
    <div className='my-min-Cart'>
      <div className="min-cart-title">
        <h3>Your Cart</h3>
        
      </div>
      <div className="min-cart-items">
        <div className="cart-items">
          <img src={img} alt="" />
          <div className="items-con">
            <p>Iphone 15 max</p>
            <p>$ 150000</p>
          </div>
        </div>
      </div>
        <div className="cart-checkOut">
          <button>Check Out</button>
        </div>
    </div>
  )
}

export default AllCategories