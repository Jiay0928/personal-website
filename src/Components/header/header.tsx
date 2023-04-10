import React from 'react'
import left_icon from '../../../res/left-icon.png'
import "./header.less"
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export const Header:React.FC = () => {
  const onClickAction = (url:string) =>{
    window.open(url)

  }
  const download=()=>{
    const a = document.createElement('a')
    var url:string = encodeURI('/jiayingcui.pdf')
    a.href = url
    a.download = url.split('/').pop()!
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)

  }
  return (
    <div className='header'>
        <img src={left_icon} className="App-logo" alt="logo" />
        <div className='rightContainer'>
          <LinkedInIcon className='icon' fontSize='large' style={{color: '#03a3d4'}} onClick={()=> onClickAction('https://www.linkedin.com/in/jiaying-cui-1a6663250')}/>
          
          <GitHubIcon className='icon'fontSize='large' onClick={()=> onClickAction('https://github.com/Jiay0928')}/>
        <div className="cvButton" onClick={download}>Download CV</div>
        </div>

    </div>
  )
}