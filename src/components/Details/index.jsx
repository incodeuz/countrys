import React from "react";
import { Wrapper } from "./style";
import { ReactComponent as Back } from "../../assets/icons/BACK.svg";
import { useLocation, useNavigate } from "react-router-dom";

const Details = ({ data }) => {
  const navigate = useNavigate();
  const location = useLocation();

  console.log(location);
  return (
    <Wrapper>
      <Back onClick={() => navigate("/")} className="back" />
      <div>
        <img src="" alt="" />
      </div>
    </Wrapper>
  );
};

export default Details;
