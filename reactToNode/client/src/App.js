import {useState}from 'react'
import axios from 'axios'
function App() {
  const [data, setdata] = useState()
  const [username, setusername] = useState('')
  const [password, setpassword] = useState('')
  function getDataFromNode() {
    axios.get('/players')
    .then(res => {console.log(res.data)
       setdata(res.data)})
    .catch(err => console.log(err))
  }

  function login(e) {
    e.preventDefault()
    let user = {
      username:username,
      password:password
    }
    console.log(user)
    axios.post("/login",user)
    .then(
      res => {alert(res.data)}
    )
    .catch(err => console.log(err))
  }
  return (
    <div className="App">
      <h1>Hello Me.</h1>
      <form action="">
        <input type="text" placeholder='username' value={username} onChange={(e)=>{setusername(e.target.value)}}/>
        <br />
        <input type="password" placeholder='password' value={password} onChange={(e)=>setpassword(e.target.value)}/>
        <br />
        <button onClick={login}>Login</button>
      </form>
      <p>{data}</p>
      <button onClick={getDataFromNode}>Submit </button>
    </div>
  );
}

export default App;
