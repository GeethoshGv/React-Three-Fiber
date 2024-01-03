import React from "react";
import styled from "styled-components";
import { Styleh1 } from "./FirstSection";
import pp from "../assets/img/pp.jpg";
import { motion } from "framer-motion";

const SixthSection = () => {
  return (
    <Containier>
      <Styleh1
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
          transition: { duration: 2.5 },
        }}
        viewport={{ once: false }}
      >
        Instrumentation
      </Styleh1>

      <Maindiv>
        <IMdiv
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
            transition: { duration: 3 },
          }}
          viewport={{ once: false }}
        >
          <img src={pp} alt="" />
        </IMdiv>
        <Instdiv
          initial={{
            opacity: 0,
            x: -50,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: { duration: 1.5 },
          }}
          viewport={{ once: false }}
        >
          <h3>
            Instrument Cluster
            <span>Analogue</span>
          </h3>
          <h3>
            Trip Meter
            <span>Multi-Function Display</span>
          </h3>
          <h3>
            Average Fuel Consumption
            <span>Yes</span>
          </h3>
          <h3>
            Average Speed
            <span>Yes</span>
          </h3>
        </Instdiv>
        <Instdiv
          initial={{
            opacity: 0,
            x: 50,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: { duration: 1.5 },
          }}
          viewport={{ once: false }}
        >
          <h3>
            Gear Indicator
            <span>Yes</span>
          </h3>
          <h3>
            Shift Indicator
            <span>Dynamic</span>
          </h3>
          <h3>
            Tachometer<span>Analogue</span>
          </h3>
          <h3>
            Adjustable Cluster Brightness
            <span>Yes</span>
          </h3>
        </Instdiv>
      </Maindiv>
    </Containier>
  );
};

const Containier = styled.section`
  height: 130vh;
  width: 100%;
  z-index: 100;
  top: 100;
  background-color: #212529;
`;
const Instdiv = styled(motion.div)`
  z-index: 5;
  h3 {
    padding: 2.5rem;
    font-weight: lighter;
    letter-spacing: 1.5px;
    font-size: 1.2rem;

    @media only screen and (max-width: 600px) {
      padding: 1rem;
      font-size: 1rem;

      text-align: center;
    }

    span {
      color: #d0ff00;
      padding-left: 0.55rem;
      font-size: 1.2rem;

      @media only screen and (max-width: 600px) {
        color: #9dff00;
        font-size: 1rem;
      }
    }
  }
`;

const IMdiv = styled(motion.div)`
  height: 130vh;
  width: 100%;
  position: absolute;
  @media only screen and (max-width: 600px) {
    position: relative;
  }

  img {
    opacity: 0.36;
    object-fit: contain;
    height: 100%;
    width: 100%;

    @media only screen and (max-width: 600px) {
      opacity: 1;
      object-fit: cover;
    }
  }
`;
const Maindiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-size: 1rem;
  @media only screen and (max-width: 600px) {
    flex-direction: column;
    justify-content: center;
  }
`;

export default SixthSection;
