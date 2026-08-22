import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-creative';

// import required modules
import { EffectCreative ,Autoplay} from 'swiper/modules';


import About from '../Component/About'
import Feature from '../Component/Feature'
import Projectslider from '../Component/Productslider'
import Service from '../Component/service'
import Products from '../Component/Products'
import Testimonial from '../Component/Testimonial'
import Newsletter from '../Component/Newsletter'

const slideroption = {
      grabCursor : true,
        effect:'creative',
        loop:true,
        creativeEffect:{
          prev: {
            shadow: true,
            translate: [0, 0, -400],
          },
          next: {
            translate: ['100%', 0, 0],
          },
        },
         autoplay:{
          delay: 2000,
          disableOnInteraction: false,
        },
        modules:[EffectCreative,Autoplay],
        className:"mySwiper"
}

export default function Homepage() {
  return (
    <>
        <div className="container-fluid pb-5 hero-header bg-light mb-5">
        <div className="container py-5">
            <div className="row g-5 align-items-center mb-5">
                <div className="col-lg-6">
                    <h1 className="display-2 mb-4 animated slideInRight">Unbeatable deals on <span className='text-primary'>Everything</span> You Love<span className="text-primary">Home</span>
                        Better</h1>
                    <h5 className="d-inline-block border border-2 border-white py-3 px-5 mb-0 animated slideInRight">
                        Shop Smarter</h5>
                </div>
                <div className="col-lg-6">
                    <div className=" header-carousel animated fadeIn">
    <Swiper {...slideroption}>
                  <SwiperSlide>
                        <img className="img-fluid" src="img/hero-slider-1.jpg" alt=""/>
                  </SwiperSlide> 

                      <SwiperSlide>
                        <img className="img-fluid" src="img/hero-slider-2.jpg" alt=""/>
                      </SwiperSlide> 

                      <SwiperSlide>                   
                        <img className="img-fluid" src="img/hero-slider-3.jpg" alt=""/>
                     </SwiperSlide>                     
                     
                        </Swiper>
                    </div>
                </div>
            </div>
            <div className="row g-5 animated fadeIn">
                <div className="col-md-6 col-lg-3">
                    <div className="d-flex align-items-center">
                        <div className="flex-shrink-0 btn-square border border-2 border-white me-3">
                            <i className="bi bi-check text-primary"></i>
                        </div>
                        <h5 className="lh-base mb-0">Top Brands</h5>
                    </div>
                </div>
                <div className="col-md-6 col-lg-3">
                    <div className="d-flex align-items-center">
                        <div className="flex-shrink-0 btn-square border border-2 border-white me-3">
                            <i className="bi bi-tag text-primary"></i>
                        </div>
                        <h5 className="lh-base mb-0">Upto 90% Off</h5>
                    </div>
                </div>
                <div className="col-md-6 col-lg-3">
                    <div className="d-flex align-items-center">
                        <div className="flex-shrink-0 btn-square border border-2 border-white me-3">
                            <i className="bi bi-repeat text-primary"></i>
                        </div>
                        <h5 className="lh-base mb-0">7 Days Return</h5>
                    </div>
                </div>
                <div className="col-md-6 col-lg-3">
                    <div className="d-flex align-items-center">
                        <div className="flex-shrink-0 btn-square border border-2 border-white me-3">
                            <i className="bi bi-telephone text-primary"></i>
                        </div>
                        <h5 className="lh-base mb-0">24/7 Customer support</h5>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <About/>
    <Feature/>
    <Projectslider/>
    <Service/>
    <Products/>
    <Testimonial/>
    <Newsletter/>
    </>
  )
}
