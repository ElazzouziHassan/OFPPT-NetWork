import "./share.scss";
import User from '../../assets/user.gif'

import React from 'react'
import AlternateEmailOutlinedIcon from '@mui/icons-material/AlternateEmailOutlined';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';

function Share() {
  return (
    <div className="share-post">
      <div className="new-post">
        <img src="#" alt="user" />
        <input type="text" placeholder="What's on your mind !" />
      </div>
      <hr />
      <div className="actions">
        <div className="left">
          <button>add file</button>
          <button>tag</button>
        </div>
        <div className="right">
          <button>post</button>
        </div>
      </div>
    </div>
  )
}

export default Share