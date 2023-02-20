import React from 'react'
import logo from '../../imsges/logo.png'
import { Link } from "react-router-dom"; 
function Header() {
  return (
    <header className='header'>
        <img src={logo} alt="" />
        <nav>
            <li>  <Link to="/" >Home</Link></li>
            <li>  <Link to="/about" >About</Link></li>
            <li>  <Link to="/servises" >Servises</Link></li>
            <li>  <Link to="/profile" >Profiles</Link></li>
        </nav>
    </header>
  )
}

export default Header