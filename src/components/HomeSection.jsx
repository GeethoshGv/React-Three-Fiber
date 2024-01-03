import styled from "styled-components";
import arrow from "../assets/arrow.svg";
import Avector from "../assets/Avector.svg";
import { motion } from "framer-motion";

const HomeSection = () => {
  return (
    <>
      <Homecontainer>
        <Maindiv>
          <H1heading>
            <span>
              <img className="box" src={Avector} alt="scroll" width={"50px"} />
            </span>
            <h1 className="title"> carrera</h1>
          </H1heading>

          <H6heading
            initial={{
              opacity: 0,
              y: 150,
            }}
            whileInView={{
              opacity: 1,
              y: 50,
              transition: { duration: 1.5 },
            }}
            viewport={{ once: false }}
          >
            A design that unites traditional and modern. That ensures more
            dynamism on the road. And causes a sensation for everyone who
            follows the <span>911</span>.
          </H6heading>
        </Maindiv>
        <Scrolldiv>
          <img src={arrow} alt="scroll" width={"35px"} />
        </Scrolldiv>
      </Homecontainer>
    </>
  );
};

const Homecontainer = styled.h1`
  height: 90vh;
  width: 100%;
  z-index: 100;
  top: 100;
`;
const H1heading = styled.h1`
  display: flex;

  h1 {
    justify-content: center;
    align-items: center;
    display: flex;
    line-height: 0rem;
    letter-spacing: 5px;
    text-transform: uppercase;
    text-align: center;
    font-size: 2rem;
    padding-bottom: 10rem;

    @media only screen and (max-width: 600px) {
      padding-bottom: 0rem;
    }
  }

  @media only screen and (max-width: 600px) {
    font-size: 1.7rem;
  }
  span {
    color: #00ffdd;
    font-size: 3rem;
    padding-right: 1rem;
    justify-content: center;
    align-items: center;
    display: flex;
    height: 20%;
    @media only screen and (max-width: 600px) {
      height: 100%;
    }
  }
`;
const H6heading = styled(motion.h6)`
  line-height: 1.9rem;
  font-weight: 100;
  color: #f1f3f5;
  margin: 10px;
  transform: translateY(5rem);
  text-align: center;
  font-size: 1.1rem;
  width: 50%;
  span {
    color: #9dff00;
  }

  @media only screen and (max-width: 600px) {
    width: 89%;
    line-height: 2rem;
    transform: translateY(6rem);
  }
`;

const Maindiv = styled.div`
  width: 100%;
  height: 90%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;

  @media only screen and (max-width: 600px) {
    justify-content: space-around;
  }
`;
const Scrolldiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    object-fit: contain;
    margin: 0;
    padding: 0;
    top: -50px;
  }
`;

export default HomeSection;
