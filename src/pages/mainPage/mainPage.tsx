import React, { useEffect } from 'react'
import IndexHeader from '../../Components/indexHeader/indexHeader'
import profile_img from '../../../res/profile.jpeg'

import './mainPage.less'

const MainPage:React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className='mainPage'>
        <IndexHeader/>
        <div className='contentContainer'>
          <div className="personalitySkillContainer">
            <img src={profile_img} alt="" />
            <article id={"aboutme"}>
            <section >
                <h1>
                  About me
                </h1>
                <span>
                    Hi, I am Jiaying Cui, A fourth-year student from the University of Waterloo. I am always passionate with learning, love to experience new things, think of creative solutions. Besides all that, I am a cat person. 
                </span>
              </section>
              <section>
                <h1>
                  Skills
                </h1>
                <span>
                  Frontend: Javascript, TypeScript, HTML, CSS, LESS, React.js,  Redux, node.js, webpack <br/>
                </span>
                <span>
                  Backend: python, Django, golang, node.js, socket.io, RESTFUL api, GRPC protocol, docker, Kubenetes<br/>
                </span>
                <span>
                  Data: python, numpy, scikit learn, AI, machine learning<br/>
                </span>
                <span>
                  Other: AWS<br/>
                </span>
              </section>
              
            </article>
            
          </div>
          <div className="coopContainer" id="coop">
            
                <h1>
                  Coop Experiences
                </h1>
            <article>
                <section>
                  <h3>
                  Jan.– Apr. 2023
                  </h3>
                  <h2>
                      Backend Developer at Carta                                                                                                           
                  </h2>
                  <h4>
                  Work with financial report team that uses python and Django Framework to generate financial reports
                  </h4>
                  <ol>
                    <li>
                    	Updated a gRPC API to allow users to do fuzzy filtering search on information in the database
                    </li>
                    <li>
                    	Wrote scripts to fulfil customer's requirements on modifying database data or backfill databases caused by database migrations

                    </li>
                    <li>
                     Learnt and used Docker and Kubernetes to monitor and interact with the local and testing environments

                    </li>
                  </ol>

                </section>
                <section>
                  <h3>
                  Jan.– Aug. 2022
                  </h3>
                  <h2>
                  Frontend Developer at Haojing Technology Co., Ltd                                                                      
                  </h2>

                  <ol>
                    <li>
                      independently built 4 webpages for a Product Introduction website use React Framework and work with product people to perfect the design
                    </li>
                    <li>
                      worked with UI designer to decide all adapative design and implementated it for the project
                    </li>
                    <li>
                      Created a custom sidebar component that lights up its index title when the corresponding content is visible on the screen and used throttling to optimize the performance  
                    </li>
                    <li>
                      Learnt and used React hooks and Redux for state management, use async call to interact with backend
                    </li>
                  </ol>
                </section>
                <section>
                  <h3>
                  Sept.– Dec. 2020                                                                                     
                  </h3>
                  <h2>
                  Quality Engineering at Economic Insurance 
                  </h2>
                  <ol>
                    <li>
                    Helped make automatic test cases for the company website using Mandrel, analyzed and reported testing results  
                    </li>
                  </ol>
                </section>
                </article>
                
            
          </div>
          <div className="Education" id="edu">
            <h1>
              Education
            </h1>
            <div className='schoolContainer'>
              <div>
                University of Waterloo, Computer Science Program
              </div>
              <div>
                Sept. 2019 - Now
              </div>
            </div>
            <h1>
              Courses Taken
            </h1>
            <span>
              Object-oriented Programming, Computer Network, Operating System, Data Structure, User Interface, Artificial Intelligent
            </span>
          </div>
          <div className='award' id={'award'}>
          <h1>
              Award and Certificate
            </h1>
            <div className='awardContainer'>
              <div>
              AWS Certified Cloud Practitioner                                                                                                                                     
              </div>
              <div>
              Mar. 2022
              </div>
            </div>
            <div className='awardContainer'>
              <div>
              University of Waterloo President’s Scholarship of Distinction                                                                                                                                                                                                                             
              </div>
              <div>
             2020
              </div>
            </div>
            <div className='awardContainer'>
              <div>
              Mathematics International Students Entrance Scholarship                                                                                                                                                                                                                                     
              </div>
              <div>
              2020
              </div>
            </div>
            

        </div>
        </div>
        
    </div>
  )
}

export default MainPage