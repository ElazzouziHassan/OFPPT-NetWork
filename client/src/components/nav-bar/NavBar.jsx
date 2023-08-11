import "./navbar.scss";
import OtherHousesOutlinedIcon from '@mui/icons-material/OtherHousesOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import BookmarkOutlinedIcon from '@mui/icons-material/BookmarkOutlined';

import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <div className="nav-bar">
      <div className="left">
        <Link to="/" style={{ textDecoration:"none" }}>
          <span>OFPPT NetWork</span>
        </Link>
        
      </div>
      <div className="right"></div>
    </div>
  )
}

export default NavBar