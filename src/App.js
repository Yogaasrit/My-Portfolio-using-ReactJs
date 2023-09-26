import React from 'react';
import "./index.css";
import HomePage from './pages/HomePage/HomePage';
import AboutPage from './pages/AboutPage/AboutPage';
import ContactPage from './pages/ContactPage/ContactPage';
import ProjectPage from './pages/ProjectPage/ProjectPage';
import {Routes,Route} from 'react-router-dom';

const App = () => {
  return (
    <>
      <Routes>
          <Route path = '/' element = {<HomePage/>} exact/>
          <Route path = '/about-page' element = {<AboutPage/>} exact/>
          <Route path = '/contact-page' element = {<ContactPage/> } exact/>
          <Route path = '/project-page' element = {<ProjectPage/>} exact/>
      </Routes>
    </>
  )
}

export default App