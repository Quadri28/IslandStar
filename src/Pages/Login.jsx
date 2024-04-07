import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import * as Yup from "yup";
import ErrorText from "../Components/ErrorText";
import './Login.css'

const Login = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const initialValues = {
    email: "",
    password: "",
  };
  const validationSchema = Yup.object({
    email: Yup.string().email().required(),
    password: Yup.string()
      .required()
      .min(8, "password must be minimum of 8 character"),
  });
  const login = async (values) => {
    const payload = {
      email: values.email,
      password: values.password,
    };
    try {
      const resp = await axios.post(
        "http://127.0.0.1:8000/api/login",
        payload,
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );
      localStorage.setItem("user-details", JSON.stringify(resp.data));
      if (resp.data.data.user.is_confirmed === "0") {
        toast(
          "You are though registered, but your account is awaiting admin confirmation",
          { pauseOnHover: true, autoClose: false, type: "success" }
        );
      } else if (resp.data.data.user.is_confirmed === "1") {
        navigate("/dashboard");
      }
    } catch (error) {
      console.log(error)
      toast(error.response.data.message, {type:'error', autoClose:false, pauseOnHover:true})
    } 
  };
  return (
    <div style={{backgroundColor:'#f2f2f2'}} className="d-flex justify-content-center align-items-center">
    <div className="form-wrapper card p-3">
    <h5 className="text-center">Login</h5>
      <Formik
        onSubmit={login}
        initialValues={initialValues}
        validationSchema={validationSchema}
      >
        <Form>
          <div className="input-container">
            <label htmlFor="email">
              Email<sup className="text-danger">*</sup>:
            </label>
            <Field name="email" className='p-2' />
            <ErrorMessage name="email" component={ErrorText}/>
          </div>
          <div className="input-container mt-2">
            <label htmlFor="password" type="password" >
              Password<sup className="text-danger">*</sup>:
            </label>
            <Field name="password" className='p-2' type='password'/>
            <ErrorMessage name="password" component={ErrorText}/>
          </div>
          <div className="d-flex mt-2">
          <button className="btn btn-md w-100 bg-primary text-white mt-2" type="submit">
            Login
          </button>
          </div>
        </Form>
      </Formik>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
