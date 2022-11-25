import React from 'react'
import { NavLink } from 'react-router-dom'
import './nav.css'

const Nav = () => {
  return (
    <nav className='nav'>
          <NavLink className='nav__link nav__link1' to='/'>Home</NavLink>
          <NavLink className='nav__link nav__link2' to='/' >Proyectos</NavLink>
      <NavLink className='nav__link ' to='/' ><button className='nav__link3' onClick={() => { window.scroll({ top: 1400, behavior: 'smooth' }) }}>Contacto</button></NavLink>

    </nav>
  )
}

export default Nav
