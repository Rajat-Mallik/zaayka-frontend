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
            <p>Zaayka Food Delivery offers a wide variety of delicious meals from trusted local restaurants, delivered straight to your doorstep with speed and care. 
               Enjoy diverse cuisines, fresh ingredients, and seamless ordering designed to satisfy every craving. 
               Whether it’s a quick snack or a full meal, Zaayka ensures quality, convenience, and great taste in every order.</p>
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
              <li>+91 1234567890</li>
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
