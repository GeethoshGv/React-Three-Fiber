import React from "react";
import styled from "styled-components";
import facebook from "../assets/facebook.svg";
import instagram from "../assets/instagram.svg";
import linkedin from "../assets/linkedin.svg";
import twitterx from "../assets/twitterx.svg";

const Footer = () => {
  return (
    <>
      <Styledfooter>
        <Footdiv>
          <Indiv>
            <h6>Build & Find</h6>
            <a href="">Build your Porsche</a>
            <a href="">Compare Models</a>
            <a href="">Search Pre-Owned</a>
          </Indiv>
          <Indiv>
            <h6>Online Services</h6>
            <a href="">Porsche Login</a>
            <a href="">Sign up for News</a>
            <a href="">Sign up for News</a>
          </Indiv>
        </Footdiv>
        <Connectdiv>
          <h6>Connect with Porsche</h6>
          <div>
            <a href="">
              <img src={twitterx} alt="" width={"45px"} />
            </a>
            <a href="">
              <img src={facebook} alt="" width={"45px"} />
            </a>
            <a href="">
              <img src={linkedin} alt="" width={"45px"} />
            </a>
            <a href="">
              <img src={instagram} alt="" width={"45px"} />
            </a>
          </div>
        </Connectdiv>
        <Copydiv>
          <h6>All rights reserved</h6>
          <h6>Terms and Conditions</h6>
        </Copydiv>
      </Styledfooter>
    </>
  );
};

const Styledfooter = styled.footer`
  width: 100%;
  height: 80vh;
  background-color: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(25px);

  @media only screen and (max-width: 600px) {
  }
`;
const Footdiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 50%;

  @media only screen and (max-width: 600px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`;
const Indiv = styled.div`
  @media only screen and (max-width: 600px) {
    padding: 0;
  }
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 1rem;
  width: 100%;
  height: 100%;
  h6 {
    font-size: 1.4rem;
    font-weight: lighter;

    @media only screen and (max-width: 600px) {
      font-size: 1.3rem;
      margin: 20px;
    }
  }
  a {
    font-size: 1rem;
    color: white;
    padding-bottom: 1.5rem;
    text-decoration: none;
    font-family: "Iceland", sans-serif;
  }
`;

const Connectdiv = styled.div`
  text-align: center;

  h6 {
    font-size: 1.2rem;
    font-weight: lighter;

    padding: 1rem;
    margin: 0;
    @media only screen and (max-width: 600px) {
      padding: 1.2rem;
    }
  }

  div {
    display: flex;
    align-items: center;
    padding-left: 2.5rem;
    padding-right: 2.5rem;
    justify-content: center;
    @media only screen and (max-width: 600px) {
      justify-content: space-around;
      padding: 1rem;
    }
  }
  img {
    margin: 0;
  }
`;

const Copydiv = styled.div`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 600px) {
    padding: 0.51rem;
  }
  h6 {
    font-weight: lighter;
    font-size: 1rem;
    padding: 1rem;
    margin: 0;
  }
`;

export default Footer;
