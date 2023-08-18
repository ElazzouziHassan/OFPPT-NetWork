import "./share.scss";
import User from '../../assets/user.gif'

import React from 'react'
import AlternateEmailOutlinedIcon from '@mui/icons-material/AlternateEmailOutlined';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';

function Share() {
  return (
    <div className="share-post">
      <div className="top">
        <div className="user">
          <img src={User} alt="user" />
        </div>
        <div className="shared-content">
          <input type="text" placeholder="What's on your mind !"/>
        </div>
      </div>
      <hr />
        <div className="actions">
          <div className="left">
            <button><FileUploadOutlinedIcon className="icon"/></button>
            <button><AlternateEmailOutlinedIcon className="icon"/></button>
          </div>
          <div className="right">
            <button><span>post</span></button>
          </div>
        </div>
    </div>
  )
}

export default Share