import React from 'react'
import './nav.css'
import Logo from '../../assests/logo.png'
import data from './data'

const Nav = () => {
  return (
    <nav>
      <div className='container nav-container'>
        <a href='index.html' className='nav-logo'>
          <img src={Logo} alt='Navbar Logo'/>
        </a>
        <ul className='nav-list'>
          {
            data.map(item => <li key={item.id}><a href="{item.link">{item.title}</a></li>)
          }
        </ul>
      </div>
    </nav>
  )
}

export default Nav