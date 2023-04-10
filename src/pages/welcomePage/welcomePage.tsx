import React, { useEffect } from 'react'
import './welcomePage.less'
import profileImg from '../../../res/profile_img.jpeg'
import { throttle } from '../../util/throttling'

import { useHistory } from "react-router-dom";
export const WelcomePage = () => {
  const history = useHistory()
  const handleScroll = () => {
    console.log(window.scrollY)
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight-10) {
      // you're at the bottom of the page
      history.push('/mainpage')
      history.go()
  }
}
  useEffect(
    ()=>{
      window.addEventListener("scroll",handleScroll );
    },[]
  )
  return (
    <div className="welcomePageWrapper">
      <div className='welcomePage'>
           <div className="selfIntro">
              <div className='firstwordWrap'>I'm</div>
              <div className='nameWrap'>
                  Jiaying Cui
              </div>
              <div className='introWrap'>
                  A student from the University of Waterloo, always passionate with learning and love to experience new things
              </div>

           </div>
           <div className="PictureContainer">
            <div className="pictureWrapper">
              <img src={profileImg} className="App-logo" alt="logo" />

              <div className='photoDecro'>
            </div>

            </div>
           </div>


         </div>
         <div className="scrollDownPanel">
              scroll down to explore
         </div>
    </div>
  )
}
