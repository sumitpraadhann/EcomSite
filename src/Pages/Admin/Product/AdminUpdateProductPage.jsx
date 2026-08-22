import React, { useState,useEffect } from 'react'
import AdminSidebar from '../../../Component/Admin/AdminSidebar'
  import { Link,useNavigate, useParams } from 'react-router-dom'
import TextValidators from '../../../validators/TextValidators'
import { useDispatch, useSelector } from 'react-redux'
import{getProduct,updateProduct} from "../../../Redux/Actioncreator/ProductActionCreator"



export default function AdminUpdateProductPage() {
let {id} = useParams()
let [data,setdata] = useState({   
  name : '',
  pic :'',
  status : true
})

let [errormessage,seterror] = useState({
  name : "",
  pic : ""
})
let[show,setshow] = useState(false)
let navigate = useNavigate()
 let  ProductStateData = useSelector(state => state.ProductStateData)
 let dispatch = useDispatch()

function getinputdata(e){
let name = e.target.name
let value = name === "pic"? "product/"+e.target.files[0].name : name === "status" ? (e.target.value === "1" ? true:false) : e.target.value

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
    let item = ProductStateData.find(x=>x.id !== id && x.name.toLowerCase()===data.name.toLowerCase())
    if(item){
      seterror({...errormessage,name:"Brand with This name Already Exist"})
      setshow(true)
      return
    }
dispatch(updateProduct({...data}))
// let formdata = new formdata()
// formdata.append("io",data.id) 
// formdata.append("name",data.name) 
// formdata.append("pic",data.pic) 
// formdata.append("status",data.status) 
// dispatch(createMaincategory(formdata))
navigate("/admin/product")

}
  }
  

useEffect(()=>{
  (()=>{
    dispatch((getProduct()))
    if(ProductStateData.length){
let item  = ProductStateData.find(x=>x.id===id)
if(item)
setdata({...data,...item})
else
  navigate("/admin/product")
    }

  })()
  },[ProductStateData.length])

  return (
          <>
             <div className="container-fluid my-3">
               <div className="row">
                   <div className="col-lg-3"> 
                <AdminSidebar/>
                   </div>
                   <div className="col-lg-9">
                     <h5 className='bg-primary p-2 text-light text-center'>Update Brand
                     <Link to="/admin/product">
                     <i className='bi bi-arrow-left text-light float-end'></i>
                     </Link>
                     </h5>
                      <form onSubmit={postdata}>
                    <div className="row">
                      <div className="col-12 mb-3">
                        <label>Name*</label>
                        <input type="text" name='name' value={data.name} onChange={getinputdata} placeholder='Prodcut name' className={`form-control ${show && errormessage.name ? 'border-danger' : 'border-primary'}`} />
                        {show && errormessage.name?<p className='text-danger'>{errormessage.name}</p>:null}
                      </div>
                  

                      <div className="col-lg-6 mb-3">
                        <label>Pic</label>
                        <input type="file" name='pic' onChange={getinputdata} className={`form-control ${show && errormessage.pic ? 'border-danger' : 'border-primary'}`} />
                        {show && errormessage.pic?<p className='text-danger'>{errormessage.pic}</p>:null}
                      </div>

                          <div className="col-lg-6 mb-4">
                        <label>Status</label>
                        <select name="status" value={data.status?"1":"0"} onChange={getinputdata} className="form-select border-primary">
                          <option value="1">Active</option>
                          <option value="0">Inactive</option>
                        </select>
                          </div>
                  
                          <div className="col-12 mb-3">
                            <button type='submit' className='btn btn-primary w-100'>Update</button>
                          </div>

                         </div>
                  </form>
                   </div>
               </div>
             </div>
           </> 
  )
}
