import React from 'react'
import './Adva.css'
import LoopRoundedIcon from '@mui/icons-material/LoopRounded';
import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';
import BookmarkBorderRoundedIcon from '@mui/icons-material/BookmarkBorderRounded';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
function Adva() {
  return (
    <div className='advatage'>
        <div className="free-deli adv-con">
            <LocalShippingOutlinedIcon className='adva-icon' />
            <h5>Free Delivery</h5>
        </div>
        <div className="free-deli adv-con">
            <LoopRoundedIcon className='adva-icon' />
            <h5>60 Days</h5>
            <p>for free return</p>
        </div>
        <div className="free-deli adv-con">
            <PaidOutlinedIcon className='adva-icon' />
            <h5>Payment</h5>
                <p>Secure System</p>
        </div>
        <div className="free-deli adv-con">
            <BookmarkBorderRoundedIcon className='adva-icon' />
            <h5>Only Best</h5>
            <p>Brands</p>
        </div>
    </div>
  )
}

export default Adva