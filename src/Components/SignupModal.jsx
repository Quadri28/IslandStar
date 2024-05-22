import { ErrorMessage, Field, Form, Formik } from 'formik'
import React, { useEffect, useState } from 'react'
import * as Yup from 'yup'
import ErrorText from './ErrorText'
import './SignupModal.css'
import axios from './axios'
import {toast, ToastContainer} from 'react-toastify'


const SignupModal = () => {
const [numbers, setNumbers]= useState([])
const initialValues ={
    firstName:'',
    lastName:'',
    address:'',
    city:'',
    state:'',
    gender:'',
    dateOfBirth:'',
    schoolName:'',
    guardianName:'',
    phoneNumber:'',
    email:'',
    emergencyNumber:'',
    emergencyRelationship:'',
    emergencyName:'',
    specialConcern:'',
    sportChoice: '',
    shirtSize:'',
    nameOnJersey:''
}

const phoneRegex= /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,7}$/
const validationSchema= Yup.object({
    firstName: Yup.string().required().min(3).max(20).label('First Name'),
    lastName: Yup.string().required().min(3).max(20).label('Last Name'),
    address: Yup.string().required().min(10).max(50).label('Address'),
    city: Yup.string().required().min(3).max(30).label('City'),
    state: Yup.string().required().min(3).max(30).label('State'),
    gender: Yup.string().required().label('Gender'),
    dateOfBirth: Yup.string().required().label('Date of Birth'),
    schoolName: Yup.string().label('Last Class'),
    guardianName:Yup.string().required().label('Guardian Name'),
    phoneNumber: Yup.string().matches(phoneRegex, 'Invalid phone number').required().label("Parent's Phone"),
    email: Yup.string().email().required().label('Guardian Name'),
    emergencyNumber: Yup.string().matches(phoneRegex, 'Invalid phone number').required().label("Emergency Phone No"),
    emergencyRelationship: Yup.string().required().label("Emergency Relationship"),
    emergencyName: Yup.string().min(3).max(20).required().label("Emergency person's Name"),
    specialConcern: Yup.string().label('Special Concern'),
    sportChoice: Yup.string().required().label("Game Choice"),
    shirtSize: Yup.string().label("Game Shirt size"),
    nameOnJersey: Yup.string().required().label('Name on Jersey')
})

const getNumbers=()=>{
    axios('numbers').then(resp=>setNumbers(resp.data))
}
const onSubmit =(Values)=>{
const payload ={
    first_name: Values.firstName,
    last_name: Values.lastName,
    address: Values.address,
    city: Values.city,
    state: Values.state,
    gender: Values.gender,
    age: Values.dateOfBirth,
    last_class: Values.schoolName,
    guardian_name: Values.guardianName,
    phone_number: Values.phoneNumber,
    email: Values.email,
    emergency_number: Values.emergencyNumber,
    emergency_relationship: Values.emergencyRelationship,
    emergency_name: Values.emergencyName,
    special_concern: Values.specialConcern,
    sport_choice: Values.sportChoice,
    shirt_size: Values.shirtSize,
    jersey_name: Values.nameOnJersey,
    jersey_number: Values.numberOnJersey
}

axios.post('signup', payload, {headers:{
    Authorization: `Bearer `
}}).then(()=>toast('Your registration was successful', 
{type:'success', autoClose:5000, pauseOnHover:true}))
.catch((error)=>toast('Error occurred',
     {type:'error', autoClose:false, pauseOnHover:true}))
console.log(Values)
}

