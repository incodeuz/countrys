import styled from "styled-components";
import { ReactComponent as DarkLight } from "../../assets/icons/light.svg";

const Container = styled.div`
  background-color: ${({ dark }) =>
    dark ? "var(--darkbg)" : "var(--lightbg)"};
  color: ${({ dark }) => (dark ? "var(--lightbg)" : "var(--darkbg)")};
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.0562443);
  width: 100%;
  .logo {
    height: 50px;
    width: 200px;
    @media screen and (max-width: 500px) {
      width: 120px;
    }
  }
  @media screen and (max-width: 1280px) {
    padding: 0 16px;
  }
`;

const Wrapper = styled.div`
  height: 80px;
  max-width: 1280px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Button = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 15px;
  border-radius: 5px;
  :hover {
    cursor: pointer;
    box-shadow: 0 0 7px 5px
      ${({ dark }) => (dark ? "var(--lightbgcon)" : "rgba(0, 0, 0, 0.1)")};
  }
`;

const DarkMode = styled(DarkLight)``;

export { Container, Wrapper, Button, DarkMode };
