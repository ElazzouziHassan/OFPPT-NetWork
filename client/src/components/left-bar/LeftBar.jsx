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
            <img src="#" alt="messages" />
            <span>Messages</span>
          </div>
        </div>
        <hr />
        <div className="menu">
          <span>Others</span>
          <div className="item">
            <img src="#" alt="adverts" />
            <span>Adverts</span>
          </div>
          <div className="item">
            <img src="#" alt="favorites" />
            <span>Favorites</span>
          </div>
        </div>
        {/* FOOTER */}
        <hr />
        <div className="footer">
          <span>OFPPT NetWork @2023</span>
          <p>all rights are reserved</p>
        </div>

      </div>
    </div>
  )
}

export default LeftBar