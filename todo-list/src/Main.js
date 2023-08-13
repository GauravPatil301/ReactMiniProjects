import React, { useState } from 'react'

export default function Main() {
    const [taskname , settaskname] = useState('')
    const [tasklist , settasklist] = useState([])
    function addTask() {
        settasklist([...tasklist,taskname])
    }
    const tasklistcontent = tasklist.map((task) => {
        return(<div>
            <p>{task}</p>
            <button>delete</button>
        </div>)
    })
  return (
    <div>
        <div className="row justify-content-center">
            <div className="col-md-5 shadow-lg p-3 mb-5 bg-white rounded">
                <h1>React TODO List</h1>
                <input type="text" placeholder='Enter Task' className='form-control' value={taskname} onChange={(e)=>{settaskname(e.taskname.value)}}/>
                <button className='btn btn-success' onClick={addTask}>ADD</button>
            </div>
        </div>
    </div>
  )
}
