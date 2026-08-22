import React, { useState,useEffect } from 'react'
import AdminSidebar from '../../../Component/Admin/AdminSidebar'
  import { Link,useNavigate } from 'react-router-dom'
import imageValidators from '../../../validators/ImageValidators'
import TextValidators from '../../../validators/TextValidators'
import { useDispatch, useSelector } from 'react-redux'
import { createBrand, getBrand } from '../../../Redux/Actioncreator/BrandActionCreator'


export default function AdminCreateBrandPage() {

let [data,setdata] = useState({   
  name : '',
  pic :'',
  status : true
})

let [errormessage,seterror] = useState({
  name : "Name field is mandatory",
  pic : "Pic field is mandatory"
})
let[show,setshow] = useState(false)
let  BrandStateData = useSelector(state => state.BrandStateData)
let navigate = useNavigate()
  let dispatch = useDispatch()


function getinputdata(e){
let name = e.target.name
let value = name === "pic"? "brand/"+e.target.files[0].name : name === "status" ? (e.target.value === "1" ? true:false) : e.target.value

// let value = name === "pic"? +e.target.files[0]: name === "status" ? (e.target.value === "1" ? true:false) : e.target.value

setdata({...data,[name]:value})
seterror({...errormessage, [name]: name === "pic"? imageValidators(e): TextValidators(e)})
}

  function postdata(e){
  e.preventDefault()
  let error = Object.values(errormessage).find(x=>x!="")
  if(error)
    setshow(true)
  else{
    let item = BrandStateData.find(x=>x.name.toLowerCase()===data.name.toLowerCase())
    
    if(item){
      seterror({...errormessage,name:"Brand with This name Already Exist"})
      setshow(true)
      return
    }

dispatch(createBrand({...data}))
// let formdata = new formdata()
// formdata.append("name",data.name) 
// formdata.append("pic",data.pic) 
// formdata.append("status",data.status) 
// dispatch(createMaincategory(formdata))
navigate("/admin/brand")

}
  }
  

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
                     <h5 className='bg-primary p-2 text-light text-center'>Brand
                     <Link to="/admin/brand">
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
