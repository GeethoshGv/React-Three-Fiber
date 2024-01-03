import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Styleh1 } from "./FirstSection";
import Acc from "./Accordion";

const ThirdSection = () => {
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
          Light
        </Styleh1>
        <Maindiv>
          <Lightdiv
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
            <Acc
              name="Daytime Running Lights:"
              spanname="LED"
              Typoname=" Lights that automatically switch on during the day for
              increased visibility "
            />

            <Acc
              name="Cornering Headlight:"
              spanname="Active"
              Typoname=" These lights turn left and right based on steering inputs to
              illuminate the sides of the car "
            />
          </Lightdiv>

          <Lightdiv
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
            <Acc
              name="Fog Lights:"
              spanname="LED"
              Typoname=" A type of lamp that improves driver visibility while driving
              through fog"
              TypoP="The yellow/amber fog lights are preferable as they are
              warm to the eyes and do not reflect from the fog."
            />
            <Acc
              name="Headlights:"
              spanname="Xenon"
              Typoname="Tip: high-performance headlights"
              TypoP="extremely bright high-intensity"
            />
          </Lightdiv>
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
const Lightdiv = styled(motion.div)`
  width: 20%;
  display: grid;
  grid-template-columns: 1fr;
  gap: 10rem;

  @media only screen and (max-width: 600px) {
    width: 75%;
    gap: 2.5rem;
  }

  .kk {
    background-color: transparent;
    color: #f1f3f5;
    border: 1px solid white;

    @media only screen and (max-width: 600px) {
      .co {
        /* background-color: #000000a1; */
      }
      span {
        color: #9dff00;
        padding-left: 0.55rem;
      }
    }
  }
`;

const Maindiv = styled.div`
  width: 100%;
  height: 100%;
  font-size: 0.91rem;

  display: flex;
  align-items: center;
  justify-content: space-around;

  @media only screen and (max-width: 600px) {
    flex-direction: column;
  }
`;

export default ThirdSection;
