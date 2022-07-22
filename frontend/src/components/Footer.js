import React from 'react'
import './Footer.css'
import {Link} from 'react-router-dom'

function Footer(){
  let year=new Date().getFullYear();
    return (
          <div className='footer-container'>
            <small className="copyright">Recipe {year}</small>
          </div>
    )
}

export default Footer