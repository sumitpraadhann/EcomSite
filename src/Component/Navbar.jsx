import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
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
    <div className='bg-dark'>
             <div className="container fluid">
              <div className="row p-4 align-items-center justify-content- between"> 
            <div className="col-lg-8 d-flex gap-7">
                 <Link to={settingdata.map1} target='_blank' className=' btn'>< i className='bi bi-geo-alt text-light me-1'></i><span className='text-light fs-6'>{settingdata.address}</span></Link>

                 
                 <Link to={`mail to:${settingdata.email}`} target='_blank' className=' btn'>< i className='bi bi-envelope text-light me-1 '></i><span className='text-light fs-6'>{settingdata.email}</span></Link>

                 
                 <Link to={`tele:${settingdata.phone}`} target='_blank' className=' btn'>< i className='bi bi-telephone text-light me-1 '></i><span className='text-light fs-6'>{settingdata.phone}</span></Link>

                 
                 <Link to={`https://wa.me${settingdata.whatsapp}`} target='_blank' className=' btn'>< i className='bi bi-whatsapp text-light me-1 '></i><span className='text-light  fs-6 '>{settingdata.whatsapp}</span></Link>
            </div>

            <div className="col-lg-4 col-12 d-flex justify-content-end gap-">                
        <Link to={settingdata.facebook} target='_blank' className='me-4 btn'>< i className='bi bi-facebook text-light fs-4'></i></Link>
        <Link to={settingdata.twitter} target='_blank' className='me-4 btn'>< i className='bi bi-twitter text-light fs-4'></i></Link>
        <Link to={settingdata.linkedin} target='_blank' className='me-4 btn'>< i className='bi bi-linkedin text-light fs-4'></i></Link>
        <Link to={settingdata.youtube} target='_blank' className='me-4 btn'>< i className='bi bi-youtube text-light fs-4'></i></Link>
        <Link to={settingdata.instagram} target='_blank' className='me-4 btn'>< i className='bi bi-instagram text-light fs-4'></i></Link>
            </div>
            </div>
      </div>
    </div>
     <div className="container-fluid sticky-top">
        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light border-bottom border-2 border-white">
                <Link to="/" className="navbar-brand">
                    <h1>{settingdata.sitename}</h1>
                </Link>
                <button type="button" className="navbar-toggler ms-auto me-4btn" data-bs-toggle="collapse"
                    data-bs-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav ms-auto">
                        <NavLink to="/" className="nav-item nav-link active">Home</NavLink>
                        <NavLink to="/about" className="nav-item nav-link active">About</NavLink>
                        <NavLink to="/shop" className="nav-item nav-link active">Shop</NavLink>
                        <NavLink to="/feature" className="nav-item nav-link active">Feature</NavLink>
                        <NavLink to="/faq" className="nav-item nav-link active">Faq</NavLink>
                        <NavLink to="/testimonial" className="nav-item nav-link active">Testimonial</NavLink>
                        <NavLink to="/contact" className="nav-item nav-link active">Contact us</NavLink>
                        <NavLink to="/admin" className="nav-item nav-link active">Admin</NavLink>

                        <div className="nav-item dropdown">
                            <a href="#!" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Sumit pradhan</a>
                            <div className="dropdown-menu bg-light mt-2">
                                <Link to="/profile?option=profile" className="dropdown-item">Profile</Link>
                                <Link to="/admin" className="dropdown-item">Admin dashboard</Link>
                                <Link to="/profile?option=wishlist" className="dropdown-item">Wishlist</Link>
                                <Link to="/profile?optionorders" className="dropdown-item">Orders</Link>
                                <Link to="/profile?option=address" className="dropdown-item">Address</Link>
                                <Link to="/cart" className="dropdown-item">Cart</Link>
                                <Link to="/checkout" className="dropdown-item">Checkout</Link>
                                    <button className="dropdown-item"></button>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    </div>
    </>
  )
}
