import "./home.scss";
import React from 'react'
import Share from '../../components/share/Share'
import Posts from '../../components/posts/Posts'


function Home() {
  return (
    <div className="home">
      <Share />
      <Posts/>
    </div>
  )
}

export default Home