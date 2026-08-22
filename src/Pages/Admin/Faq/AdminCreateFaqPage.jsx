import React, { useState,useEffect } from 'react'
import AdminSidebar from '../../../Component/Admin/AdminSidebar'
  import { Link,useNavigate } from 'react-router-dom'
import TextValidators from '../../../validators/TextValidators'
import { useDispatch, useSelector } from 'react-redux'
import { createFaq, getFaq} from '../../../Redux/Actioncreator/FaqActionCreator '


export default function AdminCreateFaqPage() {

let [data,setdata] = useState({   
  questions : '',
  Answer :'',
  status : true
})

let [errormessage,seterror] = useState({
  questions : "Question field is mandatory",
  Answer : "Answer field is mandatory",
})
let[show,setshow] = useState(false)
let  FaqStateData = useSelector(state => state.FaqStateData)
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
    let item = FaqStateData.find(x=>x.questions.toLowerCase()===data.questions.toLowerCase())
    if(item){
      seterror({...errormessage,name:"faq with This question Already Exist"})
      setshow(true)
      return
    }

dispatch(createFaq({...data}))
navigate("/admin/faq")

}
  }
  

useEffect(()=>{
  (()=>{
dispatch(getFaq())
  })()
  },[FaqStateData.length])

  return (
          <>
             <div className="container-fluid my-3">
               <div className="row">
                   <div className="col-lg-3"> 
                <AdminSidebar/>
                   </div>
                   <div className="col-lg-9">
                     <h5 className='bg-primary p-2 text-light text-center'>Create faq
                     <Link to="/admin/faq">
                     <i className='bi bi-arrow-left text-light float-end'></i>
                     </Link>
                     </h5>
                      <form onSubmit={postdata}>
                    <div className="row">
                      <div className="col-12 mb-3">
                        <label>Question*</label>
                        <input type="text" name='questions' 
                        value={data.questions}  
                        onChange={getinputdata} placeholder='Faq-question' className={`form-control ${show && errormessage.questions ? 'border-danger' : 'border-primary'}`} />
                        {show && errormessage.questions?<p className='text-danger'>{errormessage.questions}</p>:null}
                      </div>

                         <div className="col-12 mb-3">
                        <label>Answer*</label>
                        <textarea
                         name='Answer'
                           value={data.Answer} onChange={getinputdata} 
                        rows={3}
                        placeholder='Faq Answer' className={`form-control ${show && errormessage.Answer ? 'border-danger' : 'border-primary'}`} >
                        </textarea>
                        {show && errormessage.Answer?<p className='text-danger'>{errormessage.Answer}</p>:null}
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
