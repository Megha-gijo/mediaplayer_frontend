import React, { useEffect } from 'react'
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import Videocard from '../components/Videocard';
import Allvideos from './Allvideos';
import { addCategoryApi, addvideoToCategoryApi, deleteCategoryApi, getAllCategoryApi } from '../services/allApi';
import { toast } from 'react-toastify';

function Category(videoStatus) {

  const [show, setShow] = useState(false);
  const [allCategory, setAllCategory] = useState([])
  const [AddCategoryStatus , setAddCategoryStatus] = useState({})
  const [deleteCategoryStatus , setdeleteCategoryStatus] = useState({})
  const[videoCategoryStatus , setvideoCategoryStatus] = useState({})
  const [categoryName, setcategoryName] = useState("");
  console.log(categoryName);
  

const handleCancel = ()=>{
  setcategoryName("")

}
const handleClose = ()=>{setShow(false);
  handleCancel()
}
const handleShow = ()=> setShow(true);

const handleAdd =  async()=>{
  if(categoryName){
    const reqBody = {
      Category:categoryName,
      Allvideos:[]
    }
    const result = await addCategoryApi(reqBody)
    console.log(result);
    if(result.status>=200 && result.status<300){
      toast.success("Category added successfully")
      handleClose()
      setAddCategoryStatus(result.data)
    }
    else{
      toast.error("Something Went Wrong")
      handleClose()
    }
    
  }
  else{
    toast.info("Please Add a Category Name")
  }
}
 const getCategory = async()=>{
  const result = await getAllCategoryApi()
  setAllCategory(result.data);
  
 }
 console.log(allCategory);

 const handleDelete = async(id)=>{
  const result = await deleteCategoryApi(id)
  console.log(result);
  if(result.status>=200 && result.status<300){
    setdeleteCategoryStatus(result.data)
  }
  
  
 }
 const ondrag =(e)=>{
  e.preventDefault() //prevents the data lose
 }

const VideoDrop =async(e ,categoryDetails)=>{
  console.log(categoryDetails);
  const videoDetails =JSON.parse(e.dataTransfer.getData("videoDetails"))
  console.log(videoDetails);

  if(categoryDetails.Allvideos.find((item)=>item.id==videoDetails.id)){
    toast.error("video already present in the category")
  }
  else{
    categoryDetails.Allvideos.push(videoDetails)
  
  console.log(categoryDetails);
  
  const result = await addvideoToCategoryApi(categoryDetails.id, categoryDetails)
  if(result.status>=200 && result.status<300){
    toast.success("video added")
    setvideoCategoryStatus(result.data)
  }
  else{
    toast.error("Something went wrong")
  
  }
}

}

const videoDrag = (e,video,category)=>{
  console.log(video);
  console.log(category);

  const dataShare = {
    category,
    video
  }
  e.dataTransfer.setData("dataShare",JSON.stringify(dataShare))
  
}

 useEffect(()=>{
  getCategory()
 },[AddCategoryStatus , deleteCategoryStatus , videoCategoryStatus , videoStatus])


  return (
    <>
    <h4>Category</h4>
    <button className='btn btn-warning w-100 mt-4' onClick={handleShow}>Add Category</button>

    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title> Add Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='p-3 border border-secondary border 2 rounded '>
          
          <input type="text" onChange={(e)=>setcategoryName(e.target.value)} placeholder='category name' className='form-control' />
          </div>

         
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="warning" onClick={handleAdd}>Add</Button>
        </Modal.Footer>
      </Modal>

      {allCategory?.length>0 &&

      allCategory.map((item)=>(

        <div className='border border-secondary border-2 p-3 rounded mt-5' droppable onDragOver={(e)=>ondrag(e)} onDrop={(e)=>VideoDrop(e,item)}>
        <div className="d-flex justify-content-between mb-3">
          <h5>{item?.Category}</h5>
          <button className='btn btn-danger'><FontAwesomeIcon icon={faTrash} onClick={()=>handleDelete(item?.id)} /></button>
        </div>
        {
          item?.Allvideos?.length>0 &&
          item?.Allvideos?.map((video)=>(
            <div draggable onDragStart={(e)=>videoDrag(e,video,item)}>
            
             <Videocard video={video} isPresent={true}/>
            </div>

          ))
        }
       

        
      </div>

      ))
      
       }


    </>
      )
    
}

export default Category

