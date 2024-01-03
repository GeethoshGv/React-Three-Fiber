import styled from "styled-components";

import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    color: #ffffff;

    @import url('https://fonts.googleapis.com/css2?family=Teko&display=swap');
    font-family: 'Teko', sans-serif;
    font-size:1.2rem;
    padding:0;
    margin:0;

  ::-webkit-scrollbar {
  display: none;
}
  }
    /* div{
      border:1px solid white;
    }
    span{
      border:1px solid gold;
    }
    h1{
      border:1px solid white;
    }
    h3{
      border:1px solid aqua;
    }
    section{
      border:1px solid red;
    } */

 



`;
