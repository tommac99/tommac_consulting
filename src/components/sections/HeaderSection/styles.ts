import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(0deg, #cc867f, #2d1b3b);
  &::after {
    content: "";
    width: 100vw;
    height: 200px;
    position: absolute;
    bottom: 0;
    background: #151c30;
  }
  .foreground {
    position: absolute;
    bottom: 80px;
    z-index: 2;
  }
  .mountains {
    position: absolute;
    bottom: 80px;
    z-index: 1;
  }
  .moon {
    position: absolute;
    bottom: 80px;
  }
  .stars {
    position: absolute;
    bottom: 80px;
  }
`;
