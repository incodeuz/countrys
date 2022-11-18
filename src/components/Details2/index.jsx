import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { Link } from "react-router-dom";
import { Box, Wrapper } from "./style";

const Details2 = () => {
  const { id } = useParams();
  const [api, setApi] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetch("https://restcountries.com/v2/all").then((res) =>
      res.json().then((data) => {
        setApi(data);
      })
    );
  }, []);
  return (
    <div>
      {api.map(
        (value) =>
          value.alpha3Code === id.slice(1) && (
            <Wrapper>
              <p onClick={() => navigate("/")} className="back">
                {"⬅ Back"}
              </p>
              <div className="container">
                <img className="img" src={value.flag} alt="" />
                <Box>
                  <h1 className="box__title">{value.name}</h1>
                  <div className="box">
                    <div className="box__subtitles">
                      <p>
                        <strong>Native Name:</strong> {value.nativeName}
                      </p>
                      <p>
                        <strong>Population:</strong> {value.population}
                      </p>
                      <p>
                        <strong>Region:</strong> {value.region}
                      </p>
                      <p>
                        <strong>Sub Region:</strong> {value.subregion}
                      </p>
                    </div>
                    <div className="box__subtitles">
                      <p>
                        <strong>Top level Domain:</strong>{" "}
                        {value.topLevelDomain}
                      </p>
                      <p>
                        <strong>Currencies:</strong> {value.currencies[0].name}{" "}
                        {value.currencies[0].symbol}
                      </p>
                      <p>
                        <strong>Languages:</strong> {value.languages[0].name}
                      </p>
                    </div>
                  </div>
                  <div className="borders">
                    <p>
                      <strong>Borders</strong>
                    </p>

                    {value.borders.map((val) => {
                      return (
                        <Link to={`/details2/:${val}`}>
                          <p className="titles">{val}</p>
                        </Link>
                      );
                    })}
                  </div>
                </Box>
              </div>
            </Wrapper>
          )
      )}
    </div>
  );
};

export default Details2;
