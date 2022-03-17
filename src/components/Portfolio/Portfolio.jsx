import React from 'react'
import './Portfolio.css'
import IMG1 from '../../images/project-img.jpg'
import IMG2 from '../../images/project-img.jpg'
import IMG3 from '../../images/project-img.jpg'
import IMG4 from '../../images/project-img.jpg'
import IMG5 from '../../images/project-img.jpg'
import IMG6 from '../../images/project-img.jpg'



const data = [
  {
    id: 1,
    image: IMG1,
    title: 'This is Item 1',
    github: 'http://github.com',
    demo: 'https://app.netlify.com/teams'
  },

  {
    id: 2,
    image: IMG1,
    title: 'This is Item 2',
    github: 'http://github.com',
    demo: 'https://app.netlify.com/teams'
  },

  {
    id: 3,
    image: IMG1,
    title: 'This is Item 3',
    github: 'http://github.com',
    demo: 'https://app.netlify.com/teams'
  },

  {
    id: 4,
    image: IMG1,
    title: 'This is Item 4',
    github: 'http://github.com',
    demo: 'https://app.netlify.com/teams'
  },

  {
    id: 5,
    image: IMG1,
    title: 'This is Item 5',
    github: 'http://github.com',
    demo: 'https://app.netlify.com/teams'
  },

  {
    id: 6,
    image: IMG1,
    title: 'This is Item 6',
    github: 'http://github.com',
    demo: 'https://app.netlify.com/teams'
  }
]



export default function Portfolio() {
  return (
    <section id="portfolio">

      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio-container">
        
        
        {
          data.map(({id, image, title, github, demo}) => {
            return(
            <article key={id} className="portfolio-item">

          <div className="portfolio-item-image">
             <img src={image} alt="" />
          </div>
            <h3>{title}</h3>
            
            <div className="portfolio-item-cta">
              <a href={github} className="btn" target="_blank">Github</a>
              <a href={demo} className="btn btn-primary" target="_blank">Live Demo</a>
            </div>
          </article>
            )
          })
        }

      </div>  
      
    </section>
  )
}
