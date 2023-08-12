import "./navbar.scss";
import OtherHousesOutlinedIcon from '@mui/icons-material/OtherHousesOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
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
        <OtherHousesOutlinedIcon />
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
          <img src="#" alt="user" />
        </div>
      </div>
    </div>
  )
}

export default NavBar