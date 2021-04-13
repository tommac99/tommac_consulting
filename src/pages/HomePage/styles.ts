import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;

  .scrollDown {
    position: absolute;
    z-index: 3;
    top: 80vh;
    left: 50%;
    transform: translate(-50%, 0);
    width: 50px;
    height: 120px;
    cursor: pointer;
  }
`;
