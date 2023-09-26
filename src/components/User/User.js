import React from 'react';
import './User.css';
import HomePageImage from "../../asserts/HomePage.jpg";
import { Link } from 'react-router-dom';
const User = () => {
  return (
    <div className='user'>
      <div className='mask'>
        <img className='into-img' src = {HomePageImage} alt = ""/>   
      </div>
      <div className='content'>
        <p>HI, I'M YOGAASRI.</p>
        <h1>React Developer.</h1>
        <div>
          <Link  to = "/project-page" className='btn'>PROJECT</Link>
          <Link to = '/contact-page' className='btn btn-light'>CONTACT</Link>
        </div>
      </div>
    </div>
  )
}

export default User