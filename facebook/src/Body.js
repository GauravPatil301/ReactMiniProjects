import React, { useState } from 'react'
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'

const Body = () => {
    const [name,setname] = useState('')
    const [username,setusername] = useState('')
    const [password,setpassword] = useState('')

    function registeruser(event) {
        event.preventDefault()
        let users = JSON.parse(localStorage.getItem('users') || "[]")
        let newuser = {
            name: name,
            username: username,
            password: password  
        }

        users.push(newuser)
        localStorage.setItem('users',JSON.stringify(users))
        alert('Registration successful')
        setname('')
        setusername('')
        setpassword('')
    }

  return (
    <div className='row justify-content-center'>
        <div className='col-md-6'> 
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1Fc_szFcrMyzcNNeHVEWF-UaykDvlSo4gF-O16Zvdta6mybn_6WkGrlbBvHdeZ4MpUEI&usqp=CAU' width={600} height={600}/>
        </div>
        <div className='col-md-4'>
            <h1>Register</h1>
            <form onSubmit={registeruser}>
                <input type="text" placeholder='name' className='form-control' value={name} onChange={(e)=>{setname(e.target.value)}}/>
                <input type="text" placeholder='username' className='form-control' value={username} onChange={(e)=>{setusername(e.target.value)}}/>
                <input type="text" placeholder='password' className='form-control' value={password} onChange={(e)=>{setpassword(e.target.value)}}/>
                <input type="submit" className='btn btn-primary' value="SIGN UP"/>

            </form>
        </div>
    </div>
  )
}

export default Body