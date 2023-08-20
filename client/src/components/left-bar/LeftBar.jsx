import "./leftbar.scss";
import React from 'react'
// import Home from "../../assets/icons/home.gif"
// import Favorites from "../../assets/icons/favorites.gif"
// import Messages from "../../assets/icons/chat.gif"
// import Advert from "../../assets/icons/note.gif"
// import Friends from "../../assets/icons/friends.gif"
import User from "../../assets/user.gif"
import Verify from '../../assets/icons/verify.png'

function LeftBar() {
  // date:---------------------------
  const year = new Date().getFullYear()
  // --------------------------------
  return (
    <div className="left-bar">
      <div className="container">
        <div className="menu">
          <div className="user">
            <img src={User} alt="user" />
            <span>Jhon Doe </span>
            <img src={Verify} className="verify"/>
          </div>
          <div className="item">
            <img src="#" alt="Home" />
            <span>Home</span>
          </div>
          <div className="item">
            <img src='#' alt="Friends" />
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
          <span>OFPPT NetWork &copy;{ year }</span>
          <p>all rights are reserved</p>
        </div>
      </div>
    </div>
  )
}

export default LeftBar