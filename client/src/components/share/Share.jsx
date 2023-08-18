import "./share.scss";

import React from 'react'
import AlternateEmailOutlinedIcon from '@mui/icons-material/AlternateEmailOutlined';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';

function Share() {
  return (
    <div className="share-post">
      <div className="user">
        <img src="#" alt="user" />
      </div>
      <div className="shared-content">
        <input type="text" placeholder="What's on your mind !"/>
      </div>
      <hr />
      <div className="actions">
        <div className="left">
          <button><FileUploadOutlinedIcon/></button>
          <button><AlternateEmailOutlinedIcon/></button>
        </div>
        <div className="right">
          <button>post</button>
        </div>
      </div>
    </div>
  )
}

export default Share