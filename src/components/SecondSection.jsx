import React from "react";
import styled from "styled-components";
import { Styleh1 } from "./FirstSection";
import { motion } from "framer-motion";

const SecondSection = () => {
  return (
    <>
      <Containier>
        <Styleh1
          initial={{
            opacity: 0,
            x: 50,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: { duration: 2 },
          }}
          viewport={{ once: false }}
        >
          Brakes & Tyres
        </Styleh1>
        <Maindiv>
          <Wheeldiv
            initial={{
              opacity: 0,
              x: -150,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: { duration: 1.5 },
            }}
            viewport={{ once: false }}
          >
            <h3>
              Front Brake Type: <span>Disc</span>{" "}
            </h3>
            <h3>
              Rear Brake Type: <span>Disc</span>
            </h3>
            <h3>
              Min Turning Radius:<span>5.5 M</span>
            </h3>
            <h3>
              Wheels: <span>Alloy Wheels</span>
            </h3>
            <h3>
              Front Tyres: <span>245 / 35 R20</span>{" "}
            </h3>
            <h3>
              Rear Tyres: <span>295 / 30 R20</span>{" "}
            </h3>
          </Wheeldiv>
        </Maindiv>
      </Containier>
    </>
  );
};
const Containier = styled.section`
  overflow: hidden;
  height: 130vh;
  width: 100%;
  z-index: 100;
  top: 100;
`;

const Maindiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;
const Wheeldiv = styled(motion.div)`
  width: 40%;
  text-align: center;

  @media only screen and (max-width: 600px) {
    width: 70%;
  }

  h3 {
    padding: 1rem;
    font-weight: lighter;
    letter-spacing: 1.5px;
    font-size: 1.2rem;

    @media only screen and (max-width: 600px) {
      font-size: 1rem;
      width: 100%;
    }

    span {
      color: #9dff00;
      font-size: 1.2rem;
      padding-left: 0.55rem;

      @media only screen and (max-width: 600px) {
        font-size: 1rem;
      }
    }
  }
`;

export default SecondSection;
