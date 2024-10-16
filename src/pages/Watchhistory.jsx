import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faTrash } from '@fortawesome/free-solid-svg-icons'
import { deleteHistoryVideoApi, getAllVideoHistoryApi } from '../services/allApi'

function Watchhistory() {
   const[allHisVideos, setAllHisVideos] = useState([])
   const [deletestatus , setDeleteStatus] = useState(false)

  const getAllHistoryVideos = async()=>{
    const result = await getAllVideoHistoryApi()
    console.log(result.data);
    
    setAllHisVideos(result.data);
    
  }
  console.log(allHisVideos);

  const handleDelete = async(id)=>{
    const result = await deleteHistoryVideoApi(id)
    console.log(result);
    if(result.status>=200 && result.status<300){
      setDeleteStatus(true)
    }
    
  }
  
  useEffect(()=>{
    getAllHistoryVideos()
    setDeleteStatus(false)
  },[deletestatus])

  
  return (
    <div>
    <div className='d-flex mt-5'>
      <h4>Watch history</h4>
    <Link to={'/home'} style={{textDecoration:'none'}} className='ms-auto'><h5><FontAwesomeIcon icon={faHouse} className='me-2' /> <span className='d-none d-md-inline'>Back home</span> </h5></Link>
    </div>
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-1"></div>
        <div className="col-md-10 p-3 table-responsive">
         {allHisVideos?.length>0? <table className='table mt-5'>
            <thead>
              <tr>
                <th>SL.NO</th>
                <th>Caption</th>
                <th>URL</th>
                <th>Timestamp</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {allHisVideos?.map((item,index)=>(

             
              <tr>
                <td>{index+1}</td>
                <td>{item?.caption}</td>
                <td>{item?.url}</td>
                <td>{item?.time}</td>
                <td><button onClick={()=>handleDelete(item?.id)} className='btn btn-danger'><FontAwesomeIcon icon={faTrash} /></button></td>
              </tr>
              ))
               }
            </tbody>

          </table>
          :
          <h4 className='text-warning text-center'>No Watch History</h4>}
        </div>
        <div className="col-md-1"></div>
      </div>
    </div>
    </div>
  )
}

export default Watchhistory



