import styled from "styled-components";

export const StudioItemContainer = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  margin: 80px 0;

  .content {
    width: 240px;
    padding-right: 60px;
  }

  .image {
    width: 300px;
    & > div {
      margin: 0;
    }
  }
`;
