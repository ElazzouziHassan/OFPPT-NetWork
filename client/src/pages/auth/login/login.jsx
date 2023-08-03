import "./login.scss"
import React from 'react'


function Login() {
  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>Welcome to</h1>
          <p><strong>OFPPT NetWork</strong>, The space where you can share, partipate and collaborate with your collegues</p>
          <span>Accounts distributed by your school</span>
        </div>
        <div className="right">
          <h1>Login</h1>
          <form action="#">
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button>Login</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login