import React from 'react';
import { FaGithub, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaYoutube } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-container'>
        <div className='left'>
          <div className='location'>
            <FaHome size={20} style = {{color:"#fff",marginRight:'2rem'}}/> 
            <div>
            <p>9, Samadh School Street,</p>
            <p>Kaja Nagar, Trichy,</p>
            <p>Tamil Nadu.</p>
          </div>
          </div>
          
          <div className='phone'>
            <h4><FaPhone size={20} style={{color:'#fff',marginRight:'2rem'}}/>
            123-4567-890</h4>    
          </div>
          <div className='email'>
            <h4><FaMailBulk size={20} style={{color:'#fff',marginRight:'2rem'}}/>
            yogaasri.t@gmail.com</h4>    
          </div>
          
        </div>
        <div className='right'>
          <h4>About Me</h4>
          <p>Passionately creating MERN applications is my ultimate craft, where every line of code weaves the fabric of innovation and possibilities.</p>
            <div className='social'>
            <FaGithub size={30} style = {{color:"#fff",marginRight:'1rem'}}/> 
            <FaLinkedin size={30} style = {{color:"#fff",marginRight:'1rem'}}/>
            <FaYoutube size={30} style = {{color:"#fff",marginRight:'1rem'}}/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;
