import "./post.scss";
import React from 'react'

// MUI ICONS :----------------------------------------------------------------
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import TextsmsOutlinedIcon from '@mui/icons-material/TextsmsOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import FlagCircleOutlinedIcon from '@mui/icons-material/FlagCircleOutlined';

// ---------------------------------------------------------------------------

function Post() {
  // media:----------
  const media = true;
  // ----------------
  return (
    <div className="post">
      <div className="top">
        <div className="user">
          <img src="#" alt="user" />
          <span>Jhon Doe</span>
        </div>
        <div className="time">
          <p>1 Min Ago</p>
        </div>
      </div>
      <div className="content">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        {
          media
          ?
          <img src="#" alt="media" />
          :
          <span>No Media</span>
        }
      </div>
      <hr />
      <div className="bottom">
        <div className="left">
          <button><FavoriteBorderOutlinedIcon className="icon"/></button>
          <button><TextsmsOutlinedIcon className="icon"/></button>
          <button><BookmarkBorderOutlinedIcon className="icon"/></button>
        </div>
        <div className="right">
          <button><FlagCircleOutlinedIcon className="icon"/></button>
        </div>
      </div>
    </div>
  )
}

export default Post