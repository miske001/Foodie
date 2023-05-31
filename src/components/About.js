import React from 'react'
import about_pattern from '../assets/about-background.png'
import about_meal from '../assets/about-background-image.png'

const About = () => {
  return (
    <>
    <div className='bg-pattern-container'>
        <div className='about-pattern'>
            <img src={about_pattern} alt="pattern" />
        </div>
    </div>
    <div className='about--section' id='about'>
        <div className='about-img'>
            <img src={about_meal} alt="" />
        </div>
        <div className='order-content'>
            <h5 className='hd-sm'>About</h5>
            <h1>Food Is An Important Part Of A Balanced Diet</h1>
            <p>Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et elit. Dolor  turpis molestie dui magnis facilisis at fringilla quam.</p>
            <div className='about-cta'>
                <button className='orange-btn'>Learn More</button>
                <button className='orange-btn'>Watch Video</button>
            </div>
        </div>
    </div>
    </>
    
  )
}

export default About