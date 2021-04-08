import styled from "styled-components";

export const Container = styled.div`
  padding: 20px 0;
  .nav {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .nav a {
    margin: 0 20px;
    color: #fff;
    font-size: 24px;
    font-weight: 500;
    transition: 0.5s;
    text-decoration: none;
  }
  .nav a:hover {
    transform: scale(1.08);
  }
  .nav button {
    padding: 10px;
    outline: none;
    border: none;
    font-size: 20px;
    color: #fff;
    font-weight: 600;
    background-color: rgba(255, 0, 0, 0.5);
    box-shadow: 0px 5px 0px 0px rgba(255, 0, 0, 0.25);
    border-radius: 10px;
    cursor: pointer;
    transition: 70ms;
  }

  .nav button:active {
    transform: translateY(3px);
    box-shadow: 0px 2px 0px 0px rgba(255, 0, 0, 0.25);
  }

  .Burger {
    display: none;
    margin: 0 20px 0 0;
    padding: 0;
    justify-self: end;
    font-size: 20px;
    border: none;
    background: none;
    outline: none;
    transition: 0.1s;
  }
  .Burger:active {
    transform: scale(1.2);
  }

  @media (max-width: 700px) {
    .Header {
      grid-template-areas: "logo burger" "nav nav";
    }
    .Nav {
      grid-template-rows: repeat(4, auto);
      grid-template-columns: none;
      grid-row-gap: 20px;

      padding: 30px 0 30px;
      background: rgba(40, 44, 47, 0.95);
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
      border-bottom-left-radius: 10px;
      border-bottom-right-radius: 10px;
    }
    .Burger {
      display: inline;
    }
  }

  .NavAnimation-enter {
    opacity: 0;
    transform: scale(0.5);
  }
  .NavAnimation-enter-active {
    opacity: 1;
    transform: translateX(0);
    transition: opacity 350ms, transform 350ms;
  }
  .NavAnimation-exit {
    opacity: 1;
  }
  .NavAnimation-exit-active {
    opacity: 0;
    transform: scale(0.5);
    transition: opacity 350ms, transform 350ms;
  }
`;
