  import React, { useEffect, useRef,useState } from 'react'
  import AdminSidebar from '../../../Component/Admin/AdminSidebar'
  import{getSetting,createSetting,updateSetting} from "../../../Redux/Actioncreator/SettingActionCreator"
  import { useDispatch, useSelector } from 'react-redux'
    import { ToastContainer, toast } from 'react-toastify';

    import { createStructuredContent } from '../../../rte/richTextEditorBridge';
    import RichTextEditor from '../../../rte//RichTextEditor';



  export default function AdminSettingPage() {
  let editorRefPrivacypolicy = useRef(null);
  let editorRefTermsAndconditions = useRef(null);
  let editorRefRefundpolicy = useRef(null);

  let [privacypolicy, setprivacypolicy] = useState("");
  let [termsAndconditions, settermsAndconditions] = useState("");
  let [refundpolicy, setrefundpolicy] = useState("");
    let [data,setdata] = useState({
      siteName:"",
      email:"",
      map1:"",
      map2:"",
      Address:"",
      phone:"",
      Whatsapp:"",
      facebook:"",
      twitter:"",
      instagram:"",
      linkdein:"",
      youtube:"",
    })
  let  SettingStateData = useSelector(state => state.SettingStateData)
  let dispatch = useDispatch()
    
  function getinputdata(e){
    let {name,value}= e.target
    setdata({...data,[name]:value})
  }

  function postdata(e){
    e.preventDefault()
    let item = {
      ...data,
      privacypolicy:privacypolicy,
      termsAndconditions:termsAndconditions,
       refundpolicy:refundpolicy,
      
    }
    if(SettingStateData.length)
      dispatch(updateSetting({...item,id:SettingStateData[0].id}))
    else
      dispatch(createSetting({...item}))
    toast("Setting data has been updated")
  }

    function syncDocument(documentModel, nextHtml,Option) {
    const resolvedHtml = nextHtml !== undefined ? nextHtml : renderHTML(documentModel);
    if(Option==='privacypolicy')
      setprivacypolicy (resolvedHtml);
    else if(Option === "termsAndconditions")
      settermsAndconditions(resolvedHtml);  
    else
      setrefundpolicy(resolvedHtml)
  }

    useEffect(()=>{
    (()=>{
  dispatch(getSetting())
                if (SettingStateData.length) {
                setdata({ ...data, ...SettingStateData[0] })
                setTimeout(() => {
                    syncDocument(createStructuredContent(""), SettingStateData[0].privacypolicy ?? "", "privacypolicy");
                    syncDocument(createStructuredContent(""), SettingStateData[0].termsAndconditions ?? "", "termsAndconditions");
                    syncDocument(createStructuredContent(""), SettingStateData[0].refundpolicy ?? "", "refundpolicy");
                }, 500)

  }  
  })()
  return ()=>clearTimeout()
  },[SettingStateData.length])
    return (
      <>
      <ToastContainer />
  <div className="container-fluid my-3">
    <div className="row">
        <div className="col-lg-3">
      <AdminSidebar/>
        </div>
        <div className="col-lg-9">
          <h5 className='bg-primary p-2 text-light text-center'> Setting
          </h5>
          <form onSubmit={postdata}>
            <div className="row">
              <div className="col-md-6 mb-3">
              <label>Site name</label>
              <input type="text" name='siteName'value={data.siteName} onChange={getinputdata} className='form-control border-primary' placeholder='siteName'/>
              </div>
 
                 <div className="col-md-6 mb-3">
              <label>Email Address</label>
              <input type="text" name='email' value={data.email} onChange={getinputdata} className='form-control border-primary' placeholder='Email Address'/>
              </div>

                <div className="col-md-6 mb-3">
              <label>Phone no</label>
              <input type="phone" name='phone' value={data.phone} onChange={getinputdata} className='form-control border-primary' placeholder='Phone number'/>
              </div>

                <div className="col-md-6 mb-3">
              <label>WhatsApp</label>
              <input type="text" name='WhatsApp' value={data.Whatsapp} onChange={getinputdata} className='form-control border-primary' placeholder='Whatsapp'/>
              </div>

                <div className="col-12 md-6 mb-3">
              <label>Address</label>
              <input type="text" name='Address' value={data.Address} onChange={getinputdata} className='form-control border-primary' placeholder='Address'/>
              </div>

                <div className="col-12 md-6 mb-3">
              <label>Map1</label>
              <input type="url" name='map1' value={data.map1} onChange={getinputdata} className='form-control border-primary' placeholder='Map1'/>
              </div>

              
                <div className="col-12 md-6 mb-3">
              <label>Map2</label>
              <input type="url" name='map2' value={data.map2} onChange={getinputdata} className='form-control border-primary' placeholder='Map2'/>
              </div>

              <div className="col-12 md-6 mb-3">
              <label>FaceBook Page</label>
              <input type="url" name='facebook' value={data.facebook} onChange={getinputdata} className='form-control border-primary' placeholder='Facebook'/>
              </div>

                <div className="col-12 md-6 mb-3">
              <label>Twitter Page</label>
              <input type="url" name='twitter' value={data.twitter} onChange={getinputdata} className='form-control border-primary' placeholder='twitter'/>
              </div>

                <div className="col-12 md-6 mb-3">
              <label>Linkdein Page</label>
              <input type="url" name='linkdein' value={data.linkdein} onChange={getinputdata} className='form-control border-primary' placeholder='linkdein'/>
              </div>

                <div className="col-12 md-6 mb-3">
              <label>Youtube Page</label>
              <input type="url" name='youtube' value={data.youtube} onChange={getinputdata} className='form-control border-primary' placeholder='youtube'/>
              </div>

                <div className="col-12 md-6 mb-3">
              <label>Instagram Page</label>
              <input type="url" name='instagram' value={data.instagram} onChange={getinputdata} className='form-control border-primary' placeholder='instagram'/>
              </div>

              <div className="col-12 mb-3">
                <label>Privacy Policy</label>
                  <RichTextEditor
                   ref={editorRefPrivacypolicy}
                   className="editor-host border border-primary"
                   value={privacypolicy}
                   onChange={(nextHtml,editor)=>syncDocument(editor.getJSON(), nextHtml,"privacypolicy")}     
                   style={{ minHeight: 380 }}/>
              </div>

               <div className="col-12 mb-3">
                <label>TermsAndConditions</label>
                  <RichTextEditor
                   ref={editorRefTermsAndconditions}
                   className="editor-host border border-primary"
                   value={termsAndconditions}
                   onChange={(nextHtml,editor)=>syncDocument(editor.getJSON(), nextHtml,"termsAndconditions")}     
                   style={{ minHeight: 380 }}/>
              </div>
              
              <div className="col-12 mb-3">
                <label>Refund Policy</label>
                  <RichTextEditor
                   ref={editorRefRefundpolicy}
                   className="editor-host border border-primary"
                   value={refundpolicy}
                   onChange={(nextHtml,editor)=>syncDocument(editor.getJSON(), nextHtml,"refundpolicy")}     
                   style={{ minHeight: 380 }}/>
              </div>


              <div className="col-12 mb-3">
                <button className='btn btn-primary w-100'>Submit</button>
              </div>
            </div>
          </form>
        </div>
    </div>
  </div>
          </>
    )
  }
