import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'

const Header = () => {
  return (
    <header>
        <div className="container header__container">
          <div className="container welcome__image__container">
            <div className="container welcome__container">
              <h5>Hi, my name's</h5>
              <h1>Artur Sarhizov</h1>
              <h5 className="text-light">Product Manager</h5>
              <CTA />
            </div> 
            <div className="me">
            <img src={ME} alt="me" />
          </div>
          </div>
        </div>
    </header>
  )
}

export default Header