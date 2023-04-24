import React, { useEffect, useState } from 'react'
import './indexHeader.less'
import Menu from '@mui/material/Menu';
import { MenuItem } from '@mui/material';
import { throttle } from '../../util/throttling';
import { useLocation } from 'react-router';


const IndexHeader:React.FC = () => {
  
  const location = useLocation();

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
    
  };
  const [isSticky, setIsSticky] = useState(false)
  const handleScroll = () => {
    
    if (window.scrollY >= 100){
      setIsSticky(true)
      
    }else{
      setIsSticky(false)
    }

  }
  useEffect(
    ()=>{
      window.addEventListener("scroll", throttle(handleScroll, 20));
      console.log(location.pathname)
    },[]
  )
  const openHashLinkThenClose = (hashValue:string) => {
    handleClose()
    window.location.hash = hashValue
  }
  // const indexNameList= ['Side Project', 'Interesting CSS Effects', "Contact me"]
  const indexNameList = [{indexName: "Side Project", url: "/sideproject"},{indexName: "Contact", url: "/contact"}]
  const createIndex = ({indexName, url}) => {
    return <div key={indexName} className="indexContainer">
        <a href={url}>{indexName}</a>
    </div>

  }
  const createAboutMeSelector = () => {
    
    return (
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={() =>openHashLinkThenClose('aboutme')}>Personality & Skills</MenuItem>
        <MenuItem onClick={() =>openHashLinkThenClose('coop')}>Coop Experiences</MenuItem>
        <MenuItem onClick={() => openHashLinkThenClose('edu')}>Education & Courses</MenuItem>
        <MenuItem onClick={() => openHashLinkThenClose('award')}>Certificate & Awards</MenuItem>
      </Menu>
    ) 

  }
  
  return (
    <nav className={isSticky ? 'indexHeader sticky': 'indexHeader'}  >
        { location.pathname === '/mainpage'? 
          [<div className="indexContainer" onClick={handleClick}>
           About me
        </div>,
        createAboutMeSelector()] :
        createIndex({indexName: "About me", url: "/mainpage"})
        }
        {[
        
            
            indexNameList.map(name=>createIndex({...name}))]
        }
    </nav>
  )
}

export default IndexHeader