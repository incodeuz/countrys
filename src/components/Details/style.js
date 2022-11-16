import styled from "styled-components";

const Wrapper = styled.div`
  height: 80px;
  max-width: 1280px;
  width: 100%;
  margin: 0 auto;
  display: flex;

  flex-direction: column;
  justify-content: space-between;
  .back {
    box-shadow: 0 0 7px 2px rgba(0, 0, 0, 0.05);
  }
`;

export { Wrapper };