useEffect(()=>{
    getNumbers()
}, [])


  return (
    <>
      <div
        className="modal fade"
        id="signup"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog mt-4 py-4" role="document">
          <div className="modal-content card">
            <div className="px-3 mt-3">
              <h6
                className="fw-md fs-4 text-center"
                id="exampleModalLabel"
              > Enroll Here</h6>
              <Formik 
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={onSubmit}
              >
                <Form>
              <div className="row justify-content-between g-2  modal-form-wrapper">
                <h6>Player's Info:</h6>
                <div className="col-md-6">
                    <label htmlFor="firstName"> First name<sup className='text-danger'>*</sup>:</label>
                    <Field className='w-100' type="text" name='firstName' />
                    <ErrorMessage name='firstName' component={ErrorText}/>
                </div>
                <div className="col-md-6">
                    <label htmlFor="lastName"> Last name<sup className='text-danger'>*</sup>:</label>
                    <Field className='w-100' type="text" name='lastName' />
                    <ErrorMessage name='lastName' component={ErrorText}/>
                </div>
                <div className="col-md-6">
                    <label htmlFor="address">Address<sup className='text-danger'>*</sup>:</label>
                    <Field className='w-100' type="text" name='address' />
                    <ErrorMessage name='address' component={ErrorText}/>
                </div>
                <div className="col-md-6">
                    <label htmlFor="state">State<sup className='text-danger'>*</sup>:</label>
                    <Field className='w-100' type="text" name='state' />
                    <ErrorMessage name='state' component={ErrorText}/>
                </div>
                <div className="col-md-6">
                    <label htmlFor="city">City<sup className='text-danger'>*</sup>:</label>
                    <Field className='w-100' type="text" name='city' />
                    <ErrorMessage name='city' component={ErrorText}/>
                </div>
                <div className="col-md-6">
                    <label htmlFor="gender">Gender<sup className='text-danger'>*</sup>:</label>
                    <Field className='w-100' type="text" name='gender' as='select'>
                        <option value="">Select Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </Field>
                    <ErrorMessage name='gender' component={ErrorText}/>
                </div>
                <div className="col-md-6">
                    <label htmlFor="dateOfBirth"> Date of Birth<sup className='text-danger'>*</sup>:</label>
                    <Field className='w-100' name='dateOfBirth' type='date'/>
                    <ErrorMessage name='dateOfBirth' component={ErrorText}/>
                </div>
                <div className="col-md-6">
                    <label htmlFor="schoolName"> School:</label>
                    <Field className='w-100' type="text" name='schoolName' />
                    <ErrorMessage name='schoolName' component={ErrorText}/>
                </div>
                <h6>Parent's Info:</h6>
                <div className="col-md-6">
                    <label htmlFor="guardianName">Name<sup className='text-danger'>*</sup>:</label>
                    <Field className='w-100' type="text" name='guardianName' />
                    <ErrorMessage name='guardianName' component={ErrorText}/>
                </div>
                <div className="col-md-6">
                    <label htmlFor="phoneNumber">Phone Number<sup className='text-danger'>*</sup>:</label>
                    <Field className='w-100' type="text" name='phoneNumber' />
                    <ErrorMessage name='phoneNumber' component={ErrorText}/>
                </div>
                <div className="col-md-6">
                    <label htmlFor="email">Email<sup className='text-danger'>*</sup>:</label>
                    <Field className='w-100' type="text" name='email' />
                    <ErrorMessage name='email' component={ErrorText}/>
                </div>
                <h6>Emergency Info:</h6>
                <div className="col-md-6">
                    <label htmlFor="emergencyNumber">Phone Number in Emergency<sup className='text-danger'>*</sup>:</label>
                    <Field className='w-100' type="text" name='emergencyNumber' />
                    <ErrorMessage name='emergencyNumber' component={ErrorText}/>
                </div>
                <div className="col-md-6">
                    <label htmlFor="emergencyRelationship">Relationship with the person<sup className='text-danger'>*</sup>:</label>
                    <Field className='w-100' type="text" name='emergencyRelationship' />
                    <ErrorMessage name='emergencyRelationship' component={ErrorText}/>
                </div>
                <div className="col-md-6">
                    <label htmlFor="emergencyName">Emergency persons'n name<sup className='text-danger'>*</sup>:</label>
                    <Field className='w-100' type="text" name='emergencyName' />
                    <ErrorMessage name='emergencyName' component={ErrorText}/>
                </div>
                <div className="col-md-6">
                    <label htmlFor="specialConcern">Any health concern on player?:</label>
                    <Field className='w-100' type="text" name='specialConcern' />
                    <ErrorMessage name='specialConcern' component={ErrorText}/>
                </div>
                <div className="col-md-6">
                    <label htmlFor="sportChoice">Sport Choice<sup className='text-danger'>*</sup>:</label>
                    <Field className='w-100' type="text" name='sportChoice' as='select'>
                        <option value="">Select Sport of choice</option>
                        <option value="Football">Football</option>
                        <option value="Basketball">Basketball</option>
                        <option value="TableTennis">Table Tennis</option>
                    </Field>
                    <ErrorMessage name='sportChoice' component={ErrorText}/>
                </div>
                <div className="col-md-6">
                    <label htmlFor="shirtSize">Select Shirt Size<sup className='text-danger'>*</sup>:</label>
                    <Field className='w-100' type="text" name='shirtSize' as='select'>
                        <option value="">Select</option>
                        <option value="YS">YS</option>
                        <option value="YM">YM</option>
                        <option value="YL">YL</option>
                        <option value="AS">AS</option>
                        <option value="AM">AM</option>
                        <option value="AL">AL</option>
                        <option value="AXL">AXL</option>
                        </Field>
                    <ErrorMessage name='shirtSize' component={ErrorText}/>
                </div>
                <div className="col-md-6">
                    <label htmlFor="jerseyName">Preferred Name on Jersey:</label>
                    <Field as='select'  name='nameOnJersey' className='w-100'>
                        <option value="">Select</option>
                        <option value="First Name">My First Name</option>
                        <option value="Last Name">My Last Name</option>
                    </Field>
                </div>
                <div className="col-md-6">
                    <label htmlFor="numberOnJersey">Preferred Number on Jersey:</label>
                    <Field as='select'  name='numberOnJersey' className='w-100'>
                        <option value="">Select</option>
                        {
                            numbers.map(number=>(
                                <option value={number.number} key={number.id}>{number.number}</option>
                            ))
                        }
                    </Field>
                </div>
              </div>
              <div className='d-flex mt-2  pb-3'>
                <button className='btn btn-md btn-success w-100' type='submit'>Enroll</button>
              </div>
              </Form>
              </Formik>
            </div>
            </div>
            </div>
            </div>
            <ToastContainer/>
    </>
  )
}

export default SignupModal
