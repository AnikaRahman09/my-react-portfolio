import React from 'react'
import './Skill.css'
import {BsFillPatchCheckFill} from 'react-icons/bs'

function Skill() {
  return (
    <section id="skill">
      <h5>What Skills I have</h5>
      <h2>My Experience</h2>

      <div className="container skill-container">
        
        <div className="skill-frontend">
            <h3>Frontend Development</h3>
            <div className="skill-content">
              
              <article className="skill-details">
                <BsFillPatchCheckFill className="skill-icon" />
                <h4>HTML</h4>
                </article>
                
                <article className="skill-details">
                <BsFillPatchCheckFill className="skill-icon" />
                <h4>CSS</h4>
                </article>

                <article className="skill-details">
                <BsFillPatchCheckFill className="skill-icon" />
                <h4>JavaSript</h4>
                </article>

                <article className="skill-details">
                <BsFillPatchCheckFill className="skill-icon" />
                <h4>Styled Components</h4>
                </article>

                <article className="skill-details">
                <BsFillPatchCheckFill className="skill-icon" />
                <h4>Bootstrap</h4>
                </article>

                <article className="skill-details">
                <BsFillPatchCheckFill className="skill-icon" />
                <h4>ReactJs</h4>
                </article>
              
              </div>
          </div>

          <div className="skill-others">
            <h3>Other Skills</h3>

            <div className="skill-content">
              
                <article className="skill-details">
                <BsFillPatchCheckFill className="skill-icon" />
                <h4>github</h4>
                </article>

                <article className="skill-details">
                <BsFillPatchCheckFill className="skill-icon"/>
                <h4>Netlify</h4>
                </article>
              
              </div>
            
            </div>
        
        </div>

    </section>
  )
}

export default Skill
