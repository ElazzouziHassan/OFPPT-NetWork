import "./post.scss";

import React from 'react'

function Post() {
  // media:----------
  const media = false;
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
      <div className="bottom">
        <div className="left"></div>
        <div className="right"></div>
      </div>
    </div>
  )
}

export default Post