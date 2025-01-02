import React from 'react'
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaGithub } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import './Style/Contact.css'

const Contact = () => {
  return (
    <div>
      <div className="container contact my-5"id='contact'>
        <h1 className='my-3'>CONTACT ME</h1>
        <p className='my-4 para'>I 'm available on so many platform</p>
        <div className="contact-icon"data-aos="zoom-in-up" data-aos-duration="1000">
          <a href='' target='_blank' className="items"><FaInstagramSquare className='icons'/></a>
          <a href='' target='_blank' className="items"><FaFacebook className='icons'/></a>
          <a href='https://www.linkedin.com/in/ravi-rao-b478a932a/' target='_blank' className="items"><FaLinkedin className='icons'/></a>
          <a href='' target='_blank' className="items"><IoLogoWhatsapp className='icons'/></a>
          <a href='https://github.com/ravirao07' target='_blank' className="items"><FaGithub className='icons'/></a>
          <a href='mailto:5030ravirao07@gmail.com' target='_blank' className="items"><SiGmail className='icons'/></a>
        </div>
      </div>
    </div>
  )
}

export default Contact