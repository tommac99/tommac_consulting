import styled from "styled-components";
import { ThemeColor } from "../../constants";

export const Container = styled.div<{ linkColor: string }>`
  position: fixed;
  z-index: 99;
  top: 0;
  left: 0;
  width: 70px;
  height: 100vh;
  display: flex;
  align-items: center;

  .nav {
    width: 70px;
    height: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    padding-left: 20px;
  }
  .link:hover {
    transform: scale(1.08);
  }

  .link {
    color: #fff;
    font-size: 16px;
    font-weight: 600;
    text-decoration: none;
    min-width: 70px;
    text-align: center;
    padding: 10px;
    outline: none;
    border: none;
    background-color: ${(props) =>
      props.linkColor === "red"
        ? ThemeColor.background.red
        : ThemeColor.background.blue};
    box-shadow: 0px 5px 0px 0px
      ${(props) =>
        props.linkColor === "red"
          ? "rgba(195, 65, 93, 0.75)"
          : "rgba(21, 28, 48,0.75)"};
    border-radius: 10px;
    cursor: pointer;
    transition: transform 150ms ease-in-out, background-color 150ms ease-in-out,
      box-shadow 150ms ease-in-out;
  }

  .link:active {
    transform: translateY(3px);
    box-shadow: 0px 2px 0px 0px
      ${(props) =>
        props.linkColor === "red"
          ? "rgba(175, 45, 73, 0.75)"
          : "rgba(1, 8, 28,0.75)"};
  }

  .profile {
    position: absolute;
    left: 20px;
    bottom: 20px;
    width: 48px;
    height: 48px;
    padding: 1px;
    border-radius: 24px;
    background: ${ThemeColor.background.yellow};
    box-shadow: 0px 0px 10px 0px rgba(1, 8, 28, 0.2);
    display: flex;
    align-items: center;
    overflow: hidden;
    transition: width 300ms ease-in-out;
    cursor: pointer;

    &.open {
      width: 300px;
    }

    &.open .name {
      transform: scale(1);
    }

    .name {
      white-space: nowrap;
      transform: scale(0);
      transform-origin: left;
      transition: transform 300ms ease-in-out;
      transition-delay: 150ms;
      margin-left: 10px;
    }

    &.open .pdf {
      transform: scale(1);
    }

    .pdf {
      transform: scale(0);
      transition: transform 300ms ease-in-out;
      transition-delay: 450ms;
      margin-left: 20px;
      img {
        height: 36px;
      }
    }

    & > img {
      width: 48px;
      height: 48px;
      border-radius: 50%;
      object-fit: cover;
      object-position: 70%;
    }
  }
`;
