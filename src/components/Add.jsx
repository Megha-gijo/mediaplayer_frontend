import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUpload } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AddVideoApi } from '../services/allApi';



function Add({setAddVideoStatus}) {


  const [show, setShow] = useState(false);

  const handleClose = () =>{setShow(false);
    handleCancel()
  }
  const handleShow = () => setShow(true);

  const [videoDetails , setvideoDetails ] = useState({
    caption:"",
    imageUrl:"",
    embeddedLink:""
  })

  
  console.log(videoDetails);

  // const getEmbeddedlink = (e)=>{

  //  const link = e.target.value
  //  if(link.startsWith( 'https://www.youtube.com')){
  //   const embedL = `https://www.youtube.com/embed/${link.slice(17,28)}`
  //   setvideoDetails({...videoDetails,embeddedLink:embedL})
  //  }else{
  //   const embedL = `https://www.youtube.com/embed/${link.slice(-11)}`
  //   setvideoDetails({...videoDetails,embeddedLink:embedL})
  //  }
    
  // }
  

  const handleCancel = ()=>{
    setvideoDetails({
      caption:"",
      imageUrl:"",
      embeddedLink:""
    })

  }

const handleAdd = async() => {
 
     const{ caption , imageUrl , embeddedLink } =  videoDetails

     if(!caption || !imageUrl || !embeddedLink){
      toast.info("Please fill the form")
     }
     else{
      if(videoDetails.embeddedLink.startsWith('https://youtu.be/')){
        const embedL = `https://www.youtube.com/embed/${videoDetails.embeddedLink.slice(17,28)}`
        // setVideoDeatils({...videoDetails,emdedLink:embedL})
  
        const result = await AddVideoApi({...videoDetails,embeddedLink:embedL})
        console.log(result);
        if(result.status>=200 && result.status<300){
          toast.success('Video Uploaded successfully')
          handleClose()
          setAddVideoStatus(result.data)
        }
        else{
          toast.error('Something went wrong')
          handleClose()
        }
  
       }
       else{
        const embedL = `https://www.youtube.com/embed/${videoDetails.embeddedLink.slice(-11)}`
        // setvideoDetails({...videoDetails,embeddedLink:embedL})
        /* <iframe width="942" height="497" src="https://www.youtube.com/embed/oq1EWvgzzwk?list=RDe1BHIY9p2WU" title="Vatteppam - Lyrical | Mandakini | Dabzee | Altaf Salim | Anarkali Marikar | Vinod Leela |Bibin Ashok" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */
  
        const result = await AddVideoApi({...videoDetails,embeddedLink:embedL})
        console.log(result);
  
        if(result.status>=200 && result.status<300){
          toast.success("Video Uploaded Successfully")
        handleClose()
        setAddVideoStatus(result.data)
        }
        else{
          toast.error("Something Went Wrong")
          handleClose()
        }
  
  
       }
     }
}
  return (
    <>
    <div className='d-flex align-items-center'>
      <h5 className='d-none d-md-inline'>Upload New Video</h5>
      <button className='btn pb-3' onClick={handleShow}><FontAwesomeIcon icon={faUpload} className='fs-5' /></button>

    </div>
     <Modal show={show} onHide={handleClose}>
     <Modal.Header closeButton>
       <Modal.Title className='text-warning'>Uploaded Videos</Modal.Title>
     </Modal.Header>
     <Modal.Body>
      <h6>Please fill the following details</h6>
      <form className='p-3 border border-light rounded'>
        <div className='mb-3'>
          <input type="text" placeholder='Video Caption' value={videoDetails.caption}  onChange={(e)=>setvideoDetails({...videoDetails,caption:e.target.value})} className='form-control' />
        </div>
        <div className='mb-3'>
        <input type="text" placeholder='Video Image' value={videoDetails.imageUrl}  onChange={(e)=>setvideoDetails({...videoDetails,imageUrl:e.target.value})}  className='form-control' />
        </div>
        <div className='mb-3'>
        <input type="text" placeholder='Video Url'  value={videoDetails.embeddedLink} onChange={(e)=>setvideoDetails({...videoDetails,embeddedLink:e.target.value})} className='form-control' />
        </div>
      </form>
     </Modal.Body>
     <Modal.Footer>
       <Button variant="secondary" onClick={handleCancel}>
         Cancel
       </Button>
       <Button variant="warning" type='button' onClick={handleAdd}>
         Upload
       </Button>
     </Modal.Footer>
   </Modal>

   <ToastContainer position='top-center' autoClose={2000} theme="colored" />
   </>

    

  )
}

export default Add
