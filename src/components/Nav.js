import React, { useEffect, useState } from 'react'
import './Nav.css'
import netflix from '../images/netflix.png'
import avatar from '../images/avatar.png'
function Nav() {
  const [show, handleShow] = useState(false)

  const transitionNavBar = () => {
    if (window.scrollY > 100){
      handleShow(true)
    } else {
      handleShow(false)
    }

    
  }
  useEffect(() => {
    window.addEventListener('scroll', transitionNavBar);
    return () => window.removeEventListener('scroll', transitionNavBar)
  }, [])
  return (
    <div className= {`nav ${show && 'nav_bg'}`}>
      <div className='nav_stuff'>

      <img src={netflix} className='nav_logo'></img>
      <img src={avatar} className='nav_avatar'></img>
      
      </div>
    </div>
  )
}

export default Nav