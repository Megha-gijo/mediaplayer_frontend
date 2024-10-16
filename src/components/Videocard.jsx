import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { addVideoHistoryApi, deleteVideoApi } from '../services/allApi';

function Videocard({video , setDeleteVideoStatus ,isPresent}) {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = async() =>{ 
      setShow(true);
      const time = new Date()
      console.log(Date);
      let formatedDate = new Intl.DateTimeFormat ("en-GB", {year:"numeric", month:"2-digit", day:"2-digit", hour:'2-digit', minute:'2-digit',second:'2-digit'}).format(time)
      console.log(formatedDate);
      
      

      const reqBody = {
        caption: video?.caption,
        url:video?.embeddedLink,
        time:formatedDate
      }
      const result = await addVideoHistoryApi(reqBody)
      console.log(result);
      
      
  }
  const handleDelete = async(id)=>{
    const result = await deleteVideoApi(id)
    console.log(result); 
    if(result.status>=200 && result.status<300){
      setDeleteVideoStatus(result.data)
    }
  }
  const videoDrag = (e,video)=>{
    console.log(video);
    e.dataTransfer.setData("videoDetails",JSON.stringify(video))
    
  }
  


  return (
    <>
     <Card style={{ width: '100%' }} draggable onDragStart={(e)=>videoDrag(e,video)}>
    {!isPresent && < Card.Img onClick={handleShow} variant="top" src={video?.imageUrl} className='w-100' height={'300px'} />}
      <Card.Body className='d-flex justify-content-between'>
        <Card.Text>{video?.caption}</Card.Text>
       {!isPresent &&  <Button variant="danger"><FontAwesomeIcon icon={faTrash} onClick={()=>handleDelete(video?.id)} /></Button>}
      </Card.Body>
    </Card>

    
    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
    <Modal.Header closeButton>
          <Modal.Title>{video?.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <iframe width="100%" height="497" src={`${video?.embeddedLink}?autoplay=1`} title="Water Packet - Video Song | RAAYAN | Dhanush | Sun Pictures | A.R. Rahman | Santhosh Narayanan" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </Modal.Body>
        
      </Modal>
    </>
  )
}

export default Videocard 

