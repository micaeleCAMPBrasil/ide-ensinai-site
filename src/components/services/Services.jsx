import React from 'react'
import './services.css'
// import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>O Instrituto IDE E Ensinai tem por</h5>
      <h2>Finalizades</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Trabalhos Sociais</h3>
          </div>

          <ul className="service__list">
            <li>
              <p>Promoção da assistência social.</p>
            </li>
            <li>
              <p>Promoção gratuita da saúde, observando-se a forma complementar de participação das organizações de que trata esta Lei.</p>
            </li>
            <li>
              <p>Defesa, preservação e conservação do meio ambiente e promoção do desenvolvimento sustentável.</p>
            </li>
            <li>
              <p>Promoção de direitos estabelecidos, construção de novos direitos e assessoria jurídica gratuita de interesse suplementar.</p>
            </li>
          </ul>
        </article>

        {/* END OF UI//UX */}

        <article className="service">
          <div className="service__head">
            <h3>Educação</h3>
          </div>

          <ul className="service__list">
            <li>
              <p>Promoção gratuita da educação, observando-se a forma complementar de participação das organizações de que trata esta Lei.</p>
            </li>
            <li>
              <p>Estudos e pesquisas, desenvolvimento de tecnologias alternativas, produção e divulgação de informações e conhecimentos técnicos e científicos.</p>
            </li>
            <li>
              <p>Promoção do Ensino do Esporte e outras atividades desportivas.</p>
            </li>
            <li>
              <p>Promoção da atenção Psico-Social, desenvolvimento de pesquisas bem como a edição de material cientifico fruto de pesquisas e atendimento a pessoas e comunidades que serão alvo das ações afirmativas de direitos sociais e políticas públicas.</p>
            </li>
          </ul>
        </article>

        {/* END OF WEB DEVELOPMENT */}        

        <article className="service">
          <div className="service__head">
            <h3>Trabalhos com a Comunidade</h3>
          </div>

          <ul className="service__list">
            <li>
              <p>Promoção de treinamentos e cursos gratuitos para a comunidade carente. Devendo ser ministrados em locais fixos ou unidades móveis, abragendo além de cursos na área de tecnologia de informação, outros de aprendizagem profissional nas áreas comercial, industrial, manejo de técnicas agrícola, turismo, hotelaria e demais setores de serviços. Sendo preferencialmente realizados em sintonia com as organizações populares e objeto de parcerias.</p>
            </li>
            <li>
              <p>Desenvolver ações sociais e atividades de educação complementar gratuita voltada para a necessidade de trabalho, envolvendo: a formação, seleção, recrutamento, capacitação, colocação, qualificação e requalificação de mão de obra, inclusive, programas de educação e ação social implantados e implementados pelo setor público no âmbito nacional.</p>
            </li>
          </ul>
        </article>
        {/* END OD CONTENT CREATION */}
      </div>
    </section>
  )
}

export default Services