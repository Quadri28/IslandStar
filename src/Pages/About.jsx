import React from "react";
import "./About.css";
import about from '../assets/about.jpeg'

const About = () => {
  return (
    <>
      <div className="position-relative">
        <div className="text-center hero-floater">
          <p className="hero-heading text-uppercase">About Us</p>
          <button
            className="text-uppercase btn btn-lg hero-enroll-btn text-white"
            style={{
              backgroundColor: "#f0990c",
              fontSize: "13px",
              borderRadius: "0",
              fontWeight: "500",
              fontFamily: "helvetica",
            }}
          >
            Enroll here
          </button>
        </div>
        <img src={about} alt="" className="img-fluid" />
      </div>
      <div
        className="text-center py-4 px-3"
        style={{ backgroundColor: "#411d18" }}
      >
        <div className="container row mx-auto">
          <h3
            style={{
              fontSize: "35px",
              fontFamily: "Helvetica-Bold",
              color: "#fff",
              textAlign: "center",
            }}
            className="text-uppercase "
          >
            Island stars football academy
          </h3>
          <p className="text-white mx-auto mt-2" style={{ width: "70%" }}>
            The Island Stars Football Academy is where players receive the right
            mentorship, quality coaching, and support needed to achieve their
            dreams, whether they intend to build careers in football or other
            fields of endeavour.{" "}
          </p>
          <div className="row mx-auto align-items-center mt-4">
            <div className="col-md-6">
              <div
                className=" mx-auto mb-2 px-4"
                style={{ width: "max-content", backgroundColor:'#f0990c' }}
              >
                <p
                  style={{
                    fontSize: "20px",
                    fontFamily: "Helvetica-roman",
                    color: "#fff",
                    textAlign: "center",
                    fontWeight: "600",
                  }}
                  className="text-center my-2"
                >
                  Our Mission
                </p>
              </div>
              <p className="text-white mt-4">
                To develop the total child, with focus on developing – physical
                abilities, technical skills, tactical skills, physiological
                capacities.
              </p>
            </div>
            <div className="col-md-6">
              <div
                className=" px-4  mx-auto"
                style={{ width: "max-content", backgroundColor:'#f0990c' }}
              >
                <p
                  style={{
                    fontSize: "20px",
                    fontFamily: "Helvetica-roman",
                    color: "#fff",
                    fontWeight: "600",
                    textAlign: "center",
                  }}
                  className="text-center"
                >
                  Our Vision
                </p>
              </div>
              <p className="text-white mt-4">
                We see football as an important vehicle to shape lives for
                growth and development, building individuals that would make a
                difference to society
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="about-features container my-4">
        <div className="text-center">
          <h3>Commitment</h3>
          <p>
            To us, Commitment, involves consistency in keeping to a set task or
            pursuing an objective, to the best of one’s ability EVERY TIME, no
            matter what the situation or circumstance.
          </p>
        </div>
        <div className="text-center">
          <h3>Integrity</h3>
          <p>
            Generally, Integrity can be described as “following a set of moral
            or ethical principles. As an academy, we believe in maintaining the
            highest level of trust and professionalism in every interaction and
            instilling the same virtues in everyone that passes through us.
          </p>
        </div>
        <div className="text-center">
          <h3>Teamwork</h3>
          <p>
            Teamwork is a vital life skill that can make or break anyone’s
            success. Only by working together and understanding each other can
            we perform our best as a team and excel.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
