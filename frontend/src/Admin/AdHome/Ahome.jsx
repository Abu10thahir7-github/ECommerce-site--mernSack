import React from 'react'
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import './adhome.css'
function Ahome() {
  return (
    <div className='admin-home'>
        <div className="top-con">
            <div className="ad-logout-btn">
                <button><LogoutRoundedIcon /> LogOut</button>
            </div>
        </div>
    </div>
  )
}

export default Ahome