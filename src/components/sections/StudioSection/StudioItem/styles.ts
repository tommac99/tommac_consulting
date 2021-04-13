import styled from "styled-components";

export const StudioItemContainer = styled.div<{ index: number }>`
  width: 100vw;
  display: flex;
  justify-content: center;
  margin: 160px 0;
  flex-direction: ${(props) =>
    (props.index + 1) % 2 === 0 ? "row-reverse" : "row"};

  .content {
    height: 200px;
    width: 240px;
    ${(props) =>
      (props.index + 1) % 2 === 0
        ? "padding-left: 60px;"
        : "padding-right: 60px"};
  }

  .image {
    width: 300px;
    & > div {
      margin: 0;
    }
  }
`;
