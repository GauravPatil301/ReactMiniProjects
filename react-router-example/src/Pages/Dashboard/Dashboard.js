import React from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import SideNavBar from '../SideNavBar'

const Dashboard = () => {
  const navigate = useNavigate()
  const logout = ()=>{
    navigate('/login')
  }
  return (
    <div style={{ width: "100%", height: "100vh", backgroundColor: "blue",display:'flex',flexDirection:'row' }}>
      <SideNavBar/>
      <div style={{width:'80%',height:'100vh',backgroundColor:'white',padding:'1%'}}>
        <h1 style={{width:'100%',padding:'10px',backgroundColor:'grey',}}>Dashboard</h1>
        <div style={{width:'100%',height:'100vh',border:'1px solid black'}}>
          <Outlet/>
        </div>
      </div>
    </div>
  )
}

export default Dashboard