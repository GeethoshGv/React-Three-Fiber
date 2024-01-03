import React from "react";
import styled from "styled-components";
import list from "../assets/list.svg";
import cube from "../assets/cube.svg";
import PORSCHE from "../assets/PORSCHE.svg";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <Stylednav>
      <Navdiv>
        <ul>
          <li>
            <a href="">
              <img src={list} alt="user--v1" width={"30px"} className="Menu" />
            </a>
          </li>
          <li>
            <a href="#">
              <img
                src={PORSCHE}
                alt="user--v1"
                width={"100px"}
                className="porscheicon"
              />
            </a>
          </li>
          <li>
            <Link to="/threeD">
              <img
                src={cube}
                alt="user--v1"
                width={"28px"}
                className="usericon"
              />
            </Link>
          </li>
        </ul>
      </Navdiv>
    </Stylednav>
  );
};

const Stylednav = styled.nav`
  @media only screen and (max-width: 600px) {
  }
  width: 100%;
  height: 10vh;
  background-color: #868e96;
  margin-top: -20px;
  padding: 0;
`;
const Navdiv = styled.div`
  width: 100%;
  height: 100%;

  ul {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1.5rem;
    list-style: none;
    text-decoration: none;

    @media only screen and (max-width: 600px) {
      padding: 1rem;
    }
  }
  li {
    text-decoration: none;

    .Menu {
      padding-left: 5rem;
      @media only screen and (max-width: 600px) {
        padding-left: 0rem;
      }
    }
    .usericon {
      padding-right: 5rem;
    }

    @media only screen and (max-width: 600px) {
      .usericon {
        padding-right: 0rem;
      }

      .porscheicon {
        width: 100px;
        padding-right: 0rem;
      }
    }
  }
`;
export default Nav;
