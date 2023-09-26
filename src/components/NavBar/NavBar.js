import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import {FaBars,FaTimes} from 'react-icons/fa';

const NavBar = () => {
  // State for hamburger when clicked.
const [click,setClick] = useState(false);
  // State to change color
const [color,setColor] = useState(false);

// Handler to handle the hamburger when clicked.
const onClickHandle = () => 
  setClick(!click);

// Handler to change color
const changeColorHandler = () => {
  if(window.scrollY >= 100){
    setColor(true);
  }else{
    setColor(false);
  }
}
window.addEventListener("scroll",changeColorHandler);

  return (
    <div className= {color ? 'header header-bg' : 'header'}>
      <Link to = "/">
        <h1>Portfolio</h1>
      </Link>
      <ul className={click?'nav-menu active':'nav-menu'}>
        {/* Based on state the classNames are passed to css. */}
        {/* nav-menu active to show the pages */}
        {/* nav-menu to hide the pages using -100% */}
        <li>
          <Link to = "/">Home</Link>
        </li>
        <li>
          <Link to = "/project-page">Project</Link>
        </li>
        <li>
          <Link to = "/about-page">About</Link>
        </li>
        <li>
          <Link to = "/contact-page">Contact</Link>
        </li>
      </ul>
      {/* In small screem to show the menuList */}
      <div className='hamburger' onClick={onClickHandle}>
        {/* Conditional rendering based on state to show menu and close icons.*/}
        {click ? (<FaTimes size={20} style={{color:"#fff"}}/>) 
        : (<FaBars size={20} style={{color:"#fff"}}/>)} 
      </div>
    </div>
  )
}

export default NavBar