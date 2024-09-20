import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <ul className='nav-links'>
        <li><Link to="/" className='nav-li'>Home</Link></li>
        <li>
          Products
          <div className='mega-menu'>

            <div className='submenu'>
              <h4>Electronics</h4>
              <ul>
                <li>Mobile Phones</li>
                <li>Laptops</li>
                <li>Tablets</li>
                <li>Cameras</li>
              </ul>
            </div>

            <div className='submenu'>
              <h4>Fashion</h4>
              <ul>
                <li>Men</li>
                <li>Women</li>
                <li>Accessories</li>
                <li>Footwear</li>
              </ul>
            </div>

            <div className='submenu'>
              <h4>Home Appliances</h4>
              <ul>
                <li>Refrigerators</li>
                <li>Washing Machines</li>
                <li>Air Conditioners</li>
                <li>Microwaves</li>
              </ul>
            </div>

            <div className='submenu'>
              <h4>Books</h4>
              <ul>
                <li>Fiction</li>
                <li>Non-Fiction</li>
                <li>Educational</li>
                <li>Children's Books</li>
              </ul>
            </div>

          </div>
        </li>
        <li><Link to="/react-memo" className='nav-li'>React Memo</Link></li>
        <li><Link to="/signup" className='nav-li'>Signup</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar
