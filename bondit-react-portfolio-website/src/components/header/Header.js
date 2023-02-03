import React from 'react'
import './header.css'
import ProfileImage from '../../assests/profile.png'

const Header = () => {
  return (
    <header>
      <div className='container header-container'>
        <div className='profile-portrait'>
          <img src={ProfileImage} alt='Profile portrait'/>
        </div>
        <h5>Hi I'm</h5>
        <h1>Bondit Sinlee</h1>
        <h5 className='text-light'>Entry level Fullstack Developer</h5>
        

      </div>
    </header>
  )
}

export default Header