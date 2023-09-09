import React from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'

const SideNavBar = () => {
  return (
    <div style={{width:'20%',height:'100vh',backgroundColor:'blue',padding:'1%'}}>
        <Link style={{display:'block',color:'white'}} to='/dashboard'>Home</Link>
        <Link style={{display:'block',color:'white'}} to='/dashboard/student'>Student</Link>
        <Link style={{display:'block',color:'white'}} to='/dashboard/faculty'>Faculty</Link>
        <Link style={{display:'block',color:'white'}} to='/login'>Logout</Link>
      </div>
  )
}

export default SideNavBar