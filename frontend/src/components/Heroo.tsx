import React from 'react'
import Link from './Link'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';


import { Navigation } from 'swiper/modules';

const Heroo:React.FC = () => {
  return (
    <section id='hero'>
    <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
      <SwiperSlide><img src="https://glowing.g5plus.net/elementor/wp-content/uploads/2021/10/bg-slider-01.jpg" alt="" className='w-100' />
      <div className="swiper-text"  >
      <h6>ESSENTIALS ITEMS</h6>
             <h2 >Beauty Inspired <br /> by Real Life</h2>
            <p>Made using clean, non-toxic ingredients,<br /> our products are designed for everyone.</p>
            <Link linkIcindekiYazi = "Shop now"/>
      </div>
      </SwiperSlide>
      <SwiperSlide><img src="https://glowing.g5plus.net/elementor/wp-content/uploads/2021/10/bg-slider-02.jpg" alt="" className='w-100' />
      <div className="swiper-text" >
      <h6>ESSENTIALS ITEMS</h6>
             <h2>Get The Perfectly <br /> Hydrated Skin</h2>
            <p>Made using clean, non-toxic ingredients, <br />our products are designed for everyone.</p>
            <Link linkIcindekiYazi = "Shop now"/>
      </div>
      </SwiperSlide>
      <SwiperSlide><img src="https://glowing.g5plus.net/elementor/wp-content/uploads/2021/10/bg-slider-03.jpg" alt=""  className='w-100'/>
      <div className="swiper-text" >
      <h6>ESSENTIALS ITEMS</h6>
             <h2>Be Your Kind of Beauty</h2>
            <p>Made using clean, non-toxic ingredients, <br />our products are designed for everyone.</p>
            <Link linkIcindekiYazi = "Shop now"/>
      </div>
      </SwiperSlide>
      <SwiperSlide><img src="https://glowing.g5plus.net/elementor/wp-content/uploads/2021/10/bg-slider-01.jpg" alt="" className='w-100' />
      <div className="swiper-text" >
      <h6>ESSENTIALS ITEMS</h6>
             <h2 >Be Your Kind of Beauty</h2>
            <p>Made using clean, non-toxic ingredients,<br /> our products are designed for everyone.</p>
            <Link linkIcindekiYazi = "Shop now"/>
      </div>
      </SwiperSlide>
    </Swiper>
      </section>
  )
}

export default Heroo