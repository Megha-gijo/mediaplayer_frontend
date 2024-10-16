import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


function Landing() {
  return (
   <>
    <Container className='d-flex justify-content-center align-items-center py-5 px-4'>
      <Row className='mt-5 d-flex align-items-center justify-content-center '>
     
       <Col md={6}>
       <h2 className='mt-md-5 '>Welcome To <span className='text-warning'>Media Player</span> </h2>
       <p style={{textAlign:'justify'}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci molestias, quo sit provident debitis delectus dolorum voluptatibus at tempora est optio unde soluta! Debitis nemo pariatur, sapiente perferendis Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto dignissimos id cumque minus nisi autem. Sequi, dolores dicta quisquam magni repudiandae officiis neque itaque, magnam sapiente dolore necessitatibus id mollitia?</p>

       <Link to={'/home'}><button className='btn btn-warning'>Get Started</button></Link>
       </Col>
       <Col md={1}></Col>
       <Col  md={5} className='d-flex justify-content-center mt-5 mt-md-0'>
       <img src="https://content.presentermedia.com/files/clipart/00002000/2378/stick_figure_listening_to_music_800_wht.jpg" alt="no image" className='w-75' />
       </Col>
      </Row>
    </Container>



    <Container className='my-5'>
   <h2 className='text-center'>Features</h2>
      <Row>
        <Col md={1}></Col>
        <Col md={10}>
        <Row className='d-flex justify-content-center align-items-center'>
          <Col md={4} className='p-3'>
          <Card style={{ width: '100%' }} className='p-3'>
      <Card.Img variant="top" src="https://media3.giphy.com/media/rTKFFuy9Wp1Ex3sxvN/200w.gif?cid=6c09b952mje1z80nmyjsysjplrvslkx8dmux53zywamzsh68&ep=v1_videos_search&rid=200w.gif&ct=v" className='w-100' height={'300px'} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        
      </Card.Body>
    </Card>
          </Col>
          <Col md={4} className='p-3'>
          <Card style={{ width: '100%' }} className='p-3'>
      <Card.Img variant="top" src="https://media0.giphy.com/media/bKyrjSPBs7jKJ2DTK8/200w.gif?cid=6c09b952mje1z80nmyjsysjplrvslkx8dmux53zywamzsh68&ep=v1_videos_search&rid=200w.gif&ct=v" className='w-100' height={'300px'} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        
      </Card.Body>
    </Card>
          </Col>
          <Col md={4} className='p-3'>
          <Card style={{ width: '100%' }} className='p-3'>
      <Card.Img variant="top" src="https://media-s3-us-east-1.ceros.com/digiday/images/2023/02/17/e3451c530d6d48878c8549c94d8807c9/render-run-f3f3f3.gif" className='w-100' height={'300px'} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        
      </Card.Body>
    </Card>
          </Col>
        </Row>

        </Col>
        <Col md={1}></Col>
      </Row>
    </Container>



    <div className='container'>
      <div className='row p-md-5 p-3'>
       
        <div className='col border border-light border-2 rounded p-md-3 p-4'>

       <div className='row'>
        <div className='col-md-6'>
          <h2 className='text-warning'>Simple fast and powerful</h2>
          <p className='mt-2'><span className='fs-4'>computer animation technology</span>, combining artificial intelligence, computer music and. graphics disciplines, to show the musical image in the virtual dance of characters, involving the analysis and recognition of musical elements, the establishment of. character models, and motion control And other issues.</p>
          
          <p className='mt-2'><span className='fs-4'>computer animation technology</span>, combining artificial intelligence, computer music and. graphics disciplines, to show the musical image in the virtual dance of characters, involving the analysis and recognition of musical elements, the establishment of. character models, and motion control And other issues.</p>

          <p className='mt-2'><span className='fs-4'>computer animation technology</span>, combining artificial intelligence, computer music and. graphics disciplines, to show the musical image in the virtual dance of characters, involving the analysis and recognition of musical elements, the establishment of. character models, and motion control And other issues.</p>
        </div>
        <div className='col-md-6'>
        <iframe width="100%" height="414" src="https://www.youtube.com/embed/1-nnEM8chwo" title="Khoobsurat | Stree 2 | Varun Dhawan | Shraddha Kapoor | Rajkummar Rao | Sachin-Jigar | Vishal Mishra" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>


        </div>
       </div>
      </div>

    </div>
    </div>
   </>
  )
}

export default Landing



