import React, {useState} from 'react'
import './nav.css'
import {HiHome} from 'react-icons/hi'
import {HiUser} from 'react-icons/hi'
import {FaGraduationCap} from 'react-icons/fa'
import {HiBriefcase} from 'react-icons/hi'
import {FaLaptopCode} from 'react-icons/fa'
import {HiMailOpen} from 'react-icons/hi'


const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');
  return (
    <nav>
        <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><HiHome /></a>
        <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><HiUser /></a>
        <a href="#education" onClick={() => setActiveNav('#education')} className={activeNav === '#education' ? 'active' : ''}><FaGraduationCap /></a>
        <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><HiBriefcase /></a>
        <a href="#projects" onClick={() => setActiveNav('#projects')} className={activeNav === '#projects' ? 'active' : ''}><FaLaptopCode /></a>
        <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><HiMailOpen /></a>
    </nav>
  )
}

export default Nav