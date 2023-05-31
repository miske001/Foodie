import React from 'react'
import pick from '../assets/pick-meals-image.png'
import choose from '../assets/choose-image.png'
import delivery from '../assets/delivery-image.png'

const HowWork = () => {
  return (
    <div className='work--section'>
        <div className='work-content'>
            <h5 className='hd-sm work'>Work</h5>
            <h1>How It Works</h1>
            <p>Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et elit. Dolor  turpis molestie dui magnis facilisis at fringilla quam.</p>
        </div>
        <div className='work-cards'>
            <div className='work-card'>
                <img src={pick} alt="pick" />
                <p>Pick Meals</p>
                <p>Lorem ipsum dolor sit amet consectetur. Maecenas orci et sagittis duis elementum interdum facilisi bibendum.</p>
            </div>
            <div className='work-card'>
                <img src={choose} alt="pick" />
                <p>Choose How Often</p>
                <p>Lorem ipsum dolor sit amet consectetur. Maecenas orci et</p>
            </div>
            <div className='work-card'>
                <img src={delivery} alt="pick" />
                <p>Fast Deliveries</p>
                <p>Lorem ipsum dolor sit amet consectetur. Maecenas orci et lorem ipsum</p>
            </div>
        </div>
    </div>
  )
}

export default HowWork