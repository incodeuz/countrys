import styled from "styled-components";

const Cart = styled.div`
  width: 265px;
  height: 350px;
  display: flex;
  flex-direction: column;
  background: ${({ dark }) => (dark ? "var(--darkbg)" : "var(--lightbg)")};
  color: ${({ dark }) => (dark ? "var(--lightbg)" : "var(--darkbg)")};
  border-radius: 5px;
  margin-bottom: 67px;
  transition: all 0.1s linear;
  overflow: hidden;
  @media screen and (max-width: 500px) {
    width: 230px;
    height: 330px;
  }
  :hover {
    transform: scale(1.05);
  }
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  max-height: 200px;
`;
const Boxes = styled.div`
  padding: 24px;
  flex: 1;
  color: ${({ dark }) => (dark ? "var(--lightbg)" : "var(--darkbg)")};
`;

Boxes.Title = styled.div`
  font-family: "Nunito Sans";
  font-style: normal;
  font-weight: 800;
  font-size: 18px;
  line-height: 26px;

  margin-bottom: 15px;
  @media screen and (max-width: 500px) {
  }
`;

export { Cart, Image, Boxes };
