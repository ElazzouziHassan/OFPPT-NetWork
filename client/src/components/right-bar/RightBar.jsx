import "./rightbar.scss";
import React from 'react'

import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import PersonRemoveOutlinedIcon from '@mui/icons-material/PersonRemoveOutlined';

function RightBar() {
  return (
    <div className="right-bar">
      <div className="container">
        <div className="item">
          <span>Suggestions for you</span>
          <div className="user">
            <div className="user-info">
              <img src="#" alt="user" />
              <span>Jane Doe</span>
            </div>
            <div className="actions">
              <button><PersonAddAltOutlinedIcon className="icon"/></button>
              <button><PersonRemoveOutlinedIcon className="icon"/></button>
            </div>
          </div>
          <div className="user">
            <div className="user-info">
              <img src="#" alt="user" />
              <span>Jane Doe</span>
            </div>
            <div className="actions">
              <button><PersonAddAltOutlinedIcon className="icon"/></button>
              <button><PersonRemoveOutlinedIcon className="icon"/></button>
            </div>
          </div>
          <div className="user">
            <div className="user-info">
              <img src="#" alt="user" />
              <span>Jane Doe</span>
            </div>
            <div className="actions">
              <button><PersonAddAltOutlinedIcon className="icon"/></button>
              <button><PersonRemoveOutlinedIcon className="icon"/></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RightBar