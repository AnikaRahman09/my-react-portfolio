import React from 'react'
import CV from '../../images/CV-Of-Anika-Rahman.pdf'


function CallToAction() {
  return (
    <div className="cta">
        <a href={CV} download className="btn">Download CV</a>
        <a href="#Contact" className="btn btn-primary">Let's Talk</a>
        
    </div>
  )
}

export default CallToAction;