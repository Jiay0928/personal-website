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
    githubLink: string,
    backendLink: string | null|undefined,
}

const SideProjectContainer = (props:Props) => {
  const [open, setOpen] = useState(false)
  
  return (
    <div className='sideProjectContainer' onMouseLeave={(e:React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        e.currentTarget.scrollTop = 0

    }}>
        
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
            {props.backendLink?[<div style={{width: 140}} onClick={()=> window.open(props.githubLink)} className='linkButton'>
                Frontend repo
            </div>,
            <div style={{width: 140}} onClick={()=> window.open(props.backendLink!)} className='linkButton'>
                Backend repo
            </div>]
            
            :<div style={{width: 120}} onClick={()=> window.open(props.githubLink)} className='linkButton'>
                github repo
            </div>}
        </div>
        </div>
        
    </div>
  )
}

export default SideProjectContainer