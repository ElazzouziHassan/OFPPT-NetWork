import "./share.scss";
import User from '../../assets/user.gif'
import DriveFolderUploadOutlinedIcon from '@mui/icons-material/DriveFolderUploadOutlined';
import TagOutlinedIcon from '@mui/icons-material/TagOutlined';
import EmojiEmotionsOutlinedIcon from '@mui/icons-material/EmojiEmotionsOutlined';

import React from 'react'

function Share() {
  return (
    <div className="share-post">
      <div className="new-post">
        <img src={User} alt="user" />
        <input type="text" placeholder="What's on your mind !" />
      </div>
      <hr />
      <div className="actions">
        <div className="left">
          <button><DriveFolderUploadOutlinedIcon className="icon"/></button>
          <button><TagOutlinedIcon className="icon"/></button>
          <button><EmojiEmotionsOutlinedIcon className="icon"/></button>
        </div>
        <div className="right">
          <button>post</button>
        </div>
      </div>
    </div>
  )
}

export default Share