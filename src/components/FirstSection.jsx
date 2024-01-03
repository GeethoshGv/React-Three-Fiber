import styled from "styled-components";

import { motion } from "framer-motion";

const FirstSection = () => {
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
          Engine
        </Styleh1>
        <Maindiv>
          <Enginediv
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
              Number of cylinders: <span>6</span>{" "}
            </h3>
            <h3>
              Bore: <span>91,0 mm</span>
            </h3>
            <h3>
              Displacement: <span>2.981 cm³</span>
            </h3>
            <h3>
              Power: <span> 331 kW</span>
            </h3>
            <h3>
              Power: <span>450 PS</span>{" "}
            </h3>
          </Enginediv>

          <Enginediv
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
              RPM point max power:<span>6.500 r/min</span>
            </h3>
            <h3>
              Max engine speed:<span>7.500 1/min</span>
            </h3>
            <h3>
              Max. torque:<span>530 Nm </span>{" "}
            </h3>
            <h3>
              RPM max torque:<span>2.300 - 5.000 1/min </span>
            </h3>
            <h3>
              Compression ratio:<span>10.2:1 </span>
            </h3>
          </Enginediv>
        </Maindiv>
      </Containier>
    </>
  );
};

export const Containier = styled.section`
  height: 130vh;
  width: 100%;
  z-index: 100;
  top: 100;
`;
export const Styleh1 = styled(motion.h1)`
  text-align: center;
  position: absolute;
  z-index: 44;

  width: 100%;
  text-transform: uppercase;
  letter-spacing: 0.35rem;
  color: #f1f3f5;

  @media only screen and (max-width: 600px) {
    font-size: 1.52rem;
  }
`;

const Maindiv = styled.div`
  padding: 2rem;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  font-size: 1rem;

  justify-content: space-between;

  @media only screen and (max-width: 600px) {
    display: grid;
    font-size: 0.96rem;
    grid-template-columns: 1fr;
    width: 100%;
    height: 60%;
    transform: translateY(40%);
    padding: 1rem;
    div {
      width: 90%;

      h3 {
        padding: 0.55rem;
      }
    }
  }
`;
const Enginediv = styled(motion.div)`
  width: 40%;
  text-align: center;

  h3 {
    padding: 1rem;
    font-weight: lighter;
    letter-spacing: 1.5px;

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

export default FirstSection;
