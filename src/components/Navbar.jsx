import React from 'react'
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
        <ul className="nav-links">
            <li>Home</li>
            <li>
                Products
                <div className="mega-menu">
                <div className="submenu">
                    <h4>Electronics</h4>
                    <ul>
                        <li>Mobile Phones</li>
                        <li>Laptops</li>
                    </ul>
                </div>
                <div className="submenu">
                    <h4>Fashion</h4>
                    <ul>
                        <li>Men</li>
                        <li>Women</li>
                    </ul>
                </div>
                </div>
            </li>
            <li>Contact</li>
        </ul>
     </nav>
  )
}

export default Navbar
