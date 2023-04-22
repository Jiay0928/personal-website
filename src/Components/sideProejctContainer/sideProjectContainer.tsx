import React from 'react'
import "./sideProjectContainer.less"
type Props = {
    title:string,
    tags: string[],
    desc: string,
    date: string,
    keyPoints: string[],
    videoLink: string,
    githubLink: string
}

const SideProjectContainer = (props:Props) => {
  return (
    <div className='sideProjectContainer'>
        <div className="upperContainer">

        
        <div className="title">
            {props.title}
        </div>
        
        <div>
            {props.desc}
        </div>
        <div >
            <ol>
            {props.keyPoints.map(
                point => 
                    <li>
                        {point}
                    </li>
            )}
            </ol>
        </div>
        </div>
        <div className="lowerContainer">
        <div className="tags">
            {props.tags.map(tag => <div className='tag' key={tag}>{tag}</div>)}
        </div>
        <div className='linkContainer'>
            <div style={{width: 100}} className='linkButton'>
                video
            </div>
            <div style={{width: 120}}  className='linkButton'>
                github repo
            </div>
        </div>
        </div>
        
    </div>
  )
}

export default SideProjectContainer