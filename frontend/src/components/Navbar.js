import React from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'

function Navbar(){
    
    return (
        <>
          <nav className='navbar'>
            <div className='navbar-container'>
                <Link to="/" className='navbar-logo'>Soul Cravings</Link>
                <ul className='nav-menu'>
                    <li><Link to='/' className='nav-link'>Home</Link></li>
                    <li><Link to='/about' className='nav-link'>About</Link></li>
                    <li><Link to='/compose' className='nav-link'>Compose</Link></li>
                    <li><Link to='/contact' className='nav-link'>Contact</Link></li>
                </ul>
            </div>
          </nav>
        </>
    )
}

export default Navbar