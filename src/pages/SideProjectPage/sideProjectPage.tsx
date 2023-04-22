import React, { useEffect, useState } from 'react'
import IndexHeader from '../../Components/indexHeader/indexHeader'
import './sideProjectPage.less'
import projects from '../dummyProjectInfo'
import SideProjectContainer from '../../Components/sideProejctContainer/sideProjectContainer'
import { fetchSideProject } from './model'

const SideProjectPage = () => {
  const [projectList, setProjectList] = useState([])
  useEffect(() => {
    
    fetchSideProject().then((data) =>  {console.log(data)
    setProjectList(data.data)}


    ).catch((error) => console.log
    )
  
    
  }, [])
  
  return (
    <div>
    <IndexHeader/>
    <div className="sideProjectPage">
       {projectList.map(project => SideProjectContainer(project))}
        
    </div>
    

</div>
  )
}
export default SideProjectPage