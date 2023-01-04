import React from 'react';
import { Link } from 'react-router-dom';
import "./AdminHome.css"

const AdminHome = () => {

    const handleLogout=e=>{
        e.preventDefault()
        localStorage.removeItem("user")
        window.location.reload()
    }

  const user=localStorage.getItem("user")
  if(!user){
    window.location.replace("/adminlogin")
  }



    return (
        <div>
            <div className='admin-nav container'>
                <span><h3>Control Panel</h3></span>
                <span><Link onClick={handleLogout} className='btn btn-danger'>LogOut</Link></span>
            </div>

        </div>
    );
};

export default AdminHome;