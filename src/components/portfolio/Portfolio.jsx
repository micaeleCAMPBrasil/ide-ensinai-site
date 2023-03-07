import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.JPG'
import IMG3 from '../../assets/portfolio4.JPG'
import IMG4 from '../../assets/portfolio5.JPG'
import IMG5 from '../../assets/portfolio3.jpeg'
import IMG6 from '../../assets/portfolio6.jpg'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Acampamento na E.M. Maria Barbosa. Nos dias 26, 27 e 28 de agosto deste ano, o Instituto Ide e Ensinai em parceria com a E. M. Irmã Barbosa realizaram um acampadentro com as turmas de quarto e quinto anos.',
    github: 'http://ide-ensinai.blogspot.com/search/label/Acampadentro?m=0'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Na semana da Páscoa o Ide e Ensinai esteve na Creche Jurema, Escola M. Maria Santana e Colégio E. Fernando Spínola ministrando aulas e palestras com os temas "A Primeira Páscoa" e "A Páscoa Escondida".',
    github: 'http://ide-ensinai.blogspot.com/search/label/Ide%20e%20Ensinai?m=0'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Em Junho de 2012 o Instituto Ide e Ensinai contribuiu para a realização do Acampamento com 110 Crianças e Adolescentes do Projeto Patrulhando a Cidadania da Polícia Rodoviária Estadual. Foram distribuídos Novos Testamentos doados pela SBB.',
    github: 'http://ide-ensinai.blogspot.com/2012/07/em-junho-de-2012-o-instituto-ide-e.html?m=0'
  },
  {
    id: 4,
    image: IMG4,
    title: 'No dia 18 de julho 2012 o Instituto Ide e Ensinai atendeu as crianças do PEPE Bem Querer em Vitória da Conquista-BA. Momentos de grande alegria! Elas vibraram com os livros doados pela SBB, abriam e se deliciavam com as  figuras e comentavam as histórias que já são conhecidas delas.',
    github: 'http://ide-ensinai.blogspot.com/2012/07/visita-ao-pepe.html?m=0'
  },
  {
    id: 5,
    image: IMG5,
    title: 'As 3 grandes decisões. No dia 03/12/2012 estivemos na E. M. Maria Santana com uma lição especial sobre as 3 Grandes Decisões: Devo Fumar? Devo usar drogas? Devo beber? Houve participação dos educandos do 3º ao 5º ano fundamental nos turnos matutino e vespertino.',
    github: 'http://ide-ensinai.blogspot.com/2018/04/capacitacao-numa-parceria-do-instituto.html?m=0'
  },
  {
    id: 6,
    image: IMG6,
    title: 'No dia 14 de julho de 2012 O Ide e Ensinai atendeu com muita alegria o convite dos professores da sala de leitura da E.M. Guimarães Passos no bairro Guarany em Vitória da Conquista-BA.As crianças e adolescentes receberam literatura, ouviram histórias e se divertiram com as brincadeiras e músicas apresentadas pela equipe do Instituto.',
    github: 'http://ide-ensinai.blogspot.com/2012/07/escolas-atendidas.html?m=0'
  },
];

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>Conheça mais alguns</h5>
      <h2>Projetos</h2>

      <div className="container portfolio__container">

        {
          data.map(({ id, image, title, github, demo }) => {
            return (
              <article key={id} className='portfolio__item'>
                <div className="portfolio__item-image">
                  <img src={image} alt="" />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className='btn' target='_blank'>Saiba mais</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio