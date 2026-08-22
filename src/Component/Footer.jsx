import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'


export default function Footer() {
  let[settingdata,setsettingdata] = useState({
        sitename:import.meta.env.VITE_APP_SITE_NAME,
        map1:import.meta.env.VITE_APP_SITE_MAP1,
        address:import.meta.env.VITE_APP_SITE_ADDRESS,
        email:import.meta.env.VITE_APP_SITE_EMAIL,
        phone:import.meta.env.VITE_APP_SITE_PHONE,
        whatsapp:import.meta.env.VITE_APP_SITE_WHATSAPP,
        facebook:import.meta.env.VITE_APP_SITE_FACEBOOK,
        twitter:import.meta.env.VITE_APP_SITE_TWITTER,
        linkedin:import.meta.env.VITE_APP_SITE_LINKDEDIN,
        youtube:import.meta.env.VITE_APP_SITE_YOUTUBE,
        instagram:import.meta.env.VITE_APP_SITE_INSTAGRAM,
    })
  
  return (
    
    <>
    <div className="container-fluid bg-dark text-white-50 footer pt-5">
        <div className="container py-5">
            <div className="row g-5">
                <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.1s">
                    <Link to="./" className="d-inli mb-3">
                        <h1 className="text-white">{settingdata.sitename}</h1>
                    </Link>
                    <p className="mb-0 texlight">{settingdata.sitename} is dedicated to delivering high-quality fashion with comfort, style, and affordability. Explore our latest collections for men and women, designed to match every lifestyle while ensuring excellent quality and customer satisfaction </p>
                </div>
                <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.3s">
                    <h5 className="text-white mb-4">Get In Touch</h5>
                    <Link to={settingdata.map1} target='_blank' className='d-block text-light mb-2'><i className="fa fa-map-marker-alt me-3"></i>{settingdata.address}</Link>

                    <Link to={`mailto:${settingdata.email}`} target='_blank' className='d-block text-light mb-2'><i className="bi bi-envelope me-3"></i>{settingdata.email}</Link>

                    
                    <Link to={`tel:${settingdata.phone}`} target='_blank' className='d-block text-light mb-2'><i className="bi bi-telephone -marker-alt me-3"></i>{settingdata.phone}</Link>

                    

                    <Link to={`https://wa.me/${settingdata.whatsapp}`} target='_blank' className='d-block text-light mb-2'><i className="bi bi-whatsapp -marker-alt me-3"></i>{settingdata.whatsapp}</Link>
                    

                    <div className="d-flex pt-2">
                        <a className="btn btn-outline-light btn-square border-2 me-2" href={setsettingdata.twitter} target='_blank'><i
                                className="fab fa-twitter"></i></a>
                        <a className="btn btn-outline-light btn-square border-2 me-2" href={setsettingdata.facebook} target='_blank'><i
                                className="fab fa-facebook-f"></i></a>
                        <a className="btn btn-outline-light btn-square border-2 me-2" href={setsettingdata.youtube} target='_blank'><i
                                className="fab fa-youtube"></i></a>
                        <a className="btn btn-outline-light btn-square border-2 me-2" href={setsettingdata.instagram} target='_blank'><i
                                className="fab fa-instagram"></i></a>
                        <a className="btn btn-outline-light btn-square border-2 me-2" href={setsettingdata.linkedin} target='_blank'><i
                                className="fab fa-linkedin-in"></i></a>
                    </div>
                </div>
                <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.5s">
                    <h5 className="text-white mb-4">Quick Link</h5>
                    <Link className="btn btn-link text-light" href="">Home</Link>
                    <Link className="btn btn-link text-light" href="/about">About Us</Link>
                    <Link className="btn btn-link text-light" href="/shop">Shop</Link>
                    <Link className="btn btn-link text-light" href="/feature">Feature</Link>
                    <Link className="btn btn-link text-light" href="/faq">Faq</Link>
                </div>
                <div className="col-md-6 col-lg-3 wow fadeIn" data-wow-delay="0.7s">
                    <h5 className="text-white mb-4">Other links</h5>
                    <Link className="btn btn-link text-light" href="/testimonial">Testimonial</Link>
                    <Link className="btn btn-link text-light" href="/contact us">Conatact Us</Link>
                    <Link className="btn btn-link text-light" href="/privacy-policy">Privacy Policy</Link>
                    <Link className="btn btn-link text-light" href="/tc">Terms & Conditions</Link>
                    <Link className="btn btn-link text-light" href="refund-policy">Refund Policy</Link>
                </div>
            </div>
        </div>
        <div className="container wow fadeIn" data-wow-delay="0.1s">
            <div className="copyright">
                <div className="row">
                    <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                        &copy; <Link className="border-bottom" href="/">{settingdata.sitename}</Link>, All Right Reserved.

                        
                        Designed By <a className="border-bottom" href="https://htmlcodex.com">HTML Codex</a>. Distributed by
                        <a className="border-bottom" href="https://themewagon.com" target="_blank" className='d-block text-light'>ThemeWagon</a>
                    </div>
                    <div className="col-md-6 text-center text-md-end">
                        <div className="footer-menu">
                            <Link to="">Home</Link>
                            <Link to="/about">About</Link>
                            <Link to="shop">Shop</Link>
                            <Link to="faq">FAQs</Link>
                            <Link to="contact us">Contact us</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
