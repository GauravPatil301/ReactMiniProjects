import React, { useState } from "react";
import bootstrap from "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const navigate = useNavigate();

    function logout() {
        localStorage.removeItem("loggedin")
        navigate('/')
    }

  function login() {
    let users = JSON.parse(localStorage.getItem("users"));
    let i = 0;
    for (let user of users) {
      if (user.username == username && user.password == password) {
        i++;
      }
    }
    if (i == 1) {
      // alert('Login successful')
      localStorage.setItem("loggedin", "loggedin");
      navigate("/dashboard");
    } else {
      alert("Invalid login");
    }
    setusername('')
    setpassword('')
  }

  return (
    <div>
      <div className="row nav">
        <div className="col-md-6">
          <h1>TakeBook</h1>
        </div>
        <div className="col-md-6">
          {(() => {
            if (localStorage.getItem("loggedin")) {
              return <button onClick={logout}>LOGOUT</button>;
            } else {
              return (
                <div>
                  <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => {
                      setusername(e.target.value);
                    }}
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => {
                      setpassword(e.target.value);
                    }}
                  />
                  <button onClick={login}>LOGIN</button>
                </div>
              );
            }
          })()}
        </div>
      </div>
    </div>
  );
}
export default Navbar;
