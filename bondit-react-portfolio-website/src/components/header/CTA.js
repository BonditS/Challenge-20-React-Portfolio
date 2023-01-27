import React from 'react'
import CV from '../../assests/bonditCV.pdf'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} download>Download CV</a>
        <a href="#contact">Contact Me</a>
    </div>
  )
}

export default CTA