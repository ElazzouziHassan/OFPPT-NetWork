import "./leftbar.scss";
import React from 'react'
import Home from "../../assets/icons/home.svg"
import Favorites from "../../assets/icons/bookmark.svg"
import Messages from "../../assets/icons/envelope.svg"
import Advert from "../../assets/icons/megaphone.svg"
import Friends from "../../assets/icons/users.svg"
import User from "../../assets/user.jpg"
import Verify from '../../assets/icons/verify.png'

function LeftBar() {
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
            <img src={Home} alt="Home" />
            <span>Home</span>
          </div>
          <div className="item">
            <img src={Friends} alt="Friends" />
            <span>Friends</span>
          </div>
          <div className="item">
            <img src={Messages} alt="messages" />
            <span>Messages</span>
          </div>
        </div>
        <hr />
        <div className="menu">
          <span>Others</span>
          <div className="item">
            <img src={Advert} alt="adverts" />
            <span>Adverts</span>
          </div>
          <div className="item">
            <img src={Favorites} alt="favorites" />
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