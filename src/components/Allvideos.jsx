import React, { useEffect, useState } from 'react'
import Videocard from './Videocard'
import { addvideoToCategoryApi, getVideosApi } from '../services/allApi'
import Category from './Category'


function Allvideos(addVideoStatus , setVideoStatus) {

    const [allVideos, setAllVideos] = useState([])
    const [deleteVideoStatus , setDeleteVideoStatus] = useState([])
    // const [videoStatus , setVideoStatus]= useState({})

    // side effect
    const getAllVideo = async()=>{
        const result = await getVideosApi()
        // console.log(result);

        setAllVideos(result.data)
    }

    console.log(allVideos);


    const ondrop = (e)=>{
        e.preventDefault()
    }

    const VideoDrop = async (e)=>{
        const {category,video} = JSON.parse(e.dataTransfer.getData("dataShare"))
        console.log(category,video);

      const newArray =  category.Allvideos.filter((item)=>item.id!=video.id)
      const newCategory = {
        Category:category.Category,
        Allvideos:newArray,
         id:category.id
   }
   const result = await addvideoToCategoryApi(category.id , newCategory)
        console.log(result);
        if(result.status>=200 && result.status<300){
            setVideoStatus(result.data)

        }
       
        
    }
    // to handle side effects
    useEffect(()=>{
        getAllVideo()
    },[addVideoStatus , deleteVideoStatus ])
    
  return (
    <div droppable onDragOver={(e)=>ondrop(e)} onDrop={(e)=>VideoDrop(e)}>
    <h4>All Videos</h4>
    { allVideos.length>0?
        <div className="container">
        <div className="row">
            {allVideos.map((item)=>(
                <div className="col-md-3 p-2">
                <Videocard video={item} setDeleteVideoStatus={setDeleteVideoStatus}/>
               </div>
               ))
                
            }
            
        </div>
    </div>

    :

    <div className="container">
        <div className="row">
            <div className="col-md-4"></div>
            <div className="col-md-4">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn877lCrGteB0wGGoRxMTf6sN4ZwYelkw_6g&s" alt="no image"  />
                <h5 className='text-warning text-center'>No video Added Yet</h5>
            </div>
            <div className="col-md-4"></div>
          
        </div>
    </div>}
  </div>
  )
}

export default Allvideos 

