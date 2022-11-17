import React, { useEffect, useState } from "react";
import { Box, Wrapper } from "./style";
import { ReactComponent as Back } from "../../assets/icons/BACK.svg";
import { useLocation, useNavigate } from "react-router-dom";

const Details = () => {
  const [api, setApi] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch("https://restcountries.com/v2/all").then((res) =>
      res.json().then((data) => {
        setApi(data);
        setIsLoading(false);
      })
    );
  }, []);
  const navigate = useNavigate();
  const { state } = useLocation();
 
  return (
    <Wrapper>
      <p onClick={() => navigate("/")} className="back">
        {"⬅ Back"}
      </p>
      <div className="container">
        <img className="img" src={state.flag} alt="" />
        <Box>
          <h1 className="box__title">{state.name}</h1>
          <div className="box">
            <div className="box__subtitles">
              <p>
                <strong>Native Name:</strong> {state.nativeName}
              </p>
              <p>
                <strong>Population:</strong> {state.population}
              </p>
              <p>
                <strong>Region:</strong> {state.region}
              </p>
              <p>
                <strong>Sub Region:</strong> {state.subregion}
              </p>
            </div>
            <div className="box__subtitles">
              <p>
                <strong>Top level Domain:</strong> {state.topLevelDomain}
              </p>
              <p>
                <strong>Currencies:</strong> {state.currencies[0].name}{" "}
                {state.currencies[0].symbol}
              </p>
              <p>
                <strong>Languages:</strong> {state.languages[0].name}
              </p>
            </div>
          </div>
          <div className="borders">
            <p>
              <strong>Borders</strong>
            </p>

            {state.borders.map((val) => {
              return (
                <p
                  onClick={
                    api.map((value) => {
                      val === value;
                    })
                      ? console.log("togri")
                      : console.warn("hallo")
                  }
                  className="titles"
                >
                  {val}
                </p>
              );
            })}
          </div>
        </Box>
      </div>
    </Wrapper>
  );
};

export default Details;
