import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png';

export default function Siteheader() {  
  return (
    <div className='site-header'>
      <Link to='/'><img src={logo} alt='Namcor Logo'/></Link>
      <div>
          <div className="dropdown">
            <Link to='/' style={{ textDecoration: 'none' }}><span>Categories</span></Link>
            <div className="dropdown-content">
              <Link to='/'>Oil and Gas</Link>
              <Link to='/'>Green Hydrogen</Link>
              <Link to='/'>Other</Link>
            </div>
          </div>
          <Link to='/' style={{ textDecoration: 'none' }}><span>News</span></Link>
          <Link to='/' style={{ textDecoration: 'none' }}><span>My Account</span></Link>
      </div>
    </div>
  )
}
