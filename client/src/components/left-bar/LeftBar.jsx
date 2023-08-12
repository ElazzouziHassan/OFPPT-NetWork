import "./leftbar.scss";

import React from 'react'

function LeftBar() {
  return (
    <div className="left-bar">
      <div className="container">
        <div className="menu">
          <div className="user">
            <img src="#" alt="user" />
            <span>User</span>
          </div>
          <div className="item">
            <img src="#" alt="Home" />
            <span>Home</span>
          </div>
          <div className="item">
            <img src="#" alt="Friends" />
            <span>Friends</span>
          </div>
          <div className="item">
            <img src="#" alt="Messages" />
            <span>Messages</span>
          </div>
        </div>
        <hr />
        <span>others</span>
        <div className="others">
          <div className="item">
            <img src="#" alt="adverts" />
            <span>adverts</span>
          </div>
          <div className="item">
            <img src="#" alt="favorites" />
            <span>favorites</span>
          </div>
          <div className="item">
            <img src="#" alt="Messages" />
            <span>Messages</span>
          </div>
        </div>
        <hr />
        <div className="footer">
          <span>OFPPT NETWORK @2023</span>
          <p>ALL RIGHTS ARE RESERVED.</p>
        </div>

      </div>
    </div>
  )
}

export default LeftBar