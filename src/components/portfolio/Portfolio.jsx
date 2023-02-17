import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Do you keep them the same Text vs. Alt Text vs.',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/20675053-E-commerce-Web-Design'
  },
  {
    id: 2,
    image: IMG2,
    title: 'In this post, youll learn about Text vs. Alt Text vs.',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/20675053-E-commerce-Web-Design'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Alt Text vs. Alt Tag: Which Is Correct? learn about',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/20675053-E-commerce-Web-Design'
  },
  {
    id: 4,
    image: IMG4,
    title: 'What is Image Alt Text? Which Is Correct? Text vs.',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/20675053-E-commerce-Web-Design'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Because Google cannot exactly crawl Experience Should',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/20675053-E-commerce-Web-Design'
  },
  {
    id: 6,
    image: IMG6,
    title: 'User Intent & User Experience Should exactly crawl',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/20675053-E-commerce-Web-Design'
  },
];

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

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
                  <a href={github} className='btn'>Github</a>
                  <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
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