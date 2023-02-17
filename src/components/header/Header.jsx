import React from 'react'
import './header.css'
import CTA from './CTA'
import LOGO from '../../assets/logo-branca.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Bem-Vindo</h5>
        <h1>Projeto Ide e Ensinai</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        
        <CTA />
        
        <HeaderSocials />

        <div className="me">
          <img src={LOGO} alt="Me" />
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header