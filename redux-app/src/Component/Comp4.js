import React from 'react'
import { useSelector } from 'react-redux'

const Comp4 = () => {
  const value = useSelector(state => state.demoReducer.x)
  return (
    <div style={{backgroundColor:'pink',width:'50%'}}>
        <h1>Component 4</h1>
        <p>{value}</p>
    </div>
  )
}

export default Comp4