import React, { useState } from "react";
import image from "../assets/image.png";
import coachy from "../assets/coachy.png";
import short from "../assets/short.png";
import "./Home.css";
import hero from "../assets/hero.jpeg";
import one from "../assets/1.jpeg";
import two from "../assets/2.jpeg";
import three from "../assets/3.jpeg";
import seven from "../assets/7.jpeg";
import eight from "../assets/8.jpeg";
import nine from "../assets/9.jpeg";
import ten from "../assets/10.jpeg";
import eleven from "../assets/11.jpeg";
import twelve from "../assets/12.jpeg";
import twentyTwo from "../assets/22.jpeg";
import thirteen from "../assets/13.jpeg";
import seventeen from "../assets/17.jpeg";
import fifteen from "../assets/15.jpeg";
import sixteen from "../assets/16.jpeg";
import eighteen from "../assets/18.jpeg";
import nineteen from "../assets/19.jpeg";
import SignupModal from "../Components/SignupModal";
import {ToastContainer} from 'react-toastify'
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/splide/dist/css/splide.min.css";

const Home = () => {
  

  return (
    <>
      <div className="d-flex" style={{ position: "relative" }}>
        <div className="hero-floater">
          <p className="hero-heading">CREATING PLAYERS OF THE FUTURE</p>
          <button
            className="text-uppercase btn btn-lg hero-enroll-btn text-white"
            style={{
              backgroundColor: "#f0990c",
              fontSize: "13px",
              borderRadius: "0",
              fontWeight: "500",
              fontFamily: "helvetica",
            }}
            data-bs-toggle="modal"
            data-bs-target="#signup"
          >
            Enroll here
          </button>
        </div>
        <img src={hero} alt="hero image" className="img-fluid" />
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
              data-bs-toggle="modal"
              data-bs-target="#signup"
            >
              Enroll Here
            </button>
          </div>
        </div>
      </div>
      <div
        className="bg-white row mx-auto text-center py-3 px-4 g-3"
        style={{ margin: "4rem auto" }}
      >
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
                  marginTop: "1rem",
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
                  marginTop: "1rem",
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
                  marginTop: "1rem",
                }}
              >
                10+ years
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className="row text-center gap-3 py-4 px-2 mt-3"
        style={{ backgroundColor: "#411d18", color: "#fff" }}
      >
       <Splide
          options={{
            type: "loop",
            gap: "10px",
            drag: "free",
            arrows: false,
            pagination: false,
            perPage: 5,
            autoScroll: {
              pauseOnHover: false,
              pauseOnFocus: false,
              rewind: false,
              speed: 1,
            },
          }}
          extensions={{ AutoScroll }}
        >
          <SplideSlide className="slide">
            <img src={hero} alt="Our student image" />
          </SplideSlide>
          <SplideSlide className="slide">
            <img src={one} alt="Our student image" />
          </SplideSlide>
          <SplideSlide className="slide">
            <img src={two} alt="Our student image" />
          </SplideSlide>
          <SplideSlide className="slide">
            <img src={three} alt="Our student image" />
          </SplideSlide>
          <SplideSlide className="slide">
            <img src={seven} alt="Our student image" />
          </SplideSlide>
          <SplideSlide className="slide">
            <img src={eight} alt="Our student image" />
          </SplideSlide>
          <SplideSlide className="slide">
            <img src={nine} alt="Our student image" />
          </SplideSlide>
          <SplideSlide className="slide">
            <img src={ten} alt="Our student image" />
          </SplideSlide>
          <SplideSlide className="slide">
            <img src={eleven} alt="Our student image" />
          </SplideSlide>
          <SplideSlide className="slide">
            <img src={twelve} alt="Our student image" />
          </SplideSlide>
          <SplideSlide className="slide">
            <img src={thirteen} alt="Our student image" />
          </SplideSlide>
          <SplideSlide className="slide">
            <img src={seventeen} alt="Our student image" />
          </SplideSlide>
          <SplideSlide className="slide">
            <img src={fifteen} alt="Our student image" />
          </SplideSlide>
          <SplideSlide className="slide">
            <img src={sixteen} alt="Our student image" />
          </SplideSlide>
          <SplideSlide className="slide">
            <img src={twentyTwo} alt="Our student image" />
          </SplideSlide>
          <SplideSlide className="slide">
            <img src={eighteen} alt="Our student image" />
          </SplideSlide>
          <SplideSlide className="slide">
            <img src={nineteen} alt="Our student image" />
          </SplideSlide>
       </Splide>
        
      <ToastContainer/>
      </div>
      <SignupModal />
    </>
  );
};

export default Home;
