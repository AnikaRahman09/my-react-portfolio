import React, { useRef } from 'react'
import './Contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {AiOutlineLinkedin} from 'react-icons/ai'
import emailjs from 'emailjs-com'


export default function Contact() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_y6lz0vf', 'template_yxd4oae', form.current, 'zfoBI3FVnC1uFPWUr')
      
      .then((result) => {
        e.target.reset();
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Conatact Me</h2>

      <div className="container contact-container">

        <div className="contact-options">
            <article className="contact-option">
              <MdOutlineEmail className="contact-option-icon"/>
              <h4>Email</h4>
              <h5>antaraanika28@gmail.com</h5>
              <a href="mailto:antaraanika28@gmail.com">Send an email</a>
            </article>

            <article className="contact-option">
              <AiOutlineLinkedin className="contact-option-icon"/>
              <h4>LinkedIn</h4>
              <h5>Anika Rahman</h5>
              <a href="https://www.linkedin.com/in/anika-rahman-a68761217/" target="_blank">Send a message</a>
            </article>

            <article className="contact-option">
              <RiMessengerLine className="contact-option-icon"/>
              <h4>Messenger</h4>
              <h5>Anika Rahman</h5>
              <a href="https://www.facebook.com/messages/t/100008947924483/" target="_blank">Send a message</a>
            </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
              <input type="text" name="name" placeholder="Your Full Name" required />
              <input type="email" name="email" placeholder="Your Email" required />
              <textarea name="message" rows="6" placeholder="Your Message" required></textarea>
              <button type="submit" className="btn btn-primary">Send Message</button>

        </form>
      </div>
    </section>
  )
}
