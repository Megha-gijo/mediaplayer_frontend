import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVideo } from '@fortawesome/free-solid-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faWhatsapp , faTwitter ,faFacebook} from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom'


function Footer() {
  return (
    <div className='container-fluid '>
      <div className='row'>
        <div className='col-md-4'>
          <h4 className='text-warning'>  <FontAwesomeIcon icon={faVideo}  className='me-2' />Media Player</h4>
          <p style={{textAlign:'justify'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, nobis itaque accusamus ipsa nostrum accusantium obcaecati atque delectus velit, eius natus harum ratione exercitationem iusto repellendus voluptatum consectetur, veniam similique.</p>
        </div>
        <div className='col-md-2 d-flex justify-content-center'>
          <div>
            <h4>Links</h4>
            <Link to={'/'}><p className='mt-4'>Landing Page</p></Link>
           <Link to={'/home'}><p>Home Page</p></Link> 
           <Link to={'/Watchhistory'}><p>Watch History</p></Link> 
          </div>
        </div>
        <div className='col-md-2 d-flex justify-content-center'>
           <div>
            <h4>Guides</h4>
           <p className='mt-4'>React</p>
           <p>React Bootstrap</p>
           <p>Bootswatch</p>
           </div>
        </div>
        <div className='col-md-4 px-md-5'>
          <h4>Contact Us</h4>
          <div className='d-flex mt-4'>
            <input type="text" placeholder='Email id' className='form-control' />
            <button className='btn btn-warning ms-3'>Subscribe</button>

          </div>
         <div className='d-flex justify-content-between mt-3'>
          {/* icons */}

          <FontAwesomeIcon icon={faInstagram} /> <FontAwesomeIcon icon={faWhatsapp} /> <FontAwesomeIcon icon={faTwitter} /> <FontAwesomeIcon icon={faFacebook} />
         
         



          
          
         </div>
        </div>

      </div>
    </div>
    
  )
}

export default Footer
