import React, { useState } from 'react'

const Navbar = () => {
  const[navstatus,setnavstatus] = useState(0)
  const[divwidth,setdivwidth] = useState('0px')
  function opennav() {
    if (navstatus == 0) {
      setdivwidth('100%');
      setnavstatus(1)
    }else{
      setdivwidth('0%');
      setnavstatus(0)
    }
  }
  return (
    <div>
        <h1>Navbar Component</h1>
        <div className='main-div' style={{width:divwidth}}>
            <button onClick={opennav}><i class="fa-solid fa-bars"></i></button>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Services</li>
                <li>Contact Us</li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar