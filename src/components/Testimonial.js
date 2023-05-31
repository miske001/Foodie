import React from 'react'
import john from '../assets/john-doe-image.png';
import stars from '../assets/stars.png';

const Testimonial = () => {
  return (
    <div className='testimonial--section' id='testimonial'>
        <div className='work-content'>
            <h5 className='hd-sm work'>Testimonial</h5>
            <h1>What They Are Saying</h1>
            <p>Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et elit. Dolor  turpis molestie dui magnis facilisis at fringilla quam.</p>
        </div>
        <div className='testimonial-box'>
            <img className='profile-pic' src={john} alt="john" />
            <p>Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et elit. Dolor  turpis molestie dui magnis facilisis at fringilla quam.</p>
            <img className='rate-pic' src={stars} alt="stars" />
            <p>John Doe</p>
        </div>
        <div className='question-section'>
            <h1>Have Question In Mind?</h1>
            <h1>Let Us Help You</h1>
            <div className='input-container'>
                <input placeholder='yourmail@gmail.com' type="text" />
                <button className='orange-btn'>Submit</button>
            </div>
        </div>
    </div>
  )
}

export default Testimonial