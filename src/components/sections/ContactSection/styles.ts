import styled from "styled-components";
import { ThemeColor } from "../../../constants";

export const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  background: ${ThemeColor.background.purple};
  padding-bottom: 80px;
`;

export const Form = styled.div`
  width: 100vw;

  .line {
    width: 50vw;
    height: 2px;
    background: ${ThemeColor.background.yellow};
    margin: 0 auto;
  }

  .form {
    margin: 40px auto 0 auto;
    max-width: 400px;
    width: 100%;

    .input {
      width: calc(100% - 32px);
      margin: 10px 0;
      padding: 8px 16px;
      border-radius: 10px;
      border: none;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    }

    .submit {
      margin: 20px auto 0 auto;
      width: 300px;
      font-weight: 600;
      background: none;
      color: ${ThemeColor.text.primary};
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 16px 24px;
      border: 2px solid ${ThemeColor.text.primary};
      cursor: pointer;
      border-radius: 10px;
    }
  }
`;
