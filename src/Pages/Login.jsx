import React from "react";
import { Formik, Form, ErrorMessage, Field } from "formik";
import ErrorText from "../Components/ErrorText";
import * as Yup from 'yup'

const Login = () => {

const initialValues={
    email: '',
    password:''
}

const validationSchema = Yup.object({
    email: Yup.string().email().required().label('Email'),
    password: Yup.string().required().label('Password'),
})

const onSubmit=(values)=>{
    const payload ={
        email: values.email,
        password: values.password,
    }
    axios.post('', payload, )
    console.log(payload)
}

  return (
    <div
      className=""
      style={{
        backgroundColor: "#411d18",
        position: "relative",
        height: "100vh",
      }}
    >
      <div
        className="card p-3"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          width: "330px",
          transform: "translate(-50%, -50%)",
        }}
      >
        <Formik
         initialValues={initialValues}
         validationSchema={validationSchema}
         onSubmit={onSubmit}
         >
          <Form>
            <h4 className="text-center">Sign In</h4>
            <div className="row gap-2 justify-content-center mx-auto">
              <div className="row">
                <label htmlFor="email">Email:</label>
                <Field
                  name="email"
                  style={{
                    height: "2.5rem",
                    borderRadius: "10px",
                    outline: "none",
                    border: "solid 1px #cdcdcd",
                  }}
                />
                <ErrorMessage name="email" component={ErrorText} />
              </div>
              <div className="row">
                <label htmlFor="email">Password:</label>
                <Field
                  name="password"
                  type='password'
                  style={{
                    height: "2.5rem",
                    borderRadius: "10px",
                    outline: "none",
                    border: "solid 1px #cdcdcd",
                  }}
                />
                <ErrorMessage name="password" component={ErrorText} />
              </div>
              <div className="text-center mt-3">
                <button
                  type="submit"
                  className="btn btn-md text-white"
                  style={{ backgroundColor: "#411d18" }}
                >
                  SignIn
                </button>
              </div>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default Login;
