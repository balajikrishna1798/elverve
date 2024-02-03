import React, { useState, useRef } from 'react'
import './contactform.css'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Form, Row, Col } from 'react-bootstrap';
import { THANKYOU } from '../../assets/images';

const ContactForm = (props) => {
  const {show , onClose , onShow} = props
 // const { register, formState: { errors }, handleSubmit } = useForm();
 // const onSubmit = (data) => console.log(data);
const [form, setForm] =useState({})
const [validated, setValidated] = useState(false);
const [errors, setErrors] = useState({})
const [showed, setShowed] = useState(false);
  const handleCloseSecond = () => setShowed(false);
  const handleShowSecond = () => setShowed(true);
  
const formRef = useRef();

const handleReset = () => {
  formRef.current.reset();
  setValidated(false);
};


const submitHandler = async (data) => { 
      const host = `https://testtgssapi.technogenesis.in/api/V1/AP`;
  
   try {
       
       const bodyData =  {
            "name": data.name,
            "mobile": data.mobile,
            "email": data.email,
            "message": data.message
       }   
       
       const options = {
           method: 'POST',
           headers: {
               'Content-Type': 'application/json',
              // 'Authorization': `Bearer ${token}`
           },
           body: JSON.stringify(bodyData)
       }
       await fetch(`${host}/contactus/create`, options)
           .then(res => res.json())
           .then(res => {
               //console.log(res)
              onClose() 
              setShowed(true)
           })
     } catch (error) {
       console.log(error)
   }
}


const setField = (field, value) =>{
  setForm({
    ...form,
    [field]:value
  })
  
  if(!!errors[field])
  setErrors({
    ...errors,
    [field]:null
  })
  
}

const validateForm = () =>{
  const email_pattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i ; 

 const tenDigitsOnly = (value) => (!(value?.length === 10)) ? true : false ;
 const validEmail = (value) => (email_pattern.test(value)) ? false : true ;
  

const{name, email, mobile, mobileRef, message} = form
const newErrors = {}
if(!name || name === '') newErrors.name = 'Name field is required';
if(!email || email === '') newErrors.email = 'Email field is required';
else if(validEmail(email)) newErrors.email = 'Invalid Email ';
if(!message || message === '') newErrors.message = 'Message field is required';
if(!mobile || mobile === '') newErrors.mobile = 'Mobile field is required'; 
else if(tenDigitsOnly(mobile))  newErrors.mobile = 'Invalid mobile number'; 
if(!mobileRef || mobileRef === '') newErrors.mobileRef = 'Please select the country';

return newErrors
}

const handleSubmit = e =>{
  e.preventDefault()
  const formErrors = validateForm()
  if(Object.keys(formErrors).length>0){
    setErrors(formErrors)
  }
  else{
    console.log('Form submitted!')
    submitHandler(form)
    //console.log(form)
  }
   setValidated(true);
    //handleReset();
}
  return (
    <>
    <Modal show={show} onHide={onClose} centered>
    <Modal.Header closeButton>
      <Modal.Title>Expect guidance for your project. <br /> Chat with us now!</Modal.Title>
    </Modal.Header>
    <Form ref={formRef}  validated={validated}>
    <Modal.Body>
    

    <Form.Group 
    className="mb-4" 
    rows={2}
    controlId="name"
     >
          <Form.Control
            type="text"
            placeholder="Name*"
            onChange={(e)=>{setField('name',e.target.value)}}
            isInvalid={!!errors.name}
            autoFocus
          /> 
            <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-4" controlId="email">
          <Form.Control
            type="email"
            placeholder="Email ID*"
            onChange={(e)=>{setField('email',e.target.value)}}
            isInvalid={!!errors.email}
          />
          <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
        </Form.Group>

        <Row>
        <Col md={4}>
        <Form.Group className="mb-4" controlId="mobileRef">
        <Form.Select className='mb-4' aria-label="Default select example"
         onChange={(e)=>{setField('mobileRef',e.target.value)}}
         isInvalid={!!errors.mobileRef}
         >
         
  <option value="+91">India (+91)</option>
  <option value="+61">Australia  (+61)</option>
  <option value="+60">Malaysia (+60)</option>
  <option value="+971">UAE (+971)</option>
     </Form.Select>
     <Form.Control.Feedback type="invalid">{errors.mobileRef}</Form.Control.Feedback>
     </Form.Group>

        </Col>
        <Col md={8}>
         
        <Form.Group className="mb-4" controlId="mobile"
        
        >
          <Form.Control
            type="number"
            placeholder="Phone Number*"
            onChange={(e)=>{setField('mobile',e.target.value)}}
            isInvalid={!!errors.mobile}
          />
          <Form.Control.Feedback type="invalid">{errors.mobile}</Form.Control.Feedback>
        </Form.Group>
        </Col>
      </Row>

      

        <Form.Group
          className="mb-4"
          controlId="message"
        >
          <Form.Control as="textarea"  placeholder="Message*" rows={4} 
           onChange={(e)=>{setField('message',e.target.value)}}
           isInvalid={!!errors.message}
           />
        <Form.Control.Feedback type="invalid">{errors.message}</Form.Control.Feedback>
        </Form.Group>
      


    </Modal.Body>
    <Modal.Footer className='text-center'>
    <div className=" btn_shadow">
             <div className='shadow_1'>
             </div>
             <div className='polygon_btn_cont'>
             <Form.Group controlId='submit'>
                <Button onClick={handleSubmit} className='polygon_btn' variant="outline-primary"> Get in Touch</Button>
                </Form.Group>
                <div className='polygon_shadow'></div>
             </div>
          </div>
    </Modal.Footer>
    </Form>
  </Modal>
  <Modal show={showed} onHide={handleCloseSecond} centered>
        <Modal.Header closeButton>
        
        </Modal.Header>
        <Modal.Body>
          <div className='text-center greeting_content'>
            <img src={THANKYOU} alt="thankyou" />
            <h2>Connect you shortly</h2>
            <p>Someone from our team will get back to you within a day. Usually, we get back in a few hours.</p>
          </div>
        </Modal.Body>
       
      
      </Modal> 
  </>
  )
}

export default ContactForm