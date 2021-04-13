import styled, { keyframes } from "styled-components";
import { ThemeColor } from "../../../../constants";

const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: scale(0);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
`;

export const StudioItemContainer = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  margin: 120px 0;

  .content {
    width: 240px;
    padding-top: 40px;
    padding: 40px 60px 0 0;
  }

  .image {
    position: relative;
    width: 300px;
    & > div {
      margin: 0;
    }
  }
  .example {
    position: absolute;
    top: 42px;
    left: 1px;
    height: 254px;
    width: 424px;
    object-fit: cover;
    object-position: center;
    opacity: 0;
    transform: scale(0);
    animation: 300ms ${fadeIn} 600ms ease-in-out forwards;
  }

  .btn {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    padding: 16px 24px;
    border: 2px solid ${ThemeColor.text.primary};
    cursor: pointer;
    border-radius: 10px;
  }
`;
