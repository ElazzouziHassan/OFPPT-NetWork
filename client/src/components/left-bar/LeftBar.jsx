import "./leftbar.scss";
import React from 'react'
import { Link } from 'react-router-dom';
import OtherHousesOutlinedIcon from '@mui/icons-material/OtherHousesOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import CampaignOutlinedIcon from '@mui/icons-material/CampaignOutlined';
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
            <Link to='profile/1' >
              <img src={User} alt="user" />
            </Link>
            <Link to='profile/1'style={{ textDecoration:'none' }}>
              <span>Jhon Doe </span>
            </Link>
            <img src={Verify} className="verify" />
          </div>
          <div className="item">
            <OtherHousesOutlinedIcon className="left-bar-icon"/>
            <span>Home</span>
          </div>
          <div className="item">
          <PeopleAltOutlinedIcon className="left-bar-icon"/>
            <span>Friends</span>
          </div>
          <div className="item">
          <EmailOutlinedIcon className="left-bar-icon"/>
            <span>Messages</span>
          </div>
        </div>
        <hr />
        <div className="menu">
          <span>Others</span>
          <div className="item">
          <CampaignOutlinedIcon className="left-bar-icon"/>
            <span>Adverts</span>
          </div>
          <div className="item">
          <BookmarkBorderOutlinedIcon className="left-bar-icon"/>
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