import styled from "styled-components";
import { ThemeColor } from "../../../constants";

export const Container = styled.div`
  width: 100vw;
`;

export const Studio = styled.div`
  width: 100vw;
  margin-top: 80px;

  .line {
    width: 50vw;
    height: 1px;
    background: ${ThemeColor.background.yellow};
    margin: 0 auto;
  }

  .description {
    width: 50vw;
    margin: 40px auto;
  }
`;

export const MobileStudio = styled.div`
  width: 100vw;
  margin-top: 160px;

  .line {
    width: 80vw;
    height: 1px;
    background: ${ThemeColor.background.yellow};
    margin: 0 auto;
  }

  .description {
    width: 80vw;
    margin: 40px auto;
  }
`;
