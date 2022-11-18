import styled from "styled-components";

const Cart = styled.div`
  width: 265px;
  height: 350px;
  display: flex;
  flex-direction: column;
  background: #ffffff;
  box-shadow: 0px 0px 7px 5px rgba(0, 0, 0, 0.02);
  border-radius: 5px;
  margin-bottom: 67px;
  transition: all 0.1s linear;
  overflow: hidden;
  :hover {
    box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.2);
    .image {
      transition: all 0.1s linear;
      transform: scale(1.1);
    }
  }
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
`;
const Boxes = styled.div`
  padding: 24px;
  flex: 1;
`;

Boxes.Title = styled.div`
  font-family: "Nunito Sans";
  font-style: normal;
  font-weight: 800;
  font-size: 18px;
  line-height: 26px;
  color: #111517;
  margin-bottom: 15px;
`;

export { Cart, Image, Boxes };
