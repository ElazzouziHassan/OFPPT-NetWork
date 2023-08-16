import "./navbar.scss";
import {useState} from 'react';
import User from "../../assets/user.gif"
import OtherHousesOutlinedIcon from '@mui/icons-material/OtherHousesOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import Arrow from '../../assets/icons/arrow.svg'


import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {

  const [isActive, setIsActive] = useState(true);
  const handleClick = event => {
    setIsActive(current => !current);
  };
  return (
    <div className="nav-bar">
      <div className="left">
        <div className="logo">
          <Link to="/" style={{ textDecoration:"none" }}>
            <span>OFPPT NetWork</span>
          </Link>
        </div>
        <div className="left-menu">
          <Link to='/'><OtherHousesOutlinedIcon /></Link>
          <PeopleAltOutlinedIcon />
          <div className="search">
            <SearchOutlinedIcon />
            <span>|</span>
            <input type="text" placeholder="Search.." />
          </div> 
        </div>
      </div>
      <div className="right">
        <NotificationsNoneOutlinedIcon/>
        <EmailOutlinedIcon/>
        <BookmarkBorderOutlinedIcon />
        <div className="user">
          <img src={User} alt="user" onClick={handleClick} />
        </div>
        <div className={isActive ? 'sub-menu-wrap' : 'sub-menu-wrap open-menu'} id="drop-down-menu">
          <div className="sub-menu">
            <div className="user-info">
              <img src={User} alt="user" />
              <span>Jhon Doe </span>
              
            </div>
            <hr />
            <a href="#" className="sub-menu-link">
              <SettingsOutlinedIcon className="icon" />
              <p>Settings</p>
              <img src={Arrow}  />
            </a>
            <a href="#" className="sub-menu-link">
              <HelpOutlineOutlinedIcon className="icon" />
              <p>Support </p>
              <img src={Arrow}  />
            </a>
            <a href="#" className="sub-menu-link">
              <DarkModeOutlinedIcon className="icon" />
              <p>Dark Mode </p>
              <img src={Arrow}  />
            </a>
            <hr />
            <a href="#" className="sub-menu-link sub-menu-logout">
              <LogoutOutlinedIcon className="icon"/>
              <p>Logout</p>
              <img src={Arrow}  />
            </a>

          </div>
        </div>
      </div>
    </div>
  )
}

export default NavBar