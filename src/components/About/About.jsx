import React from 'react'
import './About.css'
import AboutImg from '../../images/IMG_20210218_024858.jpg'
import {FaAward} from 'react-icons/fa'

export default function About() {
  return (
    <section id="about">
      
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about-container">
        
        <div className="about-me">
          <div className="about-me-img">
            <img src={AboutImg} alt="" />
          </div>
        </div>

        <div className="about-content">
          <div className="about-cards">
            <article className="about-card">
              <FaAward className="about-icon"/>
              <h5>Experience</h5>
              <small>3+ Years Working</small>  
            </article>  

            <article className="about-card">
              <FaAward className="about-icon"/>
              <h5>Clients</h5>
              <small>200+ clients worldwide</small>   
            </article>

            <article className="about-card">
              <FaAward className="about-icon"/>
              <h5>Projects</h5>
              <small>80+ projects</small>  
            </article>
          </div>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque ab minima doloribus quia ipsa quae quod aspernatur. Delectus nemo voluptatibus quibusdam a et autem, reprehenderit tempora, adipisci nobis eum labore necessitatibus. Quisquam possimus nostrum quod mollitia!</p>

          <a href="#contact" className= "btn btn-primary">Let's Talk</a>
        </div>
        
      </div>
      
      </section>
  )
}
