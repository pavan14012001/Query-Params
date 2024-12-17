import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand fw-bold" href="#">StyloShop💫</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav mx-auto fw-bold">
        <li className="nav-item">
         <NavLink to='/' className='nav-link'>Home</NavLink>
        </li>
        <li className="nav-item">
        <NavLink to='/about' className='nav-link'>About</NavLink>
        </li>
        <li className="nav-item">
        <NavLink to='/contact' className='nav-link'>Contact</NavLink> 
        </li>
        <li className="nav-item">
        <NavLink to='/product' className='nav-link'>Product</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>

  )
}

export default Navbar