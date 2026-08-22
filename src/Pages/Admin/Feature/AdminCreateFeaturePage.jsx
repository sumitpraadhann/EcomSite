import React, { useState,useEffect } from 'react'
import AdminSidebar from '../../../Component/Admin/AdminSidebar'
  import { Link,useNavigate } from 'react-router-dom'
import TextValidators from '../../../validators/TextValidators'
import { useDispatch, useSelector } from 'react-redux'
import { createFeature, getFeature} from '../../../Redux/Actioncreator/FeatureActionCreator'


export default function AdminCreateFeaturePage() {

let [data,setdata] = useState({   
  name : '',
  icon :'',
  shortDescription :'',
  status : true
})

let [errormessage,seterror] = useState({
  name : "Name field is mandatory",
  icon : "Icon field is mandatory",
  shortDescription : "shortDescription field is mandatory"
})
let[show,setshow] = useState(false)
let  FeatureStateData = useSelector(state => state.FeatureStateData)
let navigate = useNavigate()
  let dispatch = useDispatch()


function getinputdata(e){
let {name,value} = e.target
setdata({...data,[name]:name ==="status"?value==="1"?true:false:value})
seterror({...errormessage, [name]: TextValidators(e)})
}

  function postdata(e){
  e.preventDefault()
  let error = Object.values(errormessage).find(x=>x!="")
  if(error)
    setshow(true)
  else{
    let item = FeatureStateData.find(x=>x.name.toLowerCase()===data.name.toLowerCase())
    if(item){
      seterror({...errormessage,name:"feature with This name Already Exist"})
      setshow(true)
      return
    }

dispatch(createFeature({...data}))
navigate("/admin/feature")

}
  }
  

useEffect(()=>{
  (()=>{
dispatch(getFeature())
  })()
  },[FeatureStateData.length])

  return (
          <>
             <div className="container-fluid my-3">
               <div className="row">
                   <div className="col-lg-3"> 
                <AdminSidebar/>
                   </div>
                   <div className="col-lg-9">
                     <h5 className='bg-primary p-2 text-light text-center'>Create feature
                     <Link to="/admin/feature">
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

                         <div className="col-12 mb-3">
                        <label>Short Description*</label>
                        <textarea
                         name='shortDescription'
                           value={data.shortDescription} onChange={getinputdata} 
                        rows={3}
                        placeholder='Feature Short Description' className={`form-control ${show && errormessage.shortDescription ? 'border-danger' : 'border-primary'}`} >
                        </textarea>
                        {show && errormessage.shortDescription?<p className='text-danger'>{errormessage.shortDescription}</p>:null}
                      </div>
          

                      <div className="col-lg-6 mb-3">
                        <label>Icon*</label>
                        <input type="text" name='icon' onChange={getinputdata}
                      placeholder="Icon Tag from bootstrap like <i class= 'bi bi-list'></i>"
                        className={`form-control ${show && errormessage.icon ? 'border-danger' : 'border-primary'}`} />
                        {show && errormessage.icon?<p className='text-danger'>{errormessage.icon}</p>:null}
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
