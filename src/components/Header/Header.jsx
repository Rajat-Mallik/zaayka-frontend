import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className='header'>
      <div className='header-contents'>
        <h2>Place your favourite food order here</h2>
        <p className='header-subtitle'>Explore a varied menu offering a delightful selection of dishes, each prepared with the highest quality ingredients.</p>
        <button>View Menu</button>
      </div>
    </div>
  )
}

export default Header
