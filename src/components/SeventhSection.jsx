import React from "react";
import styled from "styled-components";
import { Styleh1 } from "./FirstSection";
import { motion } from "framer-motion";

const SeventhSection = () => {
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
        exhaust
      </Styleh1>
      <Qdiv>
        <h3>
          <span>
            It's a great option for enthusiasts who want the iconic Porsche
            growl when they push their car hard.
          </span>
        </h3>
      </Qdiv>

      <Maindiv>
        <Exhdiv
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
            <span>Standard Exhaust</span>: This is the base exhaust system and
            offers a quieter, more subdued sound.
          </h3>
          <h3>
            It's suitable for everyday driving and won't attract too much
            attention.
          </h3>
        </Exhdiv>
        <Exhdiv2
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
            <span> Porsche Sport Exhaust (PSE)</span>: This is an optional
            system that features electronically controlled valves in the
            mufflers.
          </h3>
          <h3>
            These valves can be opened or closed via a button on the center
            console, changing the exhaust sound dramatically.{" "}
          </h3>
          <h3>
            In "Normal" mode, the PSE is similar to the standard exhaust, but in
            "Sport" and "Sport Plus" modes, it becomes much louder and more
            aggressive.
          </h3>
        </Exhdiv2>
      </Maindiv>
    </Containier>
  );
};

const Containier = styled.section`
  height: 150vh;
  width: 100%;
  z-index: 100;
  top: 100;
`;

const Qdiv = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3rem 0 3rem 0;
  position: absolute;
  width: 100%;

  @media only screen and (max-width: 600px) {
    position: relative;
    padding: 3rem 0 1rem 0;
  }
  h3 {
    width: 50%;
    text-align: center;
    padding: 1.5rem;
    font-weight: lighter;
    letter-spacing: 2.2px;

    @media only screen and (max-width: 600px) {
      line-height: 1.6rem;
      font-size: 1rem;

      width: 100%;
      padding-right: 10px;
      padding-left: 10px;
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

const Exhdiv = styled(motion.div)`
  width: 35%;
  padding-bottom: 15%;

  @media only screen and (max-width: 600px) {
    width: 100%;
    padding-bottom: 0%;
  }

  h3 {
    padding: 1rem;
    font-weight: lighter;
    letter-spacing: 1.5px;
    font-size: 1.2rem;
    line-height: 1.6rem;

    @media only screen and (max-width: 600px) {
      line-height: 1.6rem;
      padding-right: 20px;
      padding-left: 20px;
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
const Exhdiv2 = styled(motion.div)`
  width: 35%;
  padding-top: 35%;

  @media only screen and (max-width: 600px) {
    width: 100%;
    padding-top: 0%;
  }

  h3 {
    padding: 1rem;
    font-weight: lighter;
    letter-spacing: 1.5px;
    font-size: 1.2rem;
    line-height: 1.6rem;

    @media only screen and (max-width: 600px) {
      line-height: 1.6rem;
      padding-right: 20px;
      padding-left: 20px;
      font-size: 1rem;
    }

    span {
      color: #9dff00;
      letter-spacing: 1.5px;
      padding-right: 1rem;
      font-size: 1.25rem;

      @media only screen and (max-width: 600px) {
        font-size: 1rem;
        padding-right: 0.55rem;
      }
    }
  }
`;

const Maindiv = styled.div`
  width: 100%;
  height: 85%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1rem;

  @media only screen and (max-width: 600px) {
    flex-direction: column;
    justify-content: center;
    height: 70%;
  }
`;

export default SeventhSection;
