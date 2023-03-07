import React from 'react'
import './header.css'
import CTA from './CTA'
import LOGO from '../../assets/logo.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Bem-Vindo</h5>
        <h1>Instituto Ide e Ensinai</h1>
        <h5 className="text-light"> Sim a vida! Um projeto que aborda temas como preconceito, suicídio e aborto.</h5>
        
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