import styled from "styled-components";

const Wrapper = styled.div`
  height: 80px;
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
  }
  .img {
    flex: 1;
    width: 100px;
  }
  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .back {
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 20px;
    /* identical to box height, or 125% */

    width: fit-content;
    color: #111517;
    padding: 10px 15px;
    margin-bottom: 50px;
    border-radius: 5px;
    transition: all 0.1s linear;
    :hover {
      box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.2);
      cursor: pointer;
    }
  }
  .box__title {
    font-style: normal;
    font-weight: 800;
    font-size: 32px;
    line-height: 44px;
    /* identical to box height */
    margin-bottom: 23px;
    color: #111517;
  }
  .box__subtitles {
    font-family: "Nunito Sans";
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 32px;
    /* or 200% */
    color: #111517;
    p {
      margin-bottom: 15px;
    }
  }

  .borders {
    margin-top: 30px;
    display: flex;
    align-items: center;
    .borde {
      font-size: 18px;
    }
  }
  .titles {
    margin-left: 20px;
    padding: 10px 20px;
    box-shadow: 0 0 2px 1px rgba(0, 0, 0, 0.1);

    :hover {
      box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.2);
      cursor: pointer;
    }
    border-radius: 5px;
  }
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin-left: 80px;
`;

export { Wrapper, Box };
