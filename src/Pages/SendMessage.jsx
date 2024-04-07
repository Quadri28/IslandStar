import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const SendMessage = () => {
  const user = localStorage.getItem("user-details");
  const [input, setInput] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()
    const payload = {
      message: input,
    };
    axios
      .post("http://127.0.0.1:8000/api/send-message", payload, {
        headers: {
          Authorization: `Bearer ${JSON.parse(user)?.data?.token}`,
        },
      })
      .then(() =>
        toast("Message sent successfully", {
          type: "success",
          autoClose: 5000,
          pauseOnHover: true,
        })
      )
      .catch((error) =>
        toast(error.message, {
          type: "error",
          autoClose: false,
          pauseOnHover: true,
        })
      );
  };
  return (
    <div className="d-flex justify-content-center">
     
        <form className="mt-4" onSubmit={onSubmit}>
          <h3>Send Message to Admin</h3>
          <textarea name='message' className="w-100 p-2" min={50} required onChange={(e)=>{
            setInput(e.target.value)}
          }/>
          <div className="d-flex justify-content-center mt-2">
            <button className="btn btn-success" type="submit">
              Send Message
            </button>
          </div>
          <ToastContainer/>
        </form>
    </div>
  );
};

export default SendMessage;
