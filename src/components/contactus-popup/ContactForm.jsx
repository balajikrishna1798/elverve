import React, { useState, useRef } from 'react'
import './contactform.css'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Form, Row, Col } from 'react-bootstrap';
import { THANKYOU } from '../../assets/images';
import { useFormik } from "formik";
import * as Yup from "yup";
import {AiOutlineClose} from "react-icons/ai";
import Loader from '../loader/Loader';

const emailReg = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
const validation = Yup.object({
  name: Yup.string()
    .max(15, "Must be 15 characters or less")
    .required("Name is required"),
 
  email: Yup.string()
  .matches(emailReg, "Invalid Email")
   // .email("Invalid email address")
    .required("Email is required"),
    mobile: Yup.string()
    .required("Phone number is required")
    .min(10, "Phone number should be minimum 10 digits"),
    mobileRef: Yup.string()
    .required("Please select country code"),
    message: Yup.string()
    .required("Message is required"),
})
const initialValues ={
  name:'',
   email:'',
    mobile:'',
     mobileRef:'',
      message:''
}

const ContactForm = (props) => {
  const {show , onClose , onShow} = props
 // const { register, formState: { errors }, handleSubmit } = useForm();
 // const onSubmit = (data) => console.log(data);
 

    const handleClose = () => {
      onClose()
     formik.resetForm()
         
    }

     
const [form, setForm] =useState({})
const [validated, setValidated] = useState(false);
const [errors, setErrors] = useState({})
const [showed, setShowed] = useState(false);
const handleCloseSecond = () => setShowed(false);
const handleShowSecond = () => setShowed(true);
const formRef = useRef();
const [formState, setFormState] = useState(true);
const [showloader,setShowloader ] = useState(false);

const formik = useFormik({
  initialValues: initialValues,
  validationSchema: validation,
  onSubmit: (values, {resetForm} ) => {
   
    setFormState(values);
    submitHandler(values)
    onClose() 

  
    

    

    resetForm()
  }
})
  

const submitHandler = async (data) => { 
      const host = `https://testtgssapi.technogenesis.in/api/V1/AP`;
  
   try {
       
       const bodyData =  {
            "name": data?.name,
            "mobile": `${data?.mobileRef} ${data?.mobile}`,
            "email": data?.email,
            "message": data?.message
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

 
 
  return (
    <>
    <Modal show={show} onHide={onClose} centered>
    <Modal.Header >
      <Modal.Title>Expect guidance for your project. <br /> Chat with us now! </Modal.Title>
      <Button variant="light" onClick={handleClose}><AiOutlineClose /></Button>
    </Modal.Header>
    <Form 
    ref={formRef} 
     onSubmit={formik.handleSubmit} 
     validated={validated}
     >

    <Modal.Body>
    

    <Form.Group 
    className="mb-4" 
    rows={2}
    controlId="name"
     >
          <Form.Control
            type="text"
            name="name"
            placeholder="Name*"
             onChange={formik.handleChange}
             //onBlur={formik.handleBlur}
              value={formik.values?.name}
            isInvalid={!!formik.errors?.name}
            autoFocus
          /> 
            <Form.Control.Feedback type="invalid">{formik.errors?.name}</Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-4" controlId="email">
          <Form.Control
            type="email"
            name="email"
            placeholder="Email ID*"
            onChange={formik.handleChange}
            //onBlur={formik.handleBlur}
             value={formik.values?.email}
            isInvalid={!!formik.errors?.email}
          />
          <Form.Control.Feedback type="invalid">{formik.errors?.email}</Form.Control.Feedback>
        </Form.Group>

        <Row>
        <Col md={5}>
        <Form.Group className="mb-4" controlId="mobileRef">
        <Form.Select className='mb-4' aria-label="Default select example"
        name="mobileRef"
          onChange={formik.handleChange}
         // onBlur={formik.handleBlur}
           value={formik.values?.mobileRef}
         isInvalid={!!formik.errors?.mobileRef}
         >
  <option value="" selected disabled>Select Country</option>
  <option  value="+91">India (+91)</option>
  <option value="+65">Singapore (+65)</option>
  <option value="+60">Malaysia (+60)</option>
  <option value="+971">UAE (+971)</option>
  <option value="+1">US (+1)</option>
  <option value="+44">UK (+44)</option>
     </Form.Select>
     <Form.Control.Feedback type="invalid">{formik.errors?.mobileRef}</Form.Control.Feedback>
     </Form.Group>

        </Col>
        <Col md={7}>
         
        <Form.Group className="mb-4" controlId="mobile"
        
        >
          <Form.Control 
            type="number"
            name="mobile"
            placeholder="Phone Number*"
            onChange={formik.handleChange}
           // onBlur={formik.handleBlur}
             value={formik.values?.mobile}
            isInvalid={!!formik.errors?.mobile}
          />
          <Form.Control.Feedback type="invalid">{formik.errors?.mobile}</Form.Control.Feedback>
        </Form.Group>
        </Col>
      </Row>

      

        <Form.Group
          className="mb-4"
          controlId="message"
        >
          <Form.Control as="textarea" 
           placeholder="Message*"
            rows={4} 
            name="message"
          onChange={formik.handleChange}
         // onBlur={formik.handleBlur}
           value={formik.values?.message}
           isInvalid={!!formik.errors?.message}
           />
        <Form.Control.Feedback type="invalid">{formik.errors?.message}</Form.Control.Feedback>
        </Form.Group>
      


    </Modal.Body>
    <Modal.Footer className='text-center'>
    <div className=" btn_shadow">
             <div className='shadow_1'>
             </div>
             <div className='polygon_btn_cont'>
             <Form.Group controlId='submit'>
                <Button type="submit" className='polygon_btn' variant="outline-primary" onClick={values => setFormState(values)}> Get in Touch</Button>
               
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