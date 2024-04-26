import React from "react";
import image from "../assets/image.png";
import coachy from "../assets/coachy.png";
import short from "../assets/short.png";
import './Home.css'
import hero from '../assets/hero.jpeg'

const Home = () => {
  return (
    <>
      <div className="d-flex" style={{ position: "relative" }}>
        <div
         className="hero-floater"
        >
          <p className="hero-heading" >
            CREATING PLAYERS OF THE FUTURE
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
          >
            Enroll here
          </button>
        </div>
        <img
          src={hero}
          alt="hero image"
          className="img-fluid"
        />
      </div>
      <div style={{ backgroundColor: "#411d18" }} className="py-4">
        <div className="text-center row mx-auto container">
          <h3
            style={{
              fontSize: "35px",
              fontFamily: "Helvetica-Bold",
              color: "#fff",
              textAlign: "center",
            }}
          >
            WELCOME TO ISLAND STARS <br /> FOOTBALL ACADEMY
          </h3>
          <p className="text-center mt-3 text-white">
            At Island Stars Football Academy, we are invested in creating the
            best and most conducive environment for the development of players
            between the ages of 4 - 18 years old. Working with the understanding
            that every child is unique and develops physically and
            psychologically at different rates, the academy operates with these
            5 pillars of development – Tactical, Technical, Physical, &
            Psychosocial, across the different age category-based levels of the
            Football Development program. We believe that Football can promote
            personal development and transform lives. This belief is made true
            in the stories of now-famous football icons for whom football began
            as an escape from their reality and a chance for them to chase their
            dreams.
          </p>
          <div>
            <button
              className="text-uppercase btn btn-lg py-3 px-5 mt-3"
              style={{
                backgroundColor: "#f0990c",
                fontSize: "13px",
                borderRadius: "0",
                fontWeight: "500",
                fontFamily: "helvetica",
                color: "#fff",
              }}
            >
              Enroll Here
            </button>
          </div>
        </div>
      </div>
      <div className="bg-white row mx-auto text-center py-3 px-4" style={{margin:'4rem auto'}}>
        <div className="col-md-4">
          <img
            src={coachy}
            alt="coach and students image"
            className="img-fluid"
          />
          <div className="row gap-3 mt-3">
            <h3 style={{ fontFamily: "Helvetica-Bold" }}>
              DISCOVERY <br />
              PHASE
            </h3>
            <span>
              Our Discovery Phase focuses on a positive introduction to
              football, providing fundamental moves in a fun learning
              environment. This will help develop key social and cognitive
              skills needed to link the fundamentals and how to apply them to
              football in the next stage of their development.
            </span>
            <div>
            <button
            className="text-uppercase btn btn-lg py-3 px-5 mt-3 text-white"
            style={{
              backgroundColor: "#f0990c",
              fontSize: "13px",
              borderRadius: "0",
              fontWeight: "600",
              fontFamily: "helvetica",
              marginTop:'1rem'

            }}
          >
            5-6 years
          </button>
          </div>
          </div>
        </div>
        <div className="col-md-4">
          <img src={image} alt="A girl raising ball" className="img-fluid" />
          <div className="row gap-3 mt-3">
            <h3
              style={{
                fontFamily: "Helvetica-Bold",
                textTransform: "uppercase",
              }}
            >
              Foundation <br />
              PHASE
            </h3>
            <span>
              Our Foundation Phase develops how to link fundamental moves to the
              technical side of the game. Players will develop the Pro Football
              Academy Technical Fundamentals: Ball Control, Passing and
              Receiving and Goal Scoring in an environment where they are
              encouraged to take risks, express themselves and solve problems.
            </span>
            <div>
            <button
            className="text-uppercase btn btn-lg py-3 px-5 mt-3 text-white"
            style={{
              backgroundColor: "#f0990c",
              fontSize: "13px",
              borderRadius: "0",
              fontWeight: "600",
              fontFamily: "helvetica",
              marginTop:'1rem'

            }}
          >
            7-9 years
          </button>
          </div>
          </div>
        </div>
        <div className="col-md-4">
          <img src={short} alt="a boy taking short" className="img-fluid" />
          <div className="row gap-3 mt-3">
            <h3
              style={{
                fontFamily: "Helvetica-Bold",
                textTransform: "uppercase",
              }}
            >
              Youth Development <br />
              PHASE
            </h3>
            <span>
              Our Youth Development Phase will develop individual understanding
              of when and where to apply the Pro Football Academy Technical
              Fundamentals of the game. Next, we focus on developing teamwork in
              more competitive environments.
            </span>
            <div>
            <button
            className="text-uppercase btn btn-lg py-3 px-5 mt-3 text-white"
            style={{
              backgroundColor: "#f0990c",
              fontSize: "13px",
              borderRadius: "0",
              fontWeight: "600",
              fontFamily: "helvetica",
              marginTop:'1rem'
            }}
          >
            10+ years
          </button>
          </div>
        </div>
        </div>
      </div>
      <div className="row text-center gap-3 py-4 px-2 mt-3" style={{backgroundColor:'#411d18', color:'#fff'}}>
        <h3 style={{textTransform:'uppercase', fontFamily:'Helvetica-Bold', }}> Our Mission</h3>
        <p>To develop the total child, with focus on developing – physical abilities, technical skills, tactical skills, physiological capacities</p>
               <div><button className="text-white btn px-4 rounded-0" style={{backgroundColor:'#f0990c'}}>Enroll Here</button></div> 
      </div>
    </>
  );
};

export default Home;
