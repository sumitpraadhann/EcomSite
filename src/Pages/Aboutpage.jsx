import React from 'react'
import Breadcrum from '../Component/Breadcrum'
import About from '../Component/About'
import Feature from '../Component/Feature'
import Testimonial from '../Component/Testimonial'
import Newsletter from '../Component/Newsletter'

export default function Aboutpage() {
  return (
    <>
     <Breadcrum title="About us"/> 
     <About/>
     <Feature/>
     <Testimonial/>
     <Newsletter/>
    </>
  )
}
