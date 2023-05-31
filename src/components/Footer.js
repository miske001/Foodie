import React from 'react'

import { AiOutlineTwitter, AiFillLinkedin, AiFillYoutube, AiFillFacebook } from 'react-icons/ai'
/* import AiFillLinkedin from 'react-icons/ai' */

const Footer = () => {
  return (
    <div className='footer--section' id='contact'>
        <div className="footer-items">
            <div className='logo-social'>
                <h2>FOODIE</h2>
                <div className='social-icons'>
                    <a href=""><AiOutlineTwitter/></a>
                    <a href=""><AiFillLinkedin/></a>
                    <a href=''><AiFillYoutube/></a>
                    <a href=''><AiFillFacebook/></a>
                </div>
            </div>
            <div className='other'>
                <div className='info'>
                    <a href="">Quality</a>
                    <a href="">Help</a>
                    <a href="">Share</a>
                    <a href="">Carrers</a>
                    <a href="">Work</a>
                    <a href="">Testimonials</a>
                </div>
                <div className='info'>
                    <a href="">244-5333-7783</a>
                    <a href="">hello@food.com</a>
                    <a href="">press@food.com</a>
                    <a href="">contact@food.com</a>
                </div>
                <div className='info'>
                    <a href="">Terms & Conditions</a>
                    <a href="">Privacy Policy</a>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Footer