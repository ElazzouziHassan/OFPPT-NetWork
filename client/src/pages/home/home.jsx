import "./home.scss";
import React from 'react'
import Share from '../../components/share/Share'
import Posts from '../../components/posts/Posts'
import LeftBar from '../../components/left-bar/LeftBar'
import RightBar from '../../components/right-bar/RightBar'

function Home() {
  return (
    <div className="home">
      <div style={{ display:"flex" }}>
        <LeftBar />
          <div className="feeds">
            <Share />
            <Posts/>
          </div>
          <RightBar/>
        </div>
    </div>
  )
}

export default Home