import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import { TiShoppingCart } from "react-icons/ti";
import { FaUser } from "react-icons/fa";



const Navbar = () => {
  return (
    <div>
      <nav>
        
        <div className='logoContainer'>
          <a href="">
          <img src={logo} className='logoImg' alt="" />
          <h1 className="logoName">Shop Tym</h1>
          </a>
          

        </div>
        
       
        <ul className='navList'>

          <li><Link to="/">Home</Link></li>
          <li><Link to="/About">About</Link></li>
          <li><Link to="/Contact">Contact</Link></li>
          <li><Link to="/Product">Products</Link></li>
          <li><Link to="/Service">Services</Link></li>
         
        </ul>

        <div className="cart">
        <TiShoppingCart className='cartIcon' size={35} />
        <div className='cartCount'>4</div>
        </div>

        <div className="userIcon">
        <FaUser className='user' size={18}/>
        </div>
      </nav>



    </div>
    
  )
}



export default Navbar
