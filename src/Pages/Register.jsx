import { ErrorMessage, Field, Formik , Form} from 'formik'
import React, { useState } from 'react'
import * as Yup from 'yup'
import ErrorText from '../Components/ErrorText'
import axios from 'axios'
import {toast, ToastContainer  } from "react-toastify";

const Register = () => {
    const initialValues={
        name:'',
        email:'',
        phone:'',
        role: 'User',
        password:'',
        password_confirmation:''
    }
    const phoneRegex= /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,7}$/
    const passwordRegex= /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/

    const validationSchema= Yup.object({
        name: Yup.string().required().min(5).max(50).label('Full Name'),
        email: Yup.string().required().email().label('email'),
        phone: Yup.string().required().matches(phoneRegex, 'Pls enter a valid phone number').label('Phone Number'),
        password: Yup.string().required('Required').matches(passwordRegex, 'Pls enter a strong password'),
        password_confirmation: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match').required('Required')
    })

    const onSubmit=(values)=>{
      const payload={
        name: values.name,
        email: values.email,
        phone: values.phone,
        role: 'User',
        password: values.password,
        password_confirmation: values.password_confirmation
      }
      axios.post('https://127.0.0.1:8000/api/signup', payload,{
        // headers:{
        //   Accept: application/json
        //   Content-Type: application/json
        // }
      }
      )
      .then(resp=> toast(resp.message, {type:'success', autoClose: 5000, pauseOnHover:true}))
      .catch((error)=>{
        console.log(error)
      toast(error.message, {type:'error', autoClose:false})
    })
    console.log(values)
    }
  return (
    <div className='d-flex justify-content-center align-items-center form-wrapper '>
    <Formik 
    initialValues={initialValues}
    validationSchema={validationSchema}
    onSubmit={onSubmit}>
    <Form>
      <div className="d-flex gap-3 flex-column card p-4">
      <h5 className='text-center'>Register</h5>
        <div className='row '>
            <label htmlFor="name">Full Name:</label>
            <Field name='name'  />
            <ErrorMessage name='name' component={ErrorText}/>
        </div>
        <div className='row '>
            <label htmlFor="email">Email:</label>
            <Field name='email'  />
            <ErrorMessage name='email' component={ErrorText}/>
        </div>
        <div className='row '>
            <label htmlFor="phone">Phone Number:</label>
            <Field name='phone'  />
            <ErrorMessage name='phone' component={ErrorText}/>
        </div>
        <div className='row '>
            <label htmlFor="password">Password:</label>
            <Field name='password'  type='password'/>
            <ErrorMessage name='password' component={ErrorText}/>
        </div>
        <div className='row '>
            <label htmlFor="password_confirmation">Confirm Password:</label>
            <Field name='password_confirmation'  type='password'/>
            <ErrorMessage name='password_confirmation' component={ErrorText}/>
        </div>
        <div className="d-flex">
        <button className='btn btn-primary w-100' type='submit'>Register</button>
      </div>
      </div>
      </Form>
      </Formik>
      <ToastContainer/>
    </div>
  )
}

export default Register
