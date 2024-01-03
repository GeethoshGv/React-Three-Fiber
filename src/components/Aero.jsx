import React from "react";
import styled from "styled-components";
import { Styleh1 } from "./FirstSection";
import { motion } from "framer-motion";

const Aero = () => {
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
        Aerodynamics
      </Styleh1>
      <Maindiv>
        <Aerodiv
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
            <span>Active rear spoiler</span>: This is the most prominent
            feature, electronically adjusting its angle depending on speed and
            driving mode.
          </h3>

          <h3>
            At high speeds, it extends and angles upwards, generating downforce
            for increased stability and reducing lift.
          </h3>
          <h3>
            In Eco mode, it retracts for minimized drag and improved fuel
            consumption.
          </h3>
        </Aerodiv>
        <Aerodiv2
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
            <span> Passive Aerodynamics</span>: Sleek body design The overall
            shape of the car minimizes drag and wind resistance.
          </h3>
          <h3>
            <span>Large air intakes</span>: Designed to efficiently direct air
            to the engine and brakes without creating
          </h3>
          <h3>
            Frontal area A: <span>2.07 m²</span>
          </h3>
          <h3>
            Drag coefficient:
            <span> 0.29</span>
          </h3>
        </Aerodiv2>
      </Maindiv>
      <h3 className="Top">
        With The Help of Aerodynamic it Can achieve Top speed:
        <span> 306 km/h</span>
      </h3>
    </Containier>
  );
};

const Containier = styled.section`
  height: 140vh;
  width: 100%;
  z-index: 100;
  top: 100;

  .Top {
    font-weight: lighter;
    letter-spacing: 1.5px;

    text-align: center;
    font-size: 1.2rem;

    @media only screen and (max-width: 600px) {
      line-height: 1.6rem;
      padding: 1rem;

      font-size: 1rem;
    }
    span {
      color: #9dff00;
      letter-spacing: 1.5px;

      padding-right: 1rem;
      font-size: 1.2rem;

      @media only screen and (max-width: 600px) {
        font-size: 1rem;
        padding-right: 0.55rem;
      }
    }
  }
`;
const Aerodiv = styled(motion.div)`
  width: 35%;
  padding-bottom: 20%;

  @media only screen and (max-width: 600px) {
    width: 100%;
    padding-bottom: 0%;
  }

  h3 {
    padding: 1.5rem;
    font-weight: lighter;
    letter-spacing: 1.5px;
    font-size: 1.2rem;
    line-height: 1.6rem;

    @media only screen and (max-width: 600px) {
      line-height: 1.6rem;
      padding: 0.55rem;
      padding-left: 15px;
      padding-right: 15px;

      font-size: 1rem;
    }

    span {
      color: #9dff00;
      letter-spacing: 1.5px;

      padding-right: 1rem;
      font-size: 1.2rem;

      @media only screen and (max-width: 600px) {
        font-size: 1rem;
        padding-right: 0.55rem;
      }
    }
  }
`;
const Aerodiv2 = styled(motion.div)`
  width: 35%;
  padding-bottom: 20%;

  @media only screen and (max-width: 600px) {
    width: 100%;
    padding-bottom: 0%;
  }

  h3 {
    padding: 1.5rem;
    font-weight: lighter;
    letter-spacing: 1.5px;
    font-size: 1.2rem;
    line-height: 1.6rem;

    @media only screen and (max-width: 600px) {
      line-height: 1.6rem;
      padding: 0.55rem;
      padding-left: 15px;
      padding-right: 15px;

      font-size: 1rem;
    }

    span {
      color: #9dff00;
      letter-spacing: 1.5px;

      padding-right: 1rem;
      font-size: 1.2rem;

      @media only screen and (max-width: 600px) {
        font-size: 1rem;
        padding-right: 0.55rem;
      }
    }
  }
`;

const Maindiv = styled.div`
  width: 100%;
  height: 90%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-size: 1rem;

  @media only screen and (max-width: 600px) {
    flex-direction: column;
    justify-content: space-evenly;
  }
`;

export default Aero;
