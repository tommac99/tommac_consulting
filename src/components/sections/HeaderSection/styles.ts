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
  .title {
    position: absolute;
    z-index: 1;
    top: 4%;
    left: 20%;
  }
  .subtitle {
    position: absolute;
    z-index: 1;
    top: 24%;
    left: 25%;
  }
`;

export const MobileContainer = styled.div`
  position: relative;
  width: 100vw;
  height: 80vh;
  background: linear-gradient(0deg, #cc867f, #2d1b3b);

  .title {
    position: absolute;
    top: 20px;
    left: 20px;
  }

  .subtitle {
    position: absolute;
    top: 14vh;
    left: 50%;
    transform: translate(-50%, 0);
  }

  .svg {
    position: absolute;
    bottom: -2px;
  }
`;
