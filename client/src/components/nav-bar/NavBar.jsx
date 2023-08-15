import "./navbar.scss";
import User from "../../assets/user.jpg"
import OtherHousesOutlinedIcon from '@mui/icons-material/OtherHousesOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';

import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <div className="nav-bar">
      <div className="left">
        <Link to="/" style={{ textDecoration:"none" }}>
          <span>OFPPT NetWork</span>
        </Link>
        <Link to='/'><OtherHousesOutlinedIcon /></Link>
        <PeopleAltOutlinedIcon />
        <div className="search">
          <SearchOutlinedIcon />
          <input type="text" placeholder="Search.." />
        </div> 
      </div>
      <div className="right">
        <NotificationsNoneOutlinedIcon/>
        <EmailOutlinedIcon/>
        <BookmarkBorderOutlinedIcon />
        <div className="user">
          <img src={User} alt="user" />
        </div>
        <div className="sub-menu-wrap">
          <div className="sub-menu">
            <div className="user-info">
              <img src={User} alt="user" />
              <span>Jhon Doe</span>
            </div>
            <hr />
            <div className="menu">
              <span><DarkModeOutlinedIcon className="icon"/> Dark Mode</span>
              <span><LogoutOutlinedIcon className="icon"/> Logout</span>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default NavBar