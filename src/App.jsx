

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './Component/Navbar';
import Footer from './Component/Footer';

import Homepage from './Pages/Homepage';
import Aboutpage from './Pages/Aboutpage';
import Features from './Pages/Featurespage';
import Shoppage from './Pages/Shoppage';
import Productpage from './Pages/Productpage';
import Testimonialpage from './Pages/Testimonialpage';
import Errorpage from './Pages/Errorpage';
import Contactuspage from './Pages/Contactuspage';
import Refundpolicypage from './Pages/policypages/Refundpolicypage';
import Datapolicypage from './Pages/policypages/Datapolicypage';
import Privacypolicypage from './Pages/policypages/Privacypolicypage';
import AdminHomePage from './Pages/Admin/AdminHomePage';


import AdminMainCategoryPage from './Pages/Admin/Maincategory/AdminMainCategoryPage';
import AdminCreateMaincategoryPage from './Pages/Admin/Maincategory/AdminCreateMaincategoryPage';
import AdminUpdateMaincategoryPage from './Pages/Admin/Maincategory/AdminUpdateMainCategoryPage';


import AdminSubCategoryPage from './Pages/Admin/Subcategory/AdminSubCategoryPage';
import AdminCreateSubcategoryPage from './Pages/Admin/Subcategory/AdminCreateSubcategoryPage';
import AdminUpdateSubcategoryPage from './Pages/Admin/Subcategory/AdminUpdateSubCategoryPage';

import AdminBrandPage from './Pages/Admin/Brand/AdminBrandPage';
import AdminCreateBrandPage from './Pages/Admin/Brand/AdminCreateBrandPage';
import AdminUpdateBrandPage from './Pages/Admin/Brand/AdminUpdateBrandPage';


import AdminFeaturePage from './Pages/Admin/Feature/AdminFeaturePage';
import AdminCreateFeaturePage from './Pages/Admin/Feature/AdminCreateFeaturePage';
import AdminUpdateFeaturePage from './Pages/Admin/Feature/AdminUpdateFeaturePage';


import AdminFaqPage from './Pages/Admin/Faq/AdminFaqPage';
import AdminCreateFaqPage from './Pages/Admin/Faq/AdminCreateFaqPage';
import AdminUpdateFaqPage from './Pages/Admin/Faq/AdminUpdateFaqPage';

import AdminSettingPage from './Pages/Admin/Setting/AdminSettingPage';
import AdminProductPage from './Pages/Admin/Product/AdminProductPage';
import AdminCreateProductPage from './Pages/Admin/Product/AdminCreateProductPage';
import AdminUpdateProductPage from './Pages/Admin/Product/AdminUpdateProductPage';



export default function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<Aboutpage />} />
        <Route path="/feature" element={<Features />} />
        <Route path="/Shop" element={<Shoppage/>} />
        <Route path="/product" element={<Productpage/>} />
        <Route path="/Testimonial" element={<Testimonialpage/>} />
        <Route path="Contact" element={<Contactuspage/>} />


        <Route path="Privacy policy" element={<Privacypolicypage/>} />
        <Route path="Data policy" element={<Datapolicypage/>} />
        <Route path="Refund policy" element={<Refundpolicypage/>} />


{/* Admin routes */}
        <Route path="/admin" element={<AdminHomePage/>} />
        <Route path="/admin/maincategory" element={<AdminMainCategoryPage/>} />
        <Route path="/admin/maincategory/create" element={<AdminCreateMaincategoryPage/>} />
        <Route path="/admin/maincategory/update/:id" element={<AdminUpdateMaincategoryPage/>} />



        <Route path="/admin/subcategory" element={<AdminSubCategoryPage/>} />
        <Route path="/admin/subcategory/create" element={<AdminCreateSubcategoryPage/>} />
        <Route path="/admin/subcategory/update/:id" element={<AdminUpdateSubcategoryPage/>} />



        <Route path="/admin/brand" element={<AdminBrandPage/>} />
        <Route path="/admin/brand/create" element={<AdminCreateBrandPage/>} />
        <Route path="/admin/brand/update/:id" element={<AdminUpdateBrandPage/>} />


        <Route path="/admin/feature" element={<AdminFeaturePage/>} />
        <Route path="/admin/feature/create" element={<AdminCreateFeaturePage/>} />
        <Route path="/admin/feature/update/:id" element={<AdminUpdateFeaturePage/>} />


        <Route path="/admin/faq" element={<AdminFaqPage/>} />
        <Route path="/admin/faq/create" element={<AdminCreateFaqPage/>} />
        <Route path="/admin/faq/update/:id" element={<AdminUpdateFaqPage/>} />
        

         <Route path="/admin/setting" element={<AdminSettingPage/>} />

         <Route path="/admin/product" element={<AdminProductPage/>} />
        <Route path="/admin/product/create" element={<AdminCreateProductPage/>} />
        <Route path="/admin/product/update/:id" element={<AdminUpdateProductPage/>} />


        <Route path="/*" element={<Errorpage/>} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}
