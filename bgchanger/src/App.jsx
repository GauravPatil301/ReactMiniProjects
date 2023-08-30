import { useState } from "react"


function App() {
  const colorCode = [{ name:"Red", colCode : "Red"}, 
                  { name:"Green", colCode : "Green"},
                  { name:"Blue", colCode : "Blue"},
                  { name:"Olive", colCode : "Olive"},
                  { name:"Gray", colCode : "Gray"},
                  { name:"Yellow", colCode : "Yellow"},
                  { name:"Pink", colCode : "Pink"},
                  { name:"Purple", colCode : "Purple"},
                  { name:"Lavender", colCode : "Lavender"},
                  { name:"White", colCode : "White"},
                  { name:"Black", colCode : "Black"},]
  const [color, setColor] = useState('olive')
  return (
    <>
      <div className="w-full h-screen duration-200" style={{backgroundColor:color}}> 
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
        {
            colorCode.map((col,id)=>
              <button key={id} onClick={()=>setColor(col.colCode)} className="outline-none px-4 py-1 rounded-full text-white shadow-lg shadow-black-500/50"
              style={{backgroundColor:col.name}}>{col.name}</button>
            )
          }
          {/* <button onClick={()=>setColor("Red")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor:"Red"}}>Red</button>
          <button onClick={()=>setColor("Green")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor:"Green"}}>Green</button>
          <button onClick={()=>setColor("Blue")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor:"Blue"}}>Blue</button> */}
        </div>
      </div>
      </div>
    </>
  )
}

export default App
