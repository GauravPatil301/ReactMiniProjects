import React from 'react'
import { useDispatch } from 'react-redux'

const Comp1 = () => {
  const dispatch = useDispatch();
  const add = () =>{
    dispatch({
      type:'increment'
    })
  }
  const addByFive = () =>{
    dispatch({
      type:'incrementByValue',
      payload:5
    })
  }
  return (
    <div style={{backgroundColor:'yellow'}}>
        <h1>Component 1</h1>
        <button onClick={add}>Add</button>
        <button onClick={addByFive}>ADD by Value</button>
    </div>
  )
}

export default Comp1