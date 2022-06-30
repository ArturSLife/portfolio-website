import React from 'react'
import Facebook from '../../assets/fb.png'
import LinkedIn from '../../assets/linkedin.png'
import {BsLinkedin} from 'react-icons/bs'
import {BsFacebook} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='https://www.linkedin.com/in/artursargizov/' target='_blank' rel='noopener noreferrer'>
            <BsLinkedin size={22}/>
        </a>
        <a href='https://www.facebook.com/artursargizov/' target='_blank' rel='noopener noreferrer'>
            <BsFacebook size={22}/>
            {/*<img src={Facebook} alt="fb logo" />*/}
        </a>
    </div>
  )
}

export default HeaderSocials