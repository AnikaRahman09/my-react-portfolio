import React from 'react'
import CallToAction from './CallToAction';
import headerImg from '../../images/IMG_20210216_183327.jpg'
import './Header.css'

function Header() {
  return (
    
    <header>
      <div className="container header-container">
        <h5>Hello I'm</h5>
        <h1>Anika Rahman</h1>
        <h5 className="text-light">Frontend Developer</h5>

        <CallToAction />

        <div className="header-img"> 
            <img src={headerImg} alt="header-img" />
        </div>

        <a href="#contact" className= "scroll-down">Scroll Down</a>
      </div>

    </header>
    
  )
}

export default Header;
