import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <div>
      
      <ul className='navList'>
        <div className="logo">
          <img src="" alt="" />
          <h2>Shop Tym</h2>
        </div>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/About">About</Link></li>
        <li><Link to="/Contact">Contact</Link></li>
        <li><Link to="/Product">Products</Link></li>
        <li><Link to="/Service">Services</Link></li>
       
      </ul>
    </div>
  )
}

export default Navbar
