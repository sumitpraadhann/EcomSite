import React, { useState,useEffect } from 'react'
import AdminSidebar from '../../../Component/Admin/AdminSidebar'
  import { Link,useNavigate } from 'react-router-dom'
import imageValidators from '../../../validators/ImageValidators'
import TextValidators from '../../../validators/TextValidators'
import { useDispatch, useSelector } from 'react-redux'
import { createProduct, getProduct } from '../../../Redux/Actioncreator/ProductActionCreator'
import { getMaincategory } from '../../../Redux/Actioncreator/MainCategoryActionCreator'
import { getSubcategory } from '../../../Redux/Actioncreator/SubCategoryActionCreator'
import { getBrand } from '../../../Redux/Actioncreator/BrandActionCreator'


export default function AdminCreateProductPage() {

  const colors = ["Black","Red","Green","Yellow","Pink","White","Orange","Purple","Blue","N/A",]
  const sizes = ["XXXL","XXL","XL","L","M","S","XS","26","28","30","32","34","36","N?A"]

let [data,setdata] = useState({   
  name : '',
  maincategory : '',
  Subcategory : '',
  brand : '',
  color : [],
  size: [],
  baseprice : '',
  discount: '',
  finalprice : '',
  stock : true,
  stockquantity : '',
  pic :[],
  status : true
})

let [errormessage,seterror] = useState({
  name : "Name field is mandatory",
  baseprice : "Name field is mandatory",
  discount : "Name field is mandatory",
  stockquantity : "Name field is mandatory",
  color :"Please select atleast one color",
  size:  "Please select atleast one size",
  pic : "Pic field is mandatory"
})
let[show,setshow] = useState(false)
let  MaincategortyStateData = useSelector(state => state.MaincategortyStateData)
let  SubcategoryStateData = useSelector(state => state.SubcategoryStateData)
let  BrandStateData = useSelector(state => state.BrandStateData)


let navigate = useNavigate()
let dispatch = useDispatch()


function getinputdata(e){
let name = e.target.name
let value = name === "pic"? "product/"+e.target.files[0].name : name === "status" ? (e.target.value === "1" ? true:false) : e.target.value

// let value = name === "pic"? +e.target.files[0]: name === "status" ? (e.target.value === "1" ? true:false) : e.target.value

setdata({...data,[name]:value})
seterror({...errormessage, [name]: name === "pic"? imageValidators(e): TextValidators(e)})
}

function getinputcheckbox(key,value){
  let arr = data[key]
  if(arr.includes(value))
    arr = arr.filter(x=>x!==value)
  else
    arr.push(value)
  setdata({...data,[key]:arr})
seterror({...errormessage,[key]:arr.length===0?`Please select altleat One ${key}`:""})
}



  function postdata(e){
  e.preventDefault()
  let error = Object.values(errormessage).find(x=>x!="")
  if(error)
    setshow(true)
  else{
    let item = ProductStateData.find(x=>x.name.toLowerCase()===data.name.toLowerCase())
    
    if(item){
      seterror({...errormessage,name:"Brand with This name Already Exist"})
      setshow(true)
      return
    }

dispatch(createProduct({...data}))
// let formdata = new formdata()
// formdata.append("name",data.name) 
// formdata.append("pic",data.pic) 
// formdata.append("status",data.status) 
// dispatch(createMaincategory(formdata))
navigate("/admin/product")

}
  }
  

useEffect(()=>{
  (()=>{
dispatch(getMaincategory())
  })()
  },[MaincategortyStateData.length])

 useEffect(()=>{
  (()=>{
dispatch(getSubcategory())
  })()
  },[SubcategoryStateData.length])
 

 useEffect(()=>{
  (()=>{
dispatch(getBrand())
  })()
  },[BrandStateData.length])
 
  return (
          <>
             <div className="container-fluid my-3">
               <div className="row">
                   <div className="col-lg-3"> 
                <AdminSidebar/>
                   </div>
                   <div className="col-lg-9">
                     <h5 className='bg-primary p-2 text-light text-center'> Create Product
                     <Link to="/admin/product">
                     <i className='bi bi-arrow-left text-light float-end'></i>
                     </Link>
                     </h5>
                      <form onSubmit={postdata}>
                    <div className="row">
                      <div className="col-12 mb-3">
                        <label>Name*</label>
                        <input type="text" name='name' onChange={getinputdata} placeholder='Prodcut name' className={`form-control ${show && errormessage.name ? 'border-danger' : 'border-primary'}`} />
                        {show && errormessage.name?<p className='text-danger'>{errormessage.name}</p>:null}
                      </div>

                      <div className="col-lg-3 col-md-6 mb-3">
                        <label>Maincategory*</label>
                        <select name="maincategory" className='form-select border-primary'>
                          {MaincategortyStateData.filter(x=>x.status).map((item,index)=>{
                           return <option key={index}>{item.name}</option>
                          //  return <option key={index} value={item.id}>{item.name}</option>
                          })}
                        </select>
                      </div>

                       <div className="col-lg-3 col-md-6 mb-3">
                        <label>Subcategory*</label>
                        <select name="subcategory" className='form-select border-primary'>
                          {SubcategoryStateData.filter(x=>x.status).map((item,index)=>{
                           return <option key={index}>{item.name}</option>
                          //  return <option key={index} value={item.id}>{item.name}</option>
                          })}
                        </select>
                      </div>

                       <div className="col-lg-3 col-md-6 mb-3">
                        <label>Brand*</label>
                        <select name="brand" className='form-select border-primary'>
                          {BrandStateData.filter(x=>x.status).map((item,index)=>{
                           return <option key={index}>{item.name}</option>
                          //  return <option key={index} value={item.id}>{item.name}</option>
                          })}
                        </select>
                      </div>

                      <div className="col-lg-3 col-md-6 mb-3">
                        <label>Stock*</label>
                        <select name="stock" className='form-select border-primary'>
                          <option value="1">Yes</option>
                          <option value="0">No</option>
                        </select>
                      </div>

                      <div className="col-lg-4 col-md-6 mb-3">
                        <label>Base Price*</label>
                        <input type="text" name='baseprice' onChange={getinputdata} placeholder='Product Base Price' className={`form-control ${show && errormessage.baseprice ? 'border-danger' : 'border-primary'}`} />
                        {show && errormessage.baseprice?<p className='text-danger'>{errormessage.baseprice}</p>:null}
                      </div>

                       <div className="col-lg-4 col-md-6 mb-3">
                        <label>Discount Price*</label>
                        <input type="text" name='discount' onChange={getinputdata} placeholder='Product discount Price' className={`form-control ${show && errormessage.discount ? 'border-danger' : 'border-primary'}`} />
                        {show && errormessage.discount?<p className='text-danger'>{errormessage.discount}</p>:null}
                      </div>

                       <div className="col-lg-4 col-md-6 mb-3">
                        <label>Stock Quantity*</label>
                        <input type="text" name='stockquantity' onChange={getinputdata} placeholder='Stock Quantity' className={`form-control ${show && errormessage.stockquantity ? 'border-danger' : 'border-primary'}`} />
                        {show && errormessage.stockquantity?<p className='text-danger'>{errormessage.stockquantity}</p>:null}
                       </div>

                      <div className="col-12 mb-3">
                        <label>Color*</label>
                        <div className="row border border-1 border-primary m-1 p-2">
                          {colors.map((item,index)=>{
                            return <div className="col-xl-2 col-md-3 col-4" key={index}>
                              <input type="checkbox" name={item} value={item} id={item} onChange={()=>getinputcheckbox('color',item)} checked={data.color?.includes(item)}/>
                              <label htmlFor="item">{item}</label>
                            </div>
                          })}
                        </div>
                         {show && errormessage.color?<p className='text-danger'>{errormessage.color}</p>:null}
                      </div>

                      <div className="col-12 mb-3">
                        <label>Sizes*</label>
                        <div className="row border border-1 border-primary m-1 p-2">
                          {sizes.map((item,index)=>{
                            return <div className="col-xl-2 col-md-3 col-4" key={index}>
                              <input type="checkbox" name={item} value={item} id={item} onChange={()=>getinputcheckbox('size',item)} checked={data.size?.includes(item)}/>
                              <label htmlFor="item">{item}</label>
                            </div>
                          })}
                        </div>
                         {show && errormessage.size?<p className='text-danger'>{errormessage.size}</p>:null}
                      </div>
                      
                      
                                       
                      <div className="col-lg-6 mb-3">
                        <label>Pic*</label>
                        <input type="file" name='pic' onChange={getinputdata} className={`form-control ${show && errormessage.pic ? 'border-danger' : 'border-primary'}`} />
                        {show && errormessage.pic?<p className='text-danger'>{errormessage.pic}</p>:null}
                      </div>

                            <div className="col-lg-6 mb-4">
                          <label>Status*</label>
                          <select name="status" onChange={getinputdata} className="form-select border-primary">
                            <option value="1">Active</option>
                            <option value="0">Inactive</option>
                          </select>
                           </div>
                   
                          <div className="col-12 mb-3">
                            <button type='submit' className='btn btn-primary w-100'>Create</button>
                          </div>
                        
                         </div>
                  </form>
                   </div>
               </div>
             </div>
           </> 
  )
}
