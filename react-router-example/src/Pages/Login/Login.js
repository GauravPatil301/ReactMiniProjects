import React from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate()
  const loginHandler = ()=>{
    navigate('/dashboard')
  }
  return (
    <div style={{ width: "100%", height: "100vh", backgroundColor: "Red" }}>
      <h1>Login</h1>
      <button onClick={loginHandler}>Login</button>
      <button onClick={()=> navigate('/signup')}>Create an account</button>
    </div>
  )
}

export default Login