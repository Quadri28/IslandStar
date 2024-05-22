import React, { useState } from "react";
import coaching from "../assets/coaching.jpeg";
import Modal from "react-modal";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import ErrorText from "../Components/ErrorText";
import "./WorkWithUs.css";
import useScreenSize from "../Components/ScreenSizeHook";
import axios from "../Components/axios";
import { toast } from "react-toastify";

const WorkWithUs = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [file, setFile] = useState("");
  const initialValues = {
    title: "",
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    location: "",
    qualification: "",
  };

  const validationSchema = Yup.object({
    title: Yup.string().required(),
    firstName: Yup.string().required().min(3).max(25).label("First Name"),
    lastName: Yup.string().required().min(3).max(25).label("Last Name"),
    email: Yup.string().email().required().label("Email"),
    phoneNumber: Yup.string().required().label("Phone Number"),
    location: Yup.string().required().label("location"),
    qualification: Yup.string().required().label("Qualification"),
  });

  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }

  const screenSize = useScreenSize();
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      // right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      borderRadius: "2rem",
      width: screenSize.width > 780 ? "50%" : "95%",
      overFlow: "scroll",
    },
  };

  const onSubmit = (values) => {
    const payload = new FormData();
    payload.append("first_name", values.firstName);
    payload.append("last_name", values.lastName);
    payload.append("location", values.location);
    payload.append("email", values.email);
    payload.append("qualification", values.qualification);
    payload.append("phone", values.phone);
    payload.append("title", values.title);
    axios
      .post("job-application", payload)
      .then((resp) =>
        toast(resp.data.message, {
          type: "success",
          pauseOnHover: true,
          autoClose: 5000,
        })
      )
      .catch((error) => {
        toast(error.response.message, {
          type: "error",
          pauseOnHover: true,
          autoClose: false,
        });
      });
  };

  return (
    <div>
      <div className="d-flex" style={{ position: "relative" }}>
        <div className="hero-floater">
          <p className="hero-heading text-uppercase">
            Join Our <br />
            coaching team
          </p>
          <button
            className="text-uppercase btn btn-lg hero-enroll-btn text-white"
            style={{
              backgroundColor: "#f0990c",
              fontSize: "13px",
              borderRadius: "0",
              fontWeight: "500",
              fontFamily: "helvetica",
            }}
            onClick={() => openModal()}
          >
            Join Us
          </button>
        </div>
        <img src={coaching} alt="hero image" className="img-fluid" />
      </div>
      <div style={{ backgroundColor: "#411d18" }} className="py-4">
        <div className="container row mx-auto">
          <h3
            className="text-uppercase text-center text-white"
            style={{ fontSize: "50px", fontFamily: "Helvetica-Bold" }}
          >
            We Offer the following <br />
            benefits
          </h3>
          <p className="text-white">
            We are always seeking professional, committed and motivated coaches
            to deliver our sessions in line with <br /> the Island Star FC way.{" "}
          </p>
          <ul className="text-white row gap-2">
            <li style={{ listStyle: "inside" }}>All coaching kit provided </li>
            <li style={{ listStyle: "inside" }}>All equipment provided </li>
            <li style={{ listStyle: "inside" }}>Competitive rates of pay </li>
            <li style={{ listStyle: "inside" }}>Full support system </li>
            <li style={{ listStyle: "inside" }}>Full induction process </li>
          </ul>
        </div>
        <div className="text-center">
          <button
            className="btn btn-md"
            onClick={() => openModal()}
            style={{
              backgroundColor: "#fff",
              fontSize: "16px",
              fontWeight: "600",
            }}
          >
            Join Us
          </button>
        </div>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        ariaHideApp={false}
      >
        <h3
          style={{ fontSize: "20px", textAlign: "center", fontWeight: "600" }}
        >
          Your Information
        </h3>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          <Form>
            <div className="row gap-2 justify-content-center work-with-us">
              <div className="col-5 row g-1">
                <label htmlFor="title">Title</label>
                <Field name="title" as="select">
                  <option value="">Select Title</option>
                  <option value="Mr">Mr.</option>
                  <option value="Mrs">Mrs.</option>
                  <option value="Miss">Miss.</option>
                  <option value="Ms">Ms.</option>
                </Field>
                <ErrorMessage name="title" component={ErrorText} />
              </div>
              <div className="col-5 row g-1">
                <label htmlFor="firstName">First Name:</label>
                <Field name="firstName" />
                <ErrorMessage name="firstName" component={ErrorText} />
              </div>
              <div className="col-5 row g-1">
                <label htmlFor="lastName">Last Name:</label>
                <Field name="lastName" />
                <ErrorMessage name="lastName" component={ErrorText} />
              </div>
              <div className="col-5 row g-1">
                <label htmlFor="email">Email:</label>
                <Field name="email" />
                <ErrorMessage name="email" component={ErrorText} />
              </div>
              <div className="col-5 row g-1">
                <label htmlFor="phoneNumber">Phone Number:</label>
                <Field name="phoneNumber" />
                <ErrorMessage name="phoneNumber" component={ErrorText} />
              </div>
              <div className="col-5 row g-1">
                <label htmlFor="location">Your location:</label>
                <Field name="location" />
                <ErrorMessage name="location" component={ErrorText} />
              </div>
              <div className="col-5 row g-1">
                <label htmlFor="qualification">Your qualification:</label>
                <Field name="qualification" />
                <ErrorMessage name="qualification" component={ErrorText} />
              </div>
              <div className="col-5 row g-1">
                <label htmlFor="location">Upload your CV:</label>
                <input
                  name="cv"
                  type="file"
                  style={{ border: "none" }}
                  onChange={(e) => setFile(e.target.files[0])}
                />
              </div>
            </div>
            <div className="text-center mt-3">
              <button
                className="btn btn-md text-white"
                style={{ backgroundColor: "#f0990c" }}
              >
                Submit
              </button>
            </div>
          </Form>
        </Formik>
      </Modal>
    </div>
  );
};

export default WorkWithUs;
