import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  font-family: Poppins, sans-serif;
}

body {
  background: #dcdcdc;
}

html {
  font-size: 62.5%;
}
`;

export const Container = styled.div`
  min-height: 100vh;
`;
export default GlobalStyle;
