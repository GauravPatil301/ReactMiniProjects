import React, { useState } from 'react'

export default function Main() {
    const [taskname , settaskname] = useState('')
    const [tasklist , settasklist] = useState([])
    function addTask() {
        settasklist([...tasklist,taskname])
        settaskname("")
    }
    const tasklistcontent = tasklist.map((task,index) => {
        return(<div key={index}>
            <p>{task}</p>
            <i className="fa-solid fa-trash-can" onClick={() => deleteTask(index)}></i>
        </div>)
    })

    function deleteTask(index) {
        let tempArray = [...tasklist]
        tempArray.splice(index,1)
        settasklist(tempArray)
    }
  return (
    <div>
        <div className="row justify-content-center">
            <div className="col-md-5 shadow-lg p-3 mb-5 bg-white rounded">
                <h1>React TODO List</h1>
                <input type="text" placeholder='Enter Task' className='form-control' value={taskname} onChange={(e)=>{settaskname(e.target.value)}}/>
                <button className='btn btn-success' onClick={addTask}>ADD</button>
                <br/>
                {tasklistcontent}
            </div>
        </div>
    </div>
  )
}
