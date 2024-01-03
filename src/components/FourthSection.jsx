import React from "react";
import styled from "styled-components";
import { Styleh1 } from "./FirstSection";
import { motion } from "framer-motion";
import lengthicon from "../assets/lengthicon.svg";
import wheelbase from "../assets/wheelbase.svg";

const FourthSection = () => {
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
          Dimensions{" "}
        </Styleh1>
        <Maindiv>
          <Dimdiv
            initial={{
              x: -50,
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: { duration: 1.5 },
            }}
            viewport={{ once: false }}
          >
            <h3>
              Length <span>4.519 mm</span>{" "}
              <Img
                src={lengthicon}
                alt=""
                initial={{
                  opacity: 0,
                }}
                whileInView={{
                  opacity: 1,
                  transition: { duration: 1, delay: 1 },
                }}
                viewport={{ once: false }}
              />
            </h3>
            <h3>
              Width <span>1.852 mm</span>
            </h3>
            <h3>
              Height <span>1.302 mm</span>
            </h3>
          </Dimdiv>
          <Dimdiv2
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
              <Img2
                src={wheelbase}
                alt=""
                initial={{
                  opacity: 0,
                }}
                whileInView={{
                  opacity: 1,
                  transition: { duration: 1, delay: 1 },
                }}
                viewport={{ once: false }}
              />
              Wheelbase <span>2.450 mm</span>
            </h3>
            <h3>
              Kerb Weight <span>1520 kg</span>
            </h3>
            <h3>
              Max load <span>450 kg</span>
            </h3>
          </Dimdiv2>
        </Maindiv>
      </Containier>
    </>
  );
};

const Containier = styled.section`
  height: 150vh;
  width: 100%;
  z-index: 100;
  top: 100;
`;
const Img = styled(motion.img)`
  object-fit: cover;
  position: absolute;
  height: 500px;
  transform: translateY(-75px);
  padding-left: 15px;
`;
const Img2 = styled(motion.img)`
  object-fit: cover;
  position: absolute;
  height: 50px;
  transform: translatex(-180px);
`;

const Maindiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;

  @media only screen and (max-width: 600px) {
    flex-direction: column;
  }
`;

const Dimdiv = styled(motion.div)`
  width: 50%;
  text-align: center;
  padding-bottom: 25rem;

  @media only screen and (max-width: 600px) {
    width: 70%;
    padding-bottom: 0%;

    img {
      display: none;
    }
  }

  h3 {
    padding: 1.3rem;
    font-weight: lighter;
    letter-spacing: 1.5px;
    font-size: 1.2rem;

    @media only screen and (max-width: 600px) {
      font-size: 1rem;
    }

    span {
      color: #9dff00;
      font-size: 1rem;
      padding-left: 0.55rem;
    }
  }
`;
const Dimdiv2 = styled(motion.div)`
  width: 50%;
  text-align: center;
  padding-top: 25rem;

  @media only screen and (max-width: 600px) {
    width: 70%;
    padding-top: 0%;
    img {
      display: none;
    }
  }

  h3 {
    padding: 1.3rem;
    font-weight: lighter;
    letter-spacing: 1.5px;
    font-size: 1.2rem;

    @media only screen and (max-width: 600px) {
      font-size: 1rem;
    }

    span {
      color: #9dff00;
      font-size: 1rem;
      padding-left: 0.55rem;

      @media only screen and (max-width: 600px) {
        font-size: 1rem;
      }
    }
  }
`;

export default FourthSection;
