import React, { useState } from 'react'
import './Nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {AiOutlineProfile} from 'react-icons/ai'
import {BiMessageSquareDetail} from 'react-icons/bi'


function Nav() {

  const [activeNav, setActiveNav] = useState('#');

  return (

    <nav>
      <a href="#" onClick = {() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome/></a>

      <a href="#about" onClick = {() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser/></a>

      <a href="#skill" onClick = {() => setActiveNav('#skill')} className={activeNav === '#skill' ? 'active' : ''}><BiBook/></a>

      <a href="#portfolio" onClick = {() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><AiOutlineProfile/></a>

      <a href="#contact" onClick = {() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><BiMessageSquareDetail/></a>
    </nav>
  )
}

export default Nav

