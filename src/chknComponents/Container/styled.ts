import styled from "styled-components";

export const StyledContainer = styled.div`
  display: block;
  box-sizing: border-box;
  width: 100vw;
  margin-right: auto;
  margin-left: auto;
  padding: 0 10px;
  /* Small devices (landscape phones, 576px and up) */
  @media (min-width: 576px) {
    max-width: 540px;
  }

  /* Medium devices (tablets, 768px and up) */
  @media (min-width: 768px) {
    max-width: 720px;
  }

  /* Large devices (desktops, 992px and up) */
  @media (min-width: 992px) {
    max-width: 960px;
  }

  /*  Extra large devices (large desktops, 1200px and up) */
  @media (min-width: 1200px) { 
    max-width: 1140px;
  }

`