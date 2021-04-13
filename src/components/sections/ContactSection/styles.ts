import styled from "styled-components";
import { ThemeColor } from "../../../constants";

export const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  background: ${ThemeColor.background.purple};
`;

export const Studio = styled.div`
  width: 100vw;

  .line {
    width: 50vw;
    height: 2px;
    background: ${ThemeColor.background.yellow};
    margin: 0 auto;
  }

  .description {
    width: 50vw;
    margin: 40px auto;
  }
`;
