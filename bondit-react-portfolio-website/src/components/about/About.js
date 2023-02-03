import React from 'react'
import './about.css'
import Resume from '../../assests/bonditCV.pdf'
import {BsDownload} from 'react-icons/bs'

const About = () => {
  return (
    <div className="container about-container">
      <div className='about-content'>
        <h2>About Me</h2>
          <p>
            Hi, my name is Bondit Sinlee
          </p>
          <p>
            I'm a frontend React.js developer.
          </p>
          <a href={Resume} className='btn-primary'>My Resume<BsDownload/></a>
      </div>
    </div>
  )
}

export default About