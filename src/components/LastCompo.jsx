import React from "react";
import styled from "styled-components";
import { Styleh1 } from "./FirstSection";
import { motion } from "framer-motion";

const LastCompo = () => {
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
        Performance
      </Styleh1>
      <Maindiv>
        <Perdiv
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
            0–60 mph:
            <span>3.4 s</span>
          </h3>
          <h3>
            0–60 mph with Sport Plus:<span> 3.2 s</span>
          </h3>
          <h3>
            0–100 km/h:
            <span>3.6 s</span>
          </h3>
          <h3>
            0–100 km/h with Sport Plus:
            <span>3.4 s</span>
          </h3>
          <h3>
            0–160 km/h:
            <span>8.3 s</span>
          </h3>
          <h3>
            0–160 km/h with Sport Plus:
            <span>8.0 s</span>
          </h3>
          <h3>
            0–200 km/h:
            <span>12.7 s</span>
          </h3>
          <h3>
            0–200 km/h with Sport Plus:
            <span>12.4 s</span>
          </h3>
        </Perdiv>
        <Perdiv2></Perdiv2>
      </Maindiv>
    </Containier>
  );
};

const Containier = styled.section`
  height: 130vh;
  width: 100%;
  z-index: 100;
  top: 100;
`;

const Perdiv = styled(motion.div)`
  width: 35%;
  text-align: center;

  @media only screen and (max-width: 600px) {
    width: 75%;
    padding-bottom: 0%;
  }

  h3 {
    padding: 1rem;
    font-weight: lighter;
    letter-spacing: 1.5px;
    font-size: 1.2rem;
    line-height: 1.75rem;

    @media only screen and (max-width: 600px) {
      line-height: 1.6rem;
      padding: 1rem;
      font-size: 1rem;
    }

    span {
      color: #9dff00;
      padding-left: 0.55rem;
      font-size: 1.2rem;

      @media only screen and (max-width: 600px) {
        font-size: 1rem;
      }
    }
  }
`;
const Perdiv2 = styled.div`
  @media only screen and (max-width: 600px) {
    display: none;
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
    justify-content: space-around;
  }
`;

export default LastCompo;
