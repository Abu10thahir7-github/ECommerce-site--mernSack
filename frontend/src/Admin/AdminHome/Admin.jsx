import React from 'react'
import Sidebar from '../AdminNavbar/SideNav'
import Ahome from '../AdHome/Ahome'
import './Admin.css'
import AddProduct from '../AddProduct/AddProduct'
function AdminHome() {
  return (
    <div className='admin-app'>
        <Sidebar />
        <div className="admin-con">

        <Ahome />
        <AddProduct />
        </div>
    </div>
  )
}

export default AdminHome