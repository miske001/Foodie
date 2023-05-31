import React, { useState } from 'react'
import logo from '../assets/Logo.svg'
import home_banner from '../assets/home-banner-image.png'
import home_pattern from '../assets/home-banner-background.png';
import {GiHamburgerMenu} from 'react-icons/gi'
import {AiOutlineClose} from 'react-icons/ai'

import useBodyScrollLock from '../customHooks/useBodyScrollLock';

const Header = () => {

  const [isLocked, toggle] = useBodyScrollLock();
  
  const [hambMenu, setHambMenu] = useState(false);

  const openHamb = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
    setHambMenu(true);
    toggle();
  }
  const closeHamb = () => {
    setHambMenu(false);
    toggle();
  }

  return (
    <div className='header--section'>
        <div className='bg-pattern-container'>
        <div className='bg-pattern'>
            <img src={home_pattern} alt="pattern" />
        </div>
        </div>
        <div className='nav--section'>
            <a href="#">
                <img className='logo' src={logo} alt="logo" />
            </a>
            <div className='nav-links'>
                <a href="#">Home</a>
                <a href="#about">About</a>
                <a href="#testimonial">Testimonials</a>
                <a href="#contact">Contact</a>
                <button className='booking-btn'>Booking now</button>
            </div>
            <div className='hamb' onClick={() => openHamb()}><GiHamburgerMenu style={{width:'100%', height:'100%'}}/></div>
            {hambMenu &&  (
                <div className='hamb-menu'> 
                    <div className='close-hamb' onClick={() => closeHamb()}><AiOutlineClose style={{width:'100%', height:'100%'}}/></div>
                    <div className='hamb-menu-links'>
                        <a href="#">Home</a>
                        <a href="about">About</a>
                        <a href="testimonial">Testimonials</a>
                        <a href="contact">Contact</a>
                    </div>
            </div>
            )}
            
        </div>
        <div className='order--section'>
            <div className='order-content'>
                <h1>Your Favourite Food Delivered Hot & Fresh</h1>
                <p>Healthy switcher chefs do all the prep work, like peeding, chopping & marinating, so you can cooka fresh food.</p>
                <button className='orange-btn'>Order Now</button>
            </div>
            <div className='order-img'>
                <img src={home_banner} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Header