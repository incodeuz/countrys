import styled from "styled-components";

const WrapperCon = styled.div`
  max-width: 1280px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  @media screen and (max-width: 544px) {
    display: flex;
    justify-content: center;
  }
  .link {
    text-decoration: none;
    color: black;
  }
`;

const Wrapper = styled.div`
  max-width: 1280px;
  width: 100%;
  margin: 0 auto 40px auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  input {
    outline: none;
    border: none;
    margin-left: 30px;
    font-size: 18px;
    width: 100%;
  }
  select {
    background: #ffffff;
    box-shadow: 0px 2px 9px rgba(0, 0, 0, 0.0532439);
    border-radius: 5px;
    padding: 18px 24px;
    border: none;
    /* appearance: none; */
    max-width: 200px;
    width: 100%;
    font-size: 18px;
  }
  @media screen and (max-width: 544px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0 16px;
  }
`;

const InputBox = styled.div`
  max-width: 480px;
  width: 100%;
  display: flex;
  align-items: center;
  background: #ffffff;
  box-shadow: 0px 2px 9px rgba(0, 0, 0, 0.0532439);
  border-radius: 5px;
  padding: 18px 34px;
  @media screen and (max-width: 544px) {
    margin-bottom: 10px;
  }
`;

export { WrapperCon, Wrapper, InputBox };
