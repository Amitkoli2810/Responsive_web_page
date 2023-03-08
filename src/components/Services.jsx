import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import Image1 from '../assests/3.jpg'
import Image2 from '../assests/4.jpg'

const Services = () => {
  return (
    <div className='services'>
        <Carousel infiniteLoop autoPlay showStatus={false} showArrows={false} interval={2000} showThumbs={false} showIndicators={false}>
            <div >
                <img src={Image1} alt="Item1" />
                <p className='legend'>Full stack</p>
            </div>
            <div>
                <img src={Image2} alt="Item2" />
                <p className='legend'>React Js</p>
            </div>
        </Carousel>
    </div>
  )
}

export default Services