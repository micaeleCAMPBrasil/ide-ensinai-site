import React from 'react'
import { Link } from "react-router-dom";

import './about.css'
import ME from '../../assets/me-about.jpg'

import Nav from '../../components/nav/Nav'

import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'

const AboutMoure = () => {
  return (
    <>
      <section id='about'>
        <h5>Conheça mais</h5>
        <h2>Sobre nós</h2>

        <div className="container about__container">
          <div className="about__me">
            <div className="about__me-image">
              <img src={ME} alt="About Image" />
            </div>
          </div>
          <div className="about__content">
            <div className="about__cards">
              <article className='about__card'>
                <FaAward className='about__icon' />
                <h5>Experiência</h5>
                <small>15+ Anos Trabalhando</small>
              </article>
              <article className='about__card'>
                <FiUsers className='about__icon' />
                <h5>Material</h5>
                <small>200+ Worldwide</small>
              </article>
              <article className='about__card'>
                <VscFolderLibrary className='about__icon' />
                <h5>Materiais</h5>
                <small>80+ Completed</small>
              </article>
            </div>

            <p>
              No ano de 2001, teve início o Projeto Ide e Ensinai, em uma escola particular em Vitória da Conquista. Mas, na verdade, seu inicio foi bem antes, no coração de uma mãe que gostava de contar histórias bíblicas para seus quatro filhos. Eles amavam ouvir as histórias. Certo dia um dos filhos disse: Mãe, vá à minha escola contar estas histórias para meus colegas para que eles também conheçam sobre Deus e sua Palavra. A mãe então combinou com a diretora da escola para contar histórias da Bíblia uma vez por semana. As crianças amaram a ideia, faziam festa com a chegada da nova professora a cada semana. As professoras começaram a relatar a mudança de comportamento dos alunos no que se referia a pequenos furtos, brigas, palavrões etc.
            </p>

            <Link to="/ " className='btn btn-primary'>Saiba Mais</Link>
          </div>
        </div>
      </section>
      <Nav />
    </>
  )
}

export default AboutMoure