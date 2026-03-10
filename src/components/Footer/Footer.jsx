import React from 'react'
import './Footer.css'
import {assets} from '../../assets/assets'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className='footer-content'>
        <div className='footer-content-left'>
            <Link to='/'><img src={assets.logo} alt="logo" /></Link>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
               Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <div className='footer-social-icons'>
                <img src={assets.facebook_icon} alt="facebook" />
                <img src={assets.twitter_icon} alt="twitter" />
                <img src={assets.linkedin_icon} alt="linkedin" />
            </div>
        </div>
        <div className='footer-content-center'>
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
            </ul>
        </div>
        <div className='footer-content-right'>
          <h2>GET IN TOUCH</h2>
          <ul>
              <li>+1-212-256-7890</li>
              <li>contact@zaayka.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className='footer-copyright'>Copyright 2025 © Zaayka.com - All Rights Reserved</p>
    </div>
  )
}

export default Footer
