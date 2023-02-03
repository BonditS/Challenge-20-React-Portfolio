import React from 'react'
import './skill.css'
import data from './data'

const Skill = () => {
  return (
    <div id='skills'>
      <h2>My Skills</h2>
      <p>This is the list of technology that I've learned so far!</p>
      <div className='container skill-container'>
        {
          data.map(item => (
            <div className='skill-card' key={item.id}>
              <div className='skill-card-image'>{item.icon}</div>
              <div className='skill-desc'>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))
        }

      </div>
    </div>
  )
}

export default Skill