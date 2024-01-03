import React from "react";
import styled from "styled-components";
import { Styleh1 } from "./FirstSection";
import { motion } from "framer-motion";

const FifthSection = () => {
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
          Transmission
        </Styleh1>

        <Maindiv>
          <TransmissionDiv
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
              Drivetrain:
              <span>AWD</span>
            </h3>
            <h3>
              Gears:
              <span> 7 Gears</span>
            </h3>
            <h3>
              Front Suspension:
              <span>McPherson Strut Suspension</span>
            </h3>
          </TransmissionDiv>

          <TransmissionDiv
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
              Rear Suspension:
              <span>Multi-link Suspension</span>
            </h3>
            <h3>
              Transmission:
              <span>Automatic</span>
            </h3>
            <h3>
              Steering Type:
              <span>Power assisted Electric</span>
            </h3>
          </TransmissionDiv>
        </Maindiv>
      </Containier>
    </>
  );
};

const Containier = styled.section`
  height: 130vh;
  width: 100%;
  z-index: 100;
  top: 100;
`;

const TransmissionDiv = styled(motion.div)`
  width: 25%;
  text-align: center;

  @media only screen and (max-width: 600px) {
    width: 75%;
    padding-bottom: 0%;

    img {
      display: none;
    }
  }

  h3 {
    padding: 1.5rem;
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

export default FifthSection;
