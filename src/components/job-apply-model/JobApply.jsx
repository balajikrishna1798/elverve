import React, {useRef} from 'react'
import './jobapply.css'
import { Button, Col, Modal, Row } from 'react-bootstrap'
import { AiOutlineClose } from 'react-icons/ai'
import Form from 'react-bootstrap/Form';
import { FILEUPLOAD } from '../../assets/images';



const JobApply = ( props) => {

    const {show , onClose , onShow} = props

    const inputFileRef =  useRef(null)

    const onFileChangeCapture = (e) => {
        /*Selected files data can be collected here.*/
        console.log(e.target.files);
      
      };
      const onBtnClick = (event) => {
        /*Collecting node-element and performing click*/
        inputFileRef.current.click();
        event.preventDefault();
      };



  return (
    <>
    <Modal show={show} centered  size="lg">
       <Modal.Header>
      <Modal.Title>Apply Now </Modal.Title>
      <Button variant="light" onClick={onClose}><AiOutlineClose /></Button>
       </Modal.Header>
        <Modal.Body>

     <Form>

        <Row>
            <Col lg={6}>
            <Form.Group className="mb-3 margin_form" controlId="formBasicFullname">
        <Form.Label>Full Name <span className='required'>*</span></Form.Label>
        <Form.Control type="text" placeholder="Enter full name" />
        
      </Form.Group>

            </Col>
            <Col lg={6}>
            <Form.Group className="mb-3 margin_form" controlId="formBasicPhone">
        <Form.Label>Phone No <span className='required'>*</span></Form.Label>
        <Form.Control type="number" placeholder="Enter phone no" />
        
      </Form.Group>

            </Col>
        </Row>
        <Row>
            <Col lg={6}>
            <Form.Group className="mb-3 margin_form" controlId="formBasicEmail">
        <Form.Label>Email <span className='required'>*</span></Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        
      </Form.Group>

            </Col>
            <Col lg={6}>




            <button className='file_upload_job margin_form' onClick={onBtnClick}>
                <div className='btn-flex'>
                <img src={FILEUPLOAD} alt="icon" />
                    <div className='ml-2'>
                        <h6>Upload CV</h6>
                        <p>Use a pdf, docx, doc, rtf & txt</p>
                        
                    </div>
                </div>
          
                    

                
                
           
                </button>



            <Form.Control type="file" size='lg'  className='d-none'       
             ref={inputFileRef}
        onChangeCapture={onFileChangeCapture}/>
            </Col>
        </Row>
        <Row>
            <Col lg={6}>
            <Form.Group className="mb-3 margin_form" controlId="formBasicCover">
        <Form.Label>Cover letter <span className='required'>*</span></Form.Label>
        <Form.Control
          as="textarea"
          placeholder="cover letter"
          style={{ height: '100px' }}
        />
        
      </Form.Group>

            </Col>
          
        </Row>

     

    
     
      <Button className='apply_now px-4 py-2 apply'  type="submit">
        Apply
      </Button>
    </Form>

            
           
          
            


        </Modal.Body>
      
      </Modal>
    
    
    </>
    
  )
}

export default JobApply