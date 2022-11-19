import styled from "styled-components";

const Wrapper = styled.div`
  padding-top: 50px;
  max-width: 1280px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .box {
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media screen and (max-width: 1300px) {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }
  }
  .img {
    flex: 1;
    width: 100px;
    @media screen and (max-width: 500px) {
      width: 100%;
      margin-bottom: 20px;
    }
  }
  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media screen and (max-width: 500px) {
      display: flex;
      flex-direction: column;
      padding: 16px;
    }
  }
  .back {
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 20px;
    width: fit-content;
    color: #111517;
    padding: 10px 15px;
    margin-bottom: 50px;
    border-radius: 5px;
    transition: all 0.1s linear;
    :hover {
      cursor: pointer;
    }
    @media screen and (max-width: 500px) {
      margin-left: 16px;
    }
  }
  .box__title {
    font-style: normal;
    font-weight: 800;
    font-size: 32px;
    line-height: 44px;
    margin-bottom: 23px;
  }
  .box__subtitles {
    font-family: "Nunito Sans";
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 32px;

    p {
      margin-bottom: 15px;
    }
    @media screen and (max-width: 1300px) {
      font-size: 15px;
    }
  }

  .borders {
    margin-top: 30px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    .borde {
      font-size: 18px;
    }
    @media screen and (max-width: 1300px) {
      display: flex;
      flex-wrap: wrap;
    }
  }
  .titles {
    padding: 8px 13px;
    margin: 5px;
    :hover {
      cursor: pointer;
    }
    border-radius: 5px;
    @media screen and (max-width: 1300px) {
      font-size: 13px;
    }
  }
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin-left: 80px;
  @media screen and (max-width: 500px) {
    margin: 0 auto;
  }
`;

export { Wrapper, Box };
