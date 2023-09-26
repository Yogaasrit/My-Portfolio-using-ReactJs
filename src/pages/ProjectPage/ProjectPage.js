import React from 'react'
import Footer from '../../components/Footer/Footer'
import MyProjects from '../../components/MyProjects/MyProjects'
import NavBar from '../../components/NavBar/NavBar'
import ProjectScreen from '../../components/ProjectScreen/ProjectScreen'

const ProjectPage = () => {
  return (
    <div>
      <NavBar/>
      <ProjectScreen/>
      <MyProjects/>
      <Footer/>
    </div>
  )
}

export default ProjectPage