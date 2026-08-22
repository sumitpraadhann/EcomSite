  import React, { useEffect, useState } from 'react'
  import AdminSidebar from '../../../Component/Admin/AdminSidebar'
  import { Link } from 'react-router-dom'
  import Swal from 'sweetalert2'
  import{getFeature,deleteFeature} from "../../../Redux/Actioncreator/FeatureActionCreator"
  import { useDispatch, useSelector } from 'react-redux'
  import DataTable from 'datatables.net-dt'
  import "datatables.net-dt/css/dataTables.dataTables.min.css"

  export default function AdminFeaturePage() {

    let [data,setdata] = useState([])
  let  FeatureStateData = useSelector(state => state.FeatureStateData)
  let dispatch = useDispatch()
    function deleterecord(id) {
      Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "question",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!"
  }).then((result) => {
    if (result.isConfirmed){
      dispatch(deleteFeature({id:id}))
  setdata(data.filter(x => x.id !== id))

      Swal.fire({
      title: "Deleted!",
      text: "Your file has been deleted.",
      icon: "success"
    });
  }
  });
    }

    useEffect(()=>{
  let time =  (()=>{
  dispatch(getFeature())
  if(FeatureStateData.length){
    setdata(FeatureStateData)
    let time = setTimeout(() => {
  new DataTable('#myTable');
    }, 500); 
    return time
    }
  })()
  return ()=>clearTimeout(time)
  },[FeatureStateData.length])
    return (
      <>
  <div className="container-fluid my-3">
    <div className="row">
        <div className="col-lg-3">
      <AdminSidebar/>
        </div>
        <div className="col-lg-9">
          <h5 className='bg-primary p-2 text-light text-center'>Create Feature
          <Link to='/admin/feature/create'>
          <i className='bi bi-plus text-light float-end'></i>
          </Link>
          </h5>
          <div className="table-responsive">
                    <table className='table table-bordered' id='myTable'>
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>icon</th>
                                <th>Short Description</th>
                                <th>Status</th>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map(item => {
                                return <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                      <td className='fs-1'><i className={item.icon}></i></td>
                                    <td>{item.shortDescription}</td>
                                    <td>{item.status ? "Active" : "Inactive"}</td>
                                    <td><Link to={`/admin/feature/update/${item.id}`} className='btn btn-primary'><i className='bi bi-pencil-square'></i></Link></td>
                                    <td><button onClick={() => deleterecord(item.id)} className='btn btn-danger'><i className='bi bi-trash'></i></button></td>
                                </tr>
                            })}
                        </tbody>
                    </table>
                </div>
        </div>
    </div>
  </div>
          </>
    )
  }
