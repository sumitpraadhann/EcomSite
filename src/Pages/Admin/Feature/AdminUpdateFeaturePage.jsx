  import React, { useState,useEffect } from 'react'
  import AdminSidebar from '../../../Component/Admin/AdminSidebar'
    import { Link,useNavigate, useParams } from 'react-router-dom'
  import imageValidators from '../../../validators/ImageValidators'
  import TextValidators from '../../../validators/TextValidators'
  import { useDispatch, useSelector } from 'react-redux'
  import{getFeature,updateFeature} from "../../../Redux/Actioncreator/FeatureActionCreator"



  export default function AdminUpdateFeaturePage() {
    let { id } = useParams()

let [data,setdata] = useState({   
  name : '',
  icon :'',
  shortDescription :'',
  status : true
})

let [errormessage,seterror] = useState({
  name : "",
  icon : "",
  shortDescription : ""
  })
  let[show,setshow] = useState(false)
  let  FeatureStateData = useSelector(state => state.FeatureStateData)
  let dispatch = useDispatch()
  let navigate = useNavigate()

 
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
      let item = FeatureStateData.find(x=>x.id !== id && x.name.toLowerCase()===data.name.toLowerCase())
      if(item){
        seterror({...errormessage,name:"feature with This name Already Exist"})
        setshow(true)
        return
      }
  dispatch(updateFeature({...data}))
  navigate("/admin/feature")

  }
    }
    

  useEffect(()=>{
    (()=>{
      dispatch((getFeature()))
      if(FeatureStateData.length){
  let item  = FeatureStateData.find(x=>x.id===id)
  if(item)
  setdata({...data,...item})
  else
    navigate("/admin/feature")
      }

    })()
    },[FeatureStateData.length])

    return (
            <>
                          <div className="container-fluid my-3">
                <div className="row">
                    <div className="col-lg-3">
                        <AdminSidebar />
                    </div>
                    <div className="col-lg-9">
                        <h5 className='bg-primary p-2 text-light text-center'>Update Feature
                            <Link to="/admin/feature">
                                <i className='bi bi-arrow-left text-light float-end'></i>
                            </Link>
                        </h5>
                        <form onSubmit={postdata}>
                            <div className="row">
                                <div className="col-12 mb-3">
                                    <label>Name*</label>
                                    <input type="text"
                                        name="name"
                                        value={data.name}
                                        onChange={getinputdata}
                                        placeholder='Feature Name'
                                        className={`form-control ${show && errormessage.name ? 'border-danger' : 'border-primary'}`}
                                    />
                                    {show && errormessage.name ? <p className='text-danger'>{errormessage.name}</p> : null}
                                </div>

                                   <div className="col-12 mb-3">
                        <label>Short Description*</label>
                        <textarea
                         name='shortDescription'
                           value={data.shortDescription}
                         onChange={getinputdata} 
                        rows={3}
                        placeholder='Feature Short Description' className={`form-control ${show && errormessage.shortDescription ? 'border-danger' : 'border-primary'}`} >
                        </textarea>
                        {show && errormessage.shortDescription?<p className='text-danger'>{errormessage.shortDescription}</p>:null}
                      </div>
          
                                <div className="col-lg-6 mb-3">
                                    <label>Icon*</label>
                                    <input type="text"
                                        name="icon"
                                        value={data.icon}
                                        onChange={getinputdata}
                                        placeholder="Icon Tag From Bootstrap like <i class='bi bi-list'></i>"
                                        className={`form-control ${show && errormessage.icon ? 'border-danger' : 'border-primary'}`}
                                    />
                                    {show && errormessage.icon ? <p className='text-danger'>{errormessage.icon}</p> : null}
                                </div>

                                <div className="col-lg-6 mb-3">
                                    <label>Status*</label>
                                    <select name="status"
                                        value={data.status ? "1" : "0"}
                                        onChange={getinputdata}
                                        className='form-select border-primary'>
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
