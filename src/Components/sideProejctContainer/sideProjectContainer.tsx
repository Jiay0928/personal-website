import React, { useState } from 'react'
import VideoComponent from '../videoComponent/videoComponent'
import "./sideProjectContainer.less"
type Props = {
    title:string,
    tags: string[],
    desc: string,
    date: string,
    keyPoints: string[],
    videoLink: string | null|undefined,
    githubLink: string
}

const SideProjectContainer = (props:Props) => {
  const [open, setOpen] = useState(false)
  const openModelHandler = () => {
    setOpen(true)
  }
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
            {props.tags.map(tag => <div className='tag' key={tag}>#{tag}</div>)}
        </div>
        <div className='linkContainer'>
            {props.videoLink && <div style={{width: 100}} className='linkButton' onClick={()=>setOpen(true)}>
                video
            </div> 
            }
            <VideoComponent videoUrl={props.videoLink!} open={open} setOpen={setOpen} title={props.title}/>
            <div style={{width: 120}} onClick={()=> window.open(props.githubLink)} className='linkButton'>
                github repo
            </div>
        </div>
        </div>
        
    </div>
  )
}

export default SideProjectContainer