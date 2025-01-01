import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png'


const Navbar = () => {
  return (
    <div>
      <nav>
        
        <div className='logoContainer'>
          <img src={logo} className='logoImg' alt="" />
          <h1 className="logoName">Shop Tym</h1>

        </div>
        
       
        <ul className='navList'>

          <li><Link to="/">Home</Link></li>
          <li><Link to="/About">About</Link></li>
          <li><Link to="/Contact">Contact</Link></li>
          <li><Link to="/Product">Products</Link></li>
          <li><Link to="/Service">Services</Link></li>

        </ul>
      </nav>



    </div>
  )
}

export default Navbar
