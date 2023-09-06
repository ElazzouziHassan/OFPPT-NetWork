import "./rightbar.scss";
import React from 'react'
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import PersonRemoveOutlinedIcon from '@mui/icons-material/PersonRemoveOutlined';
import Verify from '../../assets/icons/verify.png'

function RightBar() {
  return (
    <div className="right-bar">
      <div className="container">
        <div className="item">
          <span>Suggestions for you</span>
          <div className="user">
            <div className="user-info">
              <img src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="user" />
              <span>Jane Doe</span>
              <img src={Verify} className="verify"/>
            </div>
            <div className="actions">
              <button><PersonAddAltOutlinedIcon className="icon-1"/></button>
              <button><PersonRemoveOutlinedIcon className="icon-2"/></button>
            </div>
          </div>
          <div className="user">
            <div className="user-info">
              <img src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="user" />
              <span>Jammy Doe</span>
              <img src={Verify} className="verify"/>
            </div>
            <div className="actions">
              <button><PersonAddAltOutlinedIcon className="icon-1"/></button>
              <button><PersonRemoveOutlinedIcon className="icon-2"/></button>
            </div>
          </div>
        </div>
        <div className="item">
          <span>Latest Activities</span>
          <div className="user">
            <div className="user-info">
              <img
                src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
              <span>Jane Doe <p>Liked your post</p></span>
            </div>
            <span>1 min ago</span>
          </div>
          <div className="user">
            <div className="user-info">
              <img
                src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
              <span>Jammy Doe <p>Liked your post</p></span>
            </div>
            <span>2 min ago</span>
          </div>
          <div className="user">
            <div className="user-info">
              <img
                src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
              <span>Jane Doe <p>commented on your post</p></span>
            </div>
            <span>3 min ago</span>
          </div>
        </div>
        <div className="item">
          <span>Online Friends</span>
          <div className="user">
            <div className="user-info">
              <img
                src="https://images.pexels.com/photos/762080/pexels-photo-762080.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
              <div className="online" />
              <span>Ranim Eliote</span>
            </div>
          </div>
          <div className="user">
            <div className="user-info">
              <img
                src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
              <div className="online" />
              <span>Jammy Doe</span>
              <img src={Verify} className="verify"/>
            </div>
          </div>
          <div className="user">
            <div className="user-info">
              <img
                src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
              <div className="online" />
              <span>Jane Doe</span>
              <img src={Verify} className="verify"/>
            </div>
          </div>
          <div className="user">
            <div className="user-info">
              <img
                src="https://images.pexels.com/photos/845457/pexels-photo-845457.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
              <div className="online" />
              <span>Alfred Orno</span>
            </div>
          </div>
          <div className="user">
            <div className="user-info">
              <img
                src="https://images.pexels.com/photos/39866/entrepreneur-startup-start-up-man-39866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
              <div className="online" />
              <span>Sami Mayn</span>
            </div>
          </div>
          <div className="user">
            <div className="user-info">
              <img
                src="https://images.pexels.com/photos/5917850/pexels-photo-5917850.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
              <div className="online" />
              <span>Fernando Domenic</span>
              <img src={Verify} className="verify"/>
            </div>
          </div>
          <div className="user">
            <div className="user-info">
              <img
                src="https://images.pexels.com/photos/837358/pexels-photo-837358.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
              <div className="online" />
              <span>Kastro Cohen</span>
            </div>
          </div>
          <hr />
          <div className="messenger-btn">
            <button>Open Messenger</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RightBar