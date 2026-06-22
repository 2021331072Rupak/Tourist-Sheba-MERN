

import React from 'react'
import Slider from 'react-slick';
import ava01 from '../../assets/images/ava-1.jpg'
import ava02 from '../../assets/images/ava-2.jpg'
import ava03 from '../../assets/images/ava-3.jpg'
import ava04 from '../../assets/images/ava-4.jpg'

const Testimonials = () => {

    const settings = {
        dots:true,
        infinite:true,
        autoplay:true,
        speed:1000,
        swipeToSlide:true,
        autoplaySpeed:2000,
        slidesToShow:3,
        
        responsive: [
            {
                breakpoint:992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                },
            },
            {
                breakpoint:576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ]
    }

  return (
  <Slider {...settings}>
    <div className='testimonial py-4 px-3'>
        <p>
            I am extremely satisfied with Tourist Sheba’s service. They provided me with personalized recommendations and guidance that suited my interests and budget. Every step of the journey was smooth, and I felt supported throughout. I will definitely use their service again and recommend it to my friends and family. Tourist Sheba truly makes traveling easier and more enjoyable.
        </p>

        <div className='d-flex align-items-center gap-4 mt-3'>
            <img src={ava01} className='w-25 h-25 rounded-2' alt="" />
            <div>
                <h6 className='mb-0 mt-3'>Rakib</h6>
                <p>Customer</p>
            </div>
        </div>
    </div>
    <div className='testimonial py-4 px-3'>
        <p>
            I had an amazing experience using Tourist Sheba for my recent trip. The guidance provided was clear and accurate, which made navigating new places so much easier. The team was responsive and supportive whenever I had questions, and their tips helped me discover some hidden gems I wouldn’t have found on my own. I highly recommend Tourist Sheba to anyone looking for a hassle-free and enjoyable travel experience.
        </p>

        <div className='d-flex align-items-center gap-4 mt-3'>
            <img src={ava02} className='w-25 h-25 rounded-2' alt="" />
            <div>
                <h6 className='mb-0 mt-3'>Seyam</h6>
                <p>Customer</p>
            </div>
        </div>
    </div>
    <div className='testimonial py-4 px-3'>
        <p>
            Tourist Sheba made my travel planning completely stress-free. From the moment I submitted my query to the end of my journey, their team was professional, friendly, and very reliable. I appreciated the prompt responses and the detailed advice, which ensured I got the most out of my trip. It’s rare to find a service that genuinely cares about its travelers’ experience, and Tourist Sheba does that perfectly.
        </p>

        <div className='d-flex align-items-center gap-4 mt-3'>
            <img src={ava03} className='w-25 h-25 rounded-2' alt="" />
            <div>
                <h6 className='mb-0 mt-3'>Sakib</h6>
                <p>Customer</p>
            </div>
        </div>
    </div>
    <div className='testimonial py-4 px-3'>
        <p>
            Thanks to Tourist Sheba, my trip was one of the most memorable experiences I’ve ever had. Their detailed guidance, travel tips, and constant support helped me explore places I wouldn’t have dared to visit alone. Everything from transportation advice to sightseeing suggestions was spot on. I can confidently say that Tourist Sheba takes the worry out of traveling and replaces it with excitement and confidence.
        </p>

        <div className='d-flex align-items-center gap-4 mt-3'>
            <img src={ava04} className='w-25 h-25 rounded-2' alt="" />
            <div>
                <h6 className='mb-0 mt-3'>Mr. Jobbar</h6>
                <p>Customer</p>
            </div>
        </div>
    </div>
  </Slider>
);
};

export default Testimonials
