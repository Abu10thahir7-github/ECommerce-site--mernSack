import React from 'react'
import  './cate.css'
import FilterListRoundedIcon from '@mui/icons-material/FilterListRounded';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
function AllCategories() {
  return (
    <div className='all-Categories'>
      <div className="all-btn">
        <button className=''><FilterListRoundedIcon /> <h4>All Categories</h4></button>
      </div>
      <div className="cate">
        <button><KeyboardArrowDownRoundedIcon /> <p>Electronic</p></button>
        <div className="electro">

        <button><KeyboardArrowDownRoundedIcon /> <p>Cell Phone & Smartphones</p></button>
           <div className="ele">

        <button> <p> Smartphones</p></button>
        <button> <p>Smartphones Access</p></button>
        <button> <p>Smart Watches</p></button>
           </div>
        </div>
        <button><KeyboardArrowDownRoundedIcon /> <p>Home & Garden </p></button>
        <button><KeyboardArrowDownRoundedIcon /> <p>Computers</p></button>
        <button><KeyboardArrowDownRoundedIcon /> <p>Flowers</p></button>
         <div className="show-more">

          <button>Show More <KeyboardArrowDownRoundedIcon /></button>
         </div>
      </div>
    </div>
  )
}

export default AllCategories